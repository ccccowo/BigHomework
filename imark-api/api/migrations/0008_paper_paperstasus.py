# Generated by Django 5.0.3 on 2024-03-21 02:17

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0007_remove_paper_hasanswers_exam_hasanswers"),
    ]

    operations = [
        migrations.AddField(
            model_name="paper",
            name="paperStasus",
            field=models.IntegerField(default=0, verbose_name="试卷状态"),
        ),
    ]
