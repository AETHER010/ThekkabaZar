import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInterest } from "../../../reducers/profileSlice";

const ProfileInterest = () => {
  const dispatch = useDispatch();

  const { userInterest } = useSelector((state) => state.profile);
  const { access_token } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUserInterest({ access_token: access_token }));
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(userInterest);
  // }, [dispatch]);

  return (
    <div>
      <div className="flex flex-col border mx-4 my-5 p-5">
        <h1 className="text-xl font-popins font-bold">Interest</h1>
        <p className="font-popins text-md my-2">
          Saved Bids and interested area.
        </p>

        <div className="flex flex-col mt-5 p-4">
          <h1 className="font-popins text-xl">Project Types</h1>
          {userInterest?.project_type?.map((items, index) => (
            <ul key={index} className="text-lg mt-5 list-item">
              <li>{items}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileInterest;
