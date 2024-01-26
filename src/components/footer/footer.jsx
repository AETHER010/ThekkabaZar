import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  return (
    <footer className="max-container bg-main">
      <div className="flex flex-wrap md:flex-row max-lg:flex-col max-lg:text-sm ">
        <div className="border-b-2"></div>
        <div className="flex flex-col items-start m-5 p-4">
          <h1 className="text-lg text-white ">Contact Us</h1>
          <div className="flex">
            <span className="text-white m-3">
              <PhoneInTalkIcon />
            </span>
            <p className="text-white m-3">9860009939</p>
          </div>
          <div className="flex">
            <span className="text-white m-3">
              <EmailIcon />
            </span>
            <p className="text-white m-3">rajan.aryal195@gmail.com</p>
          </div>
          <div className="flex">
            <span className="text-white m-3">
              <LocationOnIcon />
            </span>
            <p className="text-white m-3">
              Buddhanagar, Kathmandu Nepal Bibhuti Marga
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start m-5 p-5">
          <h1 className="text-lg text-white ">Company</h1>

          <p className="text-white m-3">About Us</p>

          <p className="text-white m-3">Our Services</p>

          <p className="text-white m-3">Terms & Conditions</p>
        </div>

        <div className="flex flex-col items-start m-5 p-5">
          <h1 className="text-lg text-white ">Our Services</h1>

          <p className="text-white m-3">Privacy Policy</p>

          <p className="text-white m-3">Terms & Services</p>

          <p className="text-white m-3">Terms of Use</p>
          <p className="text-white m-3">Refund Policy</p>
        </div>

        <div className="flex border rounded-sm bg-main m-5 p-5">
          <h1 className="text=lg text-white font-popins font-semibold	subpixel-antialiased">
            Subscribe Newsletter
          </h1>
        </div>
      </div>
    </footer>
  );
}
