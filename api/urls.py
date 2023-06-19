from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path("route",views.getRoutes, name="routes"),
    path('route/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('route/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("", views.index, name="index"),
    path("dogs/", views.dogs, name="dogs"),
    path("services/", views.services, name="services"),
    path("dogs/new", views.createDog, name="create-dog"),
    path("service/new", views.createService, name="create-service"),
    path("dog/<str:pk>/delete", views.deleteDog, name="delete-dog"),
    path("service/<str:pk>/delete", views.deleteService, name="delete-service"),
    
]
