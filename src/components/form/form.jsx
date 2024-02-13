import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Form() {
  const [age, setAge] = useState("");

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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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

      <div className="flex flex-wrap space-y-4 md:space-x-4 md:space-y-0 p-3">
        <Box className="w-full md:w-80 lg:w-56" sx={{ minWidth: 120 }}>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="w-full md:w-80 lg:w-56" sx={{ minWidth: 120 }}>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="w-full md:w-80 lg:w-56" sx={{ minWidth: 120 }}>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="w-full md:w-80 lg:w-56" sx={{ minWidth: 120 }}>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="w-full md:w-80 lg:w-56" sx={{ minWidth: 120 }}>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          className="bg-primary h-12 items-center text-sm shadow"
          variant="contained"
        >
          Search Tender
        </Button>
      </div>
    </div>
  );
}

export default Form;
