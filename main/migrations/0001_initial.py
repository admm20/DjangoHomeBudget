# Generated by Django 2.2 on 2019-06-02 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Permission',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('valueOfPermission', models.IntegerField(default=1)),
            ],
        ),
    ]
