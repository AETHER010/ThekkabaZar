import React, { useRef, useEffect } from "react";

import Typography from "@mui/material/Typography";
import { motion, useInView, useAnimation } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselImage from "../../Assets/carousel.jpg";
import PlagiarismOutlinedIcon from "@mui/icons-material/PlagiarismOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import "./taxvat.css";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import AboutImage from "../../Assets/aboutimage.png";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

import AboutForm from "../AboutUs/aboutUs";
export default function Taxvat() {
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

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="p-8">
      <Slider {...settings}>
        <div className="relative flex">
          <img src={carouselImage} alt="Slider 1" className="w-full h-96" />

          <div className="absolute lg:top-16 xl:top-16 md:top-2 sm:top-2 xs:top-2 right-0 text-white text-center w-1/2 p-8">
            <h2 className="lg:text-4xl xl:text-4xl md:text-lg sm:text-lg xs:text-md font-bold mb-4">
              Unlock Opportunities with Winning Bids!
            </h2>
            <p>
              Expert bid management for guaranteed results. Elevate your
              business through successful tenders and projects.
            </p>
            <button className="bg-[#F45115] text-white px-4 py-2 rounded mt-2">
              Our Services
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={carouselImage} alt="Slider2" className="w-full h-96 " />
          <div className="absolute lg:top-16 xl:top-16 md:top-2 sm:top-2 xs:top-2 right-0 text-white text-center w-1/2 p-8">
            <h2 className="lg:text-4xl xl:text-4xl md:text-lg sm:text-lg xs:text-md font-bold mb-4">
              Unlock Opportunities with Winning Bids!
            </h2>
            <p>
              Expert bid management for guaranteed results. Elevate your
              business through successful tenders and projects.
            </p>
            <button className="bg-[#F45115] text-white px-4 py-2 rounded mt-2">
              Our Services
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={carouselImage} alt="Slider2" className="w-full h-96 " />
          <div className="absolute lg:top-16 xl:top-16 md:top-2 sm:top-2 xs:top-2 right-0 text-white text-center w-1/2 p-8">
            <h2 className="lg:text-4xl xl:text-4xl md:text-lg sm:text-lg xs:text-md font-bold mb-4">
              Unlock Opportunities with Winning Bids!
            </h2>
            <p>
              Expert bid management for guaranteed results. Elevate your
              business through successful tenders and projects.
            </p>
            <button className="bg-[#F45115] text-white px-4 py-2 rounded mt-2">
              Our Services
            </button>
          </div>
        </div>
      </Slider>

      <div className="flex xl:flex-row lg:flex-row sm:flex-col md:flex-col xs:flex-col mt-[5rem]">
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
                duration: 0.7,
              },
            },
          }}
          animate={controls}
          initial="hidden"
          ref={ref}
          className="flex flex-col text-center justify-center p-5"
        >
          <h1 className="text-3xl font-popins font-bold ">
            We avail our multi-valued services
          </h1>
          <p className="text-xl font-popins text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </motion.div>
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
                duration: 0.7,
              },
            },
          }}
          animate={controls}
          initial="hidden"
          ref={ref}
          className="flex w-full "
        >
          <img className="rounded-2xl" src={AboutImage} alt="abyt Image" />
        </motion.div>
      </div>

      <div className="Card-container">
        <h1 className="text-3xl font-popins font-bold absolute">
          Our Services
        </h1>
        <div className="Card">
          <div>
            <PlagiarismOutlinedIcon sx={{ color: "#F45115", fontSize: 50 }} />
          </div>
          <div className="items-container">
            <h1 className="lg:text-2xl xl:text-2xl md:text-lg sm:text-lg xs:text-md font-bold my-4">
              Legal Business Activity
            </h1>
            <p className="text-md font-popins">
              We bring the right people together to challenge established
              thinking and drive transform in 2024
            </p>
          </div>
          <div className="overlay"></div>
        </div>

        <div className="Card2">
          <div>
            <HandshakeOutlinedIcon sx={{ color: "#F45115", fontSize: 50 }} />
          </div>
          <h1 className="lg:text-2xl xl:text-2xl md:text-lg sm:text-lg xs:text-md font-bold mb-4">
            Corporate Partner
          </h1>
          <p>
            We bring the right people together to challenge established thinking
            and drive transform in 2024
          </p>
          <div className="overlay2"></div>
        </div>
        <div className="Card3">
          <div>
            <LocalPrintshopOutlinedIcon
              sx={{ color: "#F45115", fontSize: 50 }}
            />
          </div>
          <h1 className="lg:text-2xl xl:text-2xl md:text-lg sm:text-lg xs:text-md font-bold mb-4">
            Tax Consultant Service
          </h1>
          <p>
            We bring the right people together to challenge established thinking
            and drive transform in 2024
          </p>
          <div className="overlay3"></div>
        </div>
        <div className="Card4">
          <div>
            <GroupsOutlinedIcon sx={{ color: "#F45115", fontSize: 50 }} />
          </div>
          <h1 className="lg:text-2xl xl:text-2xl md:text-lg sm:text-lg xs:text-md font-bold mb-4">
            Community Legal Activity
          </h1>
          <p>
            We bring the right people together to challenge established thinking
            and drive transform in 2024
          </p>
          <div className="overlay4"></div>
        </div>
        <div className="Card5">
          <div>
            <AccountBalanceWalletOutlinedIcon
              sx={{ color: "#F45115", fontSize: 50 }}
            />
          </div>
          <h1 className="lg:text-2xl xl:text-2xl md:text-lg sm:text-lg xs:text-md font-bold mb-4">
            Foundation Legal Activity
          </h1>
          <p>
            We bring the right people together to challenge established thinking
            and drive transform in 2024
          </p>
          <div className="overlay5"></div>
        </div>
        <div className="Card6">
          <div>
            <GppGoodOutlinedIcon sx={{ color: "#F45115", fontSize: 50 }} />
          </div>
          <h1 className="lg:text-2xl xl:text-2xl md:text-lg sm:text-lg xs:text-md font-bold mb-4">
            Corporation Legal Brand
          </h1>
          <p>
            We bring the right people together to challenge established thinking
            and drive transform in 2024
          </p>
          <div className="overlay6"></div>
        </div>
      </div>

      <div className="h-[80vh] flex justify-center items-center  mt-[4rem]">
        <div className="about-container">
          <div>
            <h1 className="text-3xl font-popins font-bold text-main">
              About Us
            </h1>
            <p className="text-md font-popins text-main">
              We bring the right people together
            </p>
          </div>
          <div className="aboutCard flex xl:flex-row lg:flex-row md:flex-col xs:flex-col md:w-3/4 sm:w-full xs:w-full sm:flex-col justify-between items-center rounded-3xl bg-white shadow-2xl">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                  },
                },
              }}
              animate={controls2}
              initial="hidden"
              ref={ref2}
              className="flex flex-row"
            >
              <span className="p-4">
                <ApartmentIcon sx={{ color: "#F45115", fontSize: 50 }} />
              </span>
              <div className="flex flex-col p-5">
                <h1 className="text-xl font-popins font-bold">
                  60+ Branch Offices
                </h1>
                <p className="text-md font-popins">Lorem ispum asdaasd</p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                  },
                },
              }}
              animate={controls2}
              initial="hidden"
              ref={ref2}
              className="flex flex-row"
            >
              <span className="p-4">
                <CalendarMonthIcon sx={{ color: "#F45115", fontSize: 50 }} />
              </span>
              <div className="flex flex-col p-5">
                <h1 className="text-xl font-popins font-bold">
                  60+ Branch Offices
                </h1>
                <p className="text-md font-popins">Lorem ispum asdaasd</p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                  },
                },
              }}
              animate={controls2}
              initial="hidden"
              ref={ref2}
              className="flex flex-row"
            >
              <span className="p-4">
                <SchoolIcon sx={{ color: "#F45115", fontSize: 50 }} />
              </span>
              <div className="flex flex-col p-5">
                <h1 className="text-xl font-popins font-bold">
                  60+ Branch Offices
                </h1>
                <p className="text-md font-popins">Lorem ispum asdaasd</p>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                  },
                },
              }}
              animate={controls2}
              initial="hidden"
              ref={ref2}
              className="flex flex-row"
            >
              <span className="p-4">
                <SentimentSatisfiedAltIcon
                  sx={{ color: "#F45115", fontSize: 50 }}
                />
              </span>
              <div className="flex flex-col p-5">
                <h1 className="text-xl font-popins font-bold">
                  60+ Branch Offices
                </h1>
                <p className="text-md font-popins">Lorem ispum asdaasd</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mt-[9rem]">
        <AboutForm />
      </div>
    </div>
  );
}
