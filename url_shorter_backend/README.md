# URL Shortener API

A Django REST Framework API that allows authenticated users to create shortened URLs. The service generates unique short URLs for any valid URL provided and handles redirections to the original URLs.

## Features

- URL shortening with automatic unique code generation
- Duplicate URL detection to prevent multiple entries
- Authentication required for URL creation
- Automatic redirection from short URLs to original URLs
- RESTful API design
- Comprehensive test coverage

## Installation

1. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Apply migrations:
```bash
python manage.py migrate
```

4. Create a superuser (optional):
```bash
python manage.py createsuperuser
```

## API Endpoints

### Create Short URL
- **URL**: `/api/urls/`
- **Method**: `POST`
- **Auth Required**: Yes
- **Body**:
```json
{
    "url": "https://example.com"
}
```
- **Success Response**:
```json
{
    "url": "https://example.com",
    "short_url": "http://localhost:8000/abc123",
    "created_at": "2024-02-11T12:00:00Z"
}
```

### Redirect to Original URL
- **URL**: `/<short_url>/`
- **Method**: `GET`
- **Auth Required**: No
- **Response**: 302 Redirect to original URL

## Usage Examples

### Creating a Short URL

```python
import requests

# Replace with your API endpoint
API_URL = "http://localhost:8000/api/urls/"

# Replace with your authentication token
headers = {
    "Authorization": "Token your-auth-token-here"
}

data = {
    "url": "https://example.com"
}

response = requests.post(API_URL, json=data, headers=headers)
print(response.json())
```

### Using the Short URL

Simply visit the short URL in your browser:
```
http://localhost:8000/abc123
```

## Running Tests

To run the test suite:

```bash
python manage.py test
```

## Project Structure

```
url_shortener/
├── manage.py
├── requirements.txt
├── url_shortener/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── shortener/
    ├── __init__.py
    ├── models.py
    ├── serializers.py
    ├── views.py
    ├── urls.py
    └── tests.py
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Django REST Framework documentation
- URL shortening best practices