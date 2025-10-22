import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            AI-Powered Security for<br />Your UPI Transactions
          </h1>
          <p className="hero-subtitle">
            Experience next-generation fintech solutions with advanced AI algorithms 
            that protect your digital payments in real-time.
          </p>

          <div className="cta-section">
            <button className="btn-primary">Get Started</button>
            <div className="feature-badge">
              <span className="badge-icon">🔒</span>
              <span>Bank-Grade Encryption</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="section-header">
          <h2>Why Choose SecurePay?</h2>
          <p>
            Cutting-edge technology meets seamless user experience to deliver 
            the most secure payment platform.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Fraud Detection</h3>
            <p>
              Advanced machine learning algorithms analyze patterns in real-time 
              to detect and prevent fraudulent transactions before they happen.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Processing</h3>
            <p>
              Lightning-fast transaction processing ensures your payments go through 
              instantly while maintaining maximum security.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>End-to-End Encryption</h3>
            <p>
              Military-grade encryption protects your sensitive data at every step, 
              from initiation to completion of transactions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Smart Analytics</h3>
            <p>
              Comprehensive insights and detailed reports help you understand your 
              transaction patterns and spending behavior.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
