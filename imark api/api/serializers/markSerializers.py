from api import models
from rest_framework import serializers



#任务信息表序列化器
class MarkSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Mark
        fields="__all__"