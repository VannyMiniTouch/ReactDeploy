import React, { Fragment } from "react";
import Footer from "../Inc/Footer";
import Header from "../Inc/Header";
import { Route, Routes } from "react-router-dom";
import Index from "../Pages/Index";
import Tutorial from "../Pages/Client/Tutorial";

const ClientRoute = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default ClientRoute;
