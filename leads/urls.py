from django.urls import path
from .views import (CustomerListCreate)

urlpatterns = [
    path('api/customer/', CustomerListCreate.as_view())
]
