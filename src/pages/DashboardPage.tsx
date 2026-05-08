import React from 'react';
import AppLayout from '../components/layout/AppLayout';

const TASK_CARDS = [
  { priority: 'High', color: 'var(--tertiary)', bg: 'rgba(255,184,105,0.1)', time: '2h 15m', title: 'Refactor Auth Middleware', project: 'Core Engine', avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPlRU0kngyG3A3iZIq556ISU1jIacBFDJtVs6VtjRBx8OFLQaglkKsQV5ST6aLEw6z4_cai5HlViIzyT6rEtqQJ_VWX3bCPW6OZnfyZvZvTlBWQzbsJD0bw-pPLiQ2YOlxeowUvv_ESdKFYHwvvafTPax0QUdarl2L67sXnDFDcyn1t--bdikjtujhqDgP4wdaPfoQUrsWKtL8OpBiPzlNIR_o2AxYEVyeklU4It0PKSDb1Wh2FflCYN2-PX0Fs8uiYk3oBAfZ4uc' },
  { priority: 'Medium', color: 'var(--secondary)', bg: 'rgba(137,206,255,0.1)', time: '45m', title: 'UI Review: Bento Grid Spacing', project: 'DevFlow Proj' },
  { priority: 'Low', color: 'var(--on-surface-variant)', bg: 'var(--surface-variant)', time: '1h', title: 'Update Documentation', project: 'Internal Docs' },
];


const DashboardPage: React.FC = () => {
  return (
    <AppLayout>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Smart Suggestions Panel */}
        <section style={{ padding: 'var(--spacing-lg) var(--spacing-lg) var(--spacing-md)' }}>
          <div style={{
            background: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)',
            borderRadius: 12, padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(208,188,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: 18 }}>bolt</span>
                </div>
                <div>
                  <p className="text-label-caps" style={{ color: 'var(--primary)', opacity: 0.8, textTransform: 'uppercase' }}>Best time to work</p>
                  <p style={{ fontSize: 18, fontWeight: 600, color: 'var(--on-surface)' }}>
                    10:30 AM <span style={{ fontSize: 13, color: 'var(--on-surface-variant)', fontWeight: 400 }}>— Focused State</span>
                  </p>
                </div>
              </div>
              <div style={{ width: 1, height: 32, background: 'var(--outline-variant)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--tertiary)' }}>warning</span>
                <p className="text-body-sm" style={{ color: 'var(--on-surface-variant)' }}>Calendar conflict detected at 2:00 PM</p>
              </div>
            </div>
            <button style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: 13, display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
              View analytics <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
            </button>
          </div>
        </section>

        {/* 3-Column Split */}
        <section style={{ flex: 1, display: 'flex', padding: '0 var(--spacing-lg) var(--spacing-lg)', gap: 'var(--spacing-lg)', overflow: 'hidden' }}>
          {/* Left: Today's Execution */}
          <div style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--on-surface)' }}>Today's Execution</h2>
              <span className="text-label-caps" style={{ background: 'var(--surface-container-highest)', padding: '2px var(--spacing-xs)', borderRadius: 'var(--radius-sm)', color: 'var(--on-surface-variant)' }}>
                4 Tasks
              </span>
            </div>
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', paddingRight: 4 }}>
              {TASK_CARDS.map((task, i) => (
                <div key={i} className="card" style={{ cursor: 'pointer', position: 'relative' }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget.querySelector('.start-btn') as HTMLElement;
                    if (btn) btn.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget.querySelector('.start-btn') as HTMLElement;
                    if (btn) btn.style.opacity = '0';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-sm)' }}>
                    <span className="badge" style={{ background: task.bg, color: task.color }}>{task.priority}</span>
                    <span className="text-mono-code" style={{ color: 'var(--on-surface-variant)', fontSize: 13 }}>{task.time}</span>
                  </div>
                  <h3 style={{ fontSize: 14, color: 'var(--on-surface)', fontWeight: 500, marginBottom: 'var(--spacing-md)' }}>{task.title}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      {task.avatarUrl ? (
                        <img src={task.avatarUrl} alt="" style={{ width: 24, height: 24, borderRadius: '50%', border: '1px solid var(--surface-container)' }} />
                      ) : (
                        <span className="text-body-sm" style={{ color: 'var(--on-surface-variant)' }}>{task.project}</span>
                      )}
                    </div>
                    <button
                      className="start-btn"
                      style={{
                        padding: '4px var(--spacing-md)', background: 'var(--primary)', color: 'var(--on-primary)',
                        border: 'none', borderRadius: 'var(--radius-sm)', fontSize: 11, fontWeight: 700,
                        cursor: 'pointer', opacity: 0, transition: 'opacity 0.2s', fontFamily: 'var(--font-space-grotesk)',
                        letterSpacing: '0.05em', textTransform: 'uppercase',
                      }}
                    >
                      Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Calendar View */}
          <div style={{
            flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)',
            background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)',
            borderRadius: 12, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            outline: '1px solid rgba(208,188,255,0.2)',
          }}>
            {/* Calendar Header */}
            <div style={{
              padding: 'var(--spacing-md)', borderBottom: '1px solid var(--outline-variant)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--surface-container-low)',
              flexWrap: 'wrap', gap: 'var(--spacing-sm)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--on-surface-variant)', fontSize: 20 }}>calendar_month</span>
                <h2 style={{ fontSize: 16, fontWeight: 600 }}>Monday, Oct 24</h2>
                <div style={{ display: 'flex', alignItems: 'center', background: 'var(--surface-container-high)', border: '1px solid var(--outline-variant)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                  <button className="btn-icon" style={{ padding: 'var(--spacing-xs)' }}><span className="material-symbols-outlined" style={{ fontSize: 18 }}>chevron_left</span></button>
                  <button style={{ padding: '4px var(--spacing-sm)', fontSize: 13, background: 'none', border: 'none', color: 'var(--on-surface)', cursor: 'pointer', borderLeft: '1px solid var(--outline-variant)', borderRight: '1px solid var(--outline-variant)' }}>Today</button>
                  <button className="btn-icon" style={{ padding: 'var(--spacing-xs)' }}><span className="material-symbols-outlined" style={{ fontSize: 18 }}>chevron_right</span></button>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                <div style={{ display: 'flex', background: 'var(--surface-container-high)', border: '1px solid var(--outline-variant)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                  <button style={{ padding: '4px var(--spacing-md)', fontSize: 13, background: 'rgba(208,188,255,0.2)', color: 'var(--primary)', border: 'none', cursor: 'pointer' }}>Day</button>
                  <button style={{ padding: '4px var(--spacing-md)', fontSize: 13, background: 'none', color: 'var(--on-surface-variant)', border: 'none', cursor: 'pointer' }}>Week</button>
                </div>
                <button style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', padding: '4px var(--spacing-sm)', background: 'rgba(208,188,255,0.1)', color: 'var(--primary)', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontSize: 13 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add</span> New Event
                </button>
              </div>
            </div>

            {/* Time grid */}
            <div style={{ flex: 1, overflowY: 'auto', position: 'relative', padding: 'var(--spacing-md)' }}>
              {/* Time lines */}
              <div style={{ position: 'absolute', inset: 0, padding: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', gap: 48 }}>
                {['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM'].map((time) => (
                  <div key={time} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', fontSize: 11, color: 'var(--on-surface-variant)', fontFamily: 'var(--font-space-grotesk)', borderTop: '1px solid rgba(73,68,84,0.1)', paddingTop: 'var(--spacing-sm)' }}>
                    <span>{time}</span>
                  </div>
                ))}
              </div>
              {/* Calendar events */}
              <div style={{ position: 'relative', zIndex: 10, marginLeft: 80, marginRight: 16 }}>
                <div style={{ position: 'absolute', top: 120, width: '100%', height: 140, background: 'rgba(208,188,255,0.1)', borderLeft: '4px solid var(--primary)', borderRadius: '0 4px 4px 0', padding: 'var(--spacing-md)', cursor: 'grab' }}>
                  <h4 style={{ fontWeight: 600, color: 'var(--primary)', fontSize: 14 }}>Deep Work: API Architecture</h4>
                  <p className="text-body-sm" style={{ color: 'var(--on-surface-variant)' }}>10:30 AM - 12:45 PM</p>
                </div>
                <div style={{ position: 'absolute', top: 280, width: '100%', height: 60, background: 'rgba(255,184,105,0.1)', borderLeft: '4px solid var(--tertiary)', borderRadius: '0 4px 4px 0', padding: 'var(--spacing-sm)', cursor: 'grab', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--tertiary)' }}>groups</span>
                  <h4 style={{ fontWeight: 500, color: 'var(--tertiary)', fontSize: 13 }}>Product Sync</h4>
                  <span style={{ fontSize: 11, color: 'var(--on-surface-variant)', marginLeft: 'auto' }}>1:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Mini Kanban */}
          <div style={{ width: 320, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: 'var(--on-surface)', padding: '0 var(--spacing-xs)' }}>Current Sprint</h2>
            <div style={{ flex: 1, overflowX: 'auto', display: 'flex', gap: 'var(--spacing-sm)', paddingBottom: 'var(--spacing-sm)' }}>
              {/* Todo */}
              <div style={{ minWidth: 200, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 var(--spacing-xs)', marginBottom: 'var(--spacing-xs)' }}>
                  <span className="text-label-caps" style={{ color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Todo</span>
                  <span className="text-body-sm" style={{ color: 'var(--on-surface-variant)' }}>3</span>
                </div>
                {['GraphQL Subscriptions Setup', 'Dark Mode Token Audit'].map((item) => (
                  <div key={item} style={{ background: 'var(--surface-container)', border: '1px solid var(--outline-variant)', borderRadius: 'var(--radius-sm)', padding: 'var(--spacing-sm)', fontSize: 13, cursor: 'pointer', transition: 'border-color 0.15s' }}>
                    {item}
                  </div>
                ))}
                <div style={{ background: 'var(--surface-container)', border: '1px dashed var(--outline-variant)', borderRadius: 'var(--radius-sm)', padding: 'var(--spacing-md)', fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(203,195,215,0.5)' }}>
                  <span className="material-symbols-outlined">add</span>
                </div>
              </div>
              {/* Active */}
              <div style={{ minWidth: 200, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 var(--spacing-xs)', marginBottom: 'var(--spacing-xs)' }}>
                  <span className="text-label-caps" style={{ color: 'var(--secondary)', textTransform: 'uppercase' }}>Active</span>
                  <span className="text-body-sm" style={{ color: 'var(--on-surface-variant)' }}>1</span>
                </div>
                <div style={{ background: 'var(--surface-container)', border: '1px solid rgba(137,206,255,0.4)', borderRadius: 'var(--radius-sm)', padding: 'var(--spacing-sm)', fontSize: 13 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)', marginBottom: 'var(--spacing-xs)' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--secondary)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                    <span style={{ fontSize: 10, color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase' }}>In Progress</span>
                  </div>
                  Auth Middleware Refactor
                </div>
              </div>
              {/* Done */}
              <div style={{ minWidth: 200, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 var(--spacing-xs)', marginBottom: 'var(--spacing-xs)' }}>
                  <span className="text-label-caps" style={{ color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Done</span>
                  <span className="text-body-sm" style={{ color: 'var(--on-surface-variant)' }}>12</span>
                </div>
                {['Database Migration v2.4', 'Landing Page Hero Art'].map((item) => (
                  <div key={item} style={{ background: 'rgba(28,32,36,0.5)', border: '1px solid rgba(73,68,84,0.3)', borderRadius: 'var(--radius-sm)', padding: 'var(--spacing-sm)', fontSize: 13, color: 'var(--on-surface-variant)', textDecoration: 'line-through' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Progress */}
            <div style={{ background: 'var(--surface-container-high)', border: '1px solid var(--outline-variant)', borderRadius: 12, padding: 'var(--spacing-md)', marginTop: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-sm)' }}>
                <p className="text-label-caps" style={{ color: 'var(--on-surface-variant)' }}>Weekly Progress</p>
                <p className="text-mono-code" style={{ fontSize: 12, color: 'var(--primary)' }}>68%</p>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '68%' }} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
