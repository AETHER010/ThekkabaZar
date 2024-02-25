import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../../reducers/profileSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.profile);
  const { access_token } = useSelector((state) => state.users);

  const [officialName, setOfficialName] = useState("");
  const [fullname, setFullname] = useState("");
  const [officeContactNumber, setOfficeContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [companyName, setCompanyname] = useState("");
  const [websiteURL, setWebsiteUrl] = useState("");

  useEffect(() => {
    // Set local state when data changes
    setFullname(data.fullname || "");
    setCompanyname(data.company_name || "");
    setOfficialName(data.office_name || "");
    setOfficeContactNumber(data.office_contact_number || "");
    setWebsiteUrl(data.website_url || "");
    setAddress(data.district || "");
    setMunicipality(data.municipality || "");
  }, [data]);

  const handleprofileUpdate = () => {
    dispatch(
      updateProfile({
        access_token: access_token,
        fullname: fullname,
        company_name: companyName,
        office_name: officialName,
        office_contact_number: officeContactNumber,
        website_url: websiteURL,
        district: address,
        municipality: municipality,
      })
    );
  };

  return (
    <div>
      <div>
        <div className="flex flex-col border mx-4 my-5 p-5">
          <h1 className="text-xl font-popins font-bold">Edit Profile</h1>
          <h1 className="font-popins text-lg">
            {" "}
            Upate your Personal Information
          </h1>
          <img src="" alt="" />
          <p className="text-sm font-popins mt-2">
            Kindly provide correct number & email.
          </p>
          <div className="flex flex-col mt-5 p-4">
            <div className="flex flex-row justify-between">
              <TextField
                className="my-2 w-full mx-1"
                id="outlined-basic"
                label="FullName"
                variant="outlined"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <TextField
                className="my-2 w-full mx-1"
                id="outlined-basic"
                label="CompanyName"
                variant="outlined"
                value={companyName}
                onChange={(e) => setCompanyname(e.target.value)}
              />
            </div>
            <TextField
              className="my-2"
              id="outlined-basic"
              label="officialName"
              variant="outlined"
              value={officialName}
              onChange={(e) => setOfficialName(e.target.value)}
            />
            <TextField
              className="my-2"
              id="outlined-basic"
              label="Office Contact Number"
              variant="outlined"
              value={officeContactNumber}
              onChange={(e) => setOfficeContactNumber(e.target.value)}
            />
            <TextField
              className="my-2"
              id="outlined-basic"
              label="Office WebSite"
              variant="outlined"
              value={websiteURL}
              onChange={(e) => setWebsiteUrl(e.target.value)}
            />
            <TextField
              className="my-2"
              id="outlined-basic"
              label="District"
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              className="my-2"
              id="outlined-basic"
              label="Municipality"
              variant="outlined"
              value={municipality}
              onChange={(e) => setMunicipality(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center w-2/4">
            <Button variant="contained" onClick={handleprofileUpdate}>
              Update
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
