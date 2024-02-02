import React from "react";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="bg-white p-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center space-x-9 pl-2">
        <img
          src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/madara-uchiha-naruto-featured.jpg"
          alt="Logo"
          className="h-8 w-8"
        />
      </div>

      <div className="space-x-8">
        <Link to="/" className="text-black">
          Home
        </Link>
        <Link to="/results" className="text-black">
          Result
        </Link>
        <Link to="/pricing" className="text-black">
          Pricing
        </Link>
        <Link to="/bazar" className="text-black">
          Bazar
        </Link>
        <Link to="/privateWorks" className="text-black">
          Private Works
        </Link>
        <Link to="/taxvat" className="text-black">
          Tax & VAT Services
        </Link>
      </div>

      <div className="flex items-center space-x-6 ">
        <Button
          className="bg-[#F48023] text-black px-4 py-2 rounded-lg"
          variant="contained"
          startIcon={<AddCircleIcon />}
        >
          Register
        </Button>
        <Link
          to="/login"
          className="text-black bg-lime-600 px-4 py-2 rounded-lg"
        >
          Login
        </Link>

        {/* <button className="bg-orange-400 text-black px-4 py-2 rounded-lg">
          Register
        </button>
        <button className="text-black bg-lime-600 px-4 py-2 rounded-lg">
          Login
        </button> */}
      </div>
    </nav>
  );
}

export default navbar;
