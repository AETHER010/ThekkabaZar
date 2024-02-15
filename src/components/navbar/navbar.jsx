import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white p-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center space-x-9 pl-2">
        <img
          src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/madara-uchiha-naruto-featured.jpg"
          alt="Logo"
          className="h-8 w-8"
        />
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <Button onClick={handleMenuToggle} aria-label="Menu">
          <MenuIcon />
        </Button>
      </div>

      {/* Desktop Menu */}
      <div
        className={`space-x-8 lg:flex hidden ${isMenuOpen ? "flex" : "hidden"}`}
      >
        <Link to="/" className="text-black" onClick={handleMenuClose}>
          Home
        </Link>
        <Link to="/results" className="text-black" onClick={handleMenuClose}>
          Result
        </Link>
        <Link to="/pricing" className="text-black" onClick={handleMenuClose}>
          Pricing
        </Link>
        <Link to="/bazar" className="text-black" onClick={handleMenuClose}>
          Bazar
        </Link>
        <Link
          to="/privateWorks"
          className="text-black"
          onClick={handleMenuClose}
        >
          Private Works
        </Link>
        <Link to="/taxvat" className="text-black" onClick={handleMenuClose}>
          Tax & VAT Services
        </Link>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="lg:hidden fixed w-72 top-0 right-0 bottom-0 bg-main flex flex-col items-center p-4 z-10">
          <div className="flex justify-end w-full">
            <Button onClick={handleMenuClose} aria-label="Close">
              <CloseIcon style={{ color: "white" }} />
            </Button>
          </div>
          <Link to="/" className="text-white my-2" onClick={handleMenuClose}>
            Home
          </Link>
          <Link
            to="/results"
            className="text-white my-2"
            onClick={handleMenuClose}
          >
            Result
          </Link>
          <Link
            to="/pricing"
            className="text-white my-2"
            onClick={handleMenuClose}
          >
            Pricing
          </Link>
          <Link
            to="/bazar"
            className="text-white my-2"
            onClick={handleMenuClose}
          >
            Bazar
          </Link>
          <Link
            to="/privateWorks"
            className="text-white my-2"
            onClick={handleMenuClose}
          >
            Private Works
          </Link>
          <Link
            to="/taxvat"
            className="text-white my-2"
            onClick={handleMenuClose}
          >
            Tax & VAT Services
          </Link>
        </div>
      )}

      <div className="items-center space-x-6 lg:flex hidden">
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
      </div>
    </nav>
  );
}

export default Navbar;
