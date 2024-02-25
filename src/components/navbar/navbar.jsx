import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { logout } from "../../reducers/authSlice";
import { getProfile } from "../../reducers/profileSlice";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { access_token, username } = useSelector((state) => state.users);
  const { data } = useSelector((state) => state.profile);

  const [profileAnchorEl, setProfileAnchorEl] = useState(null);

  useEffect(() => {
    dispatch(getProfile({ access_token: access_token }));
  }, [dispatch]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleProfile = () => {
    // Handle the profile button click logic
    // You may want to redirect to the user's profile page or show a dropdown with profile options.
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    handleMenuClose();
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
      {access_token ? (
        <div className="hidden lg:block">
          <Button
            onClick={handleProfileClick}
            aria-label="Profile"
            className="text-black mr-4 p-3 text-xl"
            startIcon={<AccountCircleIcon className="text-xl" />}
          >
            {data.username}
          </Button>
          <Menu
            anchorEl={profileAnchorEl}
            open={Boolean(profileAnchorEl)}
            onClose={handleProfileClose}
          >
            <MenuItem onClick={handleProfileClose}>
              <Link to="/profile" className="text-black">
                My Profile
              </Link>
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
        <div className="items-center space-x-6 hidden lg:block">
          <Button
            className="bg-[#F48023] text-black px-4 py-2 rounded-lg"
            variant="contained"
            startIcon={<AddCircleIcon />}
            onClick={handleRegister}
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
      )}

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
          {access_token ? (
            <div className="flex flex-col">
              <Link
                to="/profile"
                className="text-white"
                onClick={handleMenuClose}
              >
                My Profile
              </Link>

              <Button
                onClick={handleLogout}
                className="text-white border rounded-lg bg-[#6866fd] mt-2"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex flex-col">
              <Link
                to="/login"
                className="text-white my-2 bg-lime-600 p-3 rounded-md"
                onClick={handleMenuClose}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white my-2 bg-[#F48023] p-3 rounded-lg"
                onClick={handleMenuClose}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
