# 📝 MegaBlog - React & Appwrite Blog Platform

A production-grade, full-stack blogging platform built as a hands-on deep dive into advanced frontend architecture. 

> **💡 Acknowledgement:** This project was developed by following the excellent and comprehensive **"Chai aur Code"** React tutorial series. It serves as a practical implementation of real-world React concepts, moving beyond theoretical concepts to build a scalable, production-ready application.

## 🚀 Features

* **Complete Authentication Flow:** Secure Login, Signup, and Logout using Appwrite Auth.
* **Protected Routing:** Custom `AuthLayout` wrapper to guard routes based on user session state.
* **Rich Text Editor (RTE):** Integrated **TinyMCE** for advanced article formatting (bold, italics, lists, etc.).
* **CRUD Operations:** Fully functional Create, Read, Update, and Delete capabilities for blog posts.
* **Image Handling:** Upload, preview, and delete post cover images via Appwrite Storage Buckets.
* **Robust Form Handling:** Utilizing **React Hook Form** for performant input validation and submission.
* **Optimized State Management:** Centralized global state using **Redux Toolkit** to track user authentication status.
* **Reusable UI Components:** Custom-built, forwardRef-enabled `Input`, `Select`, and `Button` components for maximum reusability.

## 🛠️ Tech Stack

* **Frontend Framework:** React (initialized via Vite)
* **Styling:** Tailwind CSS
* **State Management:** Redux Toolkit (RTK) & React-Redux
* **Routing:** React Router DOM
* **Forms:** React Hook Form
* **Rich Text Editor:** `@tinymce/tinymce-react`
* **HTML Parser:** `html-react-parser` (to render RTE output)
* **Backend / BaaS:** Appwrite

## 📂 Project Structure Highlights

The application follows industry-standard structural practices:
* `src/appwrite/`: Contains class-based abstraction services (`auth.js` and `config.js`) to decouple the Appwrite SDK from the React components, preventing vendor lock-in.
* `src/components/`: Houses all modular UI elements, including the `Header`, `Footer`, `AuthLayout`, and `RTE`.
* `src/store/`: Redux configuration (`store.js` and `authSlice.js`).
* `src/pages/`: Route-level components mapping directly to application views (Home, Login, Signup, AddPost, EditPost, AllPosts).