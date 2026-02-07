import React from "react";
import { Navigate } from "react-router-dom";

const PrivateStuff = ({ children }) => {
  const isAuthenticate = true;

  return isAuthenticate ? children : <Navigate to="/"></Navigate>;
};

export { PrivateStuff };
