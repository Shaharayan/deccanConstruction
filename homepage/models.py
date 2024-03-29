from django.db import models

# Create your models here.

class heroImages(models.Model):
    image = models.ImageField(upload_to='webimages/heroImages/')
    


class testimonials(models.Model):
    gender = models.CharField(max_length=16)
    name = models.CharField(max_length=64)
    email = models.EmailField(max_length=64)
    review = models.TextField(max_length=320)