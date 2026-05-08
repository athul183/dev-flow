import React, { useState } from 'react';
import AppLayout from '../../components/layout/AppLayout';
import { DUMMY_TASKS, type Task } from '../../data/dummyData';

const priorityConfig = {
  High: { color: 'var(--error)', bg: 'rgba(255,180,171,0.1)', dotColor: 'var(--error)' },
  Medium: { color: 'var(--tertiary)', bg: 'rgba(202,128,30,0.2)', dotColor: 'var(--tertiary)' },
  Low: { color: 'var(--secondary)', bg: 'rgba(0,162,230,0.2)', dotColor: 'var(--secondary)' },
};

const TasksPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All Tasks' | 'Active' | 'Backlog' | 'Completed'>('All Tasks');
  const [selectedTask, setSelectedTask] = useState<Task | null>(DUMMY_TASKS[0]);
  const [subtasks, setSubtasks] = useState(DUMMY_TASKS[0]?.subtasks || []);

  const filters = ['All Tasks', 'Active', 'Backlog', 'Completed'] as const;

  const toggleSubtask = (id: string) => {
    setSubtasks(prev => prev.map(st => st.id === id ? { ...st, done: !st.done } : st));
  };

  return (
    <AppLayout>
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', height: '100%' }}>
        {/* Tasks List Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, background: 'var(--background)' }}>
          {/* Filter Bar */}
          <div style={{ padding: 'var(--spacing-lg) var(--spacing-xl)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer', fontSize: 14,
                    color: activeFilter === f ? 'var(--primary)' : 'var(--on-surface-variant)',
                    fontWeight: activeFilter === f ? 700 : 400,
                    paddingBottom: 8,
                    borderBottom: activeFilter === f ? '2px solid var(--primary)' : '2px solid transparent',
                    transition: 'all 0.15s',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', background: 'var(--surface-container-low)', padding: '6px var(--spacing-md)', borderRadius: 'var(--radius-default)', border: '1px solid var(--outline-variant)' }}>
              <span className="text-body-sm" style={{ color: 'var(--on-surface-variant)' }}>Sort by:</span>
              <select style={{ background: 'transparent', border: 'none', color: 'var(--on-surface)', fontSize: 13, cursor: 'pointer', outline: 'none' }}>
                <option>Priority</option>
                <option>Due Date</option>
                <option>Estimate</option>
              </select>
            </div>
          </div>

          {/* Tasks Table */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '0 var(--spacing-xl) var(--spacing-xl)' }}>
            <div style={{ background: 'var(--surface-container)', border: '1px solid var(--outline-variant)', borderRadius: 12, overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--outline-variant)', background: 'var(--surface-container-high)' }}>
                    <th style={{ padding: '8px var(--spacing-md)', width: 40 }} className="text-label-caps" />
                    <th style={{ padding: '8px var(--spacing-md)', width: 96 }} className="text-label-caps" >
                      <span style={{ color: 'var(--on-surface-variant)' }}>Priority</span>
                    </th>
                    <th style={{ padding: '8px var(--spacing-md)' }} className="text-label-caps">
                      <span style={{ color: 'var(--on-surface-variant)' }}>Task</span>
                    </th>
                    <th style={{ padding: '8px var(--spacing-md)', width: 128 }} className="text-label-caps">
                      <span style={{ color: 'var(--on-surface-variant)' }}>Project</span>
                    </th>
                    <th style={{ padding: '8px var(--spacing-md)', width: 112, textAlign: 'right' }} className="text-label-caps">
                      <span style={{ color: 'var(--on-surface-variant)' }}>Estimate</span>
                    </th>
                    <th style={{ padding: '8px var(--spacing-md)', width: 128 }} className="text-label-caps">
                      <span style={{ color: 'var(--on-surface-variant)' }}>Due Date</span>
                    </th>
                    <th style={{ padding: '8px var(--spacing-md)', width: 112 }} />
                  </tr>
                </thead>
                <tbody>
                  {DUMMY_TASKS.map((task, i) => {
                    const cfg = priorityConfig[task.priority];
                    const isActive = i === 0;
                    return (
                      <tr
                        key={task.id}
                        style={{
                          borderBottom: '1px solid var(--outline-variant)', cursor: 'pointer',
                          background: selectedTask?.id === task.id ? 'rgba(208,188,255,0.05)' : isActive ? 'rgba(38,42,47,0.4)' : 'transparent',
                          transition: 'background 0.15s',
                        }}
                        onClick={() => setSelectedTask(task)}
                        onMouseEnter={(e) => {
                          const actions = e.currentTarget.querySelector('.row-actions') as HTMLElement;
                          if (actions) actions.style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                          const actions = e.currentTarget.querySelector('.row-actions') as HTMLElement;
                          if (actions) actions.style.opacity = '0';
                        }}
                      >
                        <td style={{ padding: 'var(--spacing-md)' }}>
                          <span className="material-symbols-outlined" style={{ color: 'var(--outline-variant)', fontSize: 18 }}>drag_indicator</span>
                        </td>
                        <td style={{ padding: 'var(--spacing-md)' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                            <div style={{ width: 8, height: 8, borderRadius: '50%', background: cfg.dotColor }} />
                            <span style={{ fontSize: 11, color: cfg.color, background: cfg.bg, padding: '2px 8px', borderRadius: 'var(--radius-sm)' }}>
                              {task.priority === 'Medium' ? 'Med' : task.priority}
                            </span>
                          </div>
                        </td>
                        <td style={{ padding: 'var(--spacing-md)' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                            <span style={{ fontSize: 14, color: 'var(--on-surface)', fontWeight: 500 }}>{task.title}</span>
                            <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
                              {task.tags.map((tag) => (
                                <span key={tag} style={{ fontSize: 10, padding: '2px 8px', background: 'rgba(203,195,215,0.1)', color: 'var(--on-surface-variant)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-space-grotesk)' }}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: 'var(--spacing-md)' }} className="text-body-sm">
                          <span style={{ color: 'var(--on-surface-variant)' }}>{task.project}</span>
                        </td>
                        <td style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>
                          <span style={{ fontFamily: 'var(--font-space-grotesk)', color: 'var(--on-surface-variant)', fontSize: 13 }}>{task.estimate}</span>
                        </td>
                        <td style={{ padding: 'var(--spacing-md)' }} className="text-body-sm">
                          <span style={{ color: 'var(--on-surface-variant)' }}>{task.dueDate}</span>
                        </td>
                        <td style={{ padding: 'var(--spacing-md)' }}>
                          <div className="row-actions" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 'var(--spacing-sm)', opacity: 0, transition: 'opacity 0.2s' }}>
                            <button className="btn-icon" title="Start"><span className="material-symbols-outlined" style={{ fontSize: 18 }}>play_arrow</span></button>
                            <button className="btn-icon" title="Edit"><span className="material-symbols-outlined" style={{ fontSize: 18 }}>edit</span></button>
                            <button className="btn-icon" title="Archive"><span className="material-symbols-outlined" style={{ fontSize: 18 }}>archive</span></button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Task Detail Sidebar */}
        {selectedTask && (
          <aside style={{ width: 400, height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(21, 25, 29, 0.6)', backdropFilter: 'blur(20px)', borderLeft: '1px solid var(--outline-variant)' }}>
            <div style={{ padding: 'var(--spacing-lg)', borderBottom: '1px solid var(--outline-variant)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="text-label-caps" style={{ color: 'var(--on-surface-variant)' }}>TASK DETAILS</span>
              <button className="btn-icon" onClick={() => setSelectedTask(null)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
              {/* Header */}
              <div>
                <h2 className="text-h2" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-sm)' }}>{selectedTask.title}</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, padding: '2px 8px', background: 'rgba(255,180,171,0.1)', color: 'var(--error)', border: '1px solid rgba(255,180,171,0.2)', borderRadius: 'var(--radius-full)' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--error)', display: 'inline-block' }} />
                    {selectedTask.priority} Priority
                  </span>
                  <span style={{ fontSize: 13, padding: '2px 8px', background: 'var(--surface-container-highest)', color: 'var(--on-surface-variant)', border: '1px solid var(--outline-variant)', borderRadius: 'var(--radius-full)' }}>
                    {selectedTask.project}
                  </span>
                </div>
              </div>
              {/* Description */}
              {selectedTask.description && (
                <div>
                  <p className="text-label-caps" style={{ color: 'var(--on-surface-variant)', textTransform: 'uppercase', marginBottom: 'var(--spacing-sm)' }}>Description</p>
                  <p className="text-body-base" style={{ color: 'var(--on-surface-variant)' }}>{selectedTask.description}</p>
                </div>
              )}
              {/* Sub-tasks */}
              {subtasks.length > 0 && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-sm)' }}>
                    <p className="text-label-caps" style={{ color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>Sub-tasks</p>
                    <span style={{ fontSize: 10, color: 'var(--on-surface-variant)' }}>{subtasks.filter(s => s.done).length}/{subtasks.length} completed</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {subtasks.map((st) => (
                      <label key={st.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', padding: 'var(--spacing-md)', background: 'var(--surface-container-low)', border: '1px solid var(--outline-variant)', borderRadius: 'var(--radius-default)', cursor: 'pointer', transition: 'background 0.15s' }}>
                        <input
                          type="checkbox"
                          checked={st.done}
                          onChange={() => toggleSubtask(st.id)}
                          style={{ accentColor: 'var(--primary)', width: 16, height: 16 }}
                        />
                        <span className="text-body-sm" style={{ color: st.done ? 'var(--on-surface-variant)' : 'var(--on-surface)', textDecoration: st.done ? 'line-through' : 'none' }}>
                          {st.text}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {/* Activity Log */}
              {selectedTask.activityLog && (
                <div>
                  <p className="text-label-caps" style={{ color: 'var(--on-surface-variant)', textTransform: 'uppercase', marginBottom: 'var(--spacing-sm)' }}>Activity Log</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'relative' }}>
                    <div style={{ position: 'absolute', left: 8, top: 8, bottom: 8, width: 1, background: 'var(--outline-variant)' }} />
                    {selectedTask.activityLog.map((log, i) => (
                      <div key={i} style={{ paddingLeft: 32, position: 'relative' }}>
                        <div style={{ position: 'absolute', left: 0, top: 4, width: 16, height: 16, borderRadius: '50%', background: i === 1 ? 'var(--primary)' : 'var(--surface-container-high)', border: '1px solid var(--outline-variant)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: 10, color: i === 1 ? 'var(--on-primary)' : 'var(--on-surface-variant)' }}>{log.icon}</span>
                        </div>
                        <p className="text-body-sm" style={{ color: 'var(--on-surface)' }}>{log.action.split(' ').slice(0, 2).join(' ')} <span style={{ color: 'var(--on-surface-variant)' }}>{log.action.split(' ').slice(2).join(' ')}</span></p>
                        <p style={{ fontSize: 10, color: 'var(--on-surface-variant)' }}>{log.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {/* Footer CTA */}
            <div style={{ padding: 'var(--spacing-lg)', borderTop: '1px solid var(--outline-variant)', background: 'var(--surface-container-high)' }}>
              <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                <button className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                  <span className="material-symbols-outlined">play_arrow</span> Start Working
                </button>
                <button className="btn-secondary">
                  <span className="material-symbols-outlined" style={{ color: 'var(--on-surface)' }}>more_horiz</span>
                </button>
              </div>
            </div>
          </aside>
        )}
      </div>
      {/* FAB */}
      <button className="fab" style={{ right: selectedTask ? 424 : 'var(--spacing-lg)' }}>
        <span className="material-symbols-outlined" style={{ fontSize: 32 }}>add</span>
      </button>
    </AppLayout>
  );
};

export default TasksPage;
