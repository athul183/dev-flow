import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="auth-page" style={{ background: '#0B0E11' }}>
      {/* BG blobs */}
      <div className="auth-bg-blob" style={{ top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'rgba(208,188,255,0.08)' }} />
      <div className="auth-bg-blob" style={{ bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'rgba(137,206,255,0.08)' }} />

      <main style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 440 }}>
        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 'var(--spacing-lg)', gap: 'var(--spacing-xs)' }}>
          <div style={{
            width: 48, height: 48, background: 'var(--primary)', borderRadius: 'var(--radius-default)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--spacing-sm)',
          }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--on-primary)', fontSize: 28 }}>terminal</span>
          </div>
          <h1 className="text-label-caps" style={{ color: 'var(--primary)', letterSpacing: '0.15em' }}>DEVFLOW</h1>
        </div>

        {/* Card */}
        <div style={{
          background: 'rgba(21, 25, 29, 0.7)', backdropFilter: 'blur(20px)', border: '1px solid #2D333B',
          borderRadius: 12, padding: 'var(--spacing-xl)', boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
        }}>
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 className="text-h2" style={{ color: 'var(--on-surface)', marginBottom: 'var(--spacing-sm)' }}>Reset your password</h2>
            <p className="text-body-sm" style={{ color: 'var(--on-surface-variant)' }}>
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          {sent ? (
            <div style={{
              padding: 'var(--spacing-md)', background: 'rgba(208,188,255,0.1)',
              border: '1px solid var(--primary)', borderRadius: 'var(--radius-default)',
              color: 'var(--primary)', fontSize: 14,
            }}>
              ✓ Reset link sent! Check your email inbox.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
                <label className="text-label-caps" style={{ color: 'var(--outline)', textTransform: 'uppercase' }} htmlFor="resetEmail">
                  Email Address
                </label>
                <div className="input-with-icon">
                  <span className="material-symbols-outlined input-icon" style={{ fontSize: 18 }}>mail</span>
                  <input
                    id="resetEmail"
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
              <button
                type="submit"
                style={{
                  width: '100%', background: 'var(--primary-container)', color: 'var(--on-primary-container)',
                  border: 'none', borderRadius: 'var(--radius-default)', padding: 'var(--spacing-sm) var(--spacing-md)',
                  fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: 'var(--spacing-sm)', transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--primary-container)')}
              >
                <span>Send Reset Link</span>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </button>
            </form>
          )}

          {/* Back to login */}
          <div style={{ marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid var(--outline-variant)', display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={() => navigate('/login')}
              style={{
                background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center',
                gap: 'var(--spacing-xs)', color: 'var(--on-surface-variant)', fontSize: 13, transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--on-surface-variant)')}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
              <span>Back to Login</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: 'var(--spacing-lg)', textAlign: 'center' }}>
          <p className="text-mono-code" style={{ color: 'var(--outline-variant)' }}>© 2024 DevFlow Systems. v2.4.0</p>
        </div>
      </main>

      {/* Support card */}
      <div style={{
        position: 'fixed', bottom: 'var(--spacing-lg)', right: 'var(--spacing-lg)', width: 256,
        padding: 'var(--spacing-md)', background: 'rgba(21, 25, 29, 0.7)', backdropFilter: 'blur(20px)',
        border: '1px solid #2D333B', borderRadius: 'var(--radius-default)',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)' }}>
          <div style={{ background: 'rgba(202,128,30,0.2)', padding: 'var(--spacing-xs)', borderRadius: 'var(--radius-sm)' }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--tertiary)', fontSize: 20 }}>help_outline</span>
          </div>
          <div>
            <p className="text-label-caps" style={{ color: 'var(--tertiary)', fontSize: 10, textTransform: 'uppercase', marginBottom: 'var(--spacing-xs)' }}>Support</p>
            <p className="text-body-sm" style={{ color: 'var(--on-surface-variant)' }}>
              Having trouble? Contact our engineering team for manual recovery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
