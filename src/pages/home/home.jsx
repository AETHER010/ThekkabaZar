import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Form from "../../components/form/form";

function home() {
  const settings = {
    dots: true,
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
              src="https://placekitten.com/1200/300"
              alt="Slider 1"
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full">
              <h2 className="text-4xl font-bold mb-4">Your Text Here</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Your Button
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://placekitten.com/1200/301"
              alt="Slider2"
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full">
              <h2 className="text-4xl font-bold mb-4">Your Text Here</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Your Button
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://placekitten.com/1200/301"
              alt="Slider2"
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full">
              <h2 className="text-4xl font-bold mb-4">Your Text Here</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Your Button
              </button>
            </div>
          </div>
        </Slider>
      </div>
      <Form />
    </div>
  );
}

export default home;
