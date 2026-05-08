import React from 'react';
import AppLayout from '../../components/layout/AppLayout';

const PRODUCTIVITY_BARS = [
  { time: '08:00', height: 30, value: '3h' },
  { time: '10:00', height: 60, value: '6h' },
  { time: '12:00', height: 95, value: '9.5h' },
  { time: '14:00', height: 45, value: '4.5h' },
  { time: '16:00', height: 75, value: '7.5h' },
  { time: '18:00', height: 20, value: '2h' },
  { time: '20:00', height: 10, value: '1h' },
];

const InsightsPage: React.FC = () => {
  return (
    <AppLayout>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <section style={{ padding: 'var(--spacing-xl)', maxWidth: 1280, margin: '0 auto' }}>
          {/* Header */}
          <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h2 className="text-h1" style={{ color: 'var(--on-surface)' }}>System Insights</h2>
            <p className="text-body-base" style={{ color: 'var(--on-surface-variant)', maxWidth: 672, marginTop: 4 }}>
              Visualizing your cognitive load and productivity cycles. Data synchronized across all DevFlow endpoints.
            </p>
          </div>

          {/* Bento Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--spacing-lg)' }}>
            {/* Circular Completion Rate */}
            <div style={{ gridColumn: 'span 4', background: 'var(--surface-container)', border: '1px solid var(--outline-variant)', borderRadius: 12, padding: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-md)' }}>
                  <span className="text-label-caps" style={{ color: 'var(--on-surface-variant)' }}>Task Completion</span>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>analytics</span>
                </div>
                <h3 className="text-h2" style={{ color: 'var(--on-surface)' }}>84.2%</h3>
                <p className="text-body-sm" style={{ color: 'var(--on-surface-variant)', marginTop: 'var(--spacing-xs)' }}>+5.4% from last week</p>
              </div>
              <div style={{ position: 'relative', padding: 'var(--spacing-xl) 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="160" height="160" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="80" cy="80" r="70" fill="transparent" stroke="var(--surface-variant)" strokeWidth="8" />
                  <circle cx="80" cy="80" r="70" fill="transparent" stroke="var(--primary)" strokeWidth="8"
                    strokeDasharray="440" strokeDashoffset="70" strokeLinecap="round" />
                </svg>
                <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span className="text-mono-code" style={{ color: 'var(--on-surface)' }}>32/38</span>
                  <span style={{ fontSize: 10, color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Tasks</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-sm)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid var(--outline-variant)' }}>
                <div>
                  <span style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--on-surface-variant)', display: 'block' }}>Backlog</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--on-surface)' }}>12</span>
                </div>
                <div>
                  <span style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--on-surface-variant)', display: 'block' }}>In Progress</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--on-surface)' }}>6</span>
                </div>
              </div>
            </div>

            {/* Productivity by Hour */}
            <div style={{ gridColumn: 'span 8', background: 'var(--surface-container)', border: '1px solid var(--outline-variant)', borderRadius: 12, padding: 'var(--spacing-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-xl)' }}>
                <div>
                  <span className="text-label-caps" style={{ color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Deep Work Flow</span>
                  <h3 className="text-h2" style={{ color: 'var(--on-surface)' }}>Productivity by Hour</h3>
                </div>
                <div style={{ display: 'flex', gap: 'var(--spacing-xs)' }}>
                  <button style={{ padding: '4px var(--spacing-sm)', borderRadius: 'var(--radius-sm)', background: 'var(--surface-variant)', color: 'var(--on-surface)', border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: 700 }}>Today</button>
                  <button style={{ padding: '4px var(--spacing-sm)', borderRadius: 'var(--radius-sm)', background: 'none', color: 'var(--on-surface-variant)', border: 'none', cursor: 'pointer', fontSize: 11 }}>7D</button>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: 256, gap: 'var(--spacing-sm)' }}>
                {PRODUCTIVITY_BARS.map((bar) => (
                  <div key={bar.time} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                    <div style={{ position: 'relative', width: '100%', height: `${bar.height}%`, background: `rgba(208,188,255,${bar.height / 100 * 0.6 + 0.1})`, borderRadius: '4px 4px 0 0', cursor: 'pointer', transition: 'background 0.2s' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--primary)';
                        const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLElement;
                        if (tooltip) tooltip.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `rgba(208,188,255,${bar.height / 100 * 0.6 + 0.1})`;
                        const tooltip = e.currentTarget.querySelector('.tooltip') as HTMLElement;
                        if (tooltip) tooltip.style.opacity = '0';
                      }}
                    >
                      <div className="tooltip" style={{ position: 'absolute', top: -32, left: '50%', transform: 'translateX(-50%)', opacity: 0, fontSize: 10, background: 'var(--primary)', color: 'var(--on-primary)', padding: '2px var(--spacing-xs)', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap', transition: 'opacity 0.2s', pointerEvents: 'none' }}>
                        {bar.value}
                      </div>
                    </div>
                    <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 10, color: 'var(--on-surface-variant)' }}>{bar.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Velocity Trends */}
            <div style={{ gridColumn: 'span 12', background: 'var(--surface-container)', border: '1px solid var(--outline-variant)', borderRadius: 12, padding: 'var(--spacing-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--spacing-xl)' }}>
                <div>
                  <span className="text-label-caps" style={{ color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Velocity Trends</span>
                  <h3 className="text-h2" style={{ color: 'var(--on-surface)' }}>Estimated vs. Actual Velocity</h3>
                </div>
                <div style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                    <span style={{ width: 12, height: 12, borderRadius: '50%', border: '2px solid var(--primary)', display: 'inline-block' }} />
                    <span className="text-body-sm" style={{ color: 'var(--on-surface)' }}>Actual</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                    <span style={{ width: 12, height: 2, background: 'var(--on-surface-variant)', display: 'inline-block' }} />
                    <span className="text-body-sm" style={{ color: 'var(--on-surface-variant)' }}>Estimated</span>
                  </div>
                </div>
              </div>
              <div style={{ position: 'relative', height: 256, width: '100%' }}>
                {/* Grid lines */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pointerEvents: 'none' }}>
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} style={{ borderTop: '1px solid rgba(73,68,84,0.3)', width: '100%' }} />
                  ))}
                </div>
                <svg style={{ width: '100%', height: '100%', overflow: 'visible' }} viewBox="0 0 1000 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#d0bcff" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#d0bcff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,150 L200,140 L400,130 L600,120 L800,110 L1000,100" fill="none" stroke="var(--on-surface-variant)" strokeDasharray="4,4" strokeWidth="1" />
                  <path d="M0,160 L200,180 L400,120 L600,80 L800,90 L1000,40 V200 H0 Z" fill="url(#chartGradient)" />
                  <path d="M0,160 L200,180 L400,120 L600,80 L800,90 L1000,40" fill="none" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </svg>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--spacing-sm)' }}>
                  {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d) => (
                    <span key={d} style={{ fontSize: 10, fontFamily: 'var(--font-space-grotesk)', color: 'var(--on-surface-variant)' }}>{d}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Secondary cards */}
            <div style={{ gridColumn: 'span 4', background: 'var(--surface-container)', border: '1px solid var(--outline-variant)', borderRadius: 12, padding: 'var(--spacing-md)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: 18, marginBottom: 'var(--spacing-sm)', display: 'block' }}>bolt</span>
                <h4 style={{ fontSize: 14, color: 'var(--on-surface)', fontWeight: 600 }}>Active Streak</h4>
                <p className="text-h2" style={{ color: 'var(--on-surface)' }}>12 Days</p>
                <p style={{ fontSize: 11, color: 'var(--on-surface-variant)', marginTop: 'var(--spacing-xs)' }}>Top 5% of all users this month</p>
              </div>
              <div style={{ position: 'absolute', right: -16, bottom: -16, opacity: 0.1, pointerEvents: 'none' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 120, fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
            </div>
            <div style={{ gridColumn: 'span 4', background: 'var(--surface-container)', border: '1px solid var(--outline-variant)', borderRadius: 12, padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(137,206,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>timer</span>
              </div>
              <div>
                <h4 className="text-body-sm" style={{ color: 'var(--on-surface-variant)' }}>Avg. Session Duration</h4>
                <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--on-surface)' }}>4h 32m</p>
              </div>
            </div>
            <div style={{ gridColumn: 'span 4', background: 'var(--primary)', borderRadius: 12, padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h4 className="text-label-caps" style={{ color: 'var(--on-primary)', opacity: 0.8, textTransform: 'uppercase' }}>Next Review</h4>
                <p style={{ fontSize: 14, fontWeight: 700, color: 'var(--on-primary)' }}>Tomorrow, 09:00 AM</p>
              </div>
              <button style={{ background: 'var(--on-primary)', color: 'var(--primary)', padding: 'var(--spacing-sm) var(--spacing-md)', borderRadius: 'var(--radius-default)', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700, boxShadow: '0 4px 15px rgba(208,188,255,0.2)' }}>
                Schedule
              </button>
            </div>

            {/* Flow State Banner */}
            <div style={{ gridColumn: 'span 12', marginTop: 'var(--spacing-xl)', height: 192, borderRadius: 16, overflow: 'hidden', position: 'relative', border: '1px solid var(--outline-variant)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--surface), transparent)', zIndex: 1 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(208,188,255,0.05) 0%, rgba(137,206,255,0.05) 100%)' }} />
              <div style={{ position: 'relative', zIndex: 10, padding: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', maxWidth: 576 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary)', animation: 'pulse 2s infinite' }} />
                  <span className="text-label-caps" style={{ color: 'var(--primary)' }}>Live Optimization</span>
                </div>
                <h3 className="text-h2" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-xs)' }}>Flow State Detected</h3>
                <p className="text-body-base" style={{ color: 'var(--on-surface-variant)' }}>
                  Your typing speed and focus duration suggest peak performance. Notifications have been automatically silenced until 14:00.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default InsightsPage;
