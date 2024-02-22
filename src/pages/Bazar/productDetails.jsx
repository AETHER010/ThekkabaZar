import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import GradingIcon from "@mui/icons-material/Grading";
import WorkIcon from "@mui/icons-material/Work";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

import {
  fetchproductListData,
  updateSearchQuery,
} from "../../reducers/bazarSlice";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { mainCategory } = useParams();

  const { productList, status, error, searchQuery, filteredProducts } =
    useSelector((state) => state.bazar);

  useEffect(() => {
    dispatch(fetchproductListData({ mainCategory: mainCategory }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(updateSearchQuery(""));
  }, []);

  const handlecategorySearch = (category) => {
    dispatch(fetchproductListData({ mainCategory: category }));
  };

  const handleBusinessTypeSearch = (businessType) => {
    dispatch(fetchproductListData({ businessType: businessType }));
  };

  const handleLocationSearch = (location) => {
    dispatch(fetchproductListData({ location: location }));
  };

  const handleNameSearch = () => {
    dispatch(updateSearchQuery(searchQuery));
  };

  return (
    <div>
      <div className="p-8">
        <h1 className="text-lg font-popins font-bold">Products</h1>
        <h4 className="text-md font-popins">
          Bazar/ Equipment, Machinery, Tools & Vehicle
        </h4>
        <div className="border-b-2 mt-3"></div>
      </div>

      <div className="flex flex-row justify-between p-8">
        <h1 className="text-xl font-popins font-bold">
          Equipment, Machinery, Tools & Vehicle(50)
        </h1>
        <div className="border-2 flex flex-row rounded-full items-center w-1/4 h-12	">
          <SearchIcon onClick={handleNameSearch} className="text-2xl ml-2" />
          <TextField
            className="w-full"
            id="input-with-sx"
            label="Search..."
            sx={{ height: "3rem" }}
            InputProps={{
              classes: {
                notchedOutline: "border-none",
              },
            }}
            value={searchQuery}
            onChange={(e) => dispatch(updateSearchQuery(e.target.value))}
          />
        </div>
      </div>

      <div className="flex flex-row ">
        <div className="w-1/3 bg-[#F6F9FB] flex flex-col p-5">
          <h1 className="text-lg font-bold text-main">Filter</h1>

          <div className="border-b-2 w-full my-3"></div>
          <div className="flex flex-col flex-wrap border rounded-lg p-3 bg-white">
            <div className="flex flex-row mt-2 ">
              <span className="">
                <GradingIcon />
              </span>
              <h1 className="text-md text-main font-popins ml-3 ">
                Related Category
              </h1>
            </div>
            {productList?.related_categories?.map((items, index) => (
              <ul key={index} className="flex flex-col list-disc ml-7 mt-3">
                <li
                  className="cursor-pointer"
                  onClick={() => handlecategorySearch(items.name)}
                >
                  {items.name}
                </li>
              </ul>
            ))}
          </div>

          <div className="flex flex-col flex-wrap border rounded-lg p-3 mt-4 bg-white">
            <div className="flex flex-row mt-2">
              <span className="">
                <WorkIcon />
              </span>
              <h1 className="text-md text-main font-popins ml-3 mt-3">
                Business Type
              </h1>
            </div>
            <div>
              {productList?.businesstype?.map((items, index) => (
                <ul key={index} className="flex flex-col list-disc ml-7 mt-3">
                  <li
                    className="cursor-pointer"
                    onClick={() => handleBusinessTypeSearch(items.name)}
                  >
                    {items.name}
                  </li>
                </ul>
              ))}
            </div>
          </div>

          <div className="flex flex-col flex-wrap border rounded-lg p-3 mt-4 bg-white">
            <div className="flex flex-row mt-2">
              <span className="">
                <FmdGoodIcon />
              </span>
              <h1 className="text-md text-main font-popins ml-3 ">Location</h1>
            </div>
            <div>
              {productList?.location?.map((items, index) => (
                <ul key={index} className="flex flex-col list-disc ml-7 mt-3">
                  <li
                    className="cursor-pointer"
                    onClick={() => handleLocationSearch(items.name)}
                  >
                    {items.name}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/3 border-t-2 p-4">
          <div className="flex flex-row mt-3">
            <span className="ml-2">
              <PlaylistAddCheckIcon sx={{ fontSize: 40 }} />
            </span>
            <h1 className="text-3xl font-popins text-main font-bold ml-3">
              Products
            </h1>
          </div>

          <div>
            {productList?.products?.map((items, index) => (
              <div
                key={index}
                className="relative w-full flex flex-row flex-wrap border rounded-lg p-3 m-3"
              >
                <img
                  className="aspect-[3/2]"
                  src={items.image}
                  alt="image32"
                  style={{ width: "200px", height: "220px" }}
                />

                <div className="flex flex-col ml-4">
                  <h1 className="text-lg text-main font-bold">{items.name}</h1>
                  <h1>Name: {items.name}</h1>
                  <h1>Brand: {items.brand}</h1>
                  <h1>Price: {items.price}</h1>
                </div>

                <div className="border rounded-lg bg-[#FFEFD7] absolute right-4 top-0 p-2 m-3 w-1/3">
                  <h1 className="text-lg text-red-500 ">
                    Supplier INformation
                  </h1>

                  <div className="border-b-2 w-full mt-2">
                    <div className="border-b-4 w-9 border-red-600"> </div>
                  </div>
                  <div className="mt-2">
                    <h1 className="text-lg">{items.suppliername}</h1>
                    <div className="flex flex-row mt-3">
                      <span>
                        <LocationOnIcon />
                      </span>
                      <h1 className="font-popins ml-3">{items.city}</h1>
                    </div>
                    <div className="flex flex-row mt-3">
                      <span>
                        <PhoneIcon />
                      </span>
                      <h1 className="font-popins ml-3">
                        {items.mobile_number}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
