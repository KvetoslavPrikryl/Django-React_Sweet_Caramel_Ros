from django.contrib import admin
from .models import User, Dog, Service

class UserAdmin(admin.ModelAdmin):
    list_display = ("name", "body")

class DogAdmin(admin.ModelAdmin):
    list_display = ("name", "body", "link", "dog_sex", "image")

class ServiceAdmin(admin.ModelAdmin):
    list_display = ("name", "price")
    
admin.site.register(User, UserAdmin)
admin.site.register(Dog, DogAdmin)
admin.site.register(Service, ServiceAdmin)

