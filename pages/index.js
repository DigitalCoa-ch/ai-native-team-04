import React from 'react';
import Link from 'next/link';

const users = [
  { name: 'Site Managers', href: '/site-managers', desc: 'Senior on-site leaders who need holistic project visibility and critical alert prioritization.', tag: 'Executive Dashboard' },
  { name: 'Project Supervisors', href: '/project-supervisors', desc: 'Day-to-day coordinators managing multiple work areas and cross-team coordination.', tag: 'Progress Tracking' },
  { name: 'Construction Foremen', href: '/construction-foremen', desc: 'Trade team leaders who need simplified updates and early blocker warnings.', tag: 'Mobile Interface' },
  { name: 'Engineering Coordinators', href: '/engineering-coordinators', desc: 'Technical specialists ensuring design alignment and detecting clashes.', tag: 'BIM & Design' },
];

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', overflow: 'hidden', background: '#0a0a0f' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)', zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '2rem', maxWidth: '900px' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 0.5rem 0' }}>
          AI Construction<br />
          <span style={{ color: '#60a5fa' }}>Monitoring System</span>
        </h1>
        <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#888', marginBottom: '2.5rem', letterSpacing: '0.05em' }}>
          Real-time coordination error detection for large-scale construction projects
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', width: '100%' }}>
          {users.map(u => (
            <Link key={u.href} href={u.href} style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '1.5rem', textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s', display: 'block' }}>
              <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{u.name}</h3>
              <p style={{ color: '#888', fontSize: '0.85rem', margin: '0 0 0.75rem 0' }}>{u.desc}</p>
              <span style={{ display: 'inline-block', background: '#1e3a5f', color: '#60a5fa', fontSize: '0.7rem', padding: '0.2rem 0.6rem', borderRadius: '20px' }}>{u.tag}</span>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #1f2937' }}>
          <p style={{ color: '#666', fontSize: '0.85rem', maxWidth: '600px', margin: '0 auto' }}>
            Analyzes all construction data in real time and reconstructs the actual progress of the site. Detects errors, missing information, and coordination conflicts across different teams (plumbing, electrical, structure, safety) and sends alerts ranked by severity.
          </p>
          <p style={{ color: '#444', fontSize: '0.75rem', marginTop: '1rem' }}>
            Human-in-the-Loop: AI detects and generates alerts. Site managers review and verify. Humans make final decisions.
          </p>
        </div>
      </div>
      <style>{`a:hover { transform: translateY(-4px); border-color: #3b82f6; box-shadow: 0 8px 30px rgba(59, 130, 246, 0.15); }`}</style>
    </div>
  );
}