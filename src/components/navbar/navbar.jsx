import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { logout } from "../../reducers/authSlice";
import { getProfile } from "../../reducers/profileSlice";
import Logo from "../../Assets/logo.png";

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
  const handelLogin = () => {
    navigate("/login");
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

  const handleHomenav = () => {
    navigate("/");
  }

  return (
    <nav className="bg-white p-4 flex items-center justify-between shadow-lg">
      <div className="flex items-center space-x-9 pl-2">
        <img src={Logo} alt="Logo" className="max-w-[100px] cursor-pointer" onClick={handleHomenav} />
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden xl:hidden">
        <Button onClick={handleMenuToggle} aria-label="Menu">
          <MenuIcon />
        </Button>
      </div>

      {/* Desktop Menu */}

      <div
        className={`space-x-8 lg:flex xl:flex hidden ${
          isMenuOpen ? "flex" : "hidden"
          
        }`} 
        style={{color:"#0C76B8"}}
      >
        <NavLink
          to="/"
          className="flex items-center text-xl active:text-[#E76311] focus:text-[#E76311]"
          onClick={handleMenuClose}
        >
          Home
        </NavLink>

        <NavLink
          to="/taxvat"
          className="flex items-center text-xl active:text-[#E76311] focus:text-[#E76311]"
          onClick={handleMenuClose}
        >
          Business & TAX Services
        </NavLink>
        <NavLink
          to="/bazar"
          className="flex items-center text-xl active:text-[#E76311] focus:text-[#E76311]"
          onClick={handleMenuClose}
        >
          Bazar
        </NavLink>
        <NavLink
          to="/privateWorks"
          className="flex items-center text-xl active:text-[#E76311] focus:text-[#E76311]"
          onClick={handleMenuClose}
        >
          Private Works
        </NavLink>
        <NavLink
          to="/results"
          className="flex items-center text-xl active:text-[#E76311] focus:text-[#E76311]"
          onClick={handleMenuClose}
        >
          Result
        </NavLink>
        <NavLink
          to="/pricing"
          className="flex items-center text-xl active:text-[#E76311] focus:text-[#E76311]"
          onClick={handleMenuClose}
        >
          Pricing
        </NavLink>
        
        
        {access_token ? (
          <div className="hidden lg:block xl:block">
            <Button
              onClick={handleProfileClick}
              aria-label="Profile"
              className="text-black text-xl mr-4 p-3"
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
                <NavLink to="/profile" className="text-black text-xl">
                  My Profile
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <div className="items-center space-x-6 hidden lg:block xl:block">
            <Button
              className="bg-[#F48023] text-white px-4 py-2 rounded-lg"
              variant="contained"
              startIcon={<AddCircleIcon />}
              onClick={handleRegister}
            >
              Register
            </Button>
            <Button
              to="/login"
              className="text-white bg-lime-600 px-4 py-2 rounded-lg"
              variant="contained"
              onClick={handelLogin}
            >
              Login
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Menu NavLinks */}
      {isMenuOpen && (
        <div className="lg:hidden fixed w-72 top-0 right-0 bottom-0 bg-main flex flex-col items-center p-4 z-10">
          <div className="flex justify-end w-full">
            <Button onClick={handleMenuClose} aria-label="Close">
              <CloseIcon style={{ color: "white" }} />
            </Button>
          </div>
          <NavLink to="/" className="text-white my-2" onClick={handleMenuClose}>
            Home
          </NavLink>
          <NavLink
            to="/results"
            className="text-white my-2"
            onClick={handleMenuClose}
          >
            Result
          </NavLink>
          <NavLink
            to="/pricing"
            className="text-white my-2"
            onClick={handleMenuClose}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/bazar"
            className="text-white my-2"
            onClick={handleMenuClose}
          >
            Bazar
          </NavLink>
          <NavLink
            to="/privateWorks"
            className="text-white my-2"
            onClick={handleMenuClose}
          >
            Private Works
          </NavLink>
          <NavLink
            to="/taxvat"
            className="text-white my-2"
            onClick={handleMenuClose}
          >
            Tax & VAT Services
          </NavLink>
          {access_token ? (
            <div className="flex flex-col">
              <NavLink
                to="/profile"
                className="text-white"
                onClick={handleMenuClose}
              >
                My Profile
              </NavLink>

              <Button
                onClick={handleLogout}
                className="text-white border rounded-lg bg-[#6866fd] mt-2"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex flex-col">
              <NavLink
                to="/login"
                className="text-white my-2 bg-lime-600 p-3 rounded-md"
                onClick={handleMenuClose}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="text-white my-2 bg-[#F48023] p-3 rounded-lg"
                onClick={handleMenuClose}
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
