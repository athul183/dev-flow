import React, { useState } from 'react';
import AppLayout from '../../components/layout/AppLayout';
import { DUMMY_KANBAN, type KanbanColumn, type KanbanCard } from '../../data/dummyData';

const colColors: Record<string, { dot: string; badge: string; badgeText: string }> = {
  outline: { dot: 'var(--outline)', badge: 'var(--surface-variant)', badgeText: 'var(--on-surface-variant)' },
  secondary: { dot: 'var(--secondary)', badge: 'rgba(137,206,255,0.2)', badgeText: 'var(--secondary)' },
  error: { dot: 'var(--error)', badge: 'rgba(255,180,171,0.2)', badgeText: 'var(--error)' },
  primary: { dot: 'var(--primary)', badge: 'rgba(208,188,255,0.2)', badgeText: 'var(--primary)' },
};

const labelColors: Record<string, { bg: string; text: string }> = {
  primary: { bg: 'rgba(208,188,255,0.1)', text: 'var(--primary)' },
  tertiary: { bg: 'rgba(255,184,105,0.1)', text: 'var(--tertiary)' },
  secondary: { bg: 'rgba(137,206,255,0.1)', text: 'var(--secondary)' },
  error: { bg: 'rgba(255,180,171,0.1)', text: 'var(--error)' },
  surface: { bg: 'var(--surface-variant)', text: 'var(--on-surface-variant)' },
};

const KanbanCardComponent: React.FC<{ card: KanbanCard; isBlocked?: boolean; isDone?: boolean }> = ({ card, isBlocked, isDone }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: isDone ? 'var(--surface-container)' : 'var(--surface)',
        border: `1px solid ${card.blockedReason ? 'rgba(255,180,171,0.3)' : hovered && !isDone ? 'rgba(208,188,255,0.5)' : 'var(--outline-variant)'}`,
        borderRadius: 12, padding: 'var(--spacing-md)', cursor: 'grab', transition: 'border-color 0.15s',
        opacity: isDone ? 0.6 : card.blockedReason ? 0.8 : 1,
        boxShadow: card.progress && card.progress > 0 && !isBlocked && !isDone ? '0 8px 30px rgba(0,0,0,0.5)' : undefined,
        filter: card.blockedReason ? 'grayscale(0.5)' : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-sm)' }}>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
          {card.labels.map((label, i) => (
            <span key={i} className="badge" style={{ background: labelColors[label.type].bg, color: labelColors[label.type].text }}>
              {label.text}
            </span>
          ))}
        </div>
        {isDone ? (
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--primary)', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        ) : card.blockedReason ? (
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--error)' }}>block</span>
        ) : (
          <button className="btn-icon" style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.2s', padding: 0 }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--on-surface-variant)' }}>more_horiz</span>
          </button>
        )}
      </div>

      {card.assignees && (
        <div style={{ display: 'flex', marginBottom: 'var(--spacing-sm)' }}>
          {card.assignees.map((a, i) => (
            <div key={i} style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--primary)', color: 'var(--on-primary)', fontSize: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, marginLeft: i > 0 ? -4 : 0, border: '1px solid var(--surface)' }}>
              {a}
            </div>
          ))}
        </div>
      )}

      <h3 style={{ fontSize: 14, color: isDone ? 'var(--on-surface)' : 'var(--on-surface)', fontWeight: 500, marginBottom: 'var(--spacing-md)', lineHeight: 1.4, textDecoration: isDone ? 'line-through' : 'none', textDecorationColor: 'var(--outline)' }}>
        {card.title}
      </h3>

      {card.blockedReason && (
        <p style={{ fontSize: 11, color: 'var(--error)', background: 'rgba(255,180,171,0.05)', padding: '6px', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--spacing-md)', fontWeight: 500 }}>
          {card.blockedReason}
        </p>
      )}

      {!isDone && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', color: 'var(--on-surface-variant)', marginBottom: 'var(--spacing-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-space-grotesk)', fontSize: 11 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>schedule</span> Est: {card.estimate}
          </div>
          {card.actual !== undefined && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-space-grotesk)', fontSize: 11, color: card.progress && card.progress > 0 ? 'var(--primary)' : undefined }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>timer</span> Act: {card.actual}
            </div>
          )}
        </div>
      )}

      {isDone ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-space-grotesk)', fontSize: 11, color: 'var(--on-surface-variant)' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>done_all</span> Completed: 2h ago
        </div>
      ) : (
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${card.progress || 0}%`, background: card.blockedReason ? 'var(--error)' : undefined }} />
        </div>
      )}
    </div>
  );
};

const KanbanPage: React.FC = () => {
  const [columns] = useState<KanbanColumn[]>(DUMMY_KANBAN);

  return (
    <AppLayout>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--surface-container-lowest)' }}>
        {/* Kanban Header */}
        <div style={{ padding: 'var(--spacing-md) var(--spacing-lg)', borderBottom: '1px solid rgba(73,68,84,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
            <h2 className="text-h2">Production Sprint v2.4</h2>
            <div style={{ display: 'flex' }}>
              {['AR', 'JD', '+3'].map((a, i) => (
                <div key={i} style={{
                  width: 28, height: 28, borderRadius: '50%', border: '2px solid var(--surface)',
                  background: i < 2 ? 'var(--primary-container)' : 'var(--surface-variant)',
                  color: i < 2 ? 'var(--on-primary-container)' : 'var(--on-surface-variant)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, fontWeight: 700, marginLeft: i > 0 ? -8 : 0,
                }}>{a}</div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
            <button className="btn-secondary" style={{ fontSize: 13, padding: '6px var(--spacing-sm)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>filter_list</span> Filters
            </button>
            <button className="btn-secondary" style={{ fontSize: 13, padding: '6px var(--spacing-sm)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>share</span> Share
            </button>
          </div>
        </div>

        {/* Board Grid */}
        <div style={{ padding: 'var(--spacing-lg)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-lg)', overflowX: 'auto', alignItems: 'start', flex: 1, height: 'calc(100vh - 140px)', overflowY: 'auto' }}>
          {columns.map((col) => {
            const cfg = colColors[col.color];
            return (
              <div key={col.id} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', minWidth: 280 }}>
                {/* Column header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 var(--spacing-xs)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: cfg.dot, display: 'inline-block' }} />
                    <span className="text-label-caps" style={{ color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>{col.title}</span>
                    <span style={{ background: cfg.badge, color: cfg.badgeText, padding: '2px 6px', borderRadius: 4, fontSize: 10, fontWeight: 700 }}>
                      {col.cards.length}
                    </span>
                  </div>
                  <button className="btn-icon">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                {/* Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                  {col.cards.map((card) => (
                    <KanbanCardComponent
                      key={card.id}
                      card={card}
                      isBlocked={col.id === 'blocked'}
                      isDone={col.id === 'done'}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* FAB */}
      <button className="fab">
        <span className="material-symbols-outlined" style={{ fontSize: 32 }}>add</span>
      </button>
    </AppLayout>
  );
};

export default KanbanPage;
