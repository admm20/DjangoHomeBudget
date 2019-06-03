from django.db import models
from django.urls import reverse

# Create your models here.

class Permission(models.Model):
    id = models.AutoField(primary_key = True)
    valueOfPermission = models.IntegerField(default=1)
    
class GroupOfUsers(models.Model):
    id = models.AutoField(primary_key = True)
    nameOfGroup = models.CharField(max_length = 250 )

class Category(models.Model):
    id = models.AutoField(primary_key = True)
    nameOfCategory = models.CharField(max_length = 250)

class Products(models.Model):
    id = models.AutoField(primary_key = True)
    nameOfProduct = models.CharField(max_length = 250)
    price = models.CharField(max_length = 250)
    categoryId = models.IntegerField(default=1)
    date = models.CharField(max_length = 250)

class Users(models.Model):
    id = models.AutoField(primary_key=True)
    userName = models.CharField(max_length = 250)
    userPassword = models.CharField(max_length = 250)
    permissionId = models.IntegerField(default=1)
    groupOfUsersId = models.IntegerField(default=1)

class Cash(models.Model):
    id = models.AutoField(primary_key = True)
    money = models.CharField(max_length = 250)
    date = models.CharField(max_length = 250)
    userId = models.IntegerField(default=1)

'''class Order(models.Model):
    id = models.AutoField(primary_key = True)
    date = models.CharField(max_length = 250)
    #userNameId = models.IntegerField(default=1)
    nameOfProductId = models.IntegerField(default=1)
'''