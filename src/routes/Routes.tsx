import React from "react";

import { Route, BrowserRouter,Routes as Router } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
