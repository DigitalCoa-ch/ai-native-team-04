import React from 'react';

export default function SiteManagers() {
  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6, background: '#0a0a0f', color: '#e0e0e0', minHeight: '100vh', padding: '2rem' }}>
      <header style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', borderBottom: '1px solid #2a2a4a', padding: '1.5rem 2rem', margin: '-2rem -2rem 2rem -2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/users" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Overview</a>
      </header>
      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        <span style={{ display: 'inline-block', background: '#1e3a5f', color: '#60a5fa', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '20px', marginBottom: '1rem' }}>Executive Dashboard</span>
        <h1 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>Site Managers</h1>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Who They Are</h2>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Site managers are the senior on-the-ground leaders responsible for an entire construction project or a major section of one. They oversee all operations, manage budgets, timelines, and are ultimately accountable for safety and quality.</p>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Responsibilities</h2>
        <ul style={{ color: '#9ca3af', margin: '0.75rem 0 1rem 1.5rem' }}>
          <li>Overall project delivery on time and within budget</li>
          <li>Coordinating multiple teams simultaneously</li>
          <li>Risk management and issue resolution</li>
          <li>Reporting to project owners and stakeholders</li>
          <li>Ensuring compliance with safety regulations</li>
          <li>Resource allocation and scheduling</li>
        </ul>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Pain Points</h2>
        <ul style={{ color: '#9ca3af', margin: '0.75rem 0 1rem 1.5rem' }}>
          <li>Cannot be everywhere at once across large sites</li>
          <li>Relying on fragmented reports from multiple foremen</li>
          <li>Discovering coordination errors too late—when they have already caused delays or cost overruns</li>
          <li>Spending excessive time in meetings reconciling conflicting status updates</li>
          <li>Missing critical safety issues buried in daily reports</li>
          <li>Difficulty getting a real-time holistic view of project status</li>
        </ul>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>How the System Helps</h2>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>Real-Time Project Overview</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Instead of waiting for end-of-day reports, site managers see the live state of the entire project. Progress on all teams is consolidated into a single view—no more cross-referencing dozens of separate updates.</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>AI-Prioritized Alerting</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>The system ranks issues by severity (low to critical) and routes them to the right person. Critical safety risks and major coordination conflicts surface immediately.</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>Early Error Detection</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>The AI cross-references progress across teams and against project plans. When electrical work conflicts with structural changes, the system catches it before it becomes a costly problem.</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>Decision-Ready Reporting</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Generate status reports for stakeholders directly from system data. No need to manually aggregate information from different teams.</p>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Key Workflows</h2>
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '1.25rem', margin: '1rem 0' }}>
          <strong style={{ color: '#fff' }}>Morning Standup</strong>
          <ol style={{ color: '#9ca3af', margin: '0.5rem 0 0.5rem 1.25rem' }}>
            <li>Review the dashboard for overnight activity and alerts</li>
            <li>Check progress vs. plan for each team</li>
            <li>Identify any items requiring immediate attention</li>
          </ol>
        </div>
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '1.25rem', margin: '1rem 0' }}>
          <strong style={{ color: '#fff' }}>Alert Review & Action</strong>
          <ol style={{ color: '#9ca3af', margin: '0.5rem 0 0.5rem 1.25rem' }}>
            <li>Receive critical alert notification</li>
            <li>Review AI-detected issue details and context</li>
            <li>Validate or dismiss the alert</li>
            <li>Assign corrective action to relevant team</li>
          </ol>
        </div>
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '1.25rem', margin: '1rem 0' }}>
          <strong style={{ color: '#fff' }}>Weekly Progress Review</strong>
          <ol style={{ color: '#9ca3af', margin: '0.5rem 0 0.5rem 1.25rem' }}>
            <li>Export consolidated progress report</li>
            <li>Compare actual vs. planned timeline</li>
            <li>Identify trends and predict risks</li>
            <li>Adjust resource allocation as needed</li>
          </ol>
        </div>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Success Metrics</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Reduced</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Time spent on status reconciliation</span></div>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Fewer</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Last-minute coordination firefights</span></div>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Earlier</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Detection of issues before they cause delays</span></div>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Improved</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Stakeholder reporting efficiency</span></div>
        </div>
      </div>
    </div>
  );
}
