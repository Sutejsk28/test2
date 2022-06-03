import React from 'react';
import ReactDOM from 'react-dom/client';import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import HomePage from "./routes/home-page";
import Login from "./routes/login";
import Signup from "./routes/signup";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  
    <Route path="/" element={<App />} />
    <Route path="login" element={<Login />} />
    <Route path="signup" element={<Signup />} />
    <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Error 404 Not Found!</p>
            </main>
          }
    />

  </Routes>
  </BrowserRouter>

);
