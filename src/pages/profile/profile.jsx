import React, { useState } from "react";
import ProfileSection from "./profilecomponents/profileSection";
import EditProfile from "./profilecomponents/editProfile";
import ChangePassword from "./profilecomponents/changePassword";
import SaveBids from "./profilecomponents/savedBids";
import ProfileInterest from "./profilecomponents/profileinterest";
import { logout } from "../../reducers/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [activeMenu, setActiveMenu] = useState("profile");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderRightComponent = () => {
    switch (activeMenu) {
      case "profile":
        return <ProfileSection />;
      case "editProfile":
        return <EditProfile />;
      case "changePassword":
        return <ChangePassword />;
      case "saveBids":
        return <SaveBids />;
      case "Interest":
        return <ProfileInterest />;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="flex">
      {/* Left Side - Menu */}
      <div className="w-1/4 p-4 border rounded-lg m-5">
        <ul>
          <li
            onClick={() => setActiveMenu("profile")}
            className={`cursor-pointer p-3 ${
              activeMenu === "profile" && "bg-main text-white rounded-lg"
            }`}
          >
            Profile Section
          </li>
          <li
            onClick={() => setActiveMenu("editProfile")}
            className={`cursor-pointer p-3 ${
              activeMenu === "editProfile" && "bg-main text-white rounded-lg"
            }`}
          >
            Edit Profile
          </li>
          <li
            onClick={() => setActiveMenu("Interest")}
            className={`cursor-pointer p-3 ${
              activeMenu === "Interest" && "bg-main text-white rounded-lg"
            }`}
          >
            Interest
          </li>
          <li
            onClick={() => setActiveMenu("changePassword")}
            className={`cursor-pointer p-3 ${
              activeMenu === "changePassword" && "bg-main text-white rounded-lg"
            }`}
          >
            Change Password
          </li>
          <li
            onClick={() => setActiveMenu("saveBids")}
            className={`cursor-pointer p-3 ${
              activeMenu === "saveBids" && "bg-main text-white rounded-lg"
            }`}
          >
            Save Bids
          </li>
          <div className="border-b-2 mt-6 border-gray-700"></div>
          <li onClick={handleLogout} className="cursor-pointer p-3">
            Logout
          </li>
        </ul>
      </div>

      {/* Right Side - Content */}
      <div className="w-3/4 p-4">{renderRightComponent()}</div>
    </div>
  );
}

export default Profile;
