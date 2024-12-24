import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from '../pages/Login';
import DashboardPage from '../pages/DashboardPage';
import UsersPage from '../pages/UsersPage';
import SettingsPage from '../pages/SettingsPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute><UsersPage /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><SettingsPage /></PrivateRoute>} /> */}
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/" element={<PublicRoute><DashboardPage /></PublicRoute>} />
        <Route path="/users" element={<PublicRoute><UsersPage /></PublicRoute>} />
        <Route path="/settings" element={<PublicRoute><SettingsPage /></PublicRoute>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
