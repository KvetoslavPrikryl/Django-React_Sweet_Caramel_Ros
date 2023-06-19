from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import User, Dog, Service
from .serializers import UserSerializer, DogSerializer, ServiceSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAdminUser

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(["GET"])
def getRoutes(request):
    routes=[
        "api/token",
        "api/token/refresh"
    ]
    return Response()(routes)

@api_view(["GET"])
def index(request):
    user = User.objects.all()
    serializer = UserSerializer(user, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def dogs(request):
    dogs = Dog.objects.all()
    serializer = DogSerializer(dogs, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def services(request):
    services = Service.objects.all()
    serializer = ServiceSerializer(services, many=True)
    return Response(serializer.data)

@api_view(["DELETE"])
def deleteService(request, pk):
    service = Service.objects.get(id=pk)
    service.delete()
    return Response("Odeprání proběhlo úspěšně")

@api_view(["DELETE"])
def deleteDog(request, pk):
    dog = Dog.objects.get(id=pk)
    dog.delete()
    return Response("Odeprání proběhlo úspěšně")

@api_view(["POST"])
def createDog(request):
    data = request.data
    print(data)
    newDog = Dog.objects.create(
        name = data["name"],
        link = data["link"],
        body = data["body"],
        dog_sex = data["dog"],
        image = data["image"]
    )
    serializer = DogSerializer(newDog, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def createService(request):
    data = request.data
    price = data["newPrice"]
    price = int(price)
    newService = Service.objects.create(
        name = data["newService"],
        price = price
    )
    serializer = ServiceSerializer(newService, many=False)
    return Response(serializer.data)
