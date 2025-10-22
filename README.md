# UPI Fraud Detection System - Frontend

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

## Quick Start

### 1. Create Directory Structure

```bash
mkdir -p src/components/common
mkdir -p src/pages
mkdir -p src/services
```

### 2. Create Required Files

Create these files and copy the code from the artifacts provided:

- `src/App.jsx` - Main Application component
- `src/App.css` - Global styles
- `src/main.jsx` - Entry point
- `src/components/common/Navbar.jsx` - Navigation component
- `src/pages/Home.jsx` - Landing page
- `src/pages/Dashboard.jsx` - Main dashboard
- `src/pages/Transactions.jsx` - Transaction monitor
- `src/pages/Reports.jsx` - Analytics and reports
- `src/services/api.js` - API service layer

### 3. Update main.jsx

Replace the content of `src/main.jsx` with:

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### 4. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## API Integration

### Connecting to Backend

Update the `API_BASE_URL` in `src/services/api.js`:

```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

### Demo Mode

The app works in demo mode with sample data if the backend is not available.

## Features Guide

### Dashboard

- View real-time statistics
- Monitor transaction trends
- Analyze fraud patterns
- Interactive charts and visualizations

### Transactions

- Check new transactions for fraud risk
- View transaction history
- Detailed transaction analysis
- Risk score indicators

### Reports

- Comprehensive analytics
- Export reports in JSON format
- Model performance metrics
- Insights and recommendations

## Customization

### Changing Theme Colors

Edit the theme in `src/App.jsx`:

```javascript
const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Import and add route in `src/App.jsx`
3. Add navigation link in `src/components/common/Navbar.jsx`

## Environment Variables

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=UPI Fraud Detection
```

Access in code:

```javascript
const API_URL = import.meta.env.VITE_API_BASE_URL;
```

## Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Testing Transaction Detection

1. Go to the Transactions page
2. Fill in transaction details
3. Click "Check Fraud Risk"
4. View the risk score and prediction

## Tech Stack

- React 18
- Vite
- Material-UI (MUI)
- Recharts
- React Router
- Axios
- React Hot Toast

## Troubleshooting

### Port already in use

```bash
npx kill-port 5173
npm run dev -- --port 3000
```

### Module not found errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### API connection issues

- Check if backend is running
- Verify API_BASE_URL in api.js
- Check browser console for CORS errors

## License

MIT License

---

Made with ❤️ for secure fintech transactions
