import React, { useState } from 'react';
import AppLayout from '../../components/layout/AppLayout';
import { DUMMY_CALENDAR_EVENTS, DUMMY_UNSCHEDULED } from '../../data/dummyData';

const DAYS_HEADER = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MINI_DAYS_HEADER = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

// September 2024 calendar data
const SEP_ROWS = [
  [26, 27, 28, 29, 30, 31, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
];

const eventColors: Record<string, { bg: string; border: string; text: string; textBg: string }> = {
  primary: { bg: 'rgba(160,120,255,0.2)', border: 'var(--primary)', text: 'var(--primary)', textBg: 'rgba(160,120,255,0.3)' },
  secondary: { bg: 'rgba(0,162,230,0.2)', border: 'var(--secondary)', text: 'var(--secondary)', textBg: 'rgba(0,162,230,0.3)' },
  tertiary: { bg: 'rgba(202,128,30,0.2)', border: 'var(--tertiary)', text: 'var(--tertiary)', textBg: 'rgba(202,128,30,0.3)' },
};

const priorityColors: Record<string, { bg: string; text: string }> = {
  High: { bg: 'rgba(255,180,171,0.2)', text: 'var(--error)' },
  Mid: { bg: 'rgba(202,128,30,0.2)', text: 'var(--tertiary)' },
};

const CalendarPage: React.FC = () => {
  const [currentView, setCurrentView] = useState<'Month' | 'Week' | 'Day'>('Month');

  const getEventsForDay = (day: number) => DUMMY_CALENDAR_EVENTS.filter((e) => e.date === day);

  return (
    <AppLayout>
      <div style={{ display: 'flex', height: '100%', overflow: 'hidden' }}>
        {/* Calendar Grid */}
        <section style={{ flex: 1, display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--outline-variant)', overflow: 'hidden' }}>
          {/* Sub-header */}
          <div style={{ padding: 'var(--spacing-md) var(--spacing-lg)', borderBottom: '1px solid var(--outline-variant)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
              <h1 style={{ fontSize: 24, fontWeight: 600 }}>September 2024</h1>
              <div style={{ display: 'flex', alignItems: 'center', background: 'var(--surface-container)', borderRadius: 'var(--radius-default)', padding: 'var(--spacing-xs)', border: '1px solid var(--outline-variant)' }}>
                {(['Month', 'Week', 'Day'] as const).map((v) => (
                  <button key={v} onClick={() => setCurrentView(v)}
                    style={{ padding: '4px var(--spacing-md)', borderRadius: 'var(--radius-sm)', fontSize: 13, fontWeight: 500, background: currentView === v ? 'var(--surface-variant)' : 'none', color: currentView === v ? 'var(--on-surface)' : 'var(--on-surface-variant)', border: 'none', cursor: 'pointer', transition: 'all 0.15s' }}
                  >{v}</button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
              <button className="btn-secondary" style={{ padding: '6px', borderRadius: 'var(--radius-default)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chevron_left</span>
              </button>
              <button className="btn-secondary" style={{ padding: '6px var(--spacing-md)', fontSize: 13 }}>Today</button>
              <button className="btn-secondary" style={{ padding: '6px', borderRadius: 'var(--radius-default)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chevron_right</span>
              </button>
            </div>
          </div>

          {/* Day headers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', borderBottom: '1px solid var(--outline-variant)', background: 'var(--surface-dim)' }}>
            {DAYS_HEADER.map((d, i) => (
              <div key={d} style={{ padding: 8, textAlign: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', color: i >= 5 ? 'var(--secondary)' : 'var(--on-surface-variant)' }}>
                {d}
              </div>
            ))}
          </div>

          {/* Calendar body */}
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gridTemplateRows: 'repeat(5, 1fr)', overflowY: 'auto' }}>
            {SEP_ROWS.flat().map((day, idx) => {
              const isGray = idx < 6 && SEP_ROWS[0][idx] > 1;
              const isToday = day === 5 && idx < 14;
              const events = getEventsForDay(day);
              const isWeekend = idx % 7 >= 5;

              return (
                <div key={idx}
                  style={{
                    borderRight: '1px solid var(--outline-variant)', borderBottom: '1px solid var(--outline-variant)',
                    padding: 8, minHeight: 120, background: isGray ? 'rgba(11,15,18,0.5)' : isWeekend ? 'var(--surface-dim)' : 'transparent',
                    transition: 'background 0.15s', cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => { if (!isGray) e.currentTarget.style.background = 'var(--surface-container-low)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = isGray ? 'rgba(11,15,18,0.5)' : isWeekend ? 'var(--surface-dim)' : 'transparent'; }}
                >
                  <span style={{ fontSize: 13, color: isGray ? 'var(--on-surface-variant)' : isToday ? 'var(--primary)' : isWeekend ? 'var(--on-surface-variant)' : 'var(--on-surface)', fontWeight: isToday ? 700 : 400, opacity: isGray ? 0.4 : 1 }}>
                    {day}
                  </span>
                  {events.length > 0 && (
                    <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {events.map((event) => {
                        const cfg = eventColors[event.type];
                        return (
                          <div key={event.id} style={{ background: isToday ? 'var(--primary-container)' : cfg.bg, borderLeft: `2px solid ${isToday ? 'var(--primary-container)' : cfg.border}`, padding: '6px', borderRadius: '0 4px 4px 0', cursor: 'pointer', transition: 'all 0.15s', transform: isToday ? 'scale(1.05)' : undefined, boxShadow: isToday ? '0 8px 24px rgba(0,0,0,0.4)' : undefined }}>
                            <p style={{ fontSize: 11, fontWeight: 700, color: isToday ? 'var(--on-primary-container)' : cfg.text, textTransform: 'uppercase', letterSpacing: '-0.02em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {event.title}
                            </p>
                            {event.startTime && (
                              <p style={{ fontSize: 9, color: isToday ? 'rgba(52,0,128,0.8)' : 'var(--on-surface-variant)' }}>
                                {event.startTime}{event.endTime ? ` - ${event.endTime}` : ''}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Right Side Panel */}
        <aside style={{ width: 320, height: '100%', background: 'var(--surface-container-low)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: 'var(--spacing-lg)', borderBottom: '1px solid var(--outline-variant)' }}>
            <h3 className="text-label-caps" style={{ color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--spacing-md)' }}>Unscheduled Tasks</h3>
            <p className="text-body-sm" style={{ color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-lg)' }}>Drag items to the calendar grid to block time.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              {DUMMY_UNSCHEDULED.map((task) => (
                <div key={task.id} style={{ background: 'var(--surface)', border: '1px solid var(--outline-variant)', borderRadius: 'var(--radius-default)', padding: 'var(--spacing-md)', cursor: 'grab', transition: 'border-color 0.15s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; (e.currentTarget.querySelector('.task-title') as HTMLElement)!.style.color = 'var(--primary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--outline-variant)'; (e.currentTarget.querySelector('.task-title') as HTMLElement)!.style.color = 'var(--on-surface)'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-sm)' }}>
                    <span className="task-title" style={{ fontWeight: 700, fontSize: 13, color: 'var(--on-surface)', transition: 'color 0.15s' }}>{task.title}</span>
                    <span className="material-symbols-outlined" style={{ color: 'var(--on-surface-variant)', fontSize: 18 }}>drag_indicator</span>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--spacing-xs)' }}>
                    <span style={{ padding: '2px 8px', background: 'var(--surface-variant)', borderRadius: 'var(--radius-sm)', fontSize: 10, fontFamily: 'var(--font-space-grotesk)', color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>{task.category}</span>
                    {task.priority && (
                      <span style={{ padding: '2px 8px', background: priorityColors[task.priority]?.bg, borderRadius: 'var(--radius-sm)', fontSize: 10, fontFamily: 'var(--font-space-grotesk)', color: priorityColors[task.priority]?.text, textTransform: 'uppercase' }}>{task.priority}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mini calendar */}
          <div style={{ padding: 'var(--spacing-lg)', marginTop: 'auto' }}>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--outline-variant)', borderRadius: 12, padding: 'var(--spacing-md)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-md)', padding: '0 4px' }}>
                <span style={{ fontSize: 13, fontWeight: 700 }}>October 2024</span>
                <div style={{ display: 'flex', gap: 'var(--spacing-xs)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, cursor: 'pointer' }}>chevron_left</span>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, cursor: 'pointer' }}>chevron_right</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px 0', textAlign: 'center' }}>
                {MINI_DAYS_HEADER.map((d, i) => (
                  <div key={i} style={{ fontSize: 10, fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: 'var(--on-surface-variant)' }}>{d}</div>
                ))}
                <div style={{ fontSize: 10, opacity: 0.3 }}>30</div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((d) => (
                  <div key={d} style={{
                    fontSize: 10, cursor: 'pointer',
                    ...(d === 8 ? { fontWeight: 700, color: 'var(--primary)', background: 'rgba(208,188,255,0.1)', borderRadius: '50%', width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' } : { color: 'var(--on-surface)' }),
                  }}>{d}</div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
      {/* FAB */}
      <button className="fab">
        <span className="material-symbols-outlined" style={{ fontSize: 24, fontVariationSettings: "'FILL' 1" }}>add</span>
      </button>
    </AppLayout>
  );
};

export default CalendarPage;
