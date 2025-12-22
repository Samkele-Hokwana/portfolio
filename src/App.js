import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import About from "./routes/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/Contact" element = {<Contact />} />
        <Route path="/About" element = {<About />} />
        <Route path="/Projects" element = {<Projects />} />
      </Routes>
    </>
  );
}

export default App;
