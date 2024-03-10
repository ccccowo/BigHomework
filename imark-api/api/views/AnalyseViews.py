from api import models
from rest_framework.views import APIView
from rest_framework.response import Response
from ext import Code
import uuid

from api.serializers.analyseSerializers import AnalyseSerializer

code=Code.SUCCESS_CODE
msg=''


#添加基本分析结果分数
class ScoreAnalyseView(APIView):
    def post(self,request):
        ser=AnalyseSerializer(data=request.data)
        if ser.is_valid():
            # 序列化验证通过，数据类型正确
            after_data = ser.validated_data  # 将通过验证的json数据转化为字典
            analyseId=str(uuid.uuid1())



            code=Code.SUCCESS_CODE
            msg='添加分析结果成功'
            data=after_data
        else:
            code=Code.ERROR_CODE
            msg=ser.errors
            data={}
        context = {'code': code, 'msg': msg, 'data': data}
        return Response(context)
