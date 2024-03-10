from api import models
from rest_framework import serializers



##基本分析结果分数表序列化器
class AnalyseSerializer(serializers.ModelSerializer):
    analyseId=serializers.CharField(required=False)
    class Meta:
        model = models.Analyse
        fields = '__all__'