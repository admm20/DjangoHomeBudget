# Generated by Django 2.2 on 2019-06-03 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_cash_userid'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='userId',
            field=models.IntegerField(default=1),
        ),
    ]