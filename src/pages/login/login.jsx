import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LoginPic from "../../Assets/loginPic.png";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen mt-9 p-3">
      <div className="flex flex-col items-center m-5 p-5 ">
        <h1 className="text-black font-extrabold lg:text-2xl font-popins md:text-xl sm:text-sm">
          LOGIN
        </h1>
        <p className="font-popins lg:text-sm md:text-sm sm:text-sm">
          Login to continue to access all features
        </p>
        <Box
          className="bg-slateblue rounded-lg p-2"
          sx={{ display: "flex", alignItems: "flex-end", my: 2 }}
        >
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            className="lg:w-80 md:w-64 sm:w-52"
            id="input-with-sx"
            label="Username"
            variant="standard"
            InputProps={{
              disableUnderline: true, // Removes the bottom border
            }}
          />
        </Box>
        <Box
          className="bg-slateblue rounded-lg p-2"
          sx={{ display: "flex", alignItems: "flex-end", my: 2 }}
        >
          <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            className="lg:w-80 md:w-64 sm:w-52"
            id="input-with-sx"
            label="Password"
            variant="standard"
            InputProps={{
              disableUnderline: true, // Removes the bottom border
            }}
          />
        </Box>
        <Button
          className="rounded-lg p-2 bg-main shadow-lg"
          variant="contained"
        >
          Login Now
        </Button>
      </div>
      <div>
        <img src={LoginPic} alt="" className="w-96 h-96" />
      </div>
    </div>
  );
};

export default Login;