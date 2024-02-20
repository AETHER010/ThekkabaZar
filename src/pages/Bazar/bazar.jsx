import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "../../Assets/image2.png";
import Button from "@mui/material/Button";
import Paint from "../../Assets/paint.png";
import Bricks from "../../Assets/Bricks.png";
import Cement from "../../Assets/cement.png";
import Door from "../../Assets/door.png";
import PlyWood from "../../Assets/plywoods.png";
import Wires from "../../Assets/wires.png";

import { fetchbazarData } from "../../reducers/bazarSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Bazar() {
  const dispatch = useDispatch();

  const { data, status, error } = useSelector((state) => state.bazar);

  useEffect(() => {
    dispatch(fetchbazarData());
  }, [dispatch]);

  const settings = {
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
      <div className="p-8">
        <h1 className="text-lg font-popins font-bold">Bazar</h1>
        <h4 className="text-md font-popins">Home / Bazar</h4>
        <div className="border-b-2 mt-3"></div>
      </div>

      <div className="flex flex-row border rounded-lg shadow-lg p-8 m-6">
        <div className="w-2/5 flex flex-col">
          <h1 className="text-3xl font-popins font-bold text-main">
            Your One-Stop Marketplace for Construction Materials
          </h1>
          <p className="text-sm font-popins">
            Welcome to the ultimate destination for all your construction needs.
          </p>
          <div className="flex flex-col justify-center items-center p-4">
            <img src={Image} alt="ntg" />
            <Button className="w-56 m-3" variant="contained">
              View All
            </Button>
          </div>
        </div>

        <div className="lg:w-3/5 md:w-full sm:w-full flex flex-row flex-wrap justify-center ">
          <div className="flex flex-col items-center w-60 ">
            <h1 className="text-main text-md font-popins mb-4">
              Emulsion Paints & Putty
            </h1>
            <img className="h-36 w-36" src={Paint} alt="paint" />
          </div>
          <div className="flex flex-col items-center w-60">
            <h1 className="text-main text-md font-popins mb-4">
              TMT Bars & Wire
            </h1>
            <img className="h-36 w-36" src={Wires} alt="wires" />
          </div>
          <div className="flex flex-col items-center w-60">
            <h1 className="text-main text-md font-popins mb-4">Plywood </h1>
            <img className="h-36 w-36" src={PlyWood} alt="Plywoods" />
          </div>
          <div className="flex flex-col items-center  w-60">
            <h1 className="text-main text-md font-popins mb-4">
              Block & Brick
            </h1>
            <img className="h-36 w-36" src={Bricks} alt="bricks" />
          </div>
          <div className="flex flex-col items-center  w-60">
            <h1 className="text-main text-md font-popins mb-4">Cement</h1>
            <img className="h-36 w-36" src={Cement} alt="cement" />
          </div>
          <div className="flex flex-col items-center  w-60">
            <h1 className="text-main text-md font-popins mb-4">
              Door & Door Fitting
            </h1>
            <img className="h-36 w-36" src={Door} alt="door" />
          </div>
        </div>
      </div>
    </div>
  );
}
