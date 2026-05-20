import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      overflow: 'hidden',
      background: '#0a0a0f',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)',
        zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '2rem', maxWidth: '800px' }}>
        <p style={{
          fontSize: '0.8rem',
          color: '#60a5fa',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          marginBottom: '1rem',
        }}>
          AI-Powered Construction Intelligence
        </p>

        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          fontWeight: 900,
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.03em',
          margin: '0 0 0.5rem 0',
          lineHeight: 1.1,
        }}>
          AI Construction<br />
          <span style={{ color: '#60a5fa' }}>Monitoring System</span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          color: '#9ca3af',
          marginBottom: '2.5rem',
          maxWidth: '550px',
          margin: '1.5rem auto 2.5rem',
          lineHeight: 1.6,
        }}>
          Real-time coordination error detection for large-scale construction projects. Cross-references updates from all teams, detects conflicts early, and alerts the right people before small mistakes become big problems.
        </p>

        <Link href="/users" style={{
          display: 'inline-block',
          padding: '1rem 2.5rem',
          background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '1rem',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          border: '2px solid rgba(96, 165, 250, 0.3)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}>
          View User Roles
        </Link>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: 0,
        right: 0,
        textAlign: 'center',
        zIndex: 2,
      }}>
        <p style={{ color: '#4b5563', fontSize: '0.75rem' }}>
          Human-in-the-Loop — AI detects, humans decide
        </p>
      </div>

      <style>{`a:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(59, 130, 246, 0.6); }`}</style>
    </div>
  );
}