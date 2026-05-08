import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

// App Pages
import DashboardPage from './pages/DashboardPage';
import TasksPage from './pages/tasks/TasksPage';
import KanbanPage from './pages/kanban/KanbanPage';
import InsightsPage from './pages/insights/InsightsPage';
import CalendarPage from './pages/calendar/CalendarPage';

// Protected route wrapper
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Protected app routes */}
      <Route path="/dashboard" element={
        <ProtectedRoute><DashboardPage /></ProtectedRoute>
      } />
      <Route path="/calendar" element={
        <ProtectedRoute><CalendarPage /></ProtectedRoute>
      } />
      <Route path="/tasks" element={
        <ProtectedRoute><TasksPage /></ProtectedRoute>
      } />
      <Route path="/board" element={
        <ProtectedRoute><KanbanPage /></ProtectedRoute>
      } />
      <Route path="/insights" element={
        <ProtectedRoute><InsightsPage /></ProtectedRoute>
      } />

      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
