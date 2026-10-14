import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './translate/i18n';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <ToastContainer 
      position="bottom-center"
      autoClose={1000}
      closeOnClick
      theme="dark"
      hideProgressBar
      />
    </BrowserRouter>
  </React.StrictMode>,
)

