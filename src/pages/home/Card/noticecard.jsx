import React from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

const Noticecard = () => {
  return (
    <div className="border mx-3 my-5 p-3 shadow-lg">
      <div className="flex flex-row justify-center">
        <span className="origin-center rotate-45">
          <InsertLinkIcon />
        </span>
        <h1 className="text-main text-lg font-popins">Notice</h1>
      </div>

      <div className="pl-6 mt-3">
        <ul className="flex flex-col list-disc">
          <li>
            <p className="text-[#035FC8] overflow-hidden line-clamp-2">
              A tender notice can be the on prepared in the form dummy. A tender
              notice can be the on prepared in the form dummy...
            </p>
            <p className="text-sm">2080/12/12, Monday</p>
          </li>
          <li>
            <p className="text-[#035FC8] overflow-hidden line-clamp-2">
              A tender notice can be the on prepared in the form dummy. A tender
              notice can be the on prepared in the form dummy...
            </p>
            <p className="text-sm">2080/12/12, Monday</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Noticecard;
