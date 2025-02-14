# URL Shortener Project

This project consists of a backend API built with Django REST Framework and a frontend application built with React and TypeScript. The URL Shortener service allows users to create shortened URLs and manage their accounts.

## Project Structure

```
url_shorter_backend/
├── .env
├── auth_app/
├── db.sqlite3
├── env/
├── manage.py
├── README.md
├── requirements.txt
└── url_shorter_backend/
    ├── urls_app/
url_shorter_frontend/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Backend

The backend is a Django REST Framework API that allows authenticated users to create shortened URLs. The service generates unique short URLs for any valid URL provided and handles redirections to the original URLs.

For more details, refer to the [backend README](url_shorter_backend/README.md).

## Frontend

The frontend is a React + TypeScript application that allows users to interact with the URL Shortener API to create shortened URLs and manage their accounts. It supports dark mode and has a responsive design.

For more details, refer to the [frontend README](url_shorter_frontend/README.md).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Django REST Framework documentation
- React documentation
- URL shortening best practices