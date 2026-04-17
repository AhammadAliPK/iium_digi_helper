import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@iium-portal/ui';
import { Input } from '@iium-portal/ui';
import { Label } from '@iium-portal/ui';
import { Select } from '@iium-portal/ui';
import { ThemeToggle } from '../components/ThemeToggle';

interface FormErrors {
  email?: string;
  password?: string;
  name?: string;
  department?: string;
  general?: string;
}

const departmentOptions = [
  { value: 'academic-affairs', label: 'Academic Affairs' },
  { value: 'ict-department', label: 'ICT Department' },
  { value: 'finance', label: 'Finance Division' },
  { value: 'human-resources', label: 'Human Resources' },
  { value: 'student-affairs', label: 'Student Affairs' },
  { value: 'research', label: 'Research Centre' },
  { value: 'library', label: 'Library' },
  { value: 'international-office', label: 'International Office' },
  { value: 'quality-assurance', label: 'Quality Assurance' },
  { value: 'other', label: 'Other' }
];

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    department: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (formData.email.length < 5) {
      newErrors.email = 'Email must be at least 5 characters';
    } else if (formData.email.length > 255) {
      newErrors.email = 'Email must not exceed 255 characters';
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (formData.password.length > 128) {
      newErrors.password = 'Password must not exceed 128 characters';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.length > 255) {
      newErrors.name = 'Name must not exceed 255 characters';
    }

    // Department validation
    if (!formData.department) {
      newErrors.department = 'Department is required';
    } else if (formData.department.length < 2) {
      newErrors.department = 'Department must be at least 2 characters';
    } else if (formData.department.length > 255) {
      newErrors.department = 'Department must not exceed 255 characters';
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
      const response = await fetch('http://localhost:3001/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setErrors({
          general: data.error?.message || 'Registration failed. Please try again.'
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (success) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--iium-deep)' }}>
        <div className="dls-container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="iium-card" style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>✅</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', marginBottom: '16px' }}>
              Registration Successful!
            </h2>
            <p style={{ color: 'var(--iium-text-secondary)', marginBottom: '24px' }}>
              Your account has been created. You can now log in with your credentials.
            </p>
            <p style={{ color: 'var(--iium-text-muted)', fontSize: '14px' }}>
              Redirecting to login page...
            </p>
          </div>
        </div>
      </div>
    );
  }

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
            <Button variant="ghost" onClick={() => navigate('/login')}>
              Already have an account?
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dls-container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="iium-card" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <span className="brand-label">Create Account</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', marginBottom: '16px' }}>
            Register
          </h2>
          <p style={{ color: 'var(--iium-text-secondary)', marginBottom: '32px' }}>
            Create your account to access the IIUM Software Change Request Portal
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

            {/* Name Field */}
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && (
                <p style={{ color: '#ff4d4d', fontSize: '12px', marginTop: '8px' }}>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@iium.edu.my"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && (
                <p style={{ color: '#ff4d4d', fontSize: '12px', marginTop: '8px' }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Department Field */}
            <div>
              <Label htmlFor="department">Department *</Label>
              <Select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className={errors.department ? 'error' : ''}
              >
                <option value="">Select Department</option>
                {departmentOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
              {errors.department && (
                <p style={{ color: '#ff4d4d', fontSize: '12px', marginTop: '8px' }}>
                  {errors.department}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
              />
              {errors.password && (
                <p style={{ color: '#ff4d4d', fontSize: '12px', marginTop: '8px' }}>
                  {errors.password}
                </p>
              )}
              <p style={{ color: 'var(--iium-text-muted)', fontSize: '12px', marginTop: '8px' }}>
                Must be at least 8 characters with uppercase, lowercase, and number
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="default"
              disabled={isLoading}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '24px', color: 'var(--iium-text-muted)', fontSize: '14px' }}>
            Already have an account?{' '}
            <a
              href="/login"
              style={{ color: 'var(--iium-teal)', textDecoration: 'underline' }}
            >
              Log in
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
