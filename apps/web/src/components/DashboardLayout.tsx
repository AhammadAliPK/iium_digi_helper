import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--iium-deep)' }}>
      {/* Header */}
      <header style={{ padding: '24px 0', borderBottom: '1px solid var(--iium-border-subtle)' }}>
        <div className="dls-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontFamily: 'Roboto Slab, serif', fontSize: '20px', fontWeight: 700 }}>
            IIUM <span style={{ color: 'var(--iium-gold)' }}>DIGITAL</span>
          </h1>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <ThemeToggle />
            <button
              onClick={handleLogout}
              style={{
                padding: '10px 20px',
                borderRadius: '8px',
                border: '1px solid var(--iium-border-subtle)',
                background: 'transparent',
                color: 'var(--iium-text-primary)',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 200ms ease',
                fontFamily: 'Inter, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--iium-glass)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
}
