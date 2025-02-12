# tests.py
from django.urls import reverse
from django.contrib.auth.models import User
from rest_framework.test import APITestCase
from rest_framework import status

class AuthenticationTests(APITestCase):
    def setUp(self):
        # Create a test user
        self.test_user = User.objects.create_user(
            username='testuser',
            password='testpass123',
            email='test@example.com',
            first_name='Test',
            last_name='User'
        )
        
        # URLs
        self.register_url = reverse('register')
        self.token_url = reverse('token_obtain_pair')
        self.refresh_url = reverse('token_refresh')
        self.profile_url = reverse('profile')

    def test_user_registration(self):
        """
        Test user registration with valid data
        """
        data = {
            'username': 'newuser',
            'password': 'newpass123',
            'password2': 'newpass123',
            'email': 'newuser@example.com',
            'first_name': 'New',
            'last_name': 'User'
        }
        
        response = self.client.post(self.register_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 2)
        self.assertEqual(User.objects.get(username='newuser').email, 'newuser@example.com')

    def test_user_registration_with_invalid_data(self):
        """
        Test user registration with invalid data (mismatched passwords)
        """
        data = {
            'username': 'newuser',
            'password': 'newpass123',
            'password2': 'differentpass',
            'email': 'newuser@example.com',
            'first_name': 'New',
            'last_name': 'User'
        }
        
        response = self.client.post(self.register_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('password', response.data)

    def test_token_obtain(self):
        """
        Test obtaining JWT tokens with valid credentials
        """
        data = {
            'username': 'testuser',
            'password': 'testpass123'
        }
        
        response = self.client.post(self.token_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)

    def test_token_obtain_with_invalid_credentials(self):
        """
        Test obtaining JWT tokens with invalid credentials
        """
        data = {
            'username': 'testuser',
            'password': 'wrongpass'
        }
        
        response = self.client.post(self.token_url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_token_refresh(self):
        """
        Test refreshing JWT token
        """
        # First obtain tokens
        tokens = self.client.post(
            self.token_url,
            {'username': 'testuser', 'password': 'testpass123'},
            format='json'
        ).data

        # Then try to refresh
        response = self.client.post(
            self.refresh_url,
            {'refresh': tokens['refresh']},
            format='json'
        )
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)

    def test_token_refresh_with_invalid_token(self):
        """
        Test refreshing JWT token with invalid refresh token
        """
        response = self.client.post(
            self.refresh_url,
            {'refresh': 'invalid-token'},
            format='json'
        )
        
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_protected_endpoint_with_valid_token(self):
        """
        Test accessing protected endpoint with valid token
        """
        # First obtain tokens
        tokens = self.client.post(
            self.token_url,
            {'username': 'testuser', 'password': 'testpass123'},
            format='json'
        ).data

        # Access protected endpoint
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {tokens["access"]}')
        response = self.client.get(self.profile_url)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['username'], 'testuser')
        self.assertEqual(response.data['email'], 'test@example.com')

    def test_protected_endpoint_without_token(self):
        """
        Test accessing protected endpoint without token
        """
        response = self.client.get(self.profile_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_protected_endpoint_with_invalid_token(self):
        """
        Test accessing protected endpoint with invalid token
        """
        self.client.credentials(HTTP_AUTHORIZATION='Bearer invalid-token')
        response = self.client.get(self.profile_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_update_user_profile(self):
        """
        Test updating user profile with valid token
        """
        # First obtain tokens
        tokens = self.client.post(
            self.token_url,
            {'username': 'testuser', 'password': 'testpass123'},
            format='json'
        ).data

        # Update profile
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {tokens["access"]}')
        update_data = {
            'first_name': 'Updated',
            'last_name': 'Name'
        }
        response = self.client.patch(self.profile_url, update_data, format='json')
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['first_name'], 'Updated')
        self.assertEqual(response.data['last_name'], 'Name')