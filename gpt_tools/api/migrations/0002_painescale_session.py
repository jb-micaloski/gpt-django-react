# Generated by Django 4.2.1 on 2023-06-09 00:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='painescale',
            name='session',
            field=models.CharField(default='', max_length=50, unique=True),
        ),
    ]
