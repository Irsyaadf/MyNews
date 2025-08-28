import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white text-white shadow-md sticky top-0 z-50 px-16">
      <div className="py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-blue-700 tracking-wide">
          MyNews
        </Link>

        <nav className="text-black flex space-x-8 font-semibold">
          <Link to={"/"} className="hover:text-blue-700">Home</Link>
          <Link to={"/about"} className="hover:text-blue-700">About</Link>
          <Link to={"/article"} className="hover:text-blue-700">Article</Link>
        </nav>

        
      </div>
    </header>
  );
};

export default Navbar;
