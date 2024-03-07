# Generated by Django 4.2.9 on 2024-03-07 11:59

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("ocr", "0003_alter_ocrmodel_res_alter_ocrmodel_shw_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="ocrmodel",
            name="typ",
            field=models.CharField(
                blank=True,
                choices=[
                    ("OTHERS", "其它"),
                    ("TITLE", "标题"),
                    ("INFO", "信息"),
                    ("QUESTION", "题目"),
                    ("HANDWRITE", "手写内容"),
                ],
                default="OTHERS",
                help_text="文本类型（标题/信息/题目/手写）",
                max_length=512,
                verbose_name="type",
            ),
        ),
    ]
