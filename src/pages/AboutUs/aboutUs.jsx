import React, { useEffect, useState, useRef } from "react";
import AboutUsImage from "../../Assets/AboutUs.png";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { red, blue } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import locationimage from "../../Assets/loactionImage.png";

import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

import { aboutUsform, aboutUsdata } from "../../reducers/aboutusSlice";
import { useDispatch, useSelector } from "react-redux";

const AboutUs = () => {
  const [fullname, setFullname] = useState(null);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.aboutus);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(aboutUsdata());
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(
      aboutUsform({
        name: fullname,
        email: email,
        phone_number: phoneNumber,
        subject: subject,
        message: message,
      })
    );
  };

  return (
    <AnimatePresence>
      <div className="flex justify-center mb-3 ">
        <div className="mt-5 p-5 xl:w-3/5 lg:w-3/5 md:w-full sm:w-full xs:w-full border rounded-lg shadow-lg">
          <h1 className="text-main text-md font-popins underline text-center">
            Get In Touch
          </h1>
          <p className="text-[#717171] mt-2 text-center">
            Any question or remarks? Just write us a message!
          </p>
          <div className="flex lg:flex-row xl:flex-row md:flex-col sm:flex-col xs:flex-col">
            <div className="flex xl:w-1/2 lg:w-1/2 xs:w-full md:w-full sm:w-full">
              <form className="w-full mt-2">
                <h1 className="text-lg text-black text-center">
                  Say something to start a message!
                </h1>
                <div className="my-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full p-2 border rounded-md"
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
                <div className="my-4">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-md"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="my-4">
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="w-full p-2 border rounded-md"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="my-4">
                  <input
                    type="text"
                    name="subject"
                    placeholder="subject"
                    className="w-full p-2 border rounded-md"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="my-4">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Message..."
                    rows="4"
                    className="w-full p-2 border rounded-md"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="my-6">
                  <button
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
                    onClick={() => handleSubmit()}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col xl:w-1/2 lg:w-1/2 md:w-full xs:w-full sm:w-full p-5">
              <div className="flex flex-row p-3">
                <span>
                  <PlaceIcon />
                </span>
                <p className="text-md ml-6">
                  Buddhanagar, Kathmandu Nepal Bibhuti Marga
                </p>
              </div>
              <div className="flex flex-row p-3">
                <span>
                  <PhoneIcon />
                </span>
                <p className="text-md ml-6">9860009939</p>
              </div>
              <div className="flex flex-row p-3">
                <span>
                  <EmailIcon />
                </span>
                <p className="text-md ml-6 md:break-all  xs:break-all  sm:break-all ">
                  rajan.aryal195@gmail.com
                </p>
              </div>

              <div className="flex flex-row p-3">
                <h1 className="text-md">Social Links:</h1>
                <YouTubeIcon
                  className="lg:mx-2 xl:mx-2 sm:mx-[5px] md:mx-[5px] xs:mx-[5px]"
                  sx={{ color: red[500] }}
                />
                <FacebookIcon
                  className="lg:mx-2 xl:mx-2 sm:mx-[5px] md:mx-[5px] xs:mx-[5px]"
                  sx={{ color: blue[500] }}
                />
                <InstagramIcon
                  className="lg:mx-2 xl:mx-2 sm:mx-[5px] md:mx-[5px] xs:mx-[5px]"
                  sx={{ color: red[500] }}
                />
                <TwitterIcon
                  className="lg:mx-2 xl:mx-2 sm:mx-[5px] md:mx-[5px] xs:mx-[5px]"
                  sx={{ color: blue[500] }}
                />
              </div>
              <img src={locationimage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default AboutUs;
