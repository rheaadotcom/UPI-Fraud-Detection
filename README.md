# UPI Fraud Detection System 

An AI-powered fintech solution for real-time UPI transaction fraud detection with comprehensive analytics and monitoring.

## Features

- **Real-time Transaction Monitoring** - Live feed of all UPI transactions
- **AI-Powered Fraud Detection** - Machine learning model predicts fraud risk
- **Interactive Dashboard** - Visual analytics and statistics
- **Transaction Analysis** - Detailed transaction history with risk scores
- **Comprehensive Reports** - Export-ready analytics and insights
- **Responsive Design** - Works on desktop, tablet, and mobile

## Prerequisites

- Node.js (v14 or higher)
- Backend API running (optional for demo mode)

## Installation

### Step 1: Navigate to frontend directory

```bash
cd frontend
```

### Step 2: Initialize React with Vite

```bash
npm create vite@latest . -- --template react
```

### Step 3: Install dependencies

```bash
npm install
npm install axios react-router-dom @mui/material @mui/icons-material @emotion/react @emotion/styled recharts react-hot-toast
```

## Project Structure

```frontend/
├── src/
│   ├── components/
│   │   └── common/
│   │       └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Transactions.jsx
│   │   └── Reports.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── package.json
└── README.md
```





