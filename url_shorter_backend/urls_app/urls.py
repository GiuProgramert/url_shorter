from django.urls import path
from .views import URLRegisterView

urlpatterns = [
    path("", URLRegisterView.as_view(), name="url_register"),
]
