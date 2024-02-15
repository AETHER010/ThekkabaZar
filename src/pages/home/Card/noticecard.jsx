import React, { useEffect } from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

import { useDispatch, useSelector } from "react-redux";
import { fetchNoticeData } from "../../../reducers/noticeSlice";

const Noticecard = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.notice);

  useEffect(() => {
    dispatch(fetchNoticeData());
  }, [dispatch]);

  useEffect(() => {
    console.log("Noticecard", data);
  }, []);

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
          {data?.data?.map((items, index) => (
            <li key={index}>
              <p
                className="text-[#035FC8] overflow-hidden line-clamp-2"
                value={items.tender}
              >
                {items.notice}
              </p>
              <p className="text-sm">2080/12/12, Monday</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Noticecard;
