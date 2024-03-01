import React, { useEffect } from "react";
import OrgCard from "./Card/orgcard";
import Noticecard from "./Card/noticecard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { useDispatch, useSelector } from "react-redux";
import { fetchOneTenderData } from "../../reducers/cardSlice";
import { useParams } from "react-router-dom";

const Detailpage = () => {
  const dispatch = useDispatch();
  const { one, status, error } = useSelector((state) => state.card);
  const tenderId = useParams();

  useEffect(() => {
    const id = tenderId.id;
    dispatch(fetchOneTenderData({ tenderId: id }));
  }, [dispatch, tenderId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = one;

  return (
    <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col">
      <div className="flex flex-col xl:w-3/4 lg:w-3/4 md:w-full sm:w-full xs:w-full p-4 m-4 border rounded-lg shadow-md">
        <div className="flex flex-row ">
          <span>
            <CalendarMonthIcon />
          </span>
          <p className="pt-1 ml-2 text-sm">
            Published Date: {items.published_date}
          </p>
        </div>
        <div className="flex flex-row mt-2">
          <div className="flex flex-row bg-[#F0F7FF] mr-3 p-2 rounded-lg">
            <span>
              <LocationOnIcon />
            </span>
            {items?.district?.map((location, index) => (
              <p className="text-[#185CAB]" key={index}>
                {location.name}
              </p>
            ))}
          </div>
          <div className="flex flex-row bg-[#FFF2F0] mr-3 p-2 rounded-lg">
            {items?.project_type?.map((project, index) => (
              <p className="text-[#FF7A00]" key={index}>
                {project.name}
              </p>
            ))}
          </div>
          <div className="flex flex-row bg-[#E2FBE4] mr-3 p-2 rounded-lg">
            {items.source}
          </div>
        </div>

        <div className="border-b-2 my-5"></div>

        <div className="flex flex-col">
          <h1 className="text-lg font-bold font-popins m-1">{items.title}</h1>
          <p
            className="text-md font-popin"
            dangerouslySetInnerHTML={{ __html: items.description }}
          />
        </div>

        <div className="flex flex-col mt-8">
          <h1 className="text-lg font-bold ">Documents</h1>
          <div className="flex flex-row justify-center">
            <img className="w-96 h-96" src={items.image} alt="" />
            <div className="flex flex-row p-3 justify-center items-center">
              <Button
                className="bg-main h-9 m-5 rounded-lg"
                variant="contained"
                startIcon={<ArrowDownwardIcon />}
              >
                Download Brochure
              </Button>
              <Button
                className="bg-main h-9 m-5 rounded-lg"
                variant="contained"
              >
                Save Bid
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/4 xl:w-1/4 md:w-full sm:w-full xs:w-full">
        <OrgCard />
        <Noticecard />
      </div>
    </div>
  );
};

export default Detailpage;
