import React, { useEffect } from "react";
import OrgCard from "../home/Card/orgcard";
import Noticecard from "../home/Card/noticecard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { useDispatch, useSelector } from "react-redux";
import { fetchOneResultData } from "../../reducers/resultSlice";
import { useParams } from "react-router-dom";
import html2pdf from "html2pdf.js";

const ResultDetailpage = () => {
  const dispatch = useDispatch();
  const { one, status, error } = useSelector((state) => state.result);
  const tenderId = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const id = tenderId.id;
    dispatch(fetchOneResultData({ tenderId: id }));
  }, [dispatch, tenderId]);

  const items = one;

  const handleDownloadBrochure = () => {
    const htmlContent = `
    <h1 style="font-size: 28px; font-weight: bold;">${items.title}</h1>
    <p>${items.description}</p>

    <p style="margin-top: 5px font-size: 28px; font-weight: bold;">Image</p>
    <img>src=${items.image}</img>
  `;

    const pdfContainer = document.createElement("div");
    pdfContainer.innerHTML = htmlContent;

    // Generate the PDF
    html2pdf(pdfContainer, {
      margin: 10,
      filename: "brochure.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    });
  };

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
                onClick={handleDownloadBrochure}
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

export default ResultDetailpage;
