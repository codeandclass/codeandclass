# Code and Class

**Code and Class** is an educational web platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides users with access to a wide range of courses, lecture materials, downloadable notes, and spoken English classes for different levels. It also features a certificate verification system and an admin dashboard for content management.

## 🔗 Live Routes Overview

### 🏠 `/` - Home
The landing page of the website that introduces users to Code and Class and its offerings.

### 📚 `/courses` - Courses Listing
Displays all available courses. Users can:
- Browse through the list of available courses.
- Click on a course to view detailed information.
- Download course notes.
- Watch class lectures organized by units.

### 🎥 Course Details
Each course page includes:
- Course syllabus and description.
- Unit-wise video lectures.
- Downloadable lecture notes.

### 🗣️ Spoken English Section
Accessible from the home page or as part of the course offerings:
- Three levels: **Beginner**, **Intermediate**, and **Advanced**
- Each level includes:
  - Video lectures
  - Practice materials
  - Notes and additional resources

### 🎓 Certificate Verification
Users can verify their certificates using a unique certificate number.

### 📬 Contact Us
A form that users can fill out to send queries or feedback. Upon submission:
- An email is sent to the Code and Class team.

### 🔐 Admin Panel - `/login`
Admins can log in to manage the platform. Admin capabilities include:
- Adding and managing certificates
- Uploading course notes and lecture videos
- Managing spoken English content
- Adding new class lectures and course details

## 🛠 Tech Stack

**Frontend:**
- React.js
- HTML5 / CSS3

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB (Mongoose ODM)

**Other Integrations:**
- Nodemailer (for sending contact form emails)
- JWT (for secure admin authentication)

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (local or cloud)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/codeandclass.git
   cd codeandclass
Install frontend and backend dependencies:

- bash
- Copy
- Edit
# Frontend
```
cd Frontend
npm install
```

# Backend
```
cd ../Backend
npm install
Create a .env file in the server directory with the following:

ini
Copy
Edit
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
```
---

### Run the development servers:

- bash
- Copy
- Edit
# In one terminal, run backend
```
cd Backend
npm run dev
```

# In another terminal, run frontend
```
cd Frontend
npm start
```

✨ Features Summary
✅ Home and Course browsing

🎓 Unit-wise video lectures

📥 Downloadable notes

🗣️ Spoken English levels

🔐 Certificate verification

📬 Contact form with email integration

👨‍💻 Admin login and content management

📁 Folder Structure (Simplified)
- bash
- Copy
- Edit
```
codeandclass/
├── client/               # React Frontend
├── server/               # Node.js Backend
│   ├── models/           # Mongoose models
│   ├── routes/           # Express routes
│   ├── controllers/      # Logic handlers
│   └── utils/            # Utility functions (e.g. email sender)
├── README.md

```
---

### 📧 Contact
For questions or feedback, visit the Contact Us page or email the team at codeandclass.edu.ins@gmail.com.

Code and Class – Learn, Grow, and Get Certified 💡

- yaml
- Copy
- Edit

---

Let me know if you'd like me to include badges (e.g. license, tech stack icons), deployment instructions (e.g. for Vercel), or API route documentation.