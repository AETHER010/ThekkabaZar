import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import carouselImage from "../../Assets/carousel.jpg";

import { useNavigate } from "react-router-dom";

import { fetchbazarData } from "../../reducers/bazarSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Bazar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const navigationDetail = (mainCategory) => {
    navigate(`/bazar/productdetails/${encodeURIComponent(mainCategory)}`);
  };

  const navigationDetailPage = (subcategory) => {
    navigate(`/bazar/productdetails/${encodeURIComponent(subcategory)}`);
  };

  return (
    <div>
      <div className="p-8">
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
      <div className="p-8">
        <h1 className="text-lg font-popins font-bold">Bazar</h1>
        <h4 className="text-md font-popins">Home / Bazar</h4>
        <div className="border-b-2 mt-3"></div>
      </div>

      {data?.map((items, index) => (
        <div
          key={index}
          className="flex lg:flex-row md:flex-row sm:flex-col border rounded-lg shadow-lg p-8 m-6 cursor-pointer"
        >
          <div
            className="lg:w-2/5 flex flex-col md:w-2/5 sm:w-full"
            onClick={() => navigationDetail(items.name)}
          >
            <h1 className="text-3xl font-popins font-bold text-main">
              {items.name}
            </h1>

            <div className="flex flex-col justify-center items-center p-4 ">
              <img
                className=" h-[350px] w-[368px]"
                src={items.image}
                alt="ntg"
              />
              <Button
                className="w-56 m-3"
                variant="contained"
                onClick={() => navigationDetail(items.name)}
              >
                View All
              </Button>
            </div>
          </div>

          <div className="lg:w-3/5 sm:w-full flex flex-row flex-wrap justify-center ml-3">
            {items.subcategory?.map((subcategory, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-60 cursor-pointer"
                onClick={() => navigationDetailPage(subcategory.name)}
              >
                <h1 className="text-main text-md font-popins mb-4">
                  {subcategory.name}
                </h1>
                <img
                  className="h-36 w-36"
                  src={subcategory.image}
                  alt={`paint-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
