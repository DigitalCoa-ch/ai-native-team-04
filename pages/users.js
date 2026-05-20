import React from 'react';
import Link from 'next/link';

const users = [
  { name: 'Site Managers', href: '/users/site-managers', desc: 'Senior on-site leaders who need holistic project visibility and critical alert prioritization.', tag: 'Executive Dashboard' },
  { name: 'Project Supervisors', href: '/users/project-supervisors', desc: 'Day-to-day coordinators managing multiple work areas and cross-team coordination.', tag: 'Progress Tracking' },
  { name: 'Construction Foremen', href: '/users/construction-foremen', desc: 'Trade team leaders who need simplified updates and early blocker warnings.', tag: 'Mobile Interface' },
  { name: 'Engineering Coordinators', href: '/users/engineering-coordinators', desc: 'Technical specialists ensuring design alignment and detecting clashes.', tag: 'BIM & Design' },
];

export default function Users() {
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
        <span style={{ color: '#60a5fa', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Intended Users
        </span>
      </header>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.75rem' }}>Who Is This For?</h1>
          <p style={{ color: '#888', fontSize: '1rem', maxWidth: '550px', margin: '0 auto', lineHeight: 1.6 }}>
            Designed for construction professionals who need real-time visibility into complex projects and early detection of coordination problems.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {users.map(u => (
            <Link key={u.href} href={u.href} style={{
              background: '#111827',
              border: '1px solid #1f2937',
              borderRadius: '12px',
              padding: '1.5rem',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
              display: 'block',
            }}>
              <h3 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{u.name}</h3>
              <p style={{ color: '#888', fontSize: '0.85rem', margin: '0 0 0.75rem 0', lineHeight: 1.5 }}>{u.desc}</p>
              <span style={{
                display: 'inline-block',
                background: '#1e3a5f',
                color: '#60a5fa',
                fontSize: '0.7rem',
                padding: '0.2rem 0.6rem',
                borderRadius: '20px',
              }}>{u.tag}</span>
            </Link>
          ))}
        </div>

        <div style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid #1f2937',
          textAlign: 'center',
        }}>
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