import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from "./components/navbar"
import HomePage from "./routes/home-page.jsx"

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
