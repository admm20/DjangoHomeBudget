# Generated by Django 2.2 on 2019-06-02 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_cash_order'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cash',
            name='money',
            field=models.DecimalField(decimal_places=2, max_digits=20),
        ),
    ]