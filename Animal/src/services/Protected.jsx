// src/services/Protected.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const auth = localStorage.getItem("token");
  return auth ? <Outlet /> : <Navigate to="/Login" />;
};

export default Protected;
