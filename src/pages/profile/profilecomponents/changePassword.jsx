import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../../reducers/profileSlice";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const dispatch = useDispatch();
  const { access_token } = useSelector((state) => state.users);

  const handlePasswordChange = () => {
    dispatch(
      changePassword({
        access_token: access_token,
        old_password: oldPassword,
        new_password: newPassword,
        confirm_password: confirmNewPassword,
      })
    );

    setConfirmNewPassword("");
    setNewPassword("");
    setOldPassword("");
  };

  return (
    <div>
      <div className="flex flex-col border mx-4 my-5 p-5">
        <h1 className="text-xl font-popins font-bold">Change Password</h1>
        <p className="font-popins text-md my-2">
          Kindly change your password once a year.
        </p>
        <div className="flex flex-col w-2/4">
          <TextField
            className="my-2"
            id="outlined-basic"
            label="Current Password"
            variant="outlined"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <TextField
            className="my-2"
            id="outlined-basic"
            label="New Password"
            variant="outlined"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            className="my-2"
            id="outlined-basic"
            label="Confirm New Password"
            variant="outlined"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center w-2/4 my-3">
          <Button variant="contained" onClick={handlePasswordChange}>
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
