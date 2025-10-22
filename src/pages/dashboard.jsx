import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fraudDetectionAPI } from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalTransactions: 0,
    fraudDetected: 0,
    safeTransactions: 0,
    accuracyRate: 0
  });
  const [loading, setLoading] = useState(true);

  // Sample data - replace with actual API data
  const transactionTrendData = [
    { month: 'Jan', total: 450, fraud: 45, safe: 405 },
    { month: 'Feb', total: 523, fraud: 52, safe: 471 },
    { month: 'Mar', total: 489, fraud: 38, safe: 451 },
    { month: 'Apr', total: 612, fraud: 61, safe: 551 },
    { month: 'May', total: 557, fraud: 48, safe: 509 },
    { month: 'Jun', total: 681, fraud: 73, safe: 608 }
  ];

  const fraudTypeData = [
    { name: 'Payment Fraud', value: 400 },
    { name: 'Transfer Fraud', value: 300 },
    { name: 'Cash Out Fraud', value: 200 },
    { name: 'Other', value: 100 }
  ];

  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Simulate API call - replace with actual API call
      setTimeout(() => {
        setStats({
          totalTransactions: 3462,
          fraudDetected: 317,
          safeTransactions: 3145,
          accuracyRate: 94.8
        });
        setLoading(false);
      }, 1000);

      // Uncomment when backend is ready
      // const response = await fraudDetectionAPI.getDashboardStats();
      // setStats(response);
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Overview of fraud detection analytics</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#667eea' }}>📊</div>
          <div className="stat-info">
            <h3>Total Transactions</h3>
            <p className="stat-value">{stats.totalTransactions.toLocaleString()}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#f093fb' }}>🚨</div>
          <div className="stat-info">
            <h3>Fraud Detected</h3>
            <p className="stat-value fraud">{stats.fraudDetected.toLocaleString()}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#4facfe' }}>✅</div>
          <div className="stat-info">
            <h3>Safe Transactions</h3>
            <p className="stat-value safe">{stats.safeTransactions.toLocaleString()}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: '#43e97b' }}>🎯</div>
          <div className="stat-info">
            <h3>Accuracy Rate</h3>
            <p className="stat-value">{stats.accuracyRate}%</p>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h2>Transaction Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={transactionTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="total" stroke="#667eea" strokeWidth={2} name="Total" />
              <Line type="monotone" dataKey="fraud" stroke="#f093fb" strokeWidth={2} name="Fraud" />
              <Line type="monotone" dataKey="safe" stroke="#43e97b" strokeWidth={2} name="Safe" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>Fraud vs Safe Transactions</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={transactionTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="fraud" fill="#f093fb" name="Fraud" />
              <Bar dataKey="safe" fill="#43e97b" name="Safe" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>Fraud Types Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={fraudTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {fraudTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-icon fraud">🚨</span>
              <div className="activity-details">
                <p className="activity-title">Fraud Detected</p>
                <p className="activity-desc">Transaction #12345 flagged as suspicious</p>
                <p className="activity-time">2 hours ago</p>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon safe">✅</span>
              <div className="activity-details">
                <p className="activity-title">Safe Transaction</p>
                <p className="activity-desc">Transaction #12344 verified successfully</p>
                <p className="activity-time">4 hours ago</p>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon fraud">🚨</span>
              <div className="activity-details">
                <p className="activity-title">Fraud Detected</p>
                <p className="activity-desc">Transaction #12343 flagged as suspicious</p>
                <p className="activity-time">6 hours ago</p>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon safe">✅</span>
              <div className="activity-details">
                <p className="activity-title">Safe Transaction</p>
                <p className="activity-desc">Transaction #12342 verified successfully</p>
                <p className="activity-time">8 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;