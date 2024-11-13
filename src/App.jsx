import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <Router>
      <div className="h-screen w-screen bg-slate-800 relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/auth"
            element={<Auth />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
