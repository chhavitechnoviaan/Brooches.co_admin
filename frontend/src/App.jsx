import React from "react";
import AdminSignup from './admin/Register'
import AdminDashboard from './admin/AdminDashboard'
import AdminLogin from "./admin/Login";
import ForgotPassword from "./admin/ForgotPassword";
import ResetPassword from "./admin/ResetPassword";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/register" element={<AdminSignup />} />
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/reset-password/:token" element={<ResetPassword />}/>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  )
}

export default App
