from django.db import models

# Create your models here.
class Customer(models.Model): 
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.EmailField()
