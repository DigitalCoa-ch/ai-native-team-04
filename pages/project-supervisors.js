import React from 'react';

export default function ProjectSupervisors() {
  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6, background: '#0a0a0f', color: '#e0e0e0', minHeight: '100vh', padding: '2rem' }}>
      <header style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', borderBottom: '1px solid #2a2a4a', padding: '1.5rem 2rem', margin: '-2rem -2rem 2rem -2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Overview</a>
      </header>
      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        <span style={{ display: 'inline-block', background: '#1e3a5f', color: '#60a5fa', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '20px', marginBottom: '1rem' }}>Progress Tracking</span>
        <h1 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>Project Supervisors</h1>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Who They Are</h2>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Project supervisors act as the bridge between site management and field operations. They monitor day-to-day progress across multiple work fronts, ensure work aligns with plans and schedules, and coordinate between different trades and teams.</p>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Responsibilities</h2>
        <ul style={{ color: '#9ca3af', margin: '0.75rem 0 1rem 1.5rem' }}>
          <li>Monitoring progress across multiple work areas simultaneously</li>
          <li>Ensuring work follows the project schedule</li>
          <li>Coordinating between different trades and teams</li>
          <li>Quality assurance and defect tracking</li>
          <li>Progress reporting to site management</li>
          <li>Managing sub-contractor performance</li>
        </ul>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Pain Points</h2>
        <ul style={{ color: '#9ca3af', margin: '0.75rem 0 1rem 1.5rem' }}>
          <li>Juggling updates from multiple teams across different tools and channels</li>
          <li>Manually cross-referencing photos, notes, and reports to verify progress</li>
          <li>Difficulty identifying which small issues will snowball into big problems</li>
          <li>Tracking which tasks are truly complete vs. partially done</li>
          <li>Communicating schedule impacts to site managers accurately</li>
          <li>Managing change orders and detecting when work deviates from plans</li>
        </ul>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>How the System Helps</h2>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>Unified Progress View</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>All team updates—photos, notes, reports—flow into a single structured view. Supervisors see what was done, by whom, and when, without chasing down individual team leads.</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>Cross-Team Coordination Detection</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>The AI identifies when progress from one team creates conflicts or dependencies for another. When structural team completes work that blocks the planned electrical route, the system flags it before electrical team wastes time on impossible work.</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>Progress vs. Plan Comparison</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Rather than manually comparing updates against schedules, the system continuously evaluates actual progress against the project plan and highlights variances.</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>Automated Progress Tracking</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Work completion is inferred from uploaded data (photos showing completed work, completion notes, report confirmations), reducing the need for manual status collection.</p>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Key Workflows</h2>
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '1.25rem', margin: '1rem 0' }}>
          <strong style={{ color: '#fff' }}>Multi-Team Monitoring</strong>
          <ol style={{ color: '#9ca3af', margin: '0.5rem 0 0.5rem 1.25rem' }}>
            <li>Open unified dashboard view</li>
            <li>Scan progress status across all assigned work areas</li>
            <li>Drill into any area showing unexpected status</li>
            <li>Flag issues or escalate to site manager</li>
          </ol>
        </div>
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '1.25rem', margin: '1rem 0' }}>
          <strong style={{ color: '#fff' }}>Coordination Conflict Resolution</strong>
          <ol style={{ color: '#9ca3af', margin: '0.5rem 0 0.5rem 1.25rem' }}>
            <li>Receive cross-team conflict alert</li>
            <li>Review what each team has reported</li>
            <li>Determine which team has accurate/priority status</li>
            <li>Coordinate correction with affected team leads</li>
            <li>Confirm resolution in system</li>
          </ol>
        </div>
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '1.25rem', margin: '1rem 0' }}>
          <strong style={{ color: '#fff' }}>Daily Wrap-Up</strong>
          <ol style={{ color: '#9ca3af', margin: '0.5rem 0 0.5rem 1.25rem' }}>
            <li>Review all team updates from the day</li>
            <li>Identify any incomplete tasks that need follow-up</li>
            <li>Prepare summary for site manager</li>
            <li>Log any change order requests</li>
          </ol>
        </div>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Success Metrics</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Reduced</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Time chasing status updates from teams</span></div>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Earlier</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Identification of schedule impacts</span></div>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Fewer</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Coordination conflicts between trades</span></div>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>More Accurate</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Daily and weekly progress reports</span></div>
        </div>
      </div>
    </div>
  );
}