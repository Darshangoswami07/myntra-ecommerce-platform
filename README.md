# 🛍️ Myntra Clone

A full-stack **Myntra Clone** built with **React (Vite)** and **Redux Toolkit** on the frontend, and **Node + Express** on the backend.  
This project demonstrates typical e-commerce features: product listing (from a backend API), add to cart, remove from cart, and cart total calculation in Indian Rupees (₹).

---

## ✨ Features

- Product listing fetched from backend API (Express).
- Add to cart / Remove from cart.
- Dynamic cart total (₹).
- State management with **Redux Toolkit** (items, cart/bag, fetch status).
- Simple mock backend using a JSON file (`items.json`) as a data source.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Redux Toolkit, React Router
- **Backend:** Node.js, Express
- **Storage:** `items.json` as a mock DB (file-system)

---

## 📁 File structure

myntra-clone/
├── backend/ # Express server (optional - see notes)
│ ├── data/
│ │ └── items.json
│ └── server.js
├── src/
│ ├── components/
│ ├── store/ # Redux slices: itemsSlice.js, bagSlice.js, fetchStatusSlice.js
│ ├── App.jsx
│ └── main.jsx
├── public/
├── package.json
├── vite.config.js
└── README.md
