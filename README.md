# 💻 TechTinker - Tech Device Service Sharing Platform

**TechTinker** is a full-featured, responsive service-sharing web application where users can offer and book various tech device-related services. The platform focuses on smooth user experience, secure authentication, and seamless service interactions with modern UI/UX design.

---
## Home Page-
![TechTinker Home Page](src/assets/Screenshot%20(117).png)

## 🌐 Live Website

🔗 **Live Site Link**: [https://techtinker2.web.app/](https://techtinker2.web.app/)

🔗 **Server Repository**: [https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-nurislam243](https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-nurislam243)

---

## 📌 Selected Category

> **Electronic Item Repairing Services**

---

## 🚀 Core Features

- 🔐 **Authentication**: Secure login & registration using **Firebase Authentication** with Email/Password and Google Sign-In.
- ➕ **Add / Manage Services**: Users can add, update, and delete services they provide.
- 📦 **Service Booking**: Any logged-in user can book available services with details.
- 🧾 **Status Update**: Service providers can update status (Pending → Working → Completed).
- 🧑‍🤝‍🧑 **Dashboard Menu**: Users get a personalized dashboard with 4 private routes.
- 🔍 **Search Feature**: Easily search services by name on the All Services page.
- 🌓 **Dark/Light Theme Toggle**: System-wide theme customization with one-click toggle.
- 🎯 **Protected Routes**: JWT-based route protection for sensitive pages.
- 💬 **SweetAlert2**: Stylish alerts for all actions (no default alert).
- 📱 **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop devices.
- 🧠 **Persistent Login**: Users remain logged in even after page reload (JWT verified).
- 🧢 **Dynamic Titles**: Page title updates automatically based on route using `react-helmet-async`.
- 🚫 **404 Page**: Custom error page for invalid routes with a "Go Home" button.

---

## 🆕 Extra Features

- 🔽 **Shrinkable Navbar with Top Bar**: 
  - Topbar hides and navbar height shrinks on scroll for modern UI.
- ⭐ **Service Review & Rating System**:
  - Users can leave reviews and star ratings on service detail page.
  - Other users can also view these reviews and ratings.
- 🧲 **Sticky Scroll Effects**: 
  - Scroll-based visual enhancements for smooth user experience.

---

---

## 🚦 React Router Routes Overview

The application uses `react-router-dom` for client-side routing with nested routes and loader support.

### 🌍 Main Layout Routes

| Route Path             | Component              | Access          | Description                                               |
|------------------------|------------------------|------------------|-----------------------------------------------------------|
| `/`                    | `Home`                 | Public           | Landing page                                              |
| `/services`            | `AllServices`          | Public           | Displays all available services (with loader)             |
| `/services/:id`        | `ServiceDetails`       | 🔒 Private       | Detailed view of a single service, with reviews/ratings   |
| `/add-service`         | `AddService`           | 🔒 Private       | Authenticated users can add a new service                 |
| `/manage-service`      | `ManageService`        | 🔒 Private       | Manage added services (update/delete)                     |
| `/book-service/:id`    | `BookService`          | 🔒 Private       | Book a service through pre-filled form                   |
| `/my-bookings`         | `Booked`               | 🔒 Private       | List of services booked by the user                       |
| `/service-to-do`       | `ServiceToDo`          | 🔒 Private       | Service provider's to-do list                             |
| `/register`            | `Register`             | Public           | Registration page                                         |
| `/login`               | `Login`                | Public           | Login with email/password or Google                       |
| `*` (invalid routes)   | `ErrorPage`            | Public           | Custom 404 page                                           |

- 🛡️ `PrivateRoute` is used to protect all routes that require authentication.
- 📦 Loaders are used in `/services` and `/services/:id` to fetch data from the backend.
- 🔄 `HydrateFallback: Spinner` is used to show a loader while route data is being fetched.

---


## 🛠️ Technologies Used

### 🔧 Frontend

- **React.js**
- **Tailwind CSS**
- **DaisyUI**
- **React Router DOM**
- **Axios**
- **Firebase Authentication**
- **React Firebase Hooks**
- **React Tooltip**
- **React Helmet Async**
- **React Rating**
- **Framer Motion**
- **React Awesome Reveal**
- **React Lottie**
- **Date-fns**
- **SweetAlert2**

### 🌐 Backend

- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT (jsonwebtoken)**
- **dotenv**
- **CORS**


## ⚙️ Installation & How to Run Locally

### 🔧 Prerequisites
- Node.js (v16 or above) installed  
- npm (comes with Node.js) or yarn installed  
- Git installed  
- MongoDB installed locally or have access to a MongoDB cloud instance  
- Firebase project setup (for authentication)  

---

### 📥 Clone the Repositories

```bash
# Clone Client Repository
git clone https://github.com/your-username/techtinker-client.git
cd techtinker-client

# Install Client Dependencies
npm install

# Create .env file in TechTinker-client with the following:
# (replace with your actual Firebase credentials)
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id

# Start Client
npm run dev


