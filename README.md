
🌿 Dinacharya
live: https://dinacharya-three.vercel.app
Dinacharya is a secure and user-friendly personal journaling app built with the MERN stack (MongoDB, Express, React, and Node.js).
It allows users to log in, write, view, and manage their daily journal entries while maintaining privacy, simplicity, and a distraction-free experience.

Dinacharya helps you document your thoughts, memories, and emotions with confidence and peace of mind.

📚 Table of Contents

Features
Tech Stack
Project Structure
Installation
Backend Setup
Frontend Setup
API Endpoints
Contributing


1. Features

🔐 User Authentication: Secure login and registration system.

📖 Journal Entries: Create, read, update, delete, and search personal daily entries.

📱 Responsive UI: Built with React + TailwindCSS for a smooth experience across devices.

⚡ RESTful API: Powered by Express and Node.js for backend operations.

💾 Data Persistence: MongoDB stores user data and entries securely.

2. Tech Stack

Frontend: React.js, TailwindCSS, DaisyUI

Backend: Node.js, Express.js

Authentication: JWT (JSON Web Tokens) + HTTP-only secure cookies

Database: MongoDB (Mongoose ORM)

State Management & API Calls: Redux Toolkit (RTK) + RTK Query

Deployment (optional): Vercel / Render / Netlify for frontend & backend hosting

3. Project Structure
dinacharya/
├── backend/
│   ├── src/
│   │   ├── config/           # Database connection
│   │   ├── controllers/      # Business logic
│   │   ├── middleware/       # Authentication & security middleware
│   │   ├── models/           # MongoDB schemas
│   │   ├── routes/           # API route handlers
│   │   ├── utils/            # Helper functions
│   │   └── index.js          # Entry point for backend
│   ├── .env.example
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/       # UI components
│   │   ├── pages/            # Application pages
│   │   ├── redux/            # Redux slices & store
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
└── README.md

4. Installation
Prerequisites

Git

Node.js

MongoDB

Backend Setup
cd backend
npm install


Create a .env file inside backend:

PORT=3000
MONGO_URI=mongodb://localhost:27017/dinacharya
JWT_SECRET=yourSecretKey
FRONTEND_URL=http://localhost:5173


Run the backend server:

npm run dev   # for development
npm start     # for production

Frontend Setup
cd frontend
npm install


Create a .env file inside frontend:

VITE_BACKEND_URL=http://localhost:3000


Run the React frontend:

npm run dev

Default Local URLs

Frontend → http://localhost:5173

Backend → http://localhost:3000

5. API Endpoints
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Login user & create session
POST	/api/auth/logout	Logout user & clear session
GET	/api/users/me	Get logged-in user profile
PUT	/api/users/me	Update user profile
PUT	/api/auth/change-password	Change account password
POST	/api/entries	Add a new journal entry
GET	/api/entries	Get all user entries
GET	/api/entries/:id	Get a single entry
PATCH	/api/entries/:id	Update a journal entry
DELETE	/api/entries/:id	Delete a journal entry
GET	/api/entries/search?text=	Search entries by keyword
6. Contributing

Contributions are welcome! 🚀

Fork the repository

Create a new branch:

git checkout -b feature/YourFeature


Commit changes:

git commit -m "Added new feature"


Push branch:

git push origin feature/YourFeature


Open a Pull Request

✨ Dinacharya is built with love for simplicity, security, and personal growth.
