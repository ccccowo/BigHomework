# Generated by Django 4.2.9 on 2024-02-18 14:21

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("aibot", "0003_alter_aibot_sysid"),
    ]

    operations = [
        migrations.AlterField(
            model_name="aibot",
            name="sysId",
            field=models.CharField(
                default="DEFAULT_USER",
                editable=False,
                help_text="用户系统ID",
                max_length=256,
            ),
            preserve_default=False,
        ),
    ]
