import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { getProfile } from "../../../reducers/profileSlice";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const ProfileSection = () => {
  const { access_token } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.profile);

  useEffect(() => {
    if (access_token) {
      dispatch(getProfile({ access_token: access_token }));
    }
  }, [access_token, dispatch]);

  return (
    <div>
      <div className="flex flex-col border mx-4 my-5 p-5">
        <h1 className="text-xl font-popins font-bold">My Profile</h1>
        <h1 className="font-popins text-lg">Personal Information</h1>
        <span>
          <AccountBoxIcon sx={{ fontSize: 200, color: "blue" }} />{" "}
        </span>
        <h1 className="text-lg">Name: {data.fullname}</h1>
        <h1 className="text-lg">Phone: {data.phone_number}</h1>
        <h1 className="text-lg">Email: {data.email} </h1>
        <h1 className="text-lg">Address: {data.district}</h1>
      </div>
    </div>
  );
};

export default ProfileSection;
