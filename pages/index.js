import React from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/alerts', label: 'Alert Center', desc: 'Live alert dashboard — click to use' },
  { href: '/how-it-works', label: 'How It Works', desc: 'See how data flows from input to alert' },
  { href: '/ai-logic', label: 'AI Logic', desc: 'The six-step detection process' },
  { href: '/alert-system', label: 'Alert System', desc: 'Severity levels from low to critical' },
  { href: '/human-in-the-loop', label: 'Human-in-the-Loop', desc: 'High control model explained' },
  { href: '/users', label: 'User Roles', desc: 'Who uses the system and how' },
];

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
        backgroundImage: "url(/site-bg.jpg)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.5) saturate(1.1)',
        zIndex: 0,
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(10,10,15,0.75) 0%, rgba(26,26,46,0.6) 50%, rgba(10,10,15,0.85) 100%)',
        zIndex: 1,
      }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '2rem', maxWidth: '900px' }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          fontWeight: 900,
          color: '#ffffff',
          textTransform: 'uppercase',
          letterSpacing: '0.03em',
          margin: '0 0 0.5rem 0',
          lineHeight: 1.1,
        }}>
          <span style={{ color: '#ffffff' }}>Site Sense</span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          color: '#9ca3af',
          margin: '1.5rem auto 3rem',
          maxWidth: '550px',
          lineHeight: 1.6,
        }}>
          Real-time construction monitoring. Aggregates fragmented site data, detects coordination errors, and alerts the right people before small mistakes become big problems.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '400px', margin: '0 auto' }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} style={{
              display: 'block',
              padding: '0.75rem 1.5rem',
              background: 'rgba(17, 24, 39, 0.8)',
              border: '1px solid #1f2937',
              borderRadius: '8px',
              color: '#e0e0e0',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
              transition: 'border-color 0.2s, background 0.2s',
              backdropFilter: 'blur(8px)',
            }}>
              {link.label}
            </Link>
          ))}
        </div>
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

      <style>{`a:hover { border-color: #3b82f6; background: rgba(30, 58, 95, 0.8) !important; }`}</style>
    </div>
  );
}