from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from .models import URL


class URLRegisterViewTests(APITestCase):
    def setUp(self):
        # Create test user
        self.user = User.objects.create_user(
            username="testuser", password="testpass123"
        )

        # Create test URLs
        self.existing_url = URL.objects.create(
            url="https://existing.com", short_url="abc123"
        )

        # URL for testing
        self.valid_url = "https://example.com"

        # API endpoint
        self.url_create_endpoint = reverse(
            "url_register"
        )  # Make sure this matches your URL name

    def test_create_url_authenticated(self):
        """
        Test creating a new URL when authenticated
        """

        self.client.force_authenticate(user=self.user)

        data = {"url": self.valid_url}

        response = self.client.post(self.url_create_endpoint, data, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn("url", response.data)
        self.assertIn("short_url", response.data)
        self.assertIn("created_at", response.data)

        # Verify URL was created in database
        self.assertTrue(URL.objects.filter(url=self.valid_url).exists())

    def test_create_url_unauthenticated(self):
        """
        Test creating a URL without authentication
        """

        data = {"url": self.valid_url}

        response = self.client.post(self.url_create_endpoint, data, format="json")

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

        # Verify URL was not created
        self.assertFalse(URL.objects.filter(url=self.valid_url).exists())

    def test_create_existing_url(self):
        """
        Test creating a URL that already exists
        """

        self.client.force_authenticate(user=self.user)

        data = {"url": self.existing_url.url}

        response = self.client.post(self.url_create_endpoint, data, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["short_url"], self.existing_url.short_url)

        # Verify no duplicate was created
        self.assertEqual(URL.objects.filter(url=self.existing_url.url).count(), 1)

    def test_create_invalid_url(self):
        """
        Test creating an invalid URL
        """
        self.client.force_authenticate(user=self.user)

        data = {"url": "invalid-url"}

        response = self.client.post(self.url_create_endpoint, data, format="json")

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("url", response.data)

    def test_create_url_missing_data(self):
        """
        Test creating a URL with missing data
        """
        self.client.force_authenticate(user=self.user)

        response = self.client.post(self.url_create_endpoint, {}, format="json")

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("url", response.data)
