import React from "react";
import { Routes, Route } from "react-router-dom";
import ClientRoute from "./ClientRoute";
import AdminRoute from "./AdminRoute"
import NotFound from "../Pages/NotFound";

const WebRoute = () => {
  return (
    <React.Fragment>
      <Routes>
          <Route path="/*" element={<ClientRoute />} />
          <Route path="/Admin/*" element={< AdminRoute/>} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default WebRoute;
