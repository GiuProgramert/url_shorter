from rest_framework import serializers
from .models import URL
from .utils import create_short_url


class URLSerializer(serializers.ModelSerializer):
    url = serializers.URLField()
    short_url = serializers.CharField(read_only=True)

    class Meta:
        model = URL
        fields = ("url", "short_url", "created_at")

    def create(self, validated_data):
        short_url = create_short_url()

        url_in_db = URL.objects.filter(url=validated_data["url"]).first()

        if url_in_db:
            return url_in_db

        url = URL.objects.create(url=validated_data["url"], short_url=short_url)

        return url
