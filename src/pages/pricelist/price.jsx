import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Price = () => {
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
        <Card sx={{ maxWidth: 900, margin: "1rem" }}>
          <CardHeader
            title="Basic Plan"
            subheader="Subtitle goes here"
            className="bg-[#DDF7FF]"
          />
          <CardContent>
            <Typography
              className="text-3xl text-center"
              gutterBottom
              variant="h5"
              component="div"
            >
              Rs 1000 <span className="text-sm"> /permonth</span>
            </Typography>
            <Typography variant="body2">
              <div className="flex justify-between border-b-2 m-1 p-2">
                <p className="text-lg w-72">Feature Included</p>
                <span className="text-[#107C10]">
                  <CheckCircleIcon />
                </span>
              </div>
              <div className="flex justify-between items-center border-b-2 m-1 p-2">
                <p className="text-lg w-72">Feature Included</p>
                <span className="text-[#107C10]">
                  <CheckCircleIcon />
                </span>
              </div>
              <div className="flex justify-between items-center border-b-2 m-1 p-2">
                <p className="text-lg w-72">Feature Included</p>
                <span className="text-[#107C10]">
                  <CheckCircleIcon />
                </span>
              </div>
              <div className="flex justify-between items-center border-b-2 m-1 p-2">
                <p className="text-lg w-72">Feature Included</p>
                <span className="text-[#107C10]">
                  <CheckCircleIcon />
                </span>
              </div>
            </Typography>
          </CardContent>
          <CardActions className="flex justify-center m-2">
            <Button className="bg-main" variant="contained">
              Purchase Now
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 900, margin: "1rem" }}>
          <CardHeader
            title="Standard Plan"
            subheader="Subtitle goes here"
            className="bg-[#F7EAFF]"
          />
          <CardContent>
            <Typography
              className="text-3xl text-center"
              gutterBottom
              variant="h5"
              component="div"
            >
              Rs 1000 <span className="text-sm"> /permonth</span>
            </Typography>
            <Typography variant="body2">
              <div className="flex justify-between border-b-2 m-1 p-2">
                <p className="text-lg w-72">Feature Included</p>
                <span className="text-[#107C10]">
                  <CheckCircleIcon />
                </span>
              </div>
              <div className="flex justify-between items-center border-b-2 m-1 p-2">
                <p className="text-lg w-72">Feature Included</p>
                <span className="text-[#107C10]">
                  <CheckCircleIcon />
                </span>
              </div>
              <div className="flex justify-between items-center border-b-2 m-1 p-2">
                <p className="text-lg w-72">Feature Included</p>
                <span className="text-[#107C10]">
                  <CheckCircleIcon />
                </span>
              </div>
              <div className="flex justify-between items-center border-b-2 m-1 p-2">
                <p className="text-lg w-72">Feature Included</p>
                <span className="text-[#107C10]">
                  <CheckCircleIcon />
                </span>
              </div>
            </Typography>
          </CardContent>
          <CardActions className="flex justify-center m-2">
            <Button className="bg-main" variant="contained">
              Purchase Now
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 900, margin: "1rem" }}>
          <CardHeader
            title="Premium Plan"
            subheader="Subtitle goes here"
            className="bg-[#FFF1D8]"
          />
          <CardContent>
            <Typography
              className="text-3xl text-center"
              gutterBottom
              variant="h5"
              component="div"
            >
              Rs 1000 <span className="text-sm"> /permonth</span>
            </Typography>
            <Typography variant="body2">
              <div className="flex justify-between border-b-2 m-1 p-2">
                <p className="text-lg w-72">Feature Included</p>
                <span className="text-[#107C10]">
                  <CheckCircleIcon />
                </span>
              </div>
              <div className="flex justify-between items-center border-b-2 m-1 p-2">
                <p className="text-lg w-72">Feature Included</p>
                <span className="text-[#107C10]">
                  <CheckCircleIcon />
                </span>
              </div>
              <div className="flex justify-between items-center border-b-2 m-1 p-2">
                <p className="text-lg w-72">Feature Included</p>
                <span className="text-[#107C10]">
                  <CheckCircleIcon />
                </span>
              </div>
              <div className="flex justify-between items-center border-b-2 m-1 p-2">
                <p className="text-lg w-72">Feature Included</p>
                <span className="text-[#107C10]">
                  <CheckCircleIcon />
                </span>
              </div>
            </Typography>
          </CardContent>
          <CardActions className="flex justify-center m-2">
            <Button className="bg-main" variant="contained">
              Purchase Now
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Price;
