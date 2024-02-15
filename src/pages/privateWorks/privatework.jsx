import React, { useState, useEffect } from "react";
import PrivateWork from "../../Assets/privateWork.png";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import Groups2Icon from "@mui/icons-material/Groups2";
import ConstructionIcon from "@mui/icons-material/Construction";
import { yellow, red, blue } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
import { postPrivateWork } from "../../reducers/privateWorkSlice";
import { getPrivateWork } from "../../reducers/privateWorkSlice";

const Privatework = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.privateWorks);

  useEffect(() => {
    dispatch(getPrivateWork());
  }, [dispatch]);

  useEffect(() => {
    console.log(`PrivateWork`, data.data);
  }, []);

  const [formData, setFormData] = useState({
    work: "",
    address: "",
    company: "",
    phone_number: "",
    rate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = () => {
    console.log("FormSubmit", formData);
    dispatch(postPrivateWork(formData))
      .then(() => {
        // Reset form fields
        setFormData({
          work: "",
          address: "",
          company: "",
          phone_number: "",
          rate: "",
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className="my-2 px-3">
      <div>
        <img class="w-full" src={PrivateWork} alt=""></img>
      </div>

      <div className="flex flex-row w-full bg-[#EAEAEA] justify-between p-4 mt-2">
        <h2 className="text-black text-lg flex  text-center font-bold items-center">
          Get the best Sub-Contractor for your work
        </h2>
        <div className="flex flex-col justify-center items-center">
          <span>
            <TouchAppIcon
              sx={{ color: yellow[500], width: "3rem", height: "3rem" }}
            />
          </span>
          <p className="text-black text-sm">Post Your Work</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>
            <Groups2Icon
              sx={{ color: red[500], width: "3rem", height: "3rem" }}
            />
          </span>
          <p className="text-black text-sm">Post Your Work</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>
            <ConstructionIcon
              sx={{ color: blue[500], width: "3rem", height: "3rem" }}
            />
          </span>
          <p className="text-black text-sm">Post Your Work</p>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col w-2/3">
          {data?.data?.map((items, index) => (
            <Card key={index} variant="outlined" className="m-2 p-2 shadow-lg">
              <CardContent>
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
                    <p className="text-[#185CAB]">{items.address}</p>
                  </div>
                  <div className="flex flex-row bg-[#FFF2F0] mr-1 p-2 rounded-lg">
                    <p className="text-[#FF7A00]">
                      Phone: {items.phone_number}
                    </p>
                  </div>
                  <div className="flex flex-row bg-[#E2FBE4] mr-1 p-2 rounded-lg">
                    <p className="text-[#0F9E1D]">Rate: {items.rate}</p>
                  </div>
                </div>
                <p className="text-black font-bold font-popins text-md mt-3">
                  {items.work}
                </p>
                <p className="text-[#565252] font-popins text-md mt-3">
                  {items.company}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col w-1/3 h-1/2 border m-2  rounded-lg shadow-lg">
          <div className="flex flex-row justify-center p-3">
            <span className="origin-center rotate-45">
              <LinkIcon />
            </span>
            <h1 className="text-lg text-[#185CAB] font-popins ml-2">
              Post Your Sub-Contract Work Opportunities
            </h1>
          </div>
          <div className="border-b-2 w-full mb-3"></div>
          <TextField
            className="bg-[#F9FAFB] m-2 rounded-lg mt-3"
            id="outlined-basic"
            label="Work"
            variant="outlined"
            name="work"
            value={formData.work}
            onChange={handleInputChange}
          />
          <TextField
            className="bg-[#F9FAFB] m-2 rounded-lg"
            id="outlined-basic"
            label="Address"
            variant="outlined"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <TextField
            className="bg-[#F9FAFB] m-2 rounded-lg"
            id="outlined-basic"
            label="Company"
            variant="outlined"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
          />
          <TextField
            className="bg-[#F9FAFB] m-2 rounded-lg"
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
          />
          <TextField
            className="bg-[#F9FAFB] m-2 rounded-lg"
            id="outlined-basic"
            label="Rate"
            variant="outlined"
            name="rate"
            value={formData.rate}
            onChange={handleInputChange}
          />
          <div className="flex justify-center">
            <Button
              className="m-3 px-5"
              variant="contained"
              onClick={handleFormSubmit}
            >
              Submit Petty
            </Button>
          </div>
          <p className="text-sm font-popins font-bold text-center mt-2 mb-4">
            The post will remain visible for a duration of 30 days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privatework;
