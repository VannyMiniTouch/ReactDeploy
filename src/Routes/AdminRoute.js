import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "../Pages/Admin/Articles/Create";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/create-post" element={<Create />} />
    </Routes>
  );
};

export default AdminRoute;
