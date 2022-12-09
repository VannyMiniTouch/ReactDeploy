
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import WebRoute from './Routes/WebRoute';
import Header from './Inc/Header'
import Footer from './Inc/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter basename='/ReactDeploy'>
        <WebRoute />
      </BrowserRouter>
      <Footer />
    </React.Fragment>

  );
}

export default App;
