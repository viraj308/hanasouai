from django.urls import path
from . import views

urlpatterns = [
    path("ping", views.ping),
    path("login", views.login),
    path("register", views.register)
]
