# Generated by Django 4.2.9 on 2024-02-05 14:31

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="SegIMG",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "img",
                    models.CharField(
                        help_text="待分割的图片", max_length=512, verbose_name="img_url"
                    ),
                ),
                (
                    "num",
                    models.IntegerField(
                        default=0, help_text="切片序列", verbose_name="seg_num"
                    ),
                ),
                (
                    "x1",
                    models.IntegerField(default=0, help_text="坐标x1", verbose_name="x1"),
                ),
                (
                    "x2",
                    models.IntegerField(default=0, help_text="坐标x2", verbose_name="x2"),
                ),
                (
                    "y1",
                    models.IntegerField(default=0, help_text="坐标y1", verbose_name="y1"),
                ),
                (
                    "y2",
                    models.IntegerField(default=0, help_text="坐标y2", verbose_name="y2"),
                ),
            ],
        ),
    ]
