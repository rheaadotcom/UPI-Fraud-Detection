import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Reports.css';

const Reports = () => {
  const [dateRange, setDateRange] = useState('7days');
  const [reportType, setReportType] = useState('fraud-analysis');

  // Sample data
  const fraudTrendData = [
    { date: '10/14', fraud: 23, safe: 456 },
    { date: '10/15', fraud: 31, safe: 489 },
    { date: '10/16', fraud: 18, safe: 512 },
    { date: '10/17', fraud: 42, safe: 478 },
    { date: '10/18', fraud: 27, safe: 501 },
    { date: '10/19', fraud: 35, safe: 495 },
    { date: '10/20', fraud: 29, safe: 518 }
  ];

  const fraudByTypeData = [
    { name: 'Payment Fraud', value: 145, percentage: 35 },
    { name: 'Transfer Fraud', value: 112, percentage: 27 },
    { name: 'Cash Out Fraud', value: 98, percentage: 24 },
    { name: 'Phishing', value: 58, percentage: 14 }
  ];

  const amountRangeData = [
    { range: '0-5K', count: 45 },
    { range: '5K-10K', count: 78 },
    { range: '10K-20K', count: 112 },
    { range: '20K-50K', count: 89 },
    { range: '50K+', count: 56 }
  ];

  const timeDistributionData = [
    { hour: '00-04', fraud: 12 },
    { hour: '04-08', fraud: 8 },
    { hour: '08-12', fraud: 34 },
    { hour: '12-16', fraud: 45 },
    { hour: '16-20', fraud: 52 },
    { hour: '20-24', fraud: 28 }
  ];

  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];

  const handleExportReport = () => {
    alert('Report export functionality will be implemented with backend integration');
  };

  const handleGenerateReport = () => {
    alert('Generating detailed report...');
  };

  return (
    <div className="reports">
      <div className="reports-header">
        <div>
          <h1>Fraud Reports & Analytics</h1>
          <p>Comprehensive fraud detection insights and statistics</p>
        </div>
        <div className="header-actions">
          <button className="export-btn" onClick={handleExportReport}>
            📥 Export Report
          </button>
          <button className="generate-btn" onClick={handleGenerateReport}>
            📊 Generate Custom Report
          </button>
        </div>
      </div>

      <div className="reports-controls">
        <div className="control-group">
          <label>Report Type:</label>
          <select 
            value={reportType} 
            onChange={(e) => setReportType(e.target.value)}
            className="control-select"
          >
            <option value="fraud-analysis">Fraud Analysis</option>
            <option value="transaction-summary">Transaction Summary</option>
            <option value="risk-assessment">Risk Assessment</option>
            <option value="pattern-detection">Pattern Detection</option>
          </select>
        </div>

        <div className="control-group">
          <label>Date Range:</label>
          <select 
            value={dateRange} 
            onChange={(e) => setDateRange(e.target.value)}
            className="control-select"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <div className="card-icon" style={{ background: '#FF6384' }}>🚨</div>
          <div className="card-content">
            <h3>Total Fraud Cases</h3>
            <p className="card-value">205</p>
            <span className="card-change increase">+12.5% from last period</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon" style={{ background: '#36A2EB' }}>💰</div>
          <div className="card-content">
            <h3>Amount at Risk</h3>
            <p className="card-value">₹42.5L</p>
            <span className="card-change decrease">-8.3% from last period</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon" style={{ background: '#FFCE56' }}>⚡</div>
          <div className="card-content">
            <h3>Detection Rate</h3>
            <p className="card-value">94.8%</p>
            <span className="card-change increase">+2.1% from last period</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="card-icon" style={{ background: '#4BC0C0' }}>⏱️</div>
          <div className="card-content">
            <h3>Avg Response Time</h3>
            <p className="card-value">1.2s</p>
            <span className="card-change decrease">-0.3s from last period</span>
          </div>
        </div>
      </div>

      <div className="reports-grid">
        <div className="report-card large">
          <div className="card-header">
            <h2>Fraud Detection Trend</h2>
            <span className="info-badge">Last 7 Days</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={fraudTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="fraud" stroke="#FF6384" strokeWidth={3} name="Fraud" />
              <Line type="monotone" dataKey="safe" stroke="#4BC0C0" strokeWidth={3} name="Safe" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="report-card">
          <div className="card-header">
            <h2>Fraud Distribution by Type</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={fraudByTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name}: ${percentage}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {fraudByTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="report-card">
          <div className="card-header">
            <h2>Fraud by Amount Range</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={amountRangeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="range" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#667eea" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="report-card">
          <div className="card-header">
            <h2>Fraud Time Distribution</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={timeDistributionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="fraud" fill="#FF6384" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="report-card full-width">
          <div className="card-header">
            <h2>Top Fraud Indicators</h2>
          </div>
          <div className="indicators-list">
            <div className="indicator-item">
              <div className="indicator-info">
                <span className="indicator-icon">⚠️</span>
                <div>
                  <h4>Unusual Transaction Amount</h4>
                  <p>Transactions exceeding normal user behavior patterns</p>
                </div>
              </div>
              <div className="indicator-stats">
                <span className="stat-badge">128 cases</span>
                <span className="stat-percentage">62%</span>
              </div>
            </div>

            <div className="indicator-item">
              <div className="indicator-info">
                <span className="indicator-icon">🕒</span>
                <div>
                  <h4>Off-Hours Activity</h4>
                  <p>Transactions during unusual hours (12 AM - 5 AM)</p>
                </div>
              </div>
              <div className="indicator-stats">
                <span className="stat-badge">87 cases</span>
                <span className="stat-percentage">42%</span>
              </div>
            </div>

            <div className="indicator-item">
              <div className="indicator-info">
                <span className="indicator-icon">📍</span>
                <div>
                  <h4>Geographic Anomaly</h4>
                  <p>Transaction from unusual or high-risk locations</p>
                </div>
              </div>
              <div className="indicator-stats">
                <span className="stat-badge">73 cases</span>
                <span className="stat-percentage">36%</span>
              </div>
            </div>

            <div className="indicator-item">
              <div className="indicator-info">
                <span className="indicator-icon">🔄</span>
                <div>
                  <h4>Rapid Succession</h4>
                  <p>Multiple transactions in short time periods</p>
                </div>
              </div>
              <div className="indicator-stats">
                <span className="stat-badge">65 cases</span>
                <span className="stat-percentage">32%</span>
              </div>
            </div>

            <div className="indicator-item">
              <div className="indicator-info">
                <span className="indicator-icon">👤</span>
                <div>
                  <h4>New Account Activity</h4>
                  <p>High-value transactions from newly created accounts</p>
                </div>
              </div>
              <div className="indicator-stats">
                <span className="stat-badge">52 cases</span>
                <span className="stat-percentage">25%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="report-insights">
        <h2>Key Insights & Recommendations</h2>
        <div className="insights-grid">
          <div className="insight-card">
            <span className="insight-icon">💡</span>
            <h3>Peak Fraud Hours</h3>
            <p>Fraud attempts spike between 4 PM - 8 PM. Consider implementing additional verification during these hours.</p>
          </div>
          <div className="insight-card">
            <span className="insight-icon">🎯</span>
            <h3>High-Risk Transactions</h3>
            <p>Transactions over ₹20,000 show 3x higher fraud rate. Enhanced monitoring recommended.</p>
          </div>
          <div className="insight-card">
            <span className="insight-icon">📈</span>
            <h3>Detection Improvement</h3>
            <p>ML model accuracy improved by 2.1% this period. Continue training with new fraud patterns.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;