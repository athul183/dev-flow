import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: just navigate to login
    alert('Account created! Please log in with dev@devflow.com / password123');
    navigate('/login');
  };

  return (
    <div className="auth-page">
      {/* BG blobs */}
      <div className="auth-bg-blob" style={{ top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'rgba(208,188,255,0.08)' }} />
      <div className="auth-bg-blob" style={{ bottom: '-10%', right: '-10%', width: '30%', height: '30%', background: 'rgba(137,206,255,0.08)' }} />

      {/* Code snippet decoration */}
      <div style={{
        position: 'fixed', bottom: 'var(--spacing-lg)', left: 'var(--spacing-lg)',
        opacity: 0.2, fontFamily: 'var(--font-space-grotesk)', fontSize: 11,
        color: 'var(--primary)', pointerEvents: 'none', display: 'none',
      }}>
        <pre>{`const devFlow = {
  status: "auth_v2",
  env: "production",
  encrypt: "AES-256"
};`}</pre>
      </div>

      <div className="auth-container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{
            width: 48, height: 48, background: 'var(--primary)', borderRadius: 'var(--radius-default)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--spacing-md)',
            boxShadow: '0 0 20px rgba(208,188,255,0.3)',
          }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--on-primary)', fontSize: 28, fontVariationSettings: "'FILL' 1" }}>terminal</span>
          </div>
          <div className="text-label-caps" style={{ color: 'var(--primary)', letterSpacing: '0.2em' }}>DEVFLOW</div>
        </div>

        {/* Card */}
        <div className="auth-card">
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h1 className="text-h2" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-xs)' }}>Create your account</h1>
            <p className="text-body-sm" style={{ color: 'var(--on-surface-variant)' }}>Enter your details to join the workflow.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {/* Full Name */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
              <label className="text-label-caps" style={{ color: 'var(--on-surface-variant)', textTransform: 'uppercase' }} htmlFor="fullName">Full Name</label>
              <div className="input-with-icon">
                <span className="material-symbols-outlined input-icon" style={{ fontSize: 18 }}>person</span>
                <input
                  id="fullName"
                  type="text"
                  className="input-field"
                  style={{ paddingLeft: 'var(--spacing-xl)', background: 'var(--surface-dim)' }}
                  placeholder="Linus Torvalds"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
              <label className="text-label-caps" style={{ color: 'var(--on-surface-variant)', textTransform: 'uppercase' }} htmlFor="signupEmail">Email Address</label>
              <div className="input-with-icon">
                <span className="material-symbols-outlined input-icon" style={{ fontSize: 18 }}>mail</span>
                <input
                  id="signupEmail"
                  type="email"
                  className="input-field"
                  style={{ paddingLeft: 'var(--spacing-xl)', background: 'var(--surface-dim)' }}
                  placeholder="dev@flow.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
              <label className="text-label-caps" style={{ color: 'var(--on-surface-variant)', textTransform: 'uppercase' }} htmlFor="signupPassword">Password</label>
              <div className="input-with-icon">
                <span className="material-symbols-outlined input-icon" style={{ fontSize: 18 }}>lock</span>
                <input
                  id="signupPassword"
                  type="password"
                  className="input-field"
                  style={{ paddingLeft: 'var(--spacing-xl)', background: 'var(--surface-dim)' }}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                width: '100%', background: 'var(--primary)', color: 'var(--on-primary)',
                border: 'none', borderRadius: 'var(--radius-default)', padding: '12px var(--spacing-md)',
                fontSize: 14, fontWeight: 700, cursor: 'pointer', marginTop: 'var(--spacing-sm)',
                boxShadow: '0 4px 15px rgba(208,188,255,0.2)', transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--primary-container)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--primary)')}
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div style={{ position: 'relative', margin: 'var(--spacing-lg) 0', display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1, borderTop: '1px solid rgba(73,68,84,0.3)' }} />
            <span className="text-label-caps" style={{ margin: '0 var(--spacing-md)', color: 'rgba(149,142,160,0.6)' }}>OR</span>
            <div style={{ flex: 1, borderTop: '1px solid rgba(73,68,84,0.3)' }} />
          </div>

          {/* GitHub */}
          <button
            type="button"
            style={{
              width: '100%', background: 'rgba(49,53,58,0.4)', border: '1px solid rgba(73,68,84,0.5)',
              borderRadius: 'var(--radius-default)', padding: '12px', display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: 8, cursor: 'pointer', color: 'var(--on-surface)', fontSize: 14, fontWeight: 500,
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface-variant)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(49,53,58,0.4)')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Sign up with GitHub</span>
          </button>

          <p className="text-body-sm" style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)', color: 'var(--on-surface-variant)' }}>
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', textDecoration: 'underline', fontSize: 13 }}
            >
              Log in
            </button>
          </p>
        </div>

        {/* Footer */}
        <footer style={{ marginTop: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-md)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
            <a href="#" className="text-body-sm" style={{ color: 'var(--outline)', textDecoration: 'underline' }}>Terms of Service</a>
            <a href="#" className="text-body-sm" style={{ color: 'var(--outline)', textDecoration: 'underline' }}>Privacy Policy</a>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '4px 12px',
            background: 'var(--surface-container-high)', border: '1px solid rgba(73,68,84,0.2)',
            borderRadius: 'var(--radius-full)',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--tertiary)', animation: 'pulse 2s infinite' }} />
            <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 10, color: 'var(--on-surface-variant)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Systems Operational
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SignUpPage;
