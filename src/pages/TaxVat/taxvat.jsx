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
    <div>
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
      <div className="Card-container">
        <div className="Card">
          <div>
            <PlagiarismOutlinedIcon sx={{ color: "#F45115", fontSize: 50 }} />
          </div>
          <h1 className="lg:text-2xl xl:text-2xl md:text-lg sm:text-lg xs:text-md font-bold my-4">
            Legal Business Activity
          </h1>
          <p className="text-md font-popins">
            We bring the right people together to challenge established thinking
            and drive transform in 2024
          </p>
        </div>
        <div className="Card">
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
        </div>
        <div className="Card">
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
        </div>
        <div className="Card">
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
        </div>
        <div className="Card">
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
        </div>
        <div className="Card">
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
        </div>
      </div>
    </div>
  );
}
