from api import models
from rest_framework.views import APIView
from rest_framework.response import Response
from ext import Code

from api.serializers.markSerializers import MarkSerializer,MarkResultSerializer,PaperScoreSheetSerializer

code=Code.SUCCESS_CODE
msg=''

#教师查询阅卷题目
class SelectMarkBySysIdView(APIView):
    def get(self, request):
        f_examId = request.query_params.dict().get("examId")
        f_paperId = request.query_params.dict().get("paperId")
        f_obj=models.Mark.objects.filter(examId=f_examId,paperId=f_paperId).first()
        f_sysId = request.query_params.dict().get("sysId")
        if not f_obj:
            code=Code.ERROR_CODE
            msg="该阅卷任务不存在，请检查examId和paperId"
            data={"sysId":f_sysId,"examId":f_examId,"paperId":f_paperId}
        else:
            tasList=[]
            for i in f_obj.taskAllos:
                if (i!='[') and (i!=',') and  (i!=']') :
                    tasList.append(i)

            taNum=[] #保存该老师需要批阅的题目序号
            for index,taId in enumerate(tasList):
                if taId == f_sysId:
                    taNum.append(index+1)

            NeedMarkQuesIds=[]  #保存需要该老师批阅的题目id

            AllquesIds=[] #该试卷所有题目id
            f_quesIds=models.Paper.objects.filter(paperId=f_paperId).first().quesIds
            for queId in f_quesIds:
                if (queId!="[") and (queId!=',') and (queId!=']'):
                    AllquesIds.append(queId)

            for ta in taNum:
                NeedMarkQuesIds.append(AllquesIds[int(ta)-1])

            code = Code.SUCCESS_CODE
            msg = "教师查询阅卷题目成功"
            data={"sysId":f_sysId,
                  "examId":f_examId,
                  "paperId":f_paperId,
                  "NeedMarkQuesIds":NeedMarkQuesIds}
        context = {'code': code, 'msg': msg, 'data': data}
        return Response(context)