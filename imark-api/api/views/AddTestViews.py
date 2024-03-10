import uuid

from api import models
from rest_framework.views import APIView
from rest_framework.response import Response
from ext import Code
import  time

from api.serializers.testSerializers import QuesKindSerializer,QuesSerializer,AnswerSerializer,CertifySerializer,PaperSerializer,ExamSerializer


#添加试题类型
class AddQuesKindView(APIView):
    def post(self,request):
        ser=QuesKindSerializer(data=request.data)
        if ser.is_valid():
            #序列化验证通过，数据类型正确
            after_data = ser.validated_data  #将通过验证的json数据转化为字典
            fid_quesKindName=models.Ques_Kind.objects.filter(quesKindName=after_data.get("quesKindName")).first()#查询数据库中相同的quesKindName
            if not fid_quesKindName:
                newQuesKind=models.Ques_Kind()
                newQuesKind.quesKindName=after_data.get("quesKindName")
                newQuesKind.save()
                msg='试题类型添加成功'
                code=Code.SUCCESS_CODE
            else:
                msg='该题目类型已经存在'
                code=Code.ERROR_CODE
            f_qs = models.Ques_Kind.objects.filter(quesKindName=after_data.get("quesKindName")).first()
            after_data["quesKindId"] = f_qs.quesKindId
            context={'code':code,'msg':msg,'data':after_data}
        else:
            #序列化验证失败，数据不正确
            msg= ser.errors
            code=Code.ERROR_CODE
            data={}
            context={'code':code,'msg':msg,'data':data}
        return Response(context)
        

        
#添加试题
class AddQuesView(APIView):
    def post(self,request):
        ser=QuesSerializer(data=request.data)
        if ser.is_valid():
            #序列化验证通过，数据类型正确
            after_data = ser.validated_data  #将通过验证的json数据转化为字典
             #获取参数
            quesId=uuid.uuid1()
            quesKindId=after_data.get("quesKindId")
            quesKindName=models.Ques_Kind.objects.filter(quesKindId=quesKindId).first().quesKindName
            new_object=models.Ques()
            new_object.quesId=quesId
            new_object.quesKindId=quesKindId
            new_object.quesContent=after_data.get("quesContent")
            new_object.quesAnswer=after_data.get("quesAnswer")
            new_object.quesDefaultScore=after_data.get("quesDefaultScore")
            new_object.quesLevel=after_data.get("quesLevel")
            new_object.save() #保存到数据库
            n_qesId=models.Ques.objects.filter(quesId=quesId).first().quesId
            after_data["quesKindName"]=quesKindName
            after_data["quesId"] = n_qesId

            msg = '试题添加成功'
            code = Code.SUCCESS_CODE
            data=after_data
            context = {'code': code, 'msg': msg, 'data': data}
        else:
            #序列化验证失败，数据不正确
            msg= ser.errors
            code=Code.ERROR_CODE
            data={}
            context={'code':code,'msg':msg,'data':data}
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
            data={}
            context={'code':code,'msg':msg,'data':data}
        return Response(context)  


#添加试卷
class AddPaperView(APIView):
    def post(self,request):
        ser=PaperSerializer(data=request.data)
        if ser.is_valid():
            #序列化验证通过，数据类型正确
            after_data = ser.validated_data  #将通过验证的json数据转化为字典
            new_paperName=after_data.get("paperName")
            new_obj = models.Paper.objects.filter(paperName=new_paperName).first()
            if not new_obj : #若该试卷不存在
                new_paperId = uuid.uuid1()
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
                    data=after_data
                else:
                    after_data["paperId"] = str(new_paperId)
                    n_ser=PaperSerializer(data=after_data)
                    if n_ser.is_valid():
                        n_ser.save() #保存到数据库
                        msg='试卷添加成功'
                        code=Code.SUCCESS_CODE
                        after_data["quesKindNames"]=quesKindName
                        data=after_data
                    else:
                        msg=n_ser.errors
                        code=Code.ERROR_CODE
                        data=after_data
                context = {'code': code, 'msg': msg, 'data': data}
            else:
                after_data["paperId"] = new_obj.paperId
                msg='该试卷已存在'
                code=Code.ERROR_CODE
                data=after_data
                context = {'code': code, 'msg': msg, 'data': data}
        else:
            #序列化验证失败，数据不正确
            msg= ser.errors
            code=Code.ERROR_CODE
            data={}
            context = {'code': code, 'msg': msg, 'data': data}
        return Response(context)


        
#添加答题
class AddAnswerView(APIView):
    def post(self,request):
        ser=AnswerSerializer(data=request.data)
        if ser.is_valid():
            #序列化验证通过，数据类型正确
            after_data = ser.validated_data  #将通过验证的json数据转化为字典
            new_certId=after_data.get("certId")
            new_quesId=after_data.get("quesId")
            new_obj=models.Answer.objects.filter(certId=new_certId,quesId=new_quesId).first()
            if not new_obj :
                new_answerId= str(uuid.uuid1())
                new_paperId = after_data.get("paperId")
                new_examId=after_data.get("examId")
                data={}
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
                    after_data['answerId']=new_answerId
                    after_ser=AnswerSerializer(data=after_data)
                    if after_ser.is_valid():
                        after_ser.save()
                        paperName=models.Paper.objects.filter(paperId=new_paperId).first().paperName
                        after_ser.validated_data["paperName"]=paperName
                        msg = '答题添加成功'
                        code = Code.SUCCESS_CODE
                        data=after_ser.validated_data
                    else:
                        msg=after_ser.errors
                        code=Code.ERROR_CODE
                        data=after_ser.data
                    context = {'code': code, 'msg': msg, 'data': data}

            else:
                o_answerId=new_obj.answerId
                msg='该学号对应问题的答题记录已经存在'
                code=Code.ERROR_CODE
                after_data["answerId"]=o_answerId
                paperName = models.Paper.objects.filter(paperId=after_data.get("paperId")).first().paperName
                after_data["paperName"] = paperName
                data=after_data
                context={'code':code,'msg':msg,'data':data}
        else:
            #序列化验证失败，数据不正确
            msg= ser.errors
            code=Code.ERROR_CODE
            data={}
            context={'code':code,'msg':msg,'data':data}
        return Response(context)  




#添加考试
class AddExamView(APIView):
    def post(self,request):
        ser=ExamSerializer(data=request.data)
        if ser.is_valid():
            #序列化验证通过，数据类型正确
            after_data = ser.validated_data  #将通过验证的json数据转化为字典
            new_examName = after_data.get("examName")
            new_obj=models.Exam.objects.filter(examName=new_examName).first()
            if not new_obj :
                #获取使用的试卷
                paperIds=[]  #使用试卷ID-->list
                paperNames=[]  #使用试卷Name-->list
                for paperId_paper in list(after_data.get("paperIds")):
                    if (paperId_paper != ',') and (paperId_paper != '[') and (paperId_paper != ']'):
                        paperIds.append(paperId_paper)
                        if models.Paper.objects.filter(paperId=paperId_paper).first().paperName not in paperNames:
                            paperNames.append(models.Paper.objects.filter(paperId=paperId_paper).first().paperName)   
                examId=str(uuid.uuid1())
                after_data["examId"]=examId
                after_ser=ExamSerializer(data=after_data)
                if after_ser.is_valid():
                    after_ser.save()
                    code = Code.SUCCESS_CODE
                    msg = '新增考试成功'
                    after_ser.validated_data["paperNames"] = paperNames
                    data=after_ser.validated_data
                else:
                    msg = ser.errors
                    code = Code.ERROR_CODE
                    data = {}
                context = {'code': code, 'msg': msg, 'data': data}
            else:
                msg='该考试已存在,请更改考试名称'
                code=Code.ERROR_CODE
                context={'code':code,'msg':msg,'data':after_data}
        else:
            #序列化验证失败，数据不正确
            msg= ser.errors
            code=Code.ERROR_CODE
            context={'code':code,'msg':msg,'data':''}
        return Response(context)  