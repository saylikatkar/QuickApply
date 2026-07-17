# QuickApply - Job Finder React Application

A modern job search and application platform built using **React.js**.  
Users can explore available job opportunities, view job details, and submit applications. Submitted applications are stored locally in the browser using **Local Storage**.

---

## 🚀 Features

- 🔍 Search jobs by title, company, or skills
- 📂 Filter jobs by domain/category
- 👀 View detailed job information
- 📝 Apply for jobs through an application form
- 💾 Store submitted applications using browser Local Storage
- 🔐 Login interface
- 📱 Responsive design using Bootstrap
- ⚡ Fast and interactive React UI

---

## 🛠️ Technologies Used

### Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Bootstrap 5
- Bootstrap Icons

### Storage

- Browser Local Storage

### Tools

- Node.js
- npm
- Visual Studio Code

---

## 📂 Project Structure

```
jobfinder-pro-react/
│
├── public/
│   └── jobs.json              # Job data
│
├── src/
│   │
│   ├── components/
│   │   ├── JobList.jsx        # Displays job listings
│   │   ├── JobDetail.jsx      # Shows job details
│   │   ├── ApplyForm.jsx      # Job application form
│   │   └── Login.jsx          # Login component
│   │
│   ├── App.jsx                # Main application component
│   ├── App.css                # Application styling
│   └── index.jsx               # React entry point
│
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate into the project folder

```bash
cd jobfinder-pro-react
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm start
```

or if using Vite:

```bash
npm run dev
```

The application will open at:

```
http://localhost:3000
```

---

## 📸 Application Screens

### Home Page

- Displays available jobs
- Search and filter functionality

### Job Details

- Shows:
  - Job title
  - Company
  - Description
  - Required skills
  - Location

### Application Form

Users can submit:

- Full Name
- Email
- Cover Letter

Submitted applications are stored in Local Storage.

---

## 💾 Local Storage

Applications are stored with the key:

```
applications
```

Example stored data:

```json
[
  {
    "jobTitle": "Frontend Developer",
    "company": "ABC Technologies",
    "applicantName": "John Smith",
    "email": "john@gmail.com"
  }
]
```

To view stored data:

1. Open browser Developer Tools
2. Go to:

```
Application → Local Storage → localhost:3000
```

or run in console:

```javascript
JSON.parse(localStorage.getItem("applications"));
```

---

## 🎯 Future Improvements

- User authentication with backend
- Admin dashboard for recruiters
- Database integration (MongoDB/Firebase)
- Resume upload feature
- Email notifications
- Job recommendation system
- Advanced filtering

---
