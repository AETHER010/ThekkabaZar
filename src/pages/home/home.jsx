import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Form from "../../components/form/form";
import Card from "./Card/card";
import carouselImage from "../../Assets/carousel.jpg";

const Home = () => {
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
      <div className="p-8">
        <Slider {...settings}>
          <div className="relative">
            <img
              src={carouselImage}
              alt="Slider 1"
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-16 right-0 text-white text-center w-1/2 p-8">
              <h2 className="text-4xl font-bold mb-4">
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
            <img
              src={carouselImage}
              alt="Slider2"
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-16 right-0 text-white text-center w-1/2 p-8">
              <h2 className="text-4xl font-bold mb-4">
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
            <img
              src={carouselImage}
              alt="Slider2"
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-16 right-0 text-white text-center w-1/2 p-8">
              <h2 className="text-4xl font-bold mb-4">
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
      </div>
      <Form />
      <Card />
    </div>
  );
};

export default Home;
