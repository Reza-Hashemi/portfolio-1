import React from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/auth");
  };
  return (
    <nav className="justify-between">
      <div className="font-bold w-10 h-10 ml-3 text-white fixed mt-2">
        <Link to="/">PORTFOLIO.</Link>
      </div>
      <div className="text-white flex gap-3 mr-6 fixed right-0 mt-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Projects">Projects</Link>
        <div className="bg-yellow-900 px-2 rounded-lg">
          <button onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
