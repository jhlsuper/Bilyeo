# Generated by Django 3.1 on 2020-09-25 11:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bj_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bj_comment',
            name='bj_comment_datetime',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='bj_item',
            name='bj_reportingTime',
            field=models.DateField(),
        ),
    ]