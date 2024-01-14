import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import axios from "axios";

import LoginPage from "./Pages/LoginPage.jsx";
import AdminDashboardPage from "./Pages/AdminDashboardPage";
import AddCustomerPage from "./Pages/AddCustomerPage";
import CenterReportPage from "./Pages/CenterReportPage";

import AddSalesExecutivePage from "./Pages/AddSalesExecutivePage";
import SalesExecutiveDashboardPage from "./Pages/SalesExecutiveDashboardPage";

axios.defaults.baseURL = "http://localhost:5000";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/center" element={<CenterReportPage />} />
          <Route
            path="/admin/addsalesexec"
            element={<AddSalesExecutivePage />}
          />
          <Route path="/sales-exec/addcustomer" element={<AddCustomerPage />} />
          <Route
            path="/sales-exec/dashboard"
            element={<SalesExecutiveDashboardPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
