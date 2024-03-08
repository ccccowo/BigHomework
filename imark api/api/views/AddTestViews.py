from api import models
from rest_framework.views import APIView
from rest_framework.response import Response
from ext import Code

from api.serializers.testSerializers import QuesKindSerializer,QuesSerializer,AnswerSerializer,CertifySerializer,PaperSerializer,ExamSerializer

code=Code.SUCCESS_CODE
msg=''



#添加试题类型
class AddQuesKindView(APIView):
    def post(self,request):
        ser=QuesKindSerializer(data=request.data)
        if ser.is_valid():
            #序列化验证通过，数据类型正确
            after_data = ser.validated_data  #将通过验证的json数据转化为字典
            fid_quesKindId=models.Ques_Kind.objects.filter(quesKindId=after_data.get("quesKindId")).first() #查询数据库中相同的quesKindId
            fid_quesKindName=models.Ques_Kind.objects.filter(quesKindName=after_data.get("quesKindName")).first()
            
            if not fid_quesKindId and not fid_quesKindName:
                ser.save()   #保存到数据库 
                msg='试题类型添加成功'
                code=Code.SUCCESS_CODE   
            else:
                msg='该题目类型或题目类型ID已经存在'
                code=Code.ERROR_CODE
            context={'code':code,'msg':msg,'data':ser.data} 
        else:
            #序列化验证失败，数据不正确
            msg= ser.errors
            code=Code.ERROR_CODE
            context={'code':code,'msg':msg,'data':''}
        return Response(context)
        

        
#添加试题
class AddQuesView(APIView):
    def post(self,request):
        ser=QuesSerializer(data=request.data)
        if ser.is_valid():
            #序列化验证通过，数据类型正确
            after_data = ser.validated_data  #将通过验证的json数据转化为字典
            find_ques=models.Ques.objects.filter(quesId=after_data.get("quesId")).first()#查询数据库中相同的quesId
            if not find_ques:  #若该试题不存在
                #获取参数
                quesKindId=after_data.get("quesKindId")
                type=models.Ques_Kind.objects.filter(quesKindId=quesKindId).first()

                if not type:   #判断题目类型是否存在
                    msg='该题目类型不存在'
                    code=Code.ERROR_CODE
                else:
                    new_object=models.Ques()
                    new_object.quesId=after_data.get("quesId")
                    new_object.quesKindId=type.quesKindId
                    new_object.quesContent=after_data.get("quesContent")
                    new_object.quesAnswer=after_data.get("quesAnswer")
                    new_object.quesDefaultScore=after_data.get("quesDefaultScore")
                    new_object.quesLevel=after_data.get("quesLevel")
                    new_object.save() #保存到数据库
                    msg='试题添加成功'
                    code=Code.SUCCESS_CODE    
                    after_data["quesKindName"]=type.quesKindName
            else:
                msg='该题目ID已经存在'
                code=Code.ERROR_CODE
            context={'code':code,'msg':msg,'data':after_data} 
        else:
            #序列化验证失败，数据不正确
            msg= ser.errors
            print(msg)
            code=Code.ERROR_CODE
            context={'code':code,'msg':msg,'data':''}
        return Response(context)
            
   


#添加准考证
class AddCertifyView(APIView):
    def post(self,request):
        ser=CertifySerializer(data=request.data)
        if ser.is_valid():
            #序列化验证通过，数据类型正确
            after_data = ser.validated_data  #将通过验证的json数据转化为字典
            new_certId=after_data.get("certId")
            new_obj=models.Certify.objects.filter(certId=new_certId).first()  
            if not new_obj :
                #判断该考试是否存在
                get_examId=after_data.get("examId")
                ifExam=models.Exam.objects.filter(examId=get_examId).first()
                if not ifExam:
                    msg='该考试不存在'
                    code=Code.ERROR_CODE
                else:
                    ser.save()   #保存到数据库
                    msg='准考证添加成功'
                    code=Code.SUCCESS_CODE   
                    after_data["examName "]=ifExam.examName
            else:
                msg='该准考证已存在'
                code=Code.ERROR_CODE
            context={'code':code,'msg':msg,'data':after_data} 
        else:
            #序列化验证失败，数据不正确
            msg= ser.errors
            code=Code.ERROR_CODE
            context={'code':code,'msg':msg,'data':''}
        return Response(context)  


#添加试卷
class AddPaperView(APIView):
    def post(self,request):
        ser=PaperSerializer(data=request.data)
        if ser.is_valid():
            #序列化验证通过，数据类型正确
            after_data = ser.validated_data  #将通过验证的json数据转化为字典
            new_paperId=after_data.get("paperId")
            new_obj=models.Certify.objects.filter(certId=new_paperId).first()  
            if not new_obj :
                #获取试卷题型结构
                quesKindIds=[]  #试卷结构list
                quesKindName=[]   #试卷题型list
                for quesKindId_paper in list(after_data.get("quesKindIds")):
                    if (quesKindId_paper != ',') and (quesKindId_paper != '[') and (quesKindId_paper != ']'):
                        quesKindIds.append(quesKindId_paper)
                        if models.Ques_Kind.objects.filter(quesKindId=quesKindId_paper).first().quesKindName not in quesKindName:
                            quesKindName.append(models.Ques_Kind.objects.filter(quesKindId=quesKindId_paper).first().quesKindName)
                
                #获取试卷包含试题
                quesIds=[]
                flag=True
                erro_ques=""
                for quesId_paper in list(after_data.get("quesIds")):
                    if (quesId_paper != ',') and (quesId_paper != '[') and (quesId_paper != ']'):
                        quesIds.append(quesId_paper)
                        if not models.Ques.objects.filter(quesId=quesId_paper).first():
                            erro_ques = quesId_paper
                            flag=False
                if flag==False:
                    code=Code.ERROR_CODE
                    msg="ID为:--"+erro_ques+"--的试题不存在"
                else:
                    ser.save() #保存到数据库
                    msg='试卷添加成功'
                    code=Code.SUCCESS_CODE  
                    after_data["quesKindNames"]=quesKindName
               
            else:
                msg='该试卷已存在'
                code=Code.ERROR_CODE
            context={'code':code,'msg':msg,'data':after_data} 
        else:
            #序列化验证失败，数据不正确
            msg= ser.errors
            code=Code.ERROR_CODE
            context={'code':code,'msg':msg,'data':''}
        return Response(context)  


        
#添加答题
class AddAnswerView(APIView):
    def post(self,request):
        ser=AnswerSerializer(data=request.data)
        if ser.is_valid():
            #序列化验证通过，数据类型正确
            after_data = ser.validated_data  #将通过验证的json数据转化为字典
            new_answerId=after_data.get("answerId")
            new_obj=models.Answer.objects.filter(answerId=new_answerId).first()  
            if not new_obj :
                new_examId= after_data.get("examId")
                new_paperId = after_data.get("paperId")
                new_certId = after_data.get("certId")
                new_quesId = after_data.get("quesId")
                
                if not models.Exam.objects.filter(examId=new_examId).first():
                    msg="该考试不存在,请检查考试id"
                    code=Code.ERROR_CODE
                elif not models.Paper.objects.filter(paperId=new_paperId).first():
                    msg="该试卷不存在,请检查试卷id"
                    code=Code.ERROR_CODE
                elif not models.Certify.objects.filter(certId=new_certId).first():
                    msg="该答题考生不存在,请检查准考证号"
                    code=Code.ERROR_CODE
                elif not models.Ques.objects.filter(quesId=new_quesId).first():
                    msg="该题目不存在,请检查试题id"
                    code=Code.ERROR_CODE
                else:
                    ser.save()   #保存到数据库
                    msg='答题添加成功'
                    code=Code.SUCCESS_CODE   
            else:
                msg='该答题已存在'
                code=Code.ERROR_CODE
            context={'code':code,'msg':msg,'data':after_data} 
        else:
            #序列化验证失败，数据不正确
            msg= ser.errors
            code=Code.ERROR_CODE
            context={'code':code,'msg':msg,'data':''}
        return Response(context)  




#添加考试
class AddExamView(APIView):
    def post(self,request):
        ser=ExamSerializer(data=request.data)
        if ser.is_valid():
            #序列化验证通过，数据类型正确
            after_data = ser.validated_data  #将通过验证的json数据转化为字典
            new_examId = after_data.get("examId")
            new_obj=models.Exam.objects.filter(examId=new_examId).first()  
            if not new_obj :
                #获取使用的试卷
                paperIds=[]  #使用试卷ID-->list
                paperNames=[]  #使用试卷Name-->list
                for paperId_paper in list(after_data.get("paperIds")):
                    if (paperId_paper != ',') and (paperId_paper != '[') and (paperId_paper != ']'):
                        paperIds.append(paperId_paper)
                        if models.Paper.objects.filter(paperId=paperId_paper).first().paperName not in paperNames:
                            paperNames.append(models.Paper.objects.filter(paperId=paperId_paper).first().paperName)   
                ser.save()   #保存到数据库
                code=Code.SUCCESS_CODE
                msg='新增考试成功'
                code=Code.SUCCESS_CODE  
                after_data["paperNames"]=paperNames
            else:
                msg='该考试已存在'
                code=Code.ERROR_CODE
            context={'code':code,'msg':msg,'data':after_data} 
        else:
            #序列化验证失败，数据不正确
            msg= ser.errors
            code=Code.ERROR_CODE
            context={'code':code,'msg':msg,'data':''}
        return Response(context)  