import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({value, onChange}) => {
  return (
    <header className="bg-white text-white shadow-md sticky top-0 z-50 px-16">
      <div className="py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-blue-700 tracking-wide">
          MyNews
        </Link>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search News..."
          className=" px-4 py-2 border text-black border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
      </div>
    </header>
  );
};

export default Navbar;
