import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Form from "../../components/form/form";
import Card from "./Card/card";
import carouselImage from "../../Assets/carousel.jpg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="xl:p-8 lg:p-8 md:p-0 sm:p-0 xs:p-0">
        <Slider {...settings}>
          <div className="relative flex">
            <img
              src={carouselImage}
              alt="Slider 1"
              className="w-full sm:h-80 xl:h-96 lg:h-96 md:h-96 xs:h-80"
            />

            <div className="absolute lg:top-16 xl:top-16 md:top-16 sm:top-10 xs:top-10 right-0 flex flex-col justify-center text-white text-center w-1/2 p-8 xs:w-full sm:w-full">
              <h2 className="lg:text-4xl xl:text-4xl md:text-md sm:text-md xs:text-sm font-bold mb-4">
                Unlock Opportunities with Winning Bids!
              </h2>
              <p className="text-sm">
                Expert bid management for guaranteed results. Elevate your
                business through successful tenders and projects.
              </p>
              <div className="flex justify-center">
                <button className="bg-[#F45115] w-1/3 text-white md:text-sm xs:text-sm sm:text-sm px-4 py-2 rounded mt-2">
                  Our Services
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex">
            <img
              src={carouselImage}
              alt="Slider 1"
              className="w-full sm:h-80 xl:h-96 lg:h-96 md:h-96 xs:h-80"
            />

            <div className="absolute lg:top-16 xl:top-16 md:top-16 sm:top-10 xs:top-10 right-0 flex flex-col justify-center text-white text-center w-1/2 p-8 xs:w-full sm:w-full">
              <h2 className="lg:text-4xl xl:text-4xl md:text-md sm:text-md xs:text-sm font-bold mb-4">
                Unlock Opportunities with Winning Bids!
              </h2>
              <p className="text-sm">
                Expert bid management for guaranteed results. Elevate your
                business through successful tenders and projects.
              </p>
              <div className="flex justify-center">
                <button className="bg-[#F45115] w-1/3 text-white md:text-sm xs:text-sm sm:text-sm px-4 py-2 rounded mt-2">
                  Our Services
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex">
            <img
              src={carouselImage}
              alt="Slider 1"
              className="w-full sm:h-80 xl:h-96 lg:h-96 md:h-96 xs:h-80"
            />

            <div className="absolute lg:top-16 xl:top-16 md:top-16 sm:top-10 xs:top-10 right-0 flex flex-col justify-center text-white text-center w-1/2 p-8 xs:w-full sm:w-full">
              <h2 className="lg:text-4xl xl:text-4xl md:text-md sm:text-md xs:text-sm font-bold mb-4">
                Unlock Opportunities with Winning Bids!
              </h2>
              <p className="text-sm">
                Expert bid management for guaranteed results. Elevate your
                business through successful tenders and projects.
              </p>
              <div className="flex justify-center">
                <button className="bg-[#F45115] w-1/3 text-white md:text-sm xs:text-sm sm:text-sm px-4 py-2 rounded mt-2">
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <Card />
    </div>
  );
};

export default Home;
