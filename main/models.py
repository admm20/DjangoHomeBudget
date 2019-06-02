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
    price = models.IntegerField(default=1)
    categoryId = models.ForeignKey(Category, on_delete=models.CASCADE)

class Users(models.Model):
    id = models.AutoField(primary_key=True)
    userName = models.CharField(max_length = 250)
    userPassword = models.CharField(max_length = 250)
    permissionId = models.ForeignKey(Permission, on_delete=models.CASCADE)
    groupOfUsersId = models.ForeignKey(GroupOfUsers, on_delete=models.CASCADE)

class Cash(models.Model):
    id = models.AutoField(primary_key = True)
    money = models.CharField(max_length = 250)
    date = models.CharField(max_length = 250)
    #userId = models.ForeignKey(Users, on_delete=models.CASCADE)

class Order(models.Model):
    id = models.AutoField(primary_key = True)
    date = models.CharField(max_length = 250)
    userNameId = models.ForeignKey(Users, on_delete=models.CASCADE)
    nameOfProductId = models.ForeignKey(Products, on_delete=models.CASCADE)
