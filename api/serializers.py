from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Dog, User, Service

class DogSerializer(ModelSerializer):

    image = serializers.ImageField(required=False)

    class Meta:
        model = Dog
        fields = "__all__"

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class ServiceSerializer(ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"

