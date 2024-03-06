import cv2
import numpy as np
from PIL.ImageDraw import ImageDraw
from PIL.ImageFont import ImageFont
from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from paddleocr import PPStructure, PaddleOCR, draw_ocr, draw_structure_result, save_structure_res
from PIL import Image

from ocr.models import OCRModel, OCRSerializer
from server.settings import PATH_TYPE, OCRMachine, FONT_PATH, SAVE_DIR
from util.img import transPath


class OCRViewSet(viewsets.ModelViewSet):
    queryset = OCRModel.objects.all()
    serializer_class = OCRSerializer

    @action(methods=['put'], detail=False, url_path='simple')
    def simpleOCR(self, request):
        """执行基本的识别功能，只补充 res"""
        # 获取数据
        data = request.data.copy()

        if data['img'] is None:
            return Response('NO IMAGE', status=status.HTTP_400_BAD_REQUEST)

        # 获取图片URL
        path = str(data['img'])

        # ocr
        result, res_str, local_path = read(path, PATH_TYPE['URL'])
        data['res'] = res_str

        # TODO: 生成展示图
        shw = mkShwImg(result, local_path)
        data['shw'] = shw

        # 插入数据库
        ser = self.get_serializer(data=data)
        ser.is_valid(raise_exception=False)
        self.create(ser)

        # 返回信息
        headers = self.get_success_headers(data)
        print(">>> ocr data:", data)
        return Response(data, status=status.HTTP_201_CREATED, headers=headers)


def read(path, path_type):
    """核心识别功能"""
    # 转换成本地路径
    if path_type == PATH_TYPE['URL']:
        path = transPath(path, path_type)
    # 识别内容
    # pp ocr
    res_str = ''
    result = OCRMachine.ocr(path, cls=True)
    for idx in range(len(result)):
        res = result[idx]
        for line in res:
            if line is not None:
                res_str += ' ' + line[1][0]
    return result, res_str, path


# TODO: 自定义文字位置
def mkShwImg(result, path) -> str:
    """制作展示图片"""
    result = result[0]

    # 位置
    boxes = [line[0] for line in result]
    # 识别文本
    txts = [line[1][0] for line in result]
    # 置信度
    scores = [line[1][1] for line in result]
    print(f">>> mkShwImg:\n>>> BOXES::{boxes}\n>>> TXTS::{txts}\n>>> SCS::{scores}")

    # 绘制文字信息
    image = Image.open(path).convert('RGB')
    im_show = draw_ocr(image, boxes, txts, scores, font_path=FONT_PATH)
    im_show = Image.fromarray(im_show)

    # 导出图片
    save_path = SAVE_DIR + 'res_' + path.split('/')[-1]
    im_show.save(save_path)

    return transPath(save_path, PATH_TYPE['LOCAL'])
