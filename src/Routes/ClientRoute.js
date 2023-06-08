import React, { Fragment } from "react";
import Footer from "../Inc/Footer";
import Header from "../Inc/Header";
import { Route, Routes } from "react-router-dom";
import Index from "../Pages/Index";
import Tutorial from "../Pages/Client/Tutorial";
import Contact from "../Pages/Client/Contact";
import About from "../Pages/Client/About";

const ClientRoute = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default ClientRoute;
