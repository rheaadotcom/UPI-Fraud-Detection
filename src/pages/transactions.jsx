import React, { useState } from 'react';
import './transactions.css';

function Transactions() {
  // Mock data - later we'll replace this with API calls
  const [transactions] = useState([
    { 
      id: 'TXN001', 
      upiId: 'user123@paytm', 
      amount: 500, 
      status: 'safe', 
      time: '2025-10-20 10:30:00',
      receiver: 'merchant@paytm'
    },
    { 
      id: 'TXN002', 
      upiId: 'suspect@gpay', 
      amount: 15000, 
      status: 'suspicious', 
      time: '2025-10-20 10:45:00',
      receiver: 'unknown@phonepe'
    },
    { 
      id: 'TXN003', 
      upiId: 'normal@phonepe', 
      amount: 250, 
      status: 'safe', 
      time: '2025-10-20 11:00:00',
      receiver: 'shop@paytm'
    },
    { 
      id: 'TXN004', 
      upiId: 'fraud@gpay', 
      amount: 50000, 
      status: 'fraud', 
      time: '2025-10-20 11:15:00',
      receiver: 'scammer@phonepe'
    },
    { 
      id: 'TXN005', 
      upiId: 'customer@upi', 
      amount: 1200, 
      status: 'safe', 
      time: '2025-10-20 11:30:00',
      receiver: 'grocery@paytm'
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Filter transactions
  const filteredTransactions = transactions.filter(tx => {
    const matchesSearch = tx.upiId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tx.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || tx.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'safe': return '#10b981';
      case 'suspicious': return '#f59e0b';
      case 'fraud': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div className="transactions">
      <div className="page-header">
        <h1>Transactions</h1>
        <p>Monitor and analyze all UPI transactions</p>
      </div>
      
      <div className="filters">
        <input 
          type="text" 
          placeholder="Search by UPI ID or Transaction ID..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select 
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="status-filter"
        >
          <option value="all">All Status</option>
          <option value="safe">Safe</option>
          <option value="suspicious">Suspicious</option>
          <option value="fraud">Fraud</option>
        </select>
      </div>

      <div className="transactions-stats">
        <div className="stat-item">
          <span className="stat-label">Total</span>
          <span className="stat-value">{filteredTransactions.length}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Safe</span>
          <span className="stat-value" style={{color: '#10b981'}}>
            {filteredTransactions.filter(t => t.status === 'safe').length}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Suspicious</span>
          <span className="stat-value" style={{color: '#f59e0b'}}>
            {filteredTransactions.filter(t => t.status === 'suspicious').length}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Fraud</span>
          <span className="stat-value" style={{color: '#ef4444'}}>
            {filteredTransactions.filter(t => t.status === 'fraud').length}
          </span>
        </div>
      </div>

      <div className="table-container">
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>UPI ID</th>
              <th>Receiver</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map(tx => (
                <tr key={tx.id}>
                  <td className="tx-id">{tx.id}</td>
                  <td>{tx.upiId}</td>
                  <td>{tx.receiver}</td>
                  <td className="amount">₹{tx.amount.toLocaleString()}</td>
                  <td>
                    <span 
                      className="status-badge" 
                      style={{
                        backgroundColor: `${getStatusColor(tx.status)}20`,
                        color: getStatusColor(tx.status),
                        border: `1px solid ${getStatusColor(tx.status)}`
                      }}
                    >
                      {tx.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="time">{new Date(tx.time).toLocaleString()}</td>
                  <td>
                    <button className="btn-view">View Details</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{textAlign: 'center', padding: '2rem'}}>
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;