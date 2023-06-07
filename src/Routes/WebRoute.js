import React from "react";
import { Routes, Route } from "react-router-dom";
import ClientRoute from "./ClientRoute";
import AdminRoute from "./AdminRoute"
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";

const WebRoute = () => {
  return (
    <React.Fragment>
      <Routes>
          <Route path="/*" element={<ClientRoute />} />
          <Route path="/admin/*" element={< AdminRoute/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default WebRoute;
