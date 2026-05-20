import React from 'react';

export default function ConstructionForemen() {
  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6, background: '#0a0a0f', color: '#e0e0e0', minHeight: '100vh', padding: '2rem' }}>
      <header style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', borderBottom: '1px solid #2a2a4a', padding: '1.5rem 2rem', margin: '-2rem -2rem 2rem -2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Overview</a>
      </header>
      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        <span style={{ display: 'inline-block', background: '#1e3a5f', color: '#60a5fa', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '20px', marginBottom: '1rem' }}>Mobile Interface</span>
        <h1 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>Construction Foremen</h1>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Who They Are</h2>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Foremen are the front-line leaders of individual trade teams—plumbers, electricians, structural workers, safety officers. They directly manage crews, assign tasks, and are responsible for the day-to-day execution of work on the ground.</p>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Responsibilities</h2>
        <ul style={{ color: '#9ca3af', margin: '0.75rem 0 1rem 1.5rem' }}>
          <li>Assigning and overseeing daily tasks for crew members</li>
          <li>Ensuring work is completed safely and to specification</li>
          <li>Reporting progress up the chain</li>
          <li>Coordinating with adjacent trades on shared work areas</li>
          <li>Identifying and escalating issues immediately</li>
          <li>Maintaining quality standards on their trade work</li>
        </ul>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Pain Points</h2>
        <ul style={{ color: '#9ca3af', margin: '0.75rem 0 1rem 1.5rem' }}>
          <li>Spending time writing reports instead of managing crew</li>
          <li>Being asked about status by supervisors multiple times per day</li>
          <li>Discovering that another trade work has blocked or damaged their planned work</li>
          <li>Finding out too late that materials or info they needed were not provided</li>
          <li>Safety issues reported through informal channels and getting lost</li>
          <li>No visibility into what other trades are doing in shared spaces</li>
        </ul>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>How the System Helps</h2>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>Simplified Progress Updates</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Instead of formal written reports, foremen can upload photos with brief notes. The AI processes these and updates the project progress view automatically—less paperwork, same information flow.</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>Early Warning of Blockers</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>When another trade completes work that affects a foreman planned tasks, the system alerts them. Structural team finishes a ceiling frame and mechanical route is now clear—or blocked.</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>Clear Task Assignments</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>The system surfaces assigned tasks and their status. Foremen can see at a glance what their team should be working on and what has been completed.</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>Direct Escalation Path</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Safety concerns and critical issues can be reported directly through the system and routed immediately to the right people—no more lost phone calls or messages.</p>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Key Workflows</h2>
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '1.25rem', margin: '1rem 0' }}>
          <strong style={{ color: '#fff' }}>Morning Task Briefing</strong>
          <ol style={{ color: '#9ca3af', margin: '0.5rem 0 0.5rem 1.25rem' }}>
            <li>Check assigned tasks and their current status</li>
            <li>Review any alerts related to today work</li>
            <li>Confirm materials and info availability for planned tasks</li>
          </ol>
        </div>
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '1.25rem', margin: '1rem 0' }}>
          <strong style={{ color: '#fff' }}>Progress Reporting</strong>
          <ol style={{ color: '#9ca3af', margin: '0.5rem 0 0.5rem 1.25rem' }}>
            <li>Take photos of completed work</li>
            <li>Add brief note describing what was done</li>
            <li>Submit through mobile interface</li>
            <li>Receive confirmation and any new alerts triggered</li>
          </ol>
        </div>
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '1.25rem', margin: '1rem 0' }}>
          <strong style={{ color: '#fff' }}>Issue Escalation</strong>
          <ol style={{ color: '#9ca3af', margin: '0.5rem 0 0.5rem 1.25rem' }}>
            <li>Document issue with photo and description</li>
            <li>Submit through system with severity assessment</li>
            <li>Track escalation status and responses</li>
          </ol>
        </div>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Success Metrics</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Less Time</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Spent on administrative reporting</span></div>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Faster</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Resolution of blocking issues</span></div>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Reduced</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Rework from coordination failures</span></div>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Clearer</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Communication with supervisors</span></div>
        </div>
      </div>
    </div>
  );
}
