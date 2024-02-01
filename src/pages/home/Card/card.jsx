import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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

const CardComponent = () => {
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
              <IconButton aria-label="menu">
                <FormatListBulletedIcon />
              </IconButton>
              <IconButton aria-label="grid">
                <GridViewIcon />
              </IconButton>
            </div>
          </div>

          <Card variant="outlined" className="flex flex-row mt-2 p-2 shadow-lg">
            <CardContent className="w-4/5">
              <div className="flex flex-row">
                <span>
                  <CalendarMonthIcon />
                </span>
                <p>Published Date: 2080-05-12</p>
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
                Amendment of Capital Asset for Share/Stock at Kathmandu
              </p>
              <p className="text-[#565252] font-popins text-md mt-3 overflow-hidden line-clamp-2">
                NIMBA Ace Capital Limited s a wholly owned subsidiary of Nepal
                Investment Mega Bank Limited. Established in 2011, NIMB Ace
                Capital (then NIBL Capital) aim where creativity and innovation
                shine! NIMBA Ace Capital Limited s a wholly owned subsidiary of
                Nepal Investment Mega Bank Limited. Established in 2011, NIMB
                Ace Capital (then NIBL Capital) aim where creativity and
                innovation shine!
              </p>
            </CardContent>
            <CardActions className="w-1/5 flex flex-col border-l-2 p-3">
              <span className="my-5">
                <FileCopyIcon sx={{ color: "#0375B7" }} />
              </span>
              <Button className="bg-main m-5 rounded-lg" variant="contained">
                Save Bid
              </Button>
            </CardActions>
          </Card>
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
