import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import LoginPage from "./Pages/LoginPage.jsx";
import AdminDashboardPage from "./Pages/AdminDashboardPage";
import AddSalesExecutivePage from "./Pages/AddSalesExecutivePage";
import AddCustomerPage from "./Pages/AddCustomerPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route
            path="/admin/addsalesexec"
            element={<AddSalesExecutivePage />}
          />
          <Route path="/sales-exec/addcustomer" element={<AddCustomerPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
