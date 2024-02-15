import React, { useEffect } from "react";
import OrgCard from "./Card/orgcard";
import Noticecard from "./Card/noticecard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";

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

  const items = one;

  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-3/4 p-4 m-4 border rounded-lg shadow-md">
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
            {/* {items.source.map((sorcs, index) => (
              <p className="text-[#0F9E1D]" key={index}>
                {sorcs.name}
              </p>
            ))} */}
          </div>
        </div>

        <div className="border-b-2 my-5"></div>

        <div className="flex flex-col">
          <h1 className="text-lg font-bold font-popins m-1">{items.title}</h1>
          <p className="text-md font-popins">{items.description}</p>
        </div>

        <div className="flex flex-col mt-8">
          <h1 className="text-lg font-bold ">Documents</h1>
          <div className="flex flex-row justify-center">
            <img className="w-96 h-96" src={items.image} alt="" />
            <div className="flex flex-row p-3 justify-between">
              <Button className="bg-main m-5 rounded-lg" variant="contained">
                Download Brochure
              </Button>
              <Button className="bg-main m-5 rounded-lg" variant="contained">
                Save Bid
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/4">
        <OrgCard />
        <Noticecard />
      </div>
    </div>
  );
};

export default Detailpage;