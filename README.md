# 🔐 Fullstack Authentication System

## 🚀 Live Demo

* 🌐 Frontend: (add after deployment)
* 🔗 Backend API: (add after deployment)

---

## 📌 Overview

A full-stack authentication system built with **Spring Boot** and **React (TypeScript)** using **JWT-based authentication** and **Role-Based Access Control (RBAC)**.

The system supports:

* 👤 User Dashboard
* 🛠️ Admin Dashboard (view all users)

---

## ✨ Features

### 🔑 Authentication

* User Registration & Login
* Secure Password Encryption (BCrypt)
* JWT Token-based Authentication

### 👤 User

* Login / Logout
* Personalized dashboard UI

### 🛠️ Admin

* View all registered users
* Role-based access control
* Admin dashboard with stats

---

## 🧱 Project Structure

```bash
auth_system/
 ├── backend/   # Spring Boot backend
 └── frontend/  # React + TypeScript frontend
```

---

## ⚙️ Local Setup

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

Runs on: `http://localhost:8080`

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on: `http://localhost:5173`

---

## 🔗 API Endpoints

| Method | Endpoint           | Description           |
| ------ | ------------------ | --------------------- |
| POST   | /api/auth/register | Register user         |
| POST   | /api/auth/login    | Login user            |
| GET    | /api/admin/users   | Get all users (Admin) |

---

## 🧠 Tech Stack

* **Backend:** Spring Boot, Spring Security, JWT
* **Frontend:** React, TypeScript, Vite
* **Database:** MySQL
* **Others:** Axios, Bootstrap

---

## 🔐 Roles

* **USER** → Basic dashboard
* **ADMIN** → Admin panel + user management

---

## 💡 Future Improvements

* Charts & analytics dashboard 📊
* Refresh token mechanism 🔄
* Deployment & CI/CD ☁️

---

## 👩‍💻 Author

**Jagruti Deore**
🔗 GitHub: https://github.com/Jagruti2004deore

---

⭐ If you like this project, please give it a star!
