# URL Shortener Frontend

A React + TypeScript frontend for the URL Shortener API. This project allows users to interact with the URL Shortener API to create shortened URLs and manage their accounts.

## Features

- URL shortening with automatic unique code generation
- Authentication for user registration and login
- Dark mode support
- Responsive design

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build the project for production:
```bash
npm run build
```

4. Preview the production build:
```bash
npm run preview
```

## Project Structure

```
url_shorter_frontend/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── icons/
│   ├── index.css
│   ├── main.tsx
│   ├── routes/
│   ├── schemas/
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Usage Examples

### Creating a Short URL

1. Open the application in your browser.
2. Paste the URL to be shortened in the input field.
3. Click the "Shorten URL" button.
4. The shortened URL will be displayed.

### Using Dark Mode

1. Click the "Dark Mode" button in the navigation bar to toggle between light and dark modes.

### User Authentication

1. Click the "Login" or "Register" button in the navigation bar to open the respective modal.
2. Fill in the required fields and submit the form.

## Running Tests

To run the test suite:

```bash
npm run test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React documentation
- URL shortening best practices