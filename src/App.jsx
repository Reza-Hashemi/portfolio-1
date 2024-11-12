import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Projects";

const App = () => {
  return (
    <Router>
      <div className="h-screen w-screen relative">
        <Navbar />
        <Home />
        <About />
        <hr className="border-t-2 border-slate-600"/>
        <Skills />
      </div>
    </Router>
  );
};

export default App;
