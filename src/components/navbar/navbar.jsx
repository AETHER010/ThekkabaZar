import React from "react";

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

      <div className="space-x-6">
        <a href="#home" className="text-black">
          Home
        </a>
        <a href="#result" className="text-black">
          Result
        </a>
        <a href="#pricing" className="text-black">
          Pricing
        </a>
        <a href="#bazar" className="text-black">
          Bazar
        </a>
        <a href="#privateWorks" className="text-black">
          Private Works
        </a>
        <a href="#taxvat" className="text-black">
          Tax & VAT Services
        </a>
      </div>

      <div className="flex items-center space-x-6 ">
        <button className="bg-orange-400 text-black px-4 py-2 rounded-lg">
          Register
        </button>
        <button className="text-black bg-lime-600 px-4 py-2 rounded-lg">
          Login
        </button>
      </div>
    </nav>
  );
}

export default navbar;
