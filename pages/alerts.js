import React, { useState } from 'react';
import Link from 'next/link';

const initialAlerts = [
  {
    id: 1,
    severity: 'critical',
    team: 'Electrical',
    location: 'Floor 12 — Zone B',
    title: 'Electrical conduit routed through structural beam',
    desc: 'Electrical team has routed conduit through the main structural beam on Floor 12, Zone B. This compromises structural integrity and violates code. Immediate review required.',
    time: '2 min ago',
    status: 'pending',
    assigned: 'Carlos M.',
  },
  {
    id: 2,
    severity: 'high',
    team: 'Plumbing',
    location: 'Floor 8 — Zone A',
    title: 'Plumbing conflict with planned HVAC routing',
    desc: 'Plumbing update shows pipe routing that directly conflicts with HVAC duct planned for the same ceiling space. If both proceed, one will need to be redone.',
    time: '14 min ago',
    status: 'pending',
    assigned: 'Unassigned',
  },
  {
    id: 3,
    severity: 'high',
    team: 'Safety',
    location: 'Ground Level — East Entrance',
    title: 'Scaffolding inspection overdue by 3 days',
    desc: 'Safety officer note indicates scaffolding at the east entrance has not been inspected in 3 days past the scheduled date. Workers are actively using it.',
    time: '31 min ago',
    status: 'pending',
    assigned: 'Maria S.',
  },
  {
    id: 4,
    severity: 'medium',
    team: 'Structural',
    location: 'Floor 6 — Zone C',
    title: 'Concrete pour completed without formwork sign-off',
    desc: 'Structural team completed a concrete pour on Floor 6, Zone C. However, the formwork sign-off from the engineering coordinator is missing from the system.',
    time: '1 hr ago',
    status: 'pending',
    assigned: 'Unassigned',
  },
  {
    id: 5,
    severity: 'medium',
    team: 'HVAC',
    location: 'Floor 9 — Mechanical Room',
    title: 'Duct installation missing fire damper specification',
    desc: 'HVAC team installed ducts in the mechanical room but the submitted photos do not show fire dampers at the required locations per the spec.',
    time: '2 hr ago',
    status: 'pending',
    assigned: 'Tom R.',
  },
  {
    id: 6,
    severity: 'low',
    team: 'Plumbing',
    location: 'Floor 5 — Zone D',
    title: 'Copper pipe joint type differs from specification',
    desc: 'Note indicates copper pipe joints on Floor 5 were assembled using compression fittings rather than the specified soldered joints. May affect longevity.',
    time: '3 hr ago',
    status: 'resolved',
    assigned: 'James K.',
  },
  {
    id: 7,
    severity: 'low',
    team: 'Electrical',
    location: 'Basement — Panel Room',
    title: 'Panel labeling incomplete on sub-board B2',
    desc: 'Electrical sub-panel B2 in the basement is operational but labels are not yet applied. Low priority but should be completed before final inspection.',
    time: '5 hr ago',
    status: 'resolved',
    assigned: 'Carlos M.',
  },
];

const severityConfig = {
  critical: { label: 'Critical', color: '#ef4444', bg: '#2d0a0a' },
  high: { label: 'High', color: '#f97316', bg: '#2d1200' },
  medium: { label: 'Medium', color: '#eab308', bg: '#2d1f00' },
  low: { label: 'Low', color: '#22c55e', bg: '#052e16' },
};

export default function AlertSystem() {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [filter, setFilter] = useState('all');
  const [selectedAlert, setSelectedAlert] = useState(null);

  const filtered = alerts.filter(a => filter === 'all' ? true : a.severity === filter);
  const pending = alerts.filter(a => a.status === 'pending');
  const counts = { all: alerts.length, critical: alerts.filter(a => a.severity === 'critical').length, high: alerts.filter(a => a.severity === 'high').length, medium: alerts.filter(a => a.severity === 'medium').length, low: alerts.filter(a => a.severity === 'low').length };

  const handleAction = (id, action) => {
    setAlerts(prev => prev.map(a => {
      if (a.id !== id) return a;
      if (action === 'resolve') return { ...a, status: 'resolved' };
      if (action === 'dismiss') return { ...a, status: 'dismissed' };
      return a;
    }));
    setSelectedAlert(null);
  };

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'sans-serif', background: '#0a0a0f', color: '#e0e0e0' }}>
      <header style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        borderBottom: '1px solid #2a2a4a',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <Link href="/" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>← Home</Link>
        <span style={{ color: '#60a5fa', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Alert Center</span>
        <span style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 700 }}>{pending.length} Pending</span>
      </header>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '1.5rem 2rem' }}>
        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {Object.entries(severityConfig).map(([key, cfg]) => (
            <button key={key} onClick={() => setFilter(filter === key ? 'all' : key)} style={{
              background: filter === key ? cfg.bg : '#111827',
              border: `1px solid ${filter === key ? cfg.color : '#1f2937'}`,
              borderRadius: '10px',
              padding: '1rem',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'all 0.2s',
            }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: cfg.color, lineHeight: 1 }}>{counts[key]}</div>
              <div style={{ color: '#6b7280', fontSize: '0.75rem', marginTop: '0.3rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{cfg.label}</div>
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {/* Alert List */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#666', background: '#111827', borderRadius: '12px', border: '1px solid #1f2937' }}>
                No alerts matching this filter.
              </div>
            )}
            {filtered.map(alert => {
              const cfg = severityConfig[alert.severity];
              return (
                <div key={alert.id} onClick={() => setSelectedAlert(alert)} style={{
                  background: '#111827',
                  border: `1px solid ${selectedAlert?.id === alert.id ? cfg.color : '#1f2937'}`,
                  borderLeft: `3px solid ${cfg.color}`,
                  borderRadius: '10px',
                  padding: '1rem 1.25rem',
                  cursor: 'pointer',
                  opacity: alert.status !== 'pending' ? 0.5 : 1,
                  transition: 'border-color 0.2s',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <div>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.3rem' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, color: cfg.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{cfg.label}</span>
                        <span style={{ color: '#4b5563', fontSize: '0.7rem' }}>•</span>
                        <span style={{ color: '#6b7280', fontSize: '0.75rem' }}>{alert.team}</span>
                      </div>
                      <div style={{ color: '#e5e7eb', fontSize: '0.9rem', fontWeight: 600 }}>{alert.title}</div>
                      <div style={{ color: '#6b7280', fontSize: '0.75rem', marginTop: '0.25rem' }}>{alert.location}</div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ color: '#4b5563', fontSize: '0.7rem' }}>{alert.time}</div>
                      <div style={{ color: '#6b7280', fontSize: '0.7rem', marginTop: '0.25rem' }}>{alert.status === 'pending' ? '⏳ Pending' : alert.status === 'resolved' ? '✅ Resolved' : '✗ Dismissed'}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detail Panel */}
          {selectedAlert ? (() => {
            const cfg = severityConfig[selectedAlert.severity];
            return (
              <div style={{
                width: '340px',
                flexShrink: 0,
                background: '#111827',
                border: '1px solid #1f2937',
                borderRadius: '12px',
                padding: '1.5rem',
                position: 'sticky',
                top: '80px',
                alignSelf: 'flex-start',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: cfg.color, textTransform: 'uppercase', letterSpacing: '0.05em', padding: '0.2rem 0.6rem', background: cfg.bg, border: `1px solid ${cfg.color}40`, borderRadius: '20px' }}>{cfg.label}</span>
                  <button onClick={() => setSelectedAlert(null)} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '1rem' }}>✕</button>
                </div>
                <h3 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>{selectedAlert.title}</h3>
                <div style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '1rem' }}>{selectedAlert.team} • {selectedAlert.location}</div>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{selectedAlert.desc}</p>
                <div style={{ color: '#6b7280', fontSize: '0.75rem', marginBottom: '1.5rem', padding: '0.75rem', background: '#0a0a0f', borderRadius: '8px' }}>
                  <div><strong style={{ color: '#e5e7eb' }}>Assigned:</strong> <span style={{ color: '#9ca3af' }}>{selectedAlert.assigned}</span></div>
                  <div style={{ marginTop: '0.25rem' }}><strong style={{ color: '#e5e7eb' }}>Time:</strong> <span style={{ color: '#9ca3af' }}>{selectedAlert.time}</span></div>
                  <div style={{ marginTop: '0.25rem' }}><strong style={{ color: '#e5e7eb' }}>Status:</strong> <span style={{ color: '#9ca3af' }}>{selectedAlert.status}</span></div>
                </div>
                {selectedAlert.status === 'pending' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <button onClick={() => handleAction(selectedAlert.id, 'resolve')} style={{ padding: '0.75rem', background: 'linear-gradient(135deg, #22c55e, #16a34a)', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}>
                      ✅ Validate & Resolve
                    </button>
                    <button onClick={() => handleAction(selectedAlert.id, 'dismiss')} style={{ padding: '0.75rem', background: '#1f2937', color: '#9ca3af', border: '1px solid #374151', borderRadius: '8px', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>
                      ✕ Dismiss Alert
                    </button>
                  </div>
                )}
              </div>
            );
          })() : (
            <div style={{
              width: '340px',
              flexShrink: 0,
              background: '#111827',
              border: '1px solid #1f2937',
              borderRadius: '12px',
              padding: '2rem',
              textAlign: 'center',
              alignSelf: 'flex-start',
              position: 'sticky',
              top: '80px',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>👈</div>
              <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>Select an alert to view details and take action.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}