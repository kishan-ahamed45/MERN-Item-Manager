# 📦 MERN Item Manager

A full-stack **MERN** (MongoDB, Express, React, Node.js) application for managing items with Create, Read, and Delete functionality.

---

## 🚀 Tech Stack

| Layer      | Technology         |
| ---------- | ------------------ |
| Frontend   | React + Vite       |
| Backend    | Express.js (Node)  |
| Database   | MongoDB Atlas      |
| HTTP Client| Axios              |

---

## 📁 Project Structure

```
mern-test/
├── backend/
│   ├── server.js        # Express server with API routes
│   ├── .env             # Environment variables (MONGO_URI, PORT)
│   └── package.json
├── frontend/
│   └── vite-project/
│       └── src/
│           ├── App.jsx   # Main React component
│           ├── App.css   # Styling
│           └── main.jsx  # Entry point
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (or local MongoDB)

### 1. Clone the Repository

```bash
git clone https://github.com/kishan-ahamed45/mern-test.git
cd mern-test
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend/vite-project
npm install
npm run dev
```

The frontend runs at **http://localhost:5173** and the backend API at **http://localhost:5000**.

---

## 🔌 API Endpoints

| Method   | Endpoint           | Description        |
| -------- | ------------------ | ------------------ |
| `GET`    | `/api/items`       | Fetch all items    |
| `POST`   | `/api/items`       | Add a new item     |
| `DELETE` | `/api/items/:id`   | Delete an item     |

---

## 🧑‍💻 Features

- ✅ Add items with name, quantity, and price
- ✅ View all items in a styled table
- ✅ Delete items with a single click
- ✅ Dark-themed, responsive UI
- ✅ Real-time updates after add/delete

---

## 📸 Screenshot

![Item Manager](https://via.placeholder.com/700x400?text=Item+Manager+Screenshot)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
