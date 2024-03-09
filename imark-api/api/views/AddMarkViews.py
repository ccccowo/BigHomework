from api import models
from rest_framework.views import APIView
from rest_framework.response import Response
from ext import Code

from api.serializers.markSerializers import MarkSerializer

code=Code.SUCCESS_CODE
msg=''



#添加阅卷任务
class AddMarkView(APIView):
    def post(self,request):
        ser=MarkSerializer(data=request.data)
        if ser.is_valid():
            #序列化验证通过，数据类型正确
            after_data = ser.validated_data  #将通过验证的json数据转化为字典
            fid_examId=models.Exam.objects.filter(examId=after_data.get("examId")).first() #查询该考试是否存在
            fid_paperId=models.Paper.objects.filter(paperId=after_data.get("paperId")).first() #查询该考试试卷是否存在
            if not fid_examId:
                code=Code.ERROR_CODE
                msg='添加阅卷任务失败,考试不存在'
            elif not fid_paperId:
                code=Code.ERROR_CODE
                msg='添加阅卷任务失败,试卷不存在'
            else:
            
                ##############################################################
                # #获取阅卷老师系统id  -->存入markTeacher，若要校验判断在此添加
                
                # markTeacher=[]   #阅卷老师系统id-->list
                # for markTeacherid in list(after_data.get("taskAllos")):
                #     if (markTeacherid != ',') and (markTeacherid != '[') and (markTeacherid != ']'):
                #         markTeacher.append(markTeacherid)
                        
                # print(markTeacher)
                ###############################################################
               
                ser.save()   #保存到数据库
                msg='阅卷任务添加成功'
                code=Code.SUCCESS_CODE   
            context={'code':code,'msg':msg,'data':ser.data}
        else:
            #序列化验证失败，数据不正确
            msg= ser.errors
            code=Code.ERROR_CODE
            context={'code':code,'msg':msg,'data':''}
        return Response(context)
            
            
            





