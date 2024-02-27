import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LoginPic from "../../Assets/loginPic.png";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";

import { login } from "../../reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error } = useSelector((state) => state.users);

  const usernameRef = React.createRef();
  const passwordRef = React.createRef();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error) {
      toast.error("login failed. Please check your credentials", error);
    }
  }, [dispatch, isAuthenticated, error]);

  const handleLogin = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    dispatch(login({ username, password }));
  };

  return (
    <div className="flex justify-center h-[80vh] mt-9 p-3 xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col">
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
            id="input1"
            label="Username"
            variant="standard"
            InputProps={{
              disableUnderline: true, // Removes the bottom border
            }}
            inputRef={usernameRef}
          />
        </Box>
        <Box
          className="bg-slateblue rounded-lg p-2"
          sx={{ display: "flex", alignItems: "flex-end", my: 2 }}
        >
          <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            className="lg:w-80 md:w-64 sm:w-52"
            id="input2"
            label="Password"
            variant="standard"
            InputProps={{
              disableUnderline: true, // Removes the bottom border
            }}
            type="password"
            inputRef={passwordRef}
          />
        </Box>
        <Button
          className="rounded-lg p-2 bg-main shadow-lg"
          variant="contained"
          onClick={handleLogin}
        >
          Login Now
        </Button>
      </div>
      <div className="flex justify-center">
        <img src={LoginPic} alt="" className="w-96 h-96" />
      </div>
    </div>
  );
};

export default Login;
