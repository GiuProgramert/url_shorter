from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import permissions
from .models import URL
from .serializers import URLSerializer
from django.shortcuts import redirect
from django.http import Http404
import os


class URLRegisterView(generics.CreateAPIView):
    queryset = URL.objects.all()
    serializer_class = URLSerializer
    permission_classes = (permissions.IsAuthenticated,)


class URLRedirectView(APIView):
    """
    Redirect to original URL based on short URL
    """

    def get(self, request, short_url, format=None):
        try:
            url_site = os.environ.get("SITE_URL")
            print(f"{url_site}/{short_url}")
            url_obj = URL.objects.get(short_url=f"{url_site}/{short_url}")

            return redirect(url_obj.url)
        except URL.DoesNotExist:
            raise Http404
