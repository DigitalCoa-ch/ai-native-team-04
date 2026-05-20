import React from 'react';
import Link from 'next/link';

const features = [
  {
    title: 'Data Ingestion',
    desc: 'Collects real-time data from photos, notes, reports, plans, BIM models, and team messages. All construction data flows into a centralized system.',
    icon: '📥',
  },
  {
    title: 'Progress Reconstruction',
    desc: 'Organizes and structures all information to build a live picture of actual site progress vs. planned schedule.',
    icon: '🔄',
  },
  {
    title: 'Cross-Team Analysis',
    desc: 'Compares updates from different teams — plumbing, electrical, structural, safety — to identify dependencies and conflicts.',
    icon: '🔗',
  },
  {
    title: 'BIM & Plan Comparison',
    desc: 'Matches real-time site progress against project plans and BIM models to detect drift from design intent.',
    icon: '📐',
  },
  {
    title: 'Coordination Error Detection',
    desc: 'Identifies missing steps, scheduling conflicts,clashes, and safety risks before they cause delays or injuries.',
    icon: '⚠️',
  },
  {
    title: 'Severity-Ranked Alerts',
    desc: 'Ranks issues by severity from low to critical and routes notifications to the responsible teams in real time.',
    icon: '🚨',
  },
];

export default function HowItWorks() {
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
        <span style={{ color: '#60a5fa', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>How It Works</span>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '0.75rem' }}>How Site Sense Works</h1>
          <p style={{ color: '#888', fontSize: '1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            A real-time construction monitoring system that aggregates fragmented site data, detects coordination problems early, and keeps all teams aligned.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: '#111827',
              border: '1px solid #1f2937',
              borderRadius: '12px',
              padding: '1.5rem',
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{f.icon}</div>
              <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.05rem' }}>{f.title}</h3>
              <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.5 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '3rem',
          background: '#111827',
          border: '1px solid #1f2937',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6 }}>
            The system continuously monitors, cross-references, and compares every site update — alerting teams to problems before they become expensive mistakes.
          </p>
          <Link href="/users" style={{
            display: 'inline-block',
            marginTop: '1.5rem',
            padding: '0.75rem 2rem',
            background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.9rem',
            borderRadius: '8px',
          }}>
            Explore User Roles →
          </Link>
        </div>
      </div>
    </div>
  );
}