# 🌱 Sustainability Tracker - Project Submission

## 📌 Project Overview
Sustainability Tracker is a full-stack web application designed to track and manage sustainability actions. This project is submitted as part of the assignment.

---

## 📂 Project Structure
```
sustainability-tracker/
│── sustainability_backend/        # Django backend
│── sustainability_frontend/       # React frontend
│── README.md       # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
First, open a terminal and navigate to the folder where you want to store the project. Then run:
```sh
git clone https://github.com/Skandesh24/Sustainability_Tracker.git
cd Sustainability_Tracker
```

---

## ⚙️ Setting Up the Backend (Django)

### **2️⃣ Start the Django Server**
Open a new terminal and follow these steps:

```sh
cd backend  # Move into the backend folder

# Create and activate a virtual environment
python -m venv venv  # Create the virtual environment
venv\Scripts\activate  # Activate it (Windows)
source venv/bin/activate  # (Mac/Linux)

# Install backend dependencies
pip install -r requirements.txt

# Apply database migrations
python manage.py migrate

# Start the Django server
python manage.py runserver
```
✅ The backend should now be running at **http://127.0.0.1:8000/**

---

## 🎨 Setting Up the Frontend (React)

### **3️⃣ Start the React App**
In a new terminal, navigate to the frontend folder and start the React app:

```sh
cd frontend  # Move into the frontend folder

# Install frontend dependencies
npm install

# Start the React development server
npm start
```
✅ The frontend should now be running at **http://localhost:3000/**

---

## 📡 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET    | /api/actions/ | Fetch all sustainability actions |
| POST   | /api/actions/ | Add a new action |
| DELETE | /api/actions/:id/ | Delete an action |

---

## 🛠️ Technologies Used
- **Backend**: Django, Django REST Framework
- **Frontend**: React, Material-UI

---

## 🔥 Project Objectives
- Develop a web-based sustainability tracker
- Implement a RESTful API using Django
- Build an interactive UI with React
- Ensure CRUD operations for sustainability actions

---

## 📜 Submission Details
- **Project Name**: Sustainability Tracker API
- **Submitted By**: Skandesh S
- **Submission Date**: 09/03/2025
- **Institution/Organization**: Reva University



