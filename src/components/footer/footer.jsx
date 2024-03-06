import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="max-container bg-main">
      <div className="flex flex-wrap md:flex-row max-lg:flex-col max-lg:text-sm justify-between">
        <div className="border-b-2"></div>
        <div className="flex flex-col items-start m-5 p-4 ">
          <h1 className="text-lg text-[#E7600D] ">Contact Us</h1>
          <div className="flex">
            <span className="text-white mt-3 mb-3 mr-3">
              <PhoneInTalkIcon />
            </span>
            <p className="text-white mt-3 mb-3">9860009939</p>
          </div>
          <div className="flex">
            <span className="text-white my-3 mr-3">
              <EmailIcon />
            </span>
            <p className="text-white mt-3 mb-3">rajan.aryal195@gmail.com</p>
          </div>
          <div className="flex">
            <span className="text-white my-3 mr-3">
              <LocationOnIcon />
            </span>
            <p className="text-white mt-3 mb-3">Buddhanagar, Kathmandu Nepal</p>
          </div>
        </div>

        <div className="flex flex-col items-start m-5 p-5 ">
          <h1 className="text-lg text-[#E7600D] ">Company</h1>

          <Link
            to="/taxvat"
            className="text-white mt-3 mb-3"
            style={{
              textDecoration: "none",
              color: "white",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "black")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Business Tax and Services
          </Link>

          <Link
            to="/bazar"
            className="text-white mt-3 mb-3"
            style={{
              textDecoration: "none",
              color: "white",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "black")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Bazar
          </Link>

          <Link
            to="/privateworks"
            className="text-white mt-3 mb-3"
            style={{
              textDecoration: "none",
              color: "white",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "black")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Private Works
          </Link>

          <Link
            to="/results"
            className="text-white mt-3 mb-3"
            style={{
              textDecoration: "none",
              color: "white",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "black")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Results
          </Link>

          <Link
            to="/pricing"
            className="text-white mt-3 mb-3"
            style={{
              textDecoration: "none",
              color: "white",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "black")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Pricing
          </Link>

          <Link
            to="/taxvat"
            className="text-white mt-3 mb-3"
            style={{
              textDecoration: "none",
              color: "white",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "black")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Terms & Conditions
          </Link>
        </div>
        <div className="flex flex-col items-start m-5 p-5 ">
          <h1 className="text-lg text-[#E7600D] ">Our Services</h1>

          <p className="text-white mt-3 mb-3">Privacy Policy</p>

          <p className="text-white mt-3 mb-3">Terms & Services</p>

          <p className="text-white mt-3 mb-3">Terms of Use</p>
          <p className="text-white mt-3 mb-3">Refund Policy</p>
        </div>

        <div className="flex flex-col border border-slate-400 rounded-lg bg-sky-600 m-5 p-5">
          <h1 className="text=lg text-white font-popins font-semibold	subpixel-antialiased">
            Subscribe Newsletter
          </h1>
          <div className="flex items-center m-4 rounded-full bg-white">
            <input
              type="text"
              placeholder="Enter your email address"
              className=" p-2 ml-2 rounded-full w-full focus:border-none outline-none"
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
      <div
        className="flex justify-between items-center bg-white"
        style={{
          height: "90px",
          width: "100%",
          paddingLeft: "43px",
          paddingRight: "45px",
        }}
      >
        <p className="text-black text-popins">
          © Copyright Thekkabazar. All Rights Reserved
        </p>
        <p className="text-black text-popins">
          Designed by: <span style={{ color: "#DE2228" }}>IT </span>
          <span style={{ color: "#214192" }}>Nepal</span>{" "}
          <span style={{ color: "#DE2228" }}>Solutions</span>
        </p>
      </div>
    </footer>
  );
}
