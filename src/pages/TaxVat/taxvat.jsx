import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function Taxvat() {
  return (
    <div>
      <div className="flex flex-col items-center p-5 m-5 ">
        <h1 className="text-3xl text-black font-bold md:text-3xl lg:text-4xl  mb-3">
          We avail our multi-valued services
        </h1>
        <p className="whitespace-normal text-sm md:text-sm lg:text-sm w-1/2 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center p-5 m-5">
        <Card className="m-3" sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 180 }}
            image="https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630"
            title="green iguana"
          />
          <CardContent>
            <Typography
              className="text-center"
              gutterBottom
              variant="h5"
              component="div"
            >
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card className="m-3" sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 180 }}
            image="https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630"
            title="green iguana"
          />
          <CardContent>
            <Typography
              className="text-center"
              gutterBottom
              variant="h5"
              component="div"
            >
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card className="m-3" sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 180 }}
            image="https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630"
            title="green iguana"
          />
          <CardContent>
            <Typography
              className="text-center"
              gutterBottom
              variant="h5"
              component="div"
            >
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
