import React from 'react';
import Link from 'next/link';

const principles = [
  {
    title: 'AI Detects',
    desc: 'The AI continuously monitors all site data and flags coordination issues, conflicts, and risks as they appear.',
    icon: '🔍',
  },
  {
    title: 'AI Generates Alerts',
    desc: 'Detected issues are packaged into ranked, contextual alerts with enough information for a human to make a decision.',
    icon: '📨',
  },
  {
    title: 'Site Managers Validate',
    desc: 'Critical and high-severity alerts are reviewed by site managers before any action is taken. The AI recommends; humans decide.',
    icon: '👷',
  },
  {
    title: 'Corrective Action',
    desc: 'Validated alerts result in assigned corrective actions with ownership and deadlines. The system tracks resolution.',
    icon: '✅',
  },
  {
    title: 'No Blind Automation',
    desc: 'No safety-critical or high-impact action is taken automatically. Every critical alert requires human acknowledgment.',
    icon: '🛑',
  },
  {
    title: 'Trust Through Transparency',
    desc: 'Every AI-generated alert shows its source data and reasoning. Site managers can verify before acting.',
    icon: '🔗',
  },
];

export default function HumanInTheLoop() {
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
        <span style={{ color: '#60a5fa', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Human-in-the-Loop</span>
      </header>

      <div style={{ maxWidth: '850px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '0.75rem' }}>Human-in-the-Loop</h1>
          <p style={{ color: '#888', fontSize: '1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Site Sense uses a High Control model. The AI detects and flags. Humans review and decide. This prevents false alarms and ensures safety and trust.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
          {principles.map((p, i) => (
            <div key={i} style={{
              background: '#111827',
              border: '1px solid #1f2937',
              borderRadius: '12px',
              padding: '1.5rem',
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{p.icon}</div>
              <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1rem' }}>{p.title}</h3>
              <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.5 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '2.5rem',
          background: 'linear-gradient(135deg, #1e3a5f, #16213e)',
          border: '1px solid #2a4a7f',
          borderRadius: '12px',
          padding: '1.5rem',
          textAlign: 'center',
        }}>
          <p style={{ color: '#9ca3af', fontSize: '0.95rem', lineHeight: 1.6 }}>
            <strong style={{ color: '#60a5fa' }}>Why it matters:</strong> Construction sites are high-stakes environments. Relying solely on AI without human oversight could lead to missed context, ignored edge cases, or trust issues. Site Sense keeps humans in control at every critical step.
          </p>
        </div>
      </div>
    </div>
  );
}