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

import { fetchTenderListData } from "../../reducers/cardSlice";

function Form() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.dropdetails);
  const [organization, setOrganization] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [projectType, setProjectType] = useState("");
  const [procurementTypes, setProcurementTypes] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    dispatch(fetchDropdownData());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(
      fetchTenderListData({
        organization_sector: organization,
        location: location,
        project_type: projectType,
        procurement_type: procurementTypes,
        date: date,
        category: category,
      })
    );
  };

  return (
    <div className=" mx-8 p-5 shadow-lg border-1" style={{backgroundColor: "#F1FAFF"}}>
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
              value={organization}
              label="organization"
              sx={{ height: "3rem" }}
              onChange={(e) => setOrganization(e.target.value)}
            >
              {data?.organization_sectors?.map((organization, index) => (
                <MenuItem key={index} value={organization.name}>
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
            value={search}
            InputProps={{
              classes: {
                notchedOutline: "border-none",
              },
              endAdornment: (
                <span style={{ cursor: "pointer" }}>
                  <SearchIcon onClick={() => dispatch(setSearch(search))} />
                </span>
              ),
            }}
            onChange={(e) => dispatch(setSearch(e.target.value))}
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
              value={category}
              label="category"
              sx={{ height: "3rem" }}
              onChange={(e) => setCategory(e.target.value)}
            >
              {data?.categories?.map((items, index) => (
                <MenuItem key={index} value={items.name}>
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
              value={location}
              label="location"
              sx={{ height: "3rem" }}
              onChange={(e) => setLocation(e.target.value)}
            >
              {data?.districts?.map((items, index) => (
                <MenuItem key={index} value={items.name}>
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
              value={date}
              label="date"
              sx={{ height: "3rem" }}
              onChange={(e) => setDate(e.target.value)}
            >
              {data?.districts?.map((items, index) => (
                <MenuItem key={index} value={items.name}>
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
              value={projectType}
              label="projectType"
              sx={{ height: "3rem" }}
              onChange={(e) => setProjectType(e.target.value)}
            >
              {data?.project_types?.map((items, index) => (
                <MenuItem key={index} value={items.name}>
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
              value={procurementTypes}
              label="procurementTypes"
              sx={{ height: "3rem" }}
              onChange={(e) => setProcurementTypes(e.target.value)}
            >
              {data?.procurement_types?.map((items, index) => (
                <MenuItem key={index} value={items.name}>
                  {items.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Button
          className="bg-primary h-12  mt-2 items-center text-sm shadow"
          variant="contained"
          onClick={() => handleSearch()}
        >
          Search Tender
        </Button>
      </div>
    </div>
  );
}

export default Form;
