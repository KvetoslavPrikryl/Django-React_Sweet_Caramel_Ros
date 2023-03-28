from django.db import models

class User(models.Model):
    name = models.CharField(max_length=50, null=True)
    body = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return "f{self.name} {self.body}"

class Dog(models.Model):
    name = models.CharField(max_length=50, null=True)
    body = models.TextField(blank=True, null=True)
    link = models.TextField(blank=True)
    dog_sex = models.CharField(max_length=10, null=True)
    image = models.ImageField(upload_to="images", null=True, blank=True)

    def __str__(self):
        return "f {self.name} {self.body} {self.link} {self.dog_sex} {self.image}"

class Service(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return "f{self.name} {self.price}"

