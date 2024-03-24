import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvide from "./context/AuthContext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvide>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvide>
  </React.StrictMode>
);
