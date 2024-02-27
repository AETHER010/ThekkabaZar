import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="max-container bg-main  w-full">
      <div className="flex flex-wrap md:flex-row max-lg:flex-col max-lg:text-sm justify-between ">
        <div className="border-b-2"></div>
        <div className="flex flex-col items-start m-5 p-4">
          <h1 className="text-lg text-white ">Contact Us</h1>
          <div className="flex">
            <span className="text-white my-3">
              <PhoneInTalkIcon />
            </span>
            <p className="text-white my-3">9860009939</p>
          </div>
          <div className="flex">
            <span className="text-white my-3">
              <EmailIcon />
            </span>
            <p className="text-white my-3">rajan.aryal195@gmail.com</p>
          </div>
          <div className="flex">
            <span className="text-white my-3">
              <LocationOnIcon />
            </span>
            <p className="text-white my-3">
              Buddhanagar, Kathmandu Nepal Bibhuti Marga
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start m-5 p-5 ">
          <h1 className="text-lg text-white ">Company</h1>

          <Link to="/aboutus" className="text-white my-3">
            About Us
          </Link>

          <p className="text-white my-3">Our Services</p>

          <p className="text-white my-3">Terms & Conditions</p>
        </div>

        <div className="flex flex-col items-start m-5 p-5">
          <h1 className="text-lg text-white ">Our Services</h1>

          <p className="text-white my-3">Privacy Policy</p>

          <p className="text-white my-3">Terms & Services</p>

          <p className="text-white my-3">Terms of Use</p>
          <p className="text-white my-3">Refund Policy</p>
        </div>

        <div className="flex flex-col border border-slate-400 rounded-lg bg-sky-600 mr-8 mt-5 p-5">
          <h1 className="text=lg text-white font-popins font-semibold	subpixel-antialiased">
            Subscribe Newsletter
          </h1>
          <div className="flex items-center m-4 rounded-full bg-white">
            <input
              type="text"
              placeholder="Enter your email address"
              className=" p-2 rounded-full w-full focus:border-none outline-none"
            />
            <button className="bg-orange text-white p-2 w-44 text-lg rounded-full ">
              Submit
            </button>
          </div>
          <p className="text-white text-sm mt-4 p-2 font-popins">
            Will send you weekly updates for your better tool management.
          </p>
        </div>
      </div>

      <div className="flex justify-between bg-slate-50">
        <p className="text-black text-popins">
          © Copyright Bolpatra Nepal. All Rights Reserved
        </p>
        <p className="text-black text-popins ">
          Designed by: <span style={{ color: "#DE2228" }}>IT </span>
          <span style={{ color: "#214192" }}>Nepal</span>{" "}
          <span style={{ color: "#DE2228" }}>Solutions</span>
        </p>
      </div>
    </footer>
  );
}
