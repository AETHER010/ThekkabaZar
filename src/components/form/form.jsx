import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
import { fetchDropdownData } from "../../reducers/formSlice";

function Form() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.dropdetails);
  const [age, setAge] = useState("");

  useEffect(() => {
    dispatch(fetchDropdownData());
  }, [dispatch]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className=" mx-8 p-5 bg-lightblue shadow-lg border-1">
      <h1 className="text-4xl m-3 font-medium text-cyan-600">Filter</h1>

      <div className="flex items-center space-x-4 p-3">
        <Box className="w-72" sx={{ minWidth: 120 }}>
          <FormControl fullWidth className="bg-white content-center">
            <InputLabel id="simple-select-label" className=" w-full">
              Select Organization
            </InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              value={age}
              label="Age"
              sx={{ height: "3rem" }}
              onChange={handleChange}
            >
              {data?.organization_sectors?.map((organization, index) => (
                <MenuItem key={index} value={organization.id}>
                  {organization.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <div className="h-12">
          <TextField
            className="w-64 h-12 bg-white"
            variant="outlined"
            label="Enter Keywords"
            InputProps={{
              classes: {
                notchedOutline: "border-none",
              },
              endAdornment: (
                <span style={{ cursor: "pointer" }}>
                  <SearchIcon />
                </span>
              ),
            }}
          />
        </div>
      </div>

      <div className="border-b-2 m-5"></div>

      <div className="flex flex-wrap p-3 justify-evenly">
        <Box className="w-full md:w-80 lg:w-56 mt-2" sx={{ minWidth: 120 }}>
          <FormControl fullWidth className="bg-white">
            <InputLabel id="simple-select-label items-center">
              Select Category
            </InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              value={age}
              label="Age"
              sx={{ height: "3rem" }}
              onChange={handleChange}
            >
              {data?.categories?.map((items, index) => (
                <MenuItem key={index} value={items.id}>
                  {items.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box className="w-full md:w-80 lg:w-56 mt-2" sx={{ minWidth: 120 }}>
          <FormControl fullWidth className="bg-white">
            <InputLabel id="simple-select-label" className=" w-full">
              Select Locations
            </InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              value={age}
              label="Age"
              sx={{ height: "3rem" }}
              onChange={handleChange}
            >
              {data?.districts?.map((items, index) => (
                <MenuItem key={index} value={items.id}>
                  {items.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box className="w-full md:w-80 lg:w-56  mt-2" sx={{ minWidth: 120 }}>
          <FormControl fullWidth className="bg-white">
            <InputLabel id="simple-select-label" className=" w-full">
              Published Date
            </InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              value={age}
              label="Age"
              sx={{ height: "3rem" }}
              onChange={handleChange}
            >
              {data?.districts?.map((items, index) => (
                <MenuItem key={index} value={items.id}>
                  {items.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box className="w-full md:w-80 lg:w-56  mt-2" sx={{ minWidth: 120 }}>
          <FormControl fullWidth className="bg-white">
            <InputLabel id="simple-select-label" className=" w-full">
              Project Types
            </InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              value={age}
              label="Age"
              sx={{ height: "3rem" }}
              onChange={handleChange}
            >
              {data?.project_types?.map((items, index) => (
                <MenuItem key={index} value={items.id}>
                  {items.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box className="w-full md:w-80 lg:w-56  mt-2" sx={{ minWidth: 120 }}>
          <FormControl fullWidth className="bg-white">
            <InputLabel id="simple-select-label" className=" w-full">
              Procruments Types
            </InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              value={age}
              label="Age"
              sx={{ height: "3rem" }}
              onChange={handleChange}
            >
              {data?.procurement_types?.map((items, index) => (
                <MenuItem key={index} value={items.id}>
                  {items.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Button
          className="bg-primary h-12  mt-2 items-center text-sm shadow"
          variant="contained"
        >
          Search Tender
        </Button>
      </div>
    </div>
  );
}

export default Form;
