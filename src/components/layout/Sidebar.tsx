import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface NavItem {
  label: string;
  icon: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
  { label: 'Calendar', icon: 'calendar_today', path: '/calendar' },
  { label: 'Tasks', icon: 'check_circle', path: '/tasks' },
  { label: 'Board', icon: 'view_kanban', path: '/board' },
  { label: 'Insights', icon: 'insights', path: '/insights' },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 'var(--radius-default)',
            background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--on-primary)',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>developer_mode_tv</span>
          </div>
          <div>
            <div className="text-label-caps" style={{ color: 'var(--primary)', letterSpacing: '0.15em' }}>DevFlow</div>
            <div style={{ fontSize: 10, color: 'var(--on-surface-variant)', lineHeight: 1 }}>Productivity System</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              className={`nav-link ${isActive ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{item.icon}</span>
              <span className="text-body-base">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <button className="btn-container" onClick={() => {}}>
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>add</span>
          New Project
        </button>
        {user && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginTop: 'var(--spacing-md)', padding: '0 var(--spacing-sm)' }}>
            <img
              src={user.avatar}
              alt="Profile"
              style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--outline-variant)' }}
            />
            <div style={{ overflow: 'hidden' }}>
              <div className="text-body-sm" style={{ color: 'var(--on-surface)', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {user.name}
              </div>
              <div style={{ fontSize: 10, color: 'var(--on-surface-variant)' }}>{user.role}</div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
