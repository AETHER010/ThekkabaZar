import React from "react";
import Button from "@mui/material/Button";

const Orgcard = () => {
  return (
    <div className=" border p-3 m-3 shadow-lg lg:block sm:hidden">
      <h1 className="text-xl font-popins text-center text-main">
        Organizational Category
      </h1>
      <div className="px-6 mt-3">
        <ul className="flex flex-row list-disc justify-between">
          <li className="m-1">Health</li>
          <Button className="rounded-full bg-[#4D0089] m-1" variant="contained">
            50
          </Button>
        </ul>
        <ul className="flex flex-row list-disc justify-between">
          <li className="m-1">Banking</li>
          <Button className="rounded-full bg-[#F45115] m-1" variant="contained">
            50
          </Button>
        </ul>
        <ul className="flex flex-row list-disc justify-between">
          <li className="m-1">Co-oprative</li>
          <Button className="rounded-full bg-[#217DA3] m-1" variant="contained">
            50
          </Button>
        </ul>
        <ul className="flex flex-row list-disc justify-between">
          <li className="m-1">NGOs</li>
          <Button className="rounded-full bg-[#4D0089] m-1" variant="contained">
            50
          </Button>
        </ul>
        <ul className="flex flex-row list-disc justify-between">
          <li className="m-1">Banking</li>
          <Button className="rounded-full bg-[#F45115] m-1" variant="contained">
            50
          </Button>
        </ul>
        <ul className="flex flex-row list-disc justify-between">
          <li className="m-1">Co-operative</li>
          <Button className="rounded-full bg-[#217DA3] m-1" variant="contained">
            50
          </Button>
        </ul>
        <ul className="flex flex-row list-disc justify-between">
          <li className="m-1">NGOs</li>
          <Button className="rounded-full bg-[#F45115] m-1" variant="contained">
            50
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Orgcard;
