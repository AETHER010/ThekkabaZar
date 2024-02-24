import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { fetchPriceData } from "../../reducers/priceListSlice";
import { useDispatch, useSelector } from "react-redux";

import Bank from "./bankdetail";

const Price = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.price);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPriceData());
  }, [dispatch]);

  if (error) {
    return (
      <h1 className=" flex text-center text-3xl">Error in data fetching</h1>
    );
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center m-4 p-3">
        <h1 className="text-2xl font-popins text-black font-bold">Pricing</h1>
        <p className="text-lg">
          We offer great <span className="text-main">price</span> plan for the
          application
        </p>
      </div>
      <div className="flex justify-center m-4">
        {data?.plans?.map((items, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 900,
              margin: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardHeader
              title={items.name}
              // subheader="Subtitle goes here"
              className="bg-[#DDF7FF]"
            />
            <CardContent>
              <Typography
                className="text-3xl text-center"
                gutterBottom
                variant="h5"
                component="div"
              >
                <span className="text-sm">Rs</span> {items.price}
                <span className="text-sm"> /permonth</span>
              </Typography>
              {items?.features?.map((feature, index) => (
                <Typography key={index} variant="body2">
                  <div className="flex justify-between border-b-2 m-1 p-2">
                    <p className="text-lg w-72">{feature.name}</p>
                    <span className="text-[#107C10]">
                      <CheckCircleIcon />
                    </span>
                  </div>
                </Typography>
              ))}
            </CardContent>
            <CardActions className="flex justify-center mt-auto m-2 bottom-0">
              <Button
                className="bg-main"
                variant="contained"
                onClick={() => setIsModalOpen(true)}
              >
                Purchase Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <Bank open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Price;
