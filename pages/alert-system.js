import React from 'react';
import Link from 'next/link';

const levels = [
  {
    level: 'Low',
    color: '#22c55e',
    bg: '#052e16',
    desc: 'Informational. Minor deviations from plan or schedule. No immediate action required but worth monitoring.',
    examples: ['Task running slightly behind schedule', 'Non-critical material delay', 'Routine quality observation'],
  },
  {
    level: 'Medium',
    color: '#eab308',
    bg: '#2d1f00',
    desc: 'Attention needed. Coordination issue or variance that could become a problem if ignored.',
    examples: ['Electrical routing changed without update', 'Task dependent on incomplete prior work', 'Quality deviation from spec'],
  },
  {
    level: 'High',
    color: '#f97316',
    bg: '#2d1200',
    desc: 'Urgent. Active coordination conflict or risk that needs prompt resolution.',
    examples: ['Plumbing conflict with structural modification', 'Safety protocol not followed', 'Change order not propagated to team'],
  },
  {
    level: 'Critical',
    color: '#ef4444',
    bg: '#2d0a0a',
    desc: 'Immediate action required. Safety risk, major coordination failure, or issue causing significant project impact.',
    examples: ['Electrical work done on wrong floor', 'Structural issue compromising safety', 'Critical path task blocked by unresolved conflict'],
  },
];

export default function AlertSystem() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'sans-serif', background: '#0a0a0f', color: '#e0e0e0' }}>
      <header style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        borderBottom: '1px solid #2a2a4a',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link href="/" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>← Home</Link>
        <span style={{ color: '#60a5fa', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Alert System</span>
      </header>

      <div style={{ maxWidth: '850px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '0.75rem' }}>Severity Alert System</h1>
          <p style={{ color: '#888', fontSize: '1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Every detected issue is ranked by severity and routed to the responsible team. Critical alerts require human validation before action is taken.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {levels.map((l, i) => (
            <div key={i} style={{
              background: l.bg,
              border: `1px solid ${l.color}33`,
              borderRadius: '12px',
              padding: '1.5rem',
              borderLeft: `4px solid ${l.color}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: l.color,
                  background: `${l.color}20`,
                  padding: '0.2rem 0.75rem',
                  borderRadius: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>{l.level}</span>
              </div>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.5 }}>{l.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <span style={{ color: '#6b7280', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Examples</span>
                {l.examples.map((ex, j) => (
                  <span key={j} style={{ color: '#6b7280', fontSize: '0.8rem' }}>• {ex}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '2.5rem',
          background: '#111827',
          border: '1px solid #1f2937',
          borderRadius: '12px',
          padding: '1.5rem',
          textAlign: 'center',
        }}>
          <p style={{ color: '#666', fontSize: '0.85rem' }}>
            Alerts are sent to the responsible team immediately. Critical alerts are escalated to site management until acknowledged.
          </p>
        </div>
      </div>
    </div>
  );
}