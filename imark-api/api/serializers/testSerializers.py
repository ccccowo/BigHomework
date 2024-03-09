from api import models
from rest_framework import serializers


# class UserSerializer(serializers.ModelSerializer):
#     #显示男或女，而不是1或2
#     gender=serializers.CharField(source="get_gender_display")
#     #显示外键名称
#     depart=serializers.CharField(source="depart.title")
#     #设置显示时间格式
#     ctime=serializers.DateTimeField(format="%Y-%m-%d")
#     #序列化嵌套
#     tags=Tag(many=True)
    
#     class Meta:
#         model=models.UserInfo
#         fields="__all__"
    
#     #外键校验
#     def validate_depart(self,value):
#         if value.id > 1:
#             return value
#         raise exceptions.ValidationError("部门错误")




#试题类型表序列化器
class QuesKindSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Ques_Kind
        fields="__all__"
            
            
            
#试题表序列化器
class QuesSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Ques
        fields="__all__"
         
    
    
#答题表序列化器
class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Answer
        fields="__all__"  
        
        
#准考证-学号表序列化器
class CertifySerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Certify
        fields="__all__"  
        
#试卷表序列化器
class PaperSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Paper
        fields="__all__"  
        
#考试表序列化器
class ExamSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Exam
        fields="__all__"  