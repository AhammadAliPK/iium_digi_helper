import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './pages';
import { RegisterPage } from './pages';
import { AdminDashboard } from './pages';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard/admin" element={<AdminDashboard />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
