import React from 'react';

export default function EngineeringCoordinators() {
  return (
    <div style={{ fontFamily: 'sans-serif', lineHeight: 1.6, background: '#0a0a0f', color: '#e0e0e0', minHeight: '100vh', padding: '2rem' }}>
      <header style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', borderBottom: '1px solid #2a2a4a', padding: '1.5rem 2rem', margin: '-2rem -2rem 2rem -2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/users" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Overview</a>
      </header>
      <div style={{ maxWidth: '850px', margin: '0 auto' }}>
        <span style={{ display: 'inline-block', background: '#1e3a5f', color: '#60a5fa', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '20px', marginBottom: '1rem' }}>BIM & Design</span>
        <h1 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>Engineering Coordinators</h1>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Who They Are</h2>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Engineering coordinators are specialists who ensure technical alignment between design documents (plans, BIM models, specifications) and actual construction. They manage the flow of engineering information and catch technical conflicts before they become expensive problems.</p>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Responsibilities</h2>
        <ul style={{ color: '#9ca3af', margin: '0.75rem 0 1rem 1.5rem' }}>
          <li>Maintaining technical documentation and design files</li>
          <li>Coordinating between design engineers and site teams</li>
          <li>Reviewing and approving technical submittals</li>
          <li>Managing BIM/model coordination</li>
          <li>Tracking design changes and their impacts</li>
          <li>Resolving technical conflicts between trades</li>
        </ul>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Pain Points</h2>
        <ul style={{ color: '#9ca3af', margin: '0.75rem 0 1rem 1.5rem' }}>
          <li>BIM models and plans that are outdated or superseded by field changes</li>
          <li>Manually cross-referencing dozens of plan revisions against site progress</li>
          <li>Design conflicts not discovered until construction is already wrong</li>
          <li>Change orders not properly propagated to all affected teams</li>
          <li>Difficulty tracking which version of drawings is actually being used in the field</li>
          <li>Information requests from site teams that take time due to unclear context</li>
        </ul>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>How the System Helps</h2>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>As-Built vs. Designed Comparison</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>The system continuously compares what been reported as built against the current design documents. When field progress diverges from plans, it flags the variance for engineering review.</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>BIM Integration and Drift Detection</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Upload and track BIM/model versions. When site reports indicate work that conflicts with the current model, the system highlights the discrepancy—catching clashes before they become rework.</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>Change Order Impact Tracking</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>When a design change is issued, the system identifies which in-progress and planned tasks are affected, helping coordinate the response across teams.</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>Cross-Trade Technical Coordination</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>Many coordination conflicts are technical—electrical conduit routing conflicting with structural members, or HVAC placement conflicting with architectural features. The system surfaces these based on uploaded data and plan comparisons.</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem', fontWeight: 'bold' }}>Automatic Specification Checking</p>
        <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>When teams submit progress, the system can cross-reference against specifications to flag potential quality deviations.</p>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Key Workflows</h2>
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '1.25rem', margin: '1rem 0' }}>
          <strong style={{ color: '#fff' }}>Design Review and Upload</strong>
          <ol style={{ color: '#9ca3af', margin: '0.5rem 0 0.5rem 1.25rem' }}>
            <li>Upload latest approved design documents and BIM files</li>
            <li>Tag documents with affected areas, systems, and trade scopes</li>
            <li>System associates new documents with relevant project sections</li>
            <li>Previous versions are archived but accessible for comparison</li>
          </ol>
        </div>
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '1.25rem', margin: '1rem 0' }}>
          <strong style={{ color: '#fff' }}>Change Order Processing</strong>
          <ol style={{ color: '#9ca3af', margin: '0.5rem 0 0.5rem 1.25rem' }}>
            <li>Receive design change notification</li>
            <li>Review what the change affects</li>
            <li>Identify impacted tasks already in progress</li>
            <li>Issue clarification to affected teams</li>
            <li>Track acknowledgment and action</li>
          </ol>
        </div>
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '1.25rem', margin: '1rem 0' }}>
          <strong style={{ color: '#fff' }}>Clash Detection Review</strong>
          <ol style={{ color: '#9ca3af', margin: '0.5rem 0 0.5rem 1.25rem' }}>
            <li>Receive alert about potential design clash</li>
            <li>Pull up both conflicting elements in design documents</li>
            <li>Coordinate with relevant design engineers</li>
            <li>Issue resolution or escalation</li>
            <li>Update records with resolution</li>
          </ol>
        </div>
        <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '12px', padding: '1.25rem', margin: '1rem 0' }}>
          <strong style={{ color: '#fff' }}>Site Technical Query Response</strong>
          <ol style={{ color: '#9ca3af', margin: '0.5rem 0 0.5rem 1.25rem' }}>
            <li>Receive technical question from site team</li>
            <li>Review relevant design context from system</li>
            <li>Provide clarified guidance</li>
            <li>Document Q&A for future reference</li>
          </ol>
        </div>
        <h2 style={{ fontSize: '1.3rem', color: '#fff', margin: '2rem 0 0.75rem', borderLeft: '4px solid #3b82f6', paddingLeft: '0.75rem' }}>Success Metrics</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Reduced</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Design-related rework</span></div>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Faster</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Resolution of technical queries</span></div>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Earlier</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Detection of clash conflicts</span></div>
          <div style={{ background: '#111827', border: '1px solid #1f2937', borderRadius: '8px', padding: '1rem' }}><strong style={{ display: 'block', color: '#60a5fa', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Improved</strong><span style={{ color: '#6b7280', fontSize: '0.85rem' }}>Version control of design documents</span></div>
        </div>
      </div>
    </div>
  );
}