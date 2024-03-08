from api import models
from rest_framework.views import APIView
from rest_framework.response import Response
from ext import Code

from api.serializers.testSerializers import QuesKindSerializer,QuesSerializer,AnswerSerializer,CertifySerializer,PaperSerializer,ExamSerializer

code=Code.SUCCESS_CODE
msg=''

#显示所有试题
class ShowAllQuesView(APIView):
    def get(self,request):
        ques_objects=models.Ques.objects.all()
        ser=QuesSerializer(instance=ques_objects,many=True)
        code=Code.SUCCESS_CODE
        msg="查询所有试题成功"
        context={'code':code,'msg':msg,'data':ser.data}
        return Response(context)
    
    
#显示所有考试
class ShowAllExamView(APIView):
    def get(self,request):
        exam_objects=models.Exam.objects.all()
        ser=ExamSerializer(instance=exam_objects,many=True)
        code=Code.SUCCESS_CODE
        msg="查询所有考试成功"
        context={'code':code,'msg':msg,'data':ser.data}
        return Response(context)
    
    
#试卷名称模糊查询   
class ShowFuzzyPaperByPaperNameView(APIView):
    def get(self,request):
        fuzzy_paperName=request.query_params.dict().get("paperName")
        fuzzy_paperObjs=models.Paper.objects.filter(paperName__icontains =fuzzy_paperName)
        ser=PaperSerializer(instance=fuzzy_paperObjs,many=True)
        code=Code.SUCCESS_CODE
        msg='模糊查询成功'
        context={'code':code,'msg':msg,'data':ser.data}
        return Response(context)
        
        
#根据题型查询试题  
class ShowQuesByQuesKindIdView(APIView):
    def get(self,request):
        find_quesKindId=request.query_params.dict().get("quesKindId")
        find_quesObjs=models.Ques.objects.filter(quesKindId=find_quesKindId)
        ser=QuesSerializer(instance=find_quesObjs,many=True)
        code=Code.SUCCESS_CODE
        msg="根据题型查询试题成功"
        context={'code':code,'msg':msg,'data':ser.data}
        return Response(context)
        
        
        
        
        
        # ques_objects=models.Ques.objects.filter()
        # ser=QuesSerializer(instance=ques_objects,many=True)
        # code=Code.SUCCESS_CODE
        # msg="查询试题成功"
        # context={'code':code,'msg':msg,'data':ser.data}
        # return Response(context)
    
    
    
    
        
#从数据库中获取数据
#         # depart_object = models.Depart.objects.all().first()
#         depart_objects = models.Depart.objects.all()
#         #转换JSON格式
#         ser=DepartSerializer(instance=depart_objects,many=True)
#         # print(ser.data)
#         #返回
#         context={'code':100,'data':ser.data}
#         return Response(context)























# class AddExamView(APIView):
#     def post(self,request):
#         #从数据库中获取数据
#         # depart_object = models.Depart.objects.all().first()
#         depart_objects = models.Depart.objects.all()
#         #转换JSON格式
#         ser=DepartSerializer(instance=depart_objects,many=True)
#         # print(ser.data)
#         #返回
#         context={'code':100,'data':ser.data}
#         return Response(context)