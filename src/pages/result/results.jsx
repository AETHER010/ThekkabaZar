import React, { useState, useEffect } from "react";
import Form from "../../components/form/form";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Pagination from "@mui/material/Pagination";
import IconButton from "@mui/material/IconButton";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import Orgcard from "../home/Card/orgcard";
import Noticecard from "../home/Card/noticecard";

import { fetchresultData } from "../../reducers/resultSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Results() {
  const dispatch = useDispatch();
  const [isgrid, setIsGrid] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const bidsPerPage = 10;

  const { data, status, error } = useSelector((state) => state.result);

  useEffect(() => {
    dispatch(fetchresultData());
  }, [dispatch]);

  const handlegridview = () => {
    setIsGrid(true);
  };
  const handleListIconClick = () => {
    setIsGrid(false);
  };

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastBid = currentPage * bidsPerPage;
  const indexOfFirstBid = indexOfLastBid - bidsPerPage;
  const currentBids = data?.data?.slice(indexOfFirstBid, indexOfLastBid);

  return (
    <div>
      <Form />

      <div className="p-8">
        <h1 className="text-lg font-bold">All Bids</h1>

        <div className="flex flex-row">
          <div className="flex flex-col w-3/4">
            <div className="border-b-2 border-[#EA9706] mt-3"></div>
            <div className="flex flex-row justify-between my-6">
              <div>
                <Button
                  className="mx-2 rounded-3xl"
                  variant="contained"
                  startIcon={<AccessTimeIcon />}
                >
                  New
                </Button>
                <Button className="mx-2" startIcon={<ArrowOutwardIcon />}>
                  Popular
                </Button>
              </div>
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
              {isgrid ? (
                <div className="flex flex-row">
                  {currentBids?.map((items, index) => (
                    <div className="m-1">
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
                            className="text-black font-bold font-popins text-md mt-3"
                            variant="body2"
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
                              {items.tender.source.name}
                              {/* {items.source.map((sorcs, index) => (
                              <p className="text-[#0F9E1D]" key={index}>
                                {sorcs.name}
                              </p>
                            ))} */}
                            </div>
                          </div>
                          <div className="flex justify-center items-center">
                            <span className="my-5">
                              <FileCopyIcon sx={{ color: "#0375B7" }} />
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
                  ))}
                </div>
              ) : (
                <div className="flex flex-col">
                  {currentBids?.map((items, index) => (
                    <div className="flex flex-col">
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
                                {items.tender.source.name}
                                {/* {items?.source?.map((sorcs, index) => (
                              <p className="text-[#0F9E1D]" key={index}>
                                {sorcs.name}
                              </p>
                            ))} */}
                              </div>
                            </div>
                            <span className="my-5">
                              <FileCopyIcon sx={{ color: "#0375B7" }} />
                            </span>
                          </div>
                          <p className="text-black font-bold font-popins text-md mt-3">
                            {items.tender.title}
                          </p>
                          <p className="text-[#565252] font-popins text-md mt-3 overflow-hidden line-clamp-2">
                            {items.tender.description}
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
                  ))}
                </div>
              )}
              <div className="flex flex-row justify-center mt-7">
                <Pagination
                  count={Math.ceil(data?.data?.length / bidsPerPage)}
                  page={currentPage}
                  onChange={handleChangePage}
                  color="primary"
                />
              </div>
            </div>
          </div>

          <div className="w-1/4">
            <Orgcard />

            <Noticecard />
          </div>
        </div>
      </div>
    </div>
  );
}
