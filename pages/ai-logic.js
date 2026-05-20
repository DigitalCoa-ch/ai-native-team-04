import React from 'react';
import Link from 'next/link';

const steps = [
  {
    step: '01',
    title: 'Collect',
    desc: 'Photos, notes, reports, plans, BIM files, and team messages are uploaded and ingested in real time.',
  },
  {
    step: '02',
    title: 'Organize',
    desc: 'All data is structured and normalized — tagged by location, trade, team, time, and system type.',
  },
  {
    step: '03',
    title: 'Cross-Reference',
    desc: 'Updates from different teams are compared against each other and against the project plan.',
  },
  {
    step: '04',
    title: 'Detect',
    desc: 'The AI identifies coordination errors, missing steps, conflicts, clashing systems, and safety risks.',
  },
  {
    step: '05',
    title: 'Alert',
    desc: 'Issues are ranked by severity and routed to the responsible team with the context they need to act.',
  },
  {
    step: '06',
    title: 'Human Review',
    desc: 'Site managers and supervisors validate critical alerts and make final decisions before action is taken.',
  },
];

export default function AiLogic() {
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
        <span style={{ color: '#60a5fa', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>AI Logic</span>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '0.75rem' }}>The AI Logic</h1>
          <p style={{ color: '#888', fontSize: '1rem', maxWidth: '550px', margin: '0 auto', lineHeight: 1.6 }}>
            Six-step process from raw site data to actionable alerts — with human oversight at every critical decision.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              background: '#111827',
              border: '1px solid #1f2937',
              borderRadius: '12px',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start',
            }}>
              <div style={{
                fontSize: '1.5rem',
                fontWeight: 900,
                color: '#3b82f6',
                minWidth: '50px',
                lineHeight: 1,
              }}>{s.step}</div>
              <div>
                <h3 style={{ color: '#fff', marginBottom: '0.3rem', fontSize: '1rem' }}>{s.title}</h3>
                <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '3rem',
          background: 'linear-gradient(135deg, #1e3a5f, #16213e)',
          border: '1px solid #2a4a7f',
          borderRadius: '12px',
          padding: '1.5rem',
          textAlign: 'center',
        }}>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.6 }}>
            <strong style={{ color: '#60a5fa' }}>Human-in-the-Loop:</strong> The AI detects and flags issues. Humans review, validate, and decide on corrective actions before anything is acted on.
          </p>
        </div>
      </div>
    </div>
  );
}