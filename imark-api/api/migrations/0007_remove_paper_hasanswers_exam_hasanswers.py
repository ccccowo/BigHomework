# Generated by Django 5.0.3 on 2024-03-19 12:44

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0006_alter_role_password"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="paper",
            name="hasAnswers",
        ),
        migrations.AddField(
            model_name="exam",
            name="hasAnswers",
            field=models.IntegerField(default=0, verbose_name="上传答卷状态"),
        ),
    ]
