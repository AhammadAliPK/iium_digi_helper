import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@iium-portal/ui';
import { Input } from '@iium-portal/ui';
import { Label } from '@iium-portal/ui';
import { ThemeToggle } from '../components/ThemeToggle';

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const response = await fetch('http://localhost:3001/api/v1/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        // Store user info in localStorage for client-side access
        localStorage.setItem('user', JSON.stringify(data.data.user));
        // Navigate based on role
        switch (data.data.user.role) {
          case 'REQUESTER':
            navigate('/dashboard/requester');
            break;
          case 'HANDLER':
            navigate('/dashboard/handler');
            break;
          case 'ADMIN':
            navigate('/dashboard/admin');
            break;
          default:
            navigate('/dashboard');
        }
      } else {
        setErrors({
          general: data.error?.message || 'Login failed. Please try again.'
        });
      }
    } catch (error) {
      setErrors({
        general: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--iium-deep)' }}>
      {/* Header */}
      <header style={{ padding: '24px 0', borderBottom: '1px solid var(--iium-border-subtle)' }}>
        <div className="dls-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px' }}>
            IIUM <span style={{ color: 'var(--iium-gold)' }}>DIGITAL</span>
          </h1>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <ThemeToggle />
            <Button variant="ghost" onClick={() => navigate('/register')}>
              Create an account
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dls-container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="iium-card" style={{ maxWidth: '450px', margin: '0 auto' }}>
          <span className="brand-label">Welcome Back</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', marginBottom: '16px' }}>
            Log In
          </h2>
          <p style={{ color: 'var(--iium-text-secondary)', marginBottom: '32px' }}>
            Access the IIUM Software Change Request Portal
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* General Error */}
            {errors.general && (
              <div style={{
                padding: '16px',
                borderRadius: 'var(--iium-radius-sm)',
                backgroundColor: 'rgba(255, 77, 77, 0.1)',
                border: '1px solid rgba(255, 77, 77, 0.3)',
                color: '#ff4d4d',
                fontSize: '14px'
              }}>
                {errors.general}
              </div>
            )}

            {/* Email Field */}
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@iium.edu.my"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                autoFocus
              />
              {errors.email && (
                <p style={{ color: '#ff4d4d', fontSize: '12px', marginTop: '8px' }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <Label htmlFor="password" style={{ marginBottom: 0 }}>Password</Label>
                <a
                  href="/forgot-password"
                  style={{ color: 'var(--iium-teal)', fontSize: '12px', textDecoration: 'none' }}
                >
                  Forgot password?
                </a>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
              />
              {errors.password && (
                <p style={{ color: '#ff4d4d', fontSize: '12px', marginTop: '8px' }}>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="default"
              disabled={isLoading}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </Button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '24px', color: 'var(--iium-text-muted)', fontSize: '14px' }}>
            Don't have an account?{' '}
            <a
              href="/register"
              style={{ color: 'var(--iium-teal)', textDecoration: 'underline' }}
            >
              Create an account
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
