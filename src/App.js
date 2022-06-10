import React, { Component, useState } from "react";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  function togglerMode() {
    setDarkMode((prevState) => !prevState);
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} togglerMode={togglerMode} />
      <Home darkMode={darkMode} />
    </div>
  );
}

export default App;
