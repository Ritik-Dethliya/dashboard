🚀 Driftal Employee Dashboard
📌 Table of Contents
Overview

Features

Tech Stack

Installation & Setup

Folder Structure

Usage Guide

Backend API Endpoints

Screenshots / Demo

Bonus Features Implemented

Future Improvements

Contributors

License

📖 Overview
The Driftal Employee Dashboard is a web-based platform designed for HR/Admins to view, filter, sort, and manage employees based on their mindset and attitude assessments.
It helps organizations quickly identify employees’ strengths, interests, and learning attitudes.

✨ Features
Core
Employee List View — Displays Name, Role, Email, Assessment Status, Key Highlights.

Filtering — By Assessment Submission, Role, Interest Area, Long-Term Goals, Work Culture Preference, Learning Attitude.

Sorting — Name (A-Z / Z-A), Submission Date (Recent/Oldest), Learning Attitude Score.

Search — By Name, Email, Keywords from assessment answers.

Assessment Details — View all 20 answers for any employee.

Add/Edit Employee — Add new employees, update details, or upload responses.

Bonus
Tag Cloud from Q1/Q20 answers.

Dashboard Analytics (Culture Preference, Salary Motivation, etc.).

Export filtered data to CSV.

Save filter combinations as presets.

🛠 Tech Stack
Frontend: React.js, CSS, (Optional: Redux Toolkit / Context API)
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
Other: CSV Export Library, Chart.js / Recharts for analytics

⚙ Installation & Setup
bash
Copy
Edit
# 1️⃣ Clone the repository
git clone https://github.com/your-username/driftal-dashboard.git
cd driftal-dashboard

# 2️⃣ Install dependencies
npm install

# 3️⃣ Setup environment variables
# Create a .env file in the root and add:
MONGO_URI=your_mongo_connection_string
PORT=5000

# 4️⃣ Start backend server
npm run server

# 5️⃣ Start frontend
cd client
npm install
npm start
📂 Folder Structure
bash
Copy
Edit
driftal-dashboard/
│── backend/
│   ├── models/        # Mongoose schemas
│   ├── routes/        # Express routes
│   ├── controllers/   # Route logic
│   ├── utils/         # Helper functions
│   ├── server.js
│
│── frontend/
│   ├── src/
│   │   ├── components/ # UI Components
│   │   ├── pages/      # Dashboard, Details, Add/Edit
│   │   ├── redux/      # State management
│   │   ├── App.js
│
│── README.md
│── package.json
🖥 Usage Guide
Dashboard View: Displays all employees.

Filter Panel: Apply multiple filters at once.

Sort Dropdown: Sort employees dynamically.

Search Bar: Instant keyword-based filtering.

Click Row: View detailed answers.

Add/Edit Form: Manage employee data.

📡 Backend API Endpoints
Method	Endpoint	Description
GET	/api/employees	Get all employees
POST	/api/employees	Add new employee
GET	/api/employees/:id	Get single employee details
PUT	/api/employees/:id	Update employee details
DELETE	/api/employees/:id	Delete employee

📸 Screenshots / Demo
(Add images/gifs here for visual appeal)

Dashboard View

Filter Functionality

Assessment Detail Page

Add/Edit Employee Form

🎯 Bonus Features Implemented
Tag Cloud — Visualizes top keywords from responses.

CSV Export — Download filtered results.

Analytics Section — Charts showing cultural preferences, learning trends.

🔮 Future Improvements
Role-based authentication for HR/Admin.

Bulk upload via CSV/Excel.

AI-based sentiment analysis of assessment answers.

👥 Contributors
Ritik Dethliya — Full Stack Developer

📜 License
This project is licensed under the MIT License — feel free to use & modify.