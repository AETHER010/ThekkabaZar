import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import Button from "@mui/material/Button";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Pagination from "@mui/material/Pagination";
import IconButton from "@mui/material/IconButton";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";

import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import Orgcard from "../home/Card/orgcard";
import Noticecard from "../home/Card/noticecard";

import { fetchresultData } from "../../reducers/resultSlice";
import { useDispatch, useSelector } from "react-redux";

import { fetchDropdownData } from "../../reducers/formSlice";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isgrid, setIsGrid] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const bidsPerPage = 10;
  const { dropdowndata } = useSelector((state) => state.dropdetails);
  const [organization, setOrganization] = useState("");
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [projectType, setProjectType] = useState("");
  const [procurementTypes, setProcurementTypes] = useState("");
  const [date, setDate] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const [filteredBids, setFilteredBids] = useState([]);

  const { data, error } = useSelector((state) => state.result);

  const [selectedBid, setSelectedBid] = useState(null);

  useEffect(() => {
    dispatch(fetchresultData());

    if (error) {
      return <div className="text-center font-bold text-red-800">{error}</div>;
    }
  }, [dispatch, error]);

  useEffect(() => {
    dispatch(fetchDropdownData());
  }, [dispatch]);

  useEffect(() => {
    setFilteredBids(data?.data);
  }, [data]);

  // useEffect(() => {
  //   searchDataList();
  // }, [search]);

  const handleSearch = () => {
    setIsSearch(true);
    dispatch(
      fetchresultData({
        organization_sector: organization,
        location: location,
        project_type: projectType,
        procurement_type: procurementTypes,
        date: date,
        category: category,
      })
    );
    if (isSearch === true) {
      setIsSearch(false);
    }
    setOrganization("");
    setCategory("");
    setLocation("");
    setProjectType("");
    setProcurementTypes("");
    setDate("");
  };

  const handlegridview = () => {
    setIsGrid(true);
  };
  const handleListIconClick = () => {
    setIsGrid(false);
  };

  const indexOfLastBid = currentPage * bidsPerPage;
  const indexOfFirstBid = indexOfLastBid - bidsPerPage;
  // const currentBids = filteredBids?.slice(indexOfFirstBid, indexOfLastBid);

  const handleSearchData = (e) => {
    setSearch(e);
  };

  const searchDataList = () => {
    if (data?.data) {
      const filteredList = data?.data?.filter((item) =>
        item.tender.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredBids(filteredList.slice(indexOfFirstBid, indexOfLastBid));
    }
  };

  const handleChangePage = (newPage) => {
    if (newPage < 1) {
      // Avoid going to negative pages
      return;
    }
    setCurrentPage(newPage);
    dispatch(fetchresultData({ page: newPage }));
    searchDataList();
  };

  const handleImageClick = (image) => {
    setSelectedBid(image);
  };
  // const bidsToDisplay = isSearch ? filteredBids : currentBids;
  // console.log("ajfbkajsd", bidsToDisplay);

  return (
    <div className="mt-[2rem]">
      <div className=" mx-8 p-5 bg-lightblue shadow-lg border-1">
        <h1 className="text-4xl m-3 font-medium text-cyan-600">Filter</h1>

        <div className="flex flex-wrap lg:flex-row md:flex-row sm:flex-col sm:w-full xs:flex-col xl:flex-row space-x-4 p-3">
          <Box
            className="lg:w-72 md:w-72 sm:w-full mt-2 xl:w-72"
            sx={{ minWidth: 120 }}
          >
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
                {dropdowndata?.organization_sectors?.map(
                  (organization, index) => (
                    <MenuItem key={index} value={organization.name}>
                      {organization.name}
                    </MenuItem>
                  )
                )}
              </Select>
            </FormControl>
          </Box>

          <div className="h-12">
            <TextField
              className="lg:w-72 md:w-72 h-12 mt-2 bg-white sm:my-2 lg:ml-2 md:ml-2 sm:w-full rounded-lg"
              variant="outlined"
              label="Enter Keywords"
              value={search}
              InputProps={{
                classes: {
                  notchedOutline: "border-none",
                },
                endAdornment: (
                  <span style={{ cursor: "pointer" }}>
                    <SearchIcon onClick={searchDataList} />
                  </span>
                ),
              }}
              onChange={(e) => handleSearchData(e.target.value)}
            />
          </div>
        </div>

        <div className="border-b-2 m-5"></div>

        <div className="flex flex-wrap p-3 justify-evenly">
          <Box
            className="w-full md:w-80 lg:w-56 xl:w-56 mt-2"
            sx={{ minWidth: 120 }}
          >
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
                {dropdowndata?.categories?.map((items, index) => (
                  <MenuItem key={index} value={items.name}>
                    {items.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            className="w-full md:w-80 lg:w-56 xl:w-56 mt-2"
            sx={{ minWidth: 120 }}
          >
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
                {dropdowndata?.districts?.map((items, index) => (
                  <MenuItem key={index} value={items.name}>
                    {items.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            className="w-full md:w-80 lg:w-56 xl:w-56 mt-2"
            sx={{ minWidth: 120 }}
          >
            <FormControl fullWidth className="bg-white">
              <TextField
                id="date"
                label="Published Date"
                type="date"
                defaultValue={date} // Assuming date is a string in the format "YYYY-MM-DD"
                sx={{ height: "3rem" }}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
          </Box>

          <Box
            className="w-full md:w-80 lg:w-56 xl:w-56 mt-2"
            sx={{ minWidth: 120 }}
          >
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
                {dropdowndata?.project_types?.map((items, index) => (
                  <MenuItem key={index} value={items.name}>
                    {items.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            className="w-full md:w-80 lg:w-56 xl:w-56 mt-2"
            sx={{ minWidth: 120 }}
          >
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
                {dropdowndata?.procurement_types?.map((items, index) => (
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
            {isSearch ? "clear Search" : "Search Tender"}
          </Button>
        </div>
      </div>

      <div className="p-8">
        <h1 className="text-lg font-bold">All Bids</h1>

        <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col">
          <div className="flex flex-col lg:w-3/4 xl:w-3/4 md:w-full sm:w-full xs:w-full">
            <div className="border-b-2 border-[#EA9706] mt-3"></div>
            <div className="flex justify-end my-6">
              <div>
                <IconButton
                  aria-label="menu"
                  onClick={handleListIconClick}
                  className={!isgrid ? "text-main" : ""}
                >
                  <FormatListBulletedIcon />
                </IconButton>
                <IconButton
                  aria-label="grid"
                  onClick={handlegridview}
                  className={!isgrid ? "" : "text-main"}
                >
                  <GridViewIcon />
                </IconButton>
              </div>
            </div>

            <div>
              {selectedBid && (
                <div
                  onClick={() => setSelectedBid(null)}
                  className="fixed z-10 top-0 left-0 w-full h-full bg-gray-600 bg-opacity-75 flex justify-center items-center"
                >
                  <img
                    src={selectedBid}
                    alt="Selected Bid"
                    className="max-w-full max-h-full"
                  />
                  {/* <button
                    className="absolute top-2 right-2 bg-red-500 p-2 text-white rounded"
                    onClick={() => setSelectedBid(null)}
                  >
                    Close
                  </button> */}
                </div>
              )}
            </div>
            <div>
              {isgrid ? (
                <div className="flex flex-row">
                  {filteredBids?.length > 0 ? (
                    filteredBids?.map((items, index) => (
                      <div key={index} className="m-1">
                        <Card className="p-2" sx={{ maxWidth: 348 }}>
                          <CardMedia
                            sx={{ height: 140 }}
                            image={items.tender.image}
                            title="bids"
                          />
                          <CardContent>
                            <div className="flex flex-row ">
                              <span>
                                <CalendarMonthIcon />
                              </span>
                              <p className="pt-1 ml-2 text-sm">
                                Published Date: {items.tender.published_date}
                              </p>
                            </div>
                            <Typography
                              className="text-black font-bold font-popins text-md mt-3 cursor-pointer"
                              variant="body2"
                              onClick={() =>
                                navigate(`/resultdetails/${items.tender.pk}`)
                              }
                            >
                              {items.tender.title}
                            </Typography>
                            <Typography className="text-[#565252] font-popins text-md mt-3">
                              NIMBA Ace Capital Limited.
                            </Typography>

                            <div className="flex flex-col mt-2">
                              <div className="flex flex-row">
                                <div className="bg-[#F0F7FF] mr-1 p-2 rounded-lg">
                                  {items?.tender?.district?.map(
                                    (location, index) => (
                                      <p className="text-[#185CAB]" key={index}>
                                        {location.name}
                                      </p>
                                    )
                                  )}
                                </div>
                                <div className=" bg-[#FFF2F0] ml-3 p-2 rounded-lg">
                                  {items?.tender?.project_type?.map(
                                    (project, index) => (
                                      <p className="text-[#FF7A00]" key={index}>
                                        {project.name}
                                      </p>
                                    )
                                  )}
                                </div>
                              </div>
                              <div className="bg-[#E2FBE4] mr-1 p-2 mt-2 rounded-lg w-40 flex justify-center">
                                {items.tender.source}
                              </div>
                            </div>
                            <div className="flex justify-center items-center">
                              <span className="my-5">
                                <FileCopyIcon
                                  sx={{ color: "#0375B7" }}
                                  onClick={() =>
                                    handleImageClick(items.tender.image)
                                  }
                                />
                              </span>
                            </div>

                            <div className="border-b-2 my-3"></div>

                            <div className="flex flex-row">
                              <span>
                                <WorkspacePremiumIcon />
                              </span>
                              <div className="flex flex-col ml-3">
                                <h1 className="font-bold text-md font-popins">
                                  Awarded to:
                                </h1>
                                <p className="text-md font-popins">
                                  {items.awarded_to}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))
                  ) : (
                    <div className="text-center mt-4 text-gray-500">
                      No results found.
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col">
                  {filteredBids?.length > 0 ? (
                    filteredBids?.map((items, index) => (
                      <div key={index} className="flex flex-col">
                        <Card
                          variant="outlined"
                          className="flex flex-row mt-2 p-2 shadow-lg"
                        >
                          <CardContent className="w-full">
                            <div className="flex flex-row">
                              <span>
                                <CalendarMonthIcon />
                              </span>
                              <p className="pt-1 ml-2 text-sm">
                                Published Date: {items.tender.published_date}
                              </p>
                            </div>
                            <div className="flex flex-row justify-between">
                              <div className="flex flex-row mt-2">
                                <div className="flex flex-row bg-[#F0F7FF] mr-1 p-2 rounded-lg">
                                  <span>
                                    <LocationOnIcon />
                                  </span>
                                  {items?.tender?.district?.map(
                                    (location, index) => (
                                      <p className="text-[#185CAB]" key={index}>
                                        {location.name}
                                      </p>
                                    )
                                  )}
                                </div>
                                <div className="flex flex-row bg-[#FFF2F0] mr-1 p-2 rounded-lg">
                                  {items?.tender?.project_type?.map(
                                    (project, index) => (
                                      <p className="text-[#FF7A00]" key={index}>
                                        {project.name}
                                      </p>
                                    )
                                  )}
                                </div>

                                <div className="flex flex-row bg-[#E2FBE4] mr-1 p-2 rounded-lg">
                                  {items.tender.source}
                                </div>
                              </div>
                              <span className="my-5">
                                <FileCopyIcon
                                  sx={{ color: "#0375B7" }}
                                  onClick={() =>
                                    handleImageClick(items.tender.image)
                                  }
                                />
                              </span>
                            </div>
                            <p
                              className="text-black font-bold font-popins text-md mt-3 cursor-pointer"
                              onClick={() =>
                                navigate(`/resultdetails/${items.tender.pk}`)
                              }
                            >
                              {items.tender.title}
                            </p>
                            <p className="text-[#565252] font-popins text-md mt-3 overflow-hidden line-clamp-2">
                              <p
                                className="text-[#565252] font-popins text-md mt-3 overflow-hidden line-clamp-2"
                                dangerouslySetInnerHTML={{
                                  __html: items.tender.description,
                                }}
                              />
                            </p>

                            <div className="border-b-2 my-6"></div>

                            <div className="flex flex-row">
                              <span>
                                <WorkspacePremiumIcon />
                              </span>
                              <div className="flex flex-col ml-3">
                                <h1 className="font-bold text-md font-popins">
                                  Awarded to:
                                </h1>
                                <p className="text-md font-popins">
                                  {items.awarded_to}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))
                  ) : (
                    <div className="text-center mt-4 text-gray-500">
                      No results found.
                    </div>
                  )}
                </div>
              )}
              <div className="flex flex-row justify-center mt-7">
                <Pagination
                  count={search ? filteredBids.length : data?.total_pages}
                  page={currentPage}
                  onChange={(page) => handleChangePage(page)}
                  color="primary"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 xl:w-1/4 md:w-full sm:w-full xs:-full">
            <Orgcard />

            <Noticecard />
          </div>
        </div>
      </div>
    </div>
  );
}
