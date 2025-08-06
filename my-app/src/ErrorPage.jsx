import React from 'react';

function ErrorPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f8f9fa'
    }}>
      
      {/* SVG illustration */}
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ marginBottom: 24 }}>
        <circle cx="60" cy="60" r="56" stroke="#dc3545" strokeWidth="8" fill="#fff3f4" />
        <line x1="45" y1="45" x2="75" y2="75" stroke="#dc3545" strokeWidth="6" strokeLinecap="round" />
        <line x1="75" y1="45" x2="45" y2="75" stroke="#dc3545" strokeWidth="6" strokeLinecap="round" />
      </svg>

      <h1 style={{ fontSize: '2.5rem', color: '#dc3545', margin: 0 }}>
        Something Went Wrong
      </h1>

      <h2 style={{ color: '#343a40', margin: '16px 0 8px', fontSize: '1.25rem' }}>
        We're sorry for the inconvenience.
      </h2>

      <p style={{ color: '#6c757d', marginBottom: 24, textAlign: 'center', maxWidth: 320 }}>
        An unexpected error has occurred. Please try refreshing the page, or go back to the homepage.
      </p>

      <a href="/" style={{
        padding: '10px 24px',
        background: '#007bff',
        color: '#fff',
        borderRadius: 4,
        textDecoration: 'none'
      }}>
        Go Home
      </a>
    </div>
  );
}

export default ErrorPage;
