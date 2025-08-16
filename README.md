# Catering Reservation and Ordering System

A web-based system that allows users to place food orders online.  
It enables admins to upload product details and view customer orders.  

This application is built using **HTML, CSS, JavaScript**, and **Firebase** for backend operations such as authentication and database management.

---

## Workflow

- **User Authentication**: Users register or log in using Firebase Authentication.  
- **Role Selection**: Users choose their role (e.g., Customer or Admin).  
- **Customer Actions**:  
  - View available products  
  - Add items to cart  
  - View and manage cart  
  - View profile details  
  - Place orders  
  - View order history  
  - Logout  
- **Admin Actions**:  
  - Upload and manage product details  
  - View all customer orders  

---

## Features

### 🔑 User Login/Registration
- Users can sign up or log in using Firebase Authentication.

### 👤 Role Selection
- While registering, users must select a role – either **Customer** or **Admin**.

### 🛒 Customer Role
- Customers can browse products, add items to the cart, and place orders.  
- All their actions (like adding to cart or placing an order) are saved in **Firestore**.

### 🛠️ Admin Role
- Admins can upload new product details and view all listed products.  
- All admin actions are also stored in **Firestore**.

---

## How to Run the Project

In your `firebase.js`, make sure you have the following setup:

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

Tech used:HTML,CSS,JS,Firebase.






export const db = getFirestore(app);
