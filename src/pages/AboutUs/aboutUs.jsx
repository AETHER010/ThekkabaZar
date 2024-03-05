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

import TaxVat from "../TaxVat/taxvat";
import { aboutUsform, aboutUsdata } from "../../reducers/aboutusSlice";
import { useDispatch, useSelector } from "react-redux";

const AboutUs = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);

  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });

  const controls = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
    if (isInView2) {
      controls2.start("visible");
    }
  }, [isInView, isInView2, controls, controls2]);

  const containerStyle = {
    position: "relative",
    width: "300px",
    height: "300px",
    overflow: "hidden",
    marginLeft: "10px",
    placeSelf: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "10px",
    color: "white",
  };

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

  useEffect(() => {
    setTeam(data?.team_types);
  }, [data]);

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
      <div>
        {data?.about_us?.map((items, index) => (
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -100,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.25,
                },
              },
            }}
            initial="hidden"
            ref={ref}
            animate={controls}
            key={index}
            className="flex lg:flex-row xl:flex-row mt-6 sm:flex-col md:flex-col xs:flex-col sm:justify-center sm:items-center"
          >
            <div className="md:w-2/5 lg:w-1/2 xl:w-1/2 sm:w-2/5 p-3 ml-6 md:ml-6 flex justify-center ">
              <img className="mix-blend-color-burn" src={AboutUsImage} alt="" />
            </div>

            <div
              exit={{ opacity: 0, y: 100 }}
              className="md:w-3/5 xs:w-3/5 sm:w-3/5 lg:w-1/2 xl:w-1/2 p-6"
            >
              <h1 className="text-md md:text-2xl font-popins text-main mt-4">
                Know about Us
              </h1>
              <h1 className="text-4xl md:text-2xl font-popins text-black mt-4 font-bold">
                {items.quotation}
              </h1>
              <p
                className="p-3 text-justify"
                dangerouslySetInnerHTML={{ __html: items.description }}
              />
            </div>
          </motion.div>
        ))}

        <div>
          <TaxVat />
        </div>

        <div className="px-3 pt-5 bg-[#F9F9F9]">
          <h1 className="text-md md:text-xl text-main font-popins font-extrabold ml-7">
            Our Team
          </h1>
          <motion.h1
            variants={{
              hidden: {
                opacity: 0,
                y: 100,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.5,
                },
              },
            }}
            initial="hidden"
            animate={controls2}
            exit={{ opacity: 0, y: 100 }}
            ref={ref2}
            className="text-md md:text-xl text-black font-popins font-extrabold mt-3 ml-7"
          >
            Meet Our Team
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xs:grid-cols-1 xl:grid-cols-3 gap-4 w-full my-8 r">
            {team?.map((items, index) => (
              <div key={index} style={containerStyle}>
                {items?.myteam?.map((mteam, index) => (
                  <motion.div
                    ref={ref2}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: -100,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: 0.25, duration: 0.5 },
                      },
                    }}
                    initial="hidden"
                    animate={controls2}
                    key={index}
                    style={containerStyle}
                  >
                    <img
                      src="https://img.freepik.com/premium-photo/cute-handsome-anime-boy-blue-light_675932-435.jpg"
                      alt={mteam.name}
                      style={imageStyle}
                    />
                    <div style={overlayStyle}>
                      <h2 style={{ marginBottom: "8px" }}>{mteam.name}</h2>
                      <p>{mteam.position}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>

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
      </div>
    </AnimatePresence>
  );
};

export default AboutUs;
