# SoloStack_AMUHACKS4.0
 
# 🧥 StyleShare - Clothing with Compassion

StyleShare is a MERN stack web app where people can donate clothes they no longer need and those in need can browse and get clothes of their choice — for free, with dignity.
Designed during a 36-hour hackathon sprint to make fashion more inclusive and sustainable.

---

## 🔍 Problem Statement

Many people struggle to afford clothes, and donations often lack choice or dignity. StyleShare bridges this gap by allowing donors to upload clothes and those in need to browse, select, and receive clothes like a shopping experience — but for free.

---

## 🧩 Live Demo
[link](https://solostack-amuhacks4-0.onrender.com)
[Video](https://youtu.be/bQaKgMp97EU)
[GitHub](https://github.com/garvitthakral/SoloStack_AMUHACKS4.0)

## 🚀 Features

### 🧑‍💻 User Authentication
- Signup/Login with JWT-based authentication
- Role-based access: Users vs Donors
- Protected routes for dashboard and upload
- Cookie-based token storage

### 👕 Clothes Management
- Upload clothes with image, description, size, category, condition
- View all uploaded items in a donor dashboard
- Browse clothes with individual detail pages

### 💻 Tech Stack
- **Frontend:** React, TailwindCSS, React Router DOM
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT with secure cookie storage
- **State Management:** React Context API

### 🔐 Protected Routes
- Middleware to restrict donor actions
- Only verified donors can upload or manage clothes

---

## 📁 Folder Structure

- `/StyleShare`: Frontend React code
- `/backend`: Express server with routes, controllers, and MongoDB connection

---

## 📸 Screenshots

Include here screenshots of:
- [Landing page](https://res.cloudinary.com/dtntjxdio/image/upload/v1744584653/Screenshot_2025-04-14_040852_xpbwdx.png)
- [Shop page](https://res.cloudinary.com/dtntjxdio/image/upload/v1744584655/Screenshot_2025-04-14_040914_wsoiq0.png)
- [Donor dashboard](https://res.cloudinary.com/dtntjxdio/image/upload/v1744584740/Screenshot_2025-04-14_040933_xi57i4.png)
- [Upload clothes page](https://res.cloudinary.com/dtntjxdio/image/upload/v1744584654/Screenshot_2025-04-14_040946_wayzhd.png)
- [Individual cloth detail](https://res.cloudinary.com/dtntjxdio/image/upload/v1744584655/Screenshot_2025-04-14_041001_htcesv.png)
- [About](https://res.cloudinary.com/dtntjxdio/image/upload/v1744584653/Screenshot_2025-04-14_040902_zfqvrr.png)

---

## 🧠 Judging Criteria Breakdown

### Innovation & Creativity

- Solves a real-world problem of textile waste & clothing accessibility
- Gamifies donation by allowing users to shop

### Relevance to Theme

- Strong alignment with social good and sustainability
- Built for inclusivity and community impact

### Technical Implementation
- Secure JWT-based auth with cookie management
- Clean backend structure using controllers/routes/middleware

### Presentation & Demo

- Smooth dark-themed UI
- Professional project structure

### UI/UX Design

- Fully responsive with Tailwind CSS
- Smooth form handling and loading states

---

## 📌 Dev Info

**Developer:** Garvit Thakral  
_First solo hackathon project built from scratch._  
“Coding with a cause — using MERN to make donation feel like choice.”

## 🛠️ Setup Instructions

---

```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd StyleShare
npm install
npm run dev
```

---

## 🤝 Contribute
 
If you’d like to take this forward — filters, cart system, or donation tracking — feel free to fork and build 🚀
