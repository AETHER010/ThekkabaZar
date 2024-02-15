import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import IconButton from "@mui/material/IconButton";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";

import CardActions from "@mui/material/CardActions";
import FileCopyIcon from "@mui/icons-material/FileCopy";

import Orgcard from "./orgcard";
import Noticecard from "./noticecard";

import { useDispatch, useSelector } from "react-redux";
import { fetchTenderListData } from "../../../reducers/cardSlice";

const CardComponent = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.card);
  const [isgrid, setIsGrid] = useState(false);

  useEffect(() => {
    dispatch(fetchTenderListData());
  }, [dispatch]);

  const handlegridview = () => {
    setIsGrid(true);
  };

  const handleListIconClick = () => {
    setIsGrid(false);
  };

  return (
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
                {data?.data?.map((items, index) => (
                  <div key={index} className="m-1">
                    <Card className="p-2" sx={{ maxWidth: 348 }}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image={items.image}
                        title="bids"
                      />
                      <CardContent>
                        <div className="flex flex-row ">
                          <span>
                            <CalendarMonthIcon />
                          </span>
                          <p className="pt-1 ml-2 text-sm">
                            Published Date: {items.published_date}
                          </p>
                        </div>

                        <Typography
                          className="text-black font-bold font-popins text-md mt-3"
                          variant="body2"
                        >
                          Amendment of Capital Asset for Share/Stock at
                          Kathmandu
                        </Typography>
                        <Typography className="text-[#565252] font-popins text-md mt-3">
                          NIMBA Ace Capital Limited.
                        </Typography>
                        <div className="flex flex-col mt-2">
                          <div className="flex flex-row">
                            <div className="bg-[#F0F7FF] mr-1 p-2 rounded-lg">
                              <p className="text-[#185CAB] ">Kathmandu</p>
                            </div>
                            <div className=" bg-[#FFF2F0] ml-3 p-2 rounded-lg">
                              <p className="text-[#FF7A00] ">Amendment xyzax</p>
                            </div>
                          </div>
                          <div className="bg-[#E2FBE4] mr-1 p-2 mt-2 rounded-lg w-40 flex justify-center">
                            <p className="text-[#0F9E1D]">Source:Abhiyan</p>
                          </div>
                        </div>
                      </CardContent>
                      <CardActions className="flex flex-row border-t-2 p-3 justify-between">
                        <span className="my-5">
                          <FileCopyIcon sx={{ color: "#0375B7" }} />
                        </span>
                        <Button
                          className="bg-main m-5 rounded-lg"
                          variant="contained"
                        >
                          Save Bid
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {" "}
                {data?.data?.map((items, index) => (
                  <div key={index} className="flex flex-col">
                    <Card
                      variant="outlined"
                      className="flex flex-row mt-2 p-2 shadow-lg"
                    >
                      <CardContent className="w-4/5">
                        <div className="flex flex-row">
                          <span>
                            <CalendarMonthIcon />
                          </span>
                          <p className="pt-1 ml-2 text-sm">
                            Published Date: {items.published_date}
                          </p>
                        </div>
                        <div className="flex flex-row mt-2">
                          <div className="flex flex-row bg-[#F0F7FF] mr-1 p-2 rounded-lg">
                            <span>
                              <LocationOnIcon />
                            </span>
                            <p className="text-[#185CAB]">Kathmandu</p>
                          </div>
                          <div className="flex flex-row bg-[#FFF2F0] mr-1 p-2 rounded-lg">
                            <p className="text-[#FF7A00]">Phone: 9860009939</p>
                          </div>
                          <div className="flex flex-row bg-[#E2FBE4] mr-1 p-2 rounded-lg">
                            <p className="text-[#0F9E1D]">Rate: 5000</p>
                          </div>
                        </div>
                        <p className="text-black font-bold font-popins text-md mt-3">
                          Amendment of Capital Asset for Share/Stock at
                          Kathmandu
                        </p>
                        <p className="text-[#565252] font-popins text-md mt-3 overflow-hidden line-clamp-2">
                          {items.description}
                        </p>
                      </CardContent>
                      <CardActions className="w-1/5 flex flex-col border-l-2 p-3">
                        <span className="my-5">
                          <FileCopyIcon sx={{ color: "#0375B7" }} />
                        </span>
                        <Button
                          className="bg-main m-5 rounded-lg"
                          variant="contained"
                        >
                          Save Bid
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="w-1/4">
          <Orgcard />

          <Noticecard />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
