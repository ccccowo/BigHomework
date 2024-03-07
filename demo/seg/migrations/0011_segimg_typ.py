# Generated by Django 4.2.9 on 2024-03-07 13:54

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("seg", "0010_alter_segimg_paper"),
    ]

    operations = [
        migrations.AddField(
            model_name="segimg",
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
