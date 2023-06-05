import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import WebRoute from "./Routes/WebRoute";
// import Footer from "./Inc/Footer";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename="/ReactDeploy">
        <WebRoute />
      </BrowserRouter>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
