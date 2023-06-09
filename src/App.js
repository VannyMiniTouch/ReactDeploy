import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import WebRoute from "./Routes/WebRoute";
import Scence from "./Scence";
// import Footer from "./Inc/Footer";

function App() {
  // return <Scence />;

   return (
    <React.Fragment>
      <BrowserRouter basename="/ReactDeploy">
        <WebRoute />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
