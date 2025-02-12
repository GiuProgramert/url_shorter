from django.db import models

# Create your models here.
class URL(models.Model):
    url = models.URLField(max_length=200)
    short_url = models.CharField(max_length=10, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.url