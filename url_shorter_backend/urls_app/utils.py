import random
import string
import os


def generate_random_string(length=6):
    """
    Generate a random string of a given length
    """

    return "".join(random.choice(string.ascii_letters) for i in range(length))


def create_short_url():
    """
    Create a short URL
    """
    site_url = os.environ.get("SITE_URL")
    url_length = int(os.environ.get("URL_LENGTH"))

    return f"{site_url}/{generate_random_string(url_length)}"
