import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('dev@devflow.com');
  const [password, setPassword] = useState('password123');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = login(email, password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Use dev@devflow.com / password123');
    }
  };

  return (
    <div className="auth-page">
      {/* BG blobs */}
      <div className="auth-bg-blob" style={{ top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'rgba(208,188,255,0.08)' }} />
      <div className="auth-bg-blob" style={{ bottom: '-10%', right: '-10%', width: '30%', height: '30%', background: 'rgba(137,206,255,0.08)' }} />

      <div className="auth-container">
        {/* Branding */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-sm)' }}>
            <div style={{
              width: 40, height: 40, background: 'var(--primary-container)',
              borderRadius: 'var(--radius-default)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--on-primary-container)', fontSize: 24 }}>terminal</span>
            </div>
            <span className="text-label-caps" style={{ color: 'var(--primary)', fontSize: 20, letterSpacing: '0.15em' }}>DevFlow</span>
          </div>
          <h1 className="text-h1" style={{ color: 'var(--on-surface)' }}>Welcome back</h1>
          <p className="text-body-sm" style={{ color: 'var(--on-surface-variant)', marginTop: 'var(--spacing-xs)' }}>
            Sign in to your productivity engine
          </p>
        </div>

        {/* Card */}
        <div className="auth-card">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {/* Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
              <label className="text-label-caps" style={{ color: 'var(--on-surface-variant)' }} htmlFor="email">
                Email Address
              </label>
              <div className="input-with-icon">
                <span className="material-symbols-outlined input-icon" style={{ fontSize: 18 }}>mail</span>
                <input
                  id="email"
                  type="email"
                  className="input-field"
                  style={{ paddingLeft: 'var(--spacing-xl)' }}
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label className="text-label-caps" style={{ color: 'var(--on-surface-variant)' }} htmlFor="password">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => navigate('/forgot-password')}
                  style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: 13 }}
                >
                  Forgot password?
                </button>
              </div>
              <div className="input-with-icon">
                <span className="material-symbols-outlined input-icon" style={{ fontSize: 18 }}>lock</span>
                <input
                  id="password"
                  type="password"
                  className="input-field"
                  style={{ paddingLeft: 'var(--spacing-xl)' }}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Remember me */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
              <input
                id="remember"
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                style={{ width: 16, height: 16, accentColor: 'var(--primary)', cursor: 'pointer' }}
              />
              <label htmlFor="remember" className="text-body-sm" style={{ color: 'var(--on-surface-variant)', cursor: 'pointer' }}>
                Remember me for 30 days
              </label>
            </div>

            {error && (
              <div style={{ padding: 'var(--spacing-sm)', background: 'rgba(255,180,171,0.1)', border: '1px solid var(--error)', borderRadius: 'var(--radius-default)', color: 'var(--error)', fontSize: 13 }}>
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              style={{
                width: '100%', background: 'var(--primary-container)', color: 'var(--on-primary-container)',
                border: 'none', borderRadius: 'var(--radius-default)', padding: 'var(--spacing-sm)',
                fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 'var(--spacing-sm)', transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--primary-container)')}
            >
              Sign In
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
          </form>

          {/* Divider */}
          <div style={{ position: 'relative', margin: 'var(--spacing-xl) 0' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '100%', borderTop: '1px solid var(--outline-variant)' }} />
            </div>
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <span className="text-label-caps" style={{
                background: 'var(--surface-container)', padding: '0 var(--spacing-md)', color: 'var(--on-surface-variant)',
              }}>OR CONTINUE WITH</span>
            </div>
          </div>

          {/* GitHub button */}
          <button
            type="button"
            style={{
              width: '100%', background: 'var(--surface-container-lowest)', border: '1px solid var(--outline-variant)',
              borderRadius: 'var(--radius-default)', padding: 'var(--spacing-sm)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer',
              color: 'var(--on-surface)', fontSize: 14, fontWeight: 700, transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface-variant)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--surface-container-lowest)')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Sign in with GitHub</span>
          </button>
        </div>

        {/* Sign up link */}
        <p className="text-body-sm" style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)', color: 'var(--on-surface-variant)' }}>
          Don't have an account?{' '}
          <button
            onClick={() => navigate('/signup')}
            style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 700, fontSize: 13 }}
          >
            Request access
          </button>
        </p>

        {/* Footer links */}
        <div style={{
          marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid var(--outline-variant)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.5,
        }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
            <a href="#" className="text-label-caps" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" className="text-label-caps" style={{ color: 'var(--on-surface-variant)', textDecoration: 'none' }}>Terms of Service</a>
          </div>
          <div className="text-label-caps" style={{ color: 'var(--on-surface-variant)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>verified_user</span>
            SECURE AUTHENTICATION
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
