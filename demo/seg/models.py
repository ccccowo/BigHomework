from django.db import models
from rest_framework import serializers


class SegIMG(models.Model):
    img = models.CharField(max_length=512, verbose_name='img', help_text='待分割的图片')
    num = models.IntegerField(default=0, verbose_name='num', help_text='切片序列')
    x1 = models.IntegerField(default=0, verbose_name='x1', help_text='坐标x1')
    x2 = models.IntegerField(default=0, verbose_name='x2', help_text='坐标x2')
    y1 = models.IntegerField(default=0, verbose_name='y1', help_text='坐标y1')
    y2 = models.IntegerField(default=0, verbose_name='y2', help_text='坐标y2')
    seg_time = models.DateTimeField(auto_now_add=True, verbose_name='time', help_text='分割时间')


class IMGSerializer(serializers.ModelSerializer):
    class Meta:
        model = SegIMG
        fields = '__all__'
