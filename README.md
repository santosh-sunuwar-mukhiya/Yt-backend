# YouTube Backend – Learning Journey

A hands-on backend development learning project inspired by the **YouTube Backend series by Chai aur Code**.

This repository documents my journey of learning, revising, and implementing backend development concepts using JavaScript, Node.js, Express, and MongoDB.

Rather than just watching tutorials and copying code, my goal is to understand how backend systems work internally, why particular approaches are used, and how to build scalable, maintainable, and production-oriented applications.

## 🎯 Learning Objectives

- Strengthen my JavaScript and backend development fundamentals.
- Understand how Node.js and Express work behind the scenes.
- Learn how to design and structure REST APIs.
- Understand authentication, authorization, and security.
- Work with MongoDB and Mongoose for database management.
- Learn file uploads, middleware, error handling, and API management.
- Understand backend architecture and production-level development practices.
- Develop the ability to build backend features independently.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| JavaScript (ES6+) | Programming language |
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling |
| bcrypt | Password hashing |
| dotenv | Environment variable management |
| Nodemon | Development server |

## 📚 Learning Approach

I follow a **one-concept-a-day** learning approach.

For each concept, I aim to:

1. **Learn:** Watch the relevant lesson from Chai aur Code.
2. **Understand:** Understand the concept, its purpose, and how it works internally.
3. **Implement:** Write the code and implement the concept myself.
4. **Revise:** Revisit the implementation without depending on the tutorial.
5. **Document:** Record important concepts, challenges, and things learned.

The objective is not simply to finish a tutorial series. It is to develop a strong understanding of backend engineering.

## 📂 Project Structure

```text
Yt-backend/
│
├── public/
│   └── temp/
│
├── src/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── .env.sample
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

*The structure will evolve as I implement and learn additional backend concepts.*

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/santosh-sunuwar-mukhiya/Yt-backend.git
```

### 2. Navigate to the project directory

```bash
cd Yt-backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory using `.env.sample` as a reference.

Add your own configuration:

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string

CORS_ORIGIN=*

ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Never commit your actual `.env` file or expose database credentials and secret keys.

### 5. Run the development server

```bash
npm run dev
```

### 6. Run the production start command

```bash
npm start
```

## 📈 Daily Learning Progress

I will continuously update this section as I learn and implement new concepts.

| Day | Topic | Status |
|---|---|---|
| Day 01 | Backend project setup and initial structure | 🔄 In Progress |
| Day 02 | To be updated | ⏳ Pending |
| Day 03 | To be updated | ⏳ Pending |

*This is