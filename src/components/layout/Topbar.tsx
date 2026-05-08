import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface TopbarProps {
  quickAddLabel?: string;
}

const Topbar: React.FC<TopbarProps> = ({ quickAddLabel = 'Quick Add' }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="topbar">
      {/* Search */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 'var(--spacing-lg)' }}>
        <div className="input-with-icon" style={{ width: 256 }}>
          <span className="material-symbols-outlined input-icon" style={{ fontSize: 18 }}>search</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search across flow..."
            style={{ width: '100%', paddingLeft: 36 }}
          />
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
        <button className="btn-secondary" style={{ fontSize: 13 }}>{quickAddLabel}</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          <button className="btn-icon">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="btn-icon">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
        {user && (
          <img
            src={user.avatar}
            alt="User Avatar"
            title="Click to logout"
            onClick={handleLogout}
            style={{
              width: 32, height: 32, borderRadius: '50%',
              border: '1px solid var(--outline-variant)', cursor: 'pointer',
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Topbar;
