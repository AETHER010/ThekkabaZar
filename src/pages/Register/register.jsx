import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../reducers/authSlice";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [company, setCompany] = useState("");
  const [officialName, setOfficialName] = useState("");
  const [officialNumber, setOfficialNumber] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [providence, setProvidence] = useState("");
  const [district, setDistrict] = useState("");
  const [municipality, setmunicipality] = useState("");
  const [registrationFile, setRegistrationFile] = useState(null);
  const [panVatfile, setPanVatfile] = useState(null);

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "succeeded") {
      navigate("/");
    }
  }, [dispatch, status]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = () => {
    dispatch(
      register({
        username: username,
        fullname: fullName,
        password: password,
        email: email,
        password2: confirmpassword,
        phone_number: contactNumber,
        company_name: company,
        office_name: officialName,
        office_contact_number: officialNumber,
        district: district,
        website_url: websiteUrl,
        municipality: municipality,
        providence: providence,
        pan_vat_certificate: panVatfile,
        company_registration_certificate: registrationFile,
      })
    );
  };

  const handleFileRegisterationChange = (e) => {
    const selectedFile = e.target.files[0];
    setRegistrationFile(selectedFile);
  };

  const handleFilePanVatChange = (e) => {
    const selectedFile = e.target.files[0];
    setPanVatfile(selectedFile);
  };

  return (
    <div className="container mx-auto  my-8 border p-2">
      <div className="flex items-center mb-3 p-5">
        <h2
          className={`cursor-pointer p-3 ml-8${
            activeTab === "personal"
              ? "text-blue-500 bg-[#F7F7F7] border-t-4 border-main p-3 ml-8"
              : ""
          }`}
          onClick={() => handleTabChange("personal")}
        >
          Personal Details
        </h2>
        <h2
          className={`cursor-pointer p-3 ml-8${
            activeTab === "organization"
              ? "text-blue-500 bg-[#F7F7F7] border-t-4 border-main p-3 ml-8"
              : ""
          }`}
          onClick={() => handleTabChange("organization")}
        >
          Organization Details
        </h2>
      </div>

      <div className="border-b-2"></div>

      {activeTab === "personal" && (
        <div>
          <form className="flex flex-wrap lg:flex-col md:flex-col sm:flex-col mt-4">
            <div className="flex justify-between lg:flex-row md:flex-row sm:flex-col">
              <div className="mr-4 p-2 flex flex-col w-full">
                <label className="text-lg" htmlFor="fullName">
                  Full Name<span className="text-red-600">*</span>:
                </label>
                <input
                  className="bg-[#eaeaea] mt-2 p-2 h-14 rounded-lg border border-gray-300"
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Ram Thapa"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="mr-4 p-2 flex flex-col  w-full">
                <label className="text-lg" htmlFor="username">
                  User Name<span className="text-red-600">*</span>:
                </label>
                <input
                  className="bg-[#eaeaea] mt-2 p-2 h-14 rounded-lg border border-gray-300"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="ramthapa"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-row sm:flex-col">
              <div className="mr-4 p-2 flex flex-col  w-full">
                <label className="text-lg" htmlFor="email">
                  Email Address<span className="text-red-600">*</span>:
                </label>
                <input
                  className="bg-[#eaeaea] mt-2 p-2 h-14 rounded-lg border border-gray-300"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="ram.Thapa@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mr-4 p-2 flex flex-col  w-full">
                <label className="text-lg" htmlFor="contact">
                  Contact Number:
                </label>
                <input
                  className="bg-[#eaeaea] mt-2 p-2 h-14 rounded-lg border border-gray-300"
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="9876565656"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-row sm:flex-col">
              <div className="mr-4 p-2 flex flex-col  w-full">
                <label className="text-lg" htmlFor="password">
                  Password<span className="text-red-600">*</span>:
                </label>
                <input
                  className="bg-[#eaeaea] mt-2 p-2 h-14 rounded-lg border border-gray-300"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="*********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mr-4 p-2 flex flex-col  w-full">
                <label className="text-lg" htmlFor="confirmpassword">
                  Confirm Password<span className="text-red-600">*</span>:
                </label>
                <input
                  className="bg-[#eaeaea] mt-2 p-2 h-14 rounded-lg border border-gray-300"
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  placeholder="*********"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-6 flex justify-center items-center">
              <Button
                variant="contained"
                onClick={() => handleTabChange("organization")}
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      )}

      {activeTab === "organization" && (
        <div>
          <form className="flex flex-wrap lg:flex-col md:flex-col sm:flex-col mt-4">
            <div className="flex lg:flex-row md:flex-row sm:flex-col justify-between">
              <div className="mr-4 p-2 flex flex-col  w-full">
                <label className="text-lg" htmlFor="companyName">
                  Company Name<span className="text-red-600">*</span>:
                </label>
                <input
                  className="bg-[#eaeaea] mt-2 p-2 h-14 rounded-lg border border-gray-300"
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="XYZ..."
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className="mr-4 p-2 flex flex-col  w-full">
                <label className="text-lg" htmlFor="officialName">
                  Official Name<span className="text-red-600">*</span>:
                </label>
                <input
                  className="bg-[#eaeaea] mt-2 p-2 h-14 rounded-lg border border-gray-300"
                  type="text"
                  id="officialName"
                  name="officialName"
                  placeholder="XYZ..."
                  value={officialName}
                  onChange={(e) => setOfficialName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-row sm:flex-col justify-between">
              <div className="mr-4 p-2 flex flex-col  w-full">
                <label className="text-lg" htmlFor="contactNumber">
                  Contact Number<span className="text-red-600">*</span>:
                </label>
                <input
                  className="bg-[#eaeaea] mt-2 p-2 h-14 rounded-lg border border-gray-300"
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="9876543219"
                  value={officialNumber}
                  onChange={(e) => setOfficialNumber(e.target.value)}
                />
              </div>

              <div className="mr-4 p-2 flex flex-col  w-full">
                <label className="text-lg" htmlFor="websiteUrl">
                  Website URL:
                </label>
                <input
                  className="bg-[#eaeaea] mt-2 p-2 h-14 rounded-lg border border-gray-300"
                  type="text"
                  id="websiteUrl"
                  name="websiteUrl"
                  placeholder="www.xyz.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                />
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-row sm:flex-col justify-between">
              <div className="mr-4 p-2 flex flex-col  w-full">
                <label className="text-lg" htmlFor="providence">
                  Providence<span className="text-red-600">*</span>:
                </label>
                <input
                  className="bg-[#eaeaea] mt-2 p-2 h-14 rounded-lg border border-gray-300"
                  type="text"
                  id="providence"
                  name="providence"
                  placeholder="XYZ..."
                  value={providence}
                  onChange={(e) => setProvidence(e.target.value)}
                />
              </div>

              <div className="mr-4 p-2 flex flex-col  w-full">
                <label className="text-lg" htmlFor="district">
                  District<span className="text-red-600">*</span>:
                </label>
                <input
                  className="bg-[#eaeaea] mt-2 p-2 h-14 rounded-lg border border-gray-300"
                  type="text"
                  id="district"
                  name="district"
                  placeholder="XYZ..."
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div className="mr-4 p-2 flex flex-col  w-full">
                <label className="text-lg" htmlFor="municipality">
                  Municipality<span className="text-red-600">*</span>:
                </label>
                <input
                  className="bg-[#eaeaea] mt-2 p-2 h-14 rounded-lg border border-gray-300"
                  type="text"
                  id="municipality"
                  name="municipality"
                  placeholder="XYZ..."
                  value={municipality}
                  onChange={(e) => setmunicipality(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col mt-9 p-5">
              <h1 className="text-2xl font-popins font-bold">
                Upload Documents
              </h1>
              <p className="text-md font-popins bg-[#f3e8c2] border border-yellow-600 rounded-lg p-3 w-2/3 mt-3">
                (Pdf, Image Supported.) Please only upload authorized documents,
                and you will be held responsible.
              </p>
              <div className="flex flex-row justify-between mt-7">
                <div className="flex flex-col w-full m-1">
                  <label htmlFor="fileUpload" className="text-xl font-popins">
                    Upload PAN/VAT certificate:
                  </label>
                  <input
                    className="w-full border p-3 mt-2"
                    type="file"
                    id="fileUpload"
                    name="fileUpload"
                    accept="image/*,application/pdf"
                    onChange={handleFilePanVatChange}
                  />
                </div>
                <div className="flex flex-col w-full m-1">
                  <label htmlFor="fileUpload" className="text-xl font-popins">
                    Upload Company Registration Certificate (Front)
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="w-full border p-3 mt-2"
                    type="file"
                    id="fileUpload"
                    name="fileUpload"
                    accept="image/*,application/pdf"
                    onChange={handleFileRegisterationChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center items-center">
              <Button
                variant="contained"
                sx={{ width: "8rem" }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* <div className="mt-6 flex justify-center items-center">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded "
          onClick={handleSubmit}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default RegisterForm;
