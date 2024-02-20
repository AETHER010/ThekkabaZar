import React from "react";
import AboutUsImage from "../../Assets/AboutUs.png";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { red, blue } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import locationimage from "../../Assets/loactionImage.png";

const AboutUs = () => {
  return (
    <div>
      <div className="flex lg:flex-row mt-6 sm:flex-col md:flex-row sm:justify-center sm:items-center">
        <div className="md:w-2/5 lg:w-2/5 sm:w-2/5 p-3 ml-6 md:ml-6 flex justify-center ">
          <img className="mix-blend-color-burn" src={AboutUsImage} alt="" />
        </div>

        <div className="md:w-3/5 w-3/5 p-3">
          <h1 className="text-md md:text-2xl font-popins text-main mt-4">
            Know about Us
          </h1>
          <h1 className="text-4xl md:text-2xl font-popins text-black mt-4 font-bold">
            The premier bidding platform in Nepal, Including all aspects of
            bidding.
          </h1>
          <p className="p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="px-3 pt-5 bg-[#F9F9F9]">
        <h1 className="text-md md:text-xl text-main font-popins font-extrabold ml-7">
          Our Team
        </h1>
        <h1 className="text-md md:text-xl text-black font-popins font-extrabold mt-3 ml-7">
          Meet Our Team
        </h1>
        <div className="flex flex-row flex-wrap justify-center m-2">
          <div className="relative bg-[url(https://img.freepik.com/premium-photo/cute-handsome-anime-boy-blue-light_675932-435.jpg)] lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-64 sm:w-64 bg-no-repeat bg-cover shadow-lg mx-10 mt-8">
            <div className="absolute bottom-0 left-0 text-center p-4">
              <h2 className="text-white font-bold text-lg">himesh bhandari</h2>
              <h2 className="text-white">Full Stack Developer</h2>
            </div>
          </div>

          <div className="relative bg-[url(https://img.freepik.com/premium-photo/cute-handsome-anime-boy-blue-light_675932-435.jpg)] lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-64 sm:w-64 bg-no-repeat bg-cover shadow-lg mx-10 mt-8">
            <div className="absolute bottom-0 left-0 text-center p-4">
              <h2 className="text-white font-bold text-lg">himesh bhandari</h2>
              <h2 className="text-white">Full Stack Developer</h2>
            </div>
          </div>

          <div className="relative bg-[url(https://img.freepik.com/premium-photo/cute-handsome-anime-boy-blue-light_675932-435.jpg)] lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-64 sm:w-64 bg-no-repeat bg-cover shadow-lg mx-10 mt-8">
            <div className="absolute bottom-0 left-0 text-center p-4">
              <h2 className="text-white font-bold text-lg">himesh bhandari</h2>
              <h2 className="text-white">Full Stack Developer</h2>
            </div>
          </div>

          <div className="relative bg-[url(https://img.freepik.com/premium-photo/cute-handsome-anime-boy-blue-light_675932-435.jpg)] lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-64 sm:w-64 bg-no-repeat bg-cover shadow-lg mx-10 mt-8">
            <div className="absolute bottom-0 left-0 text-center p-4">
              <h2 className="text-white font-bold text-lg">himesh bhandari</h2>
              <h2 className="text-white">Full Stack Developer</h2>
            </div>
          </div>

          <div className="relative bg-[url(https://img.freepik.com/premium-photo/cute-handsome-anime-boy-blue-light_675932-435.jpg)] lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-64 sm:w-64 bg-no-repeat bg-cover shadow-lg mx-10 mt-8">
            <div className="absolute bottom-0 left-0 text-center p-4">
              <h2 className="text-white font-bold text-lg">himesh bhandari</h2>
              <h2 className="text-white">Full Stack Developer</h2>
            </div>
          </div>

          <div className="relative bg-[url(https://img.freepik.com/premium-photo/cute-handsome-anime-boy-blue-light_675932-435.jpg)] lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-64 sm:w-64 bg-no-repeat bg-cover shadow-lg mx-10 mt-8">
            <div className="absolute bottom-0 left-0 text-center p-4">
              <h2 className="text-white font-bold text-lg">himesh bhandari</h2>
              <h2 className="text-white">Full Stack Developer</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-3">
        <div className="mt-5 p-5 w-3/5 border rounded-lg shadow-lg">
          <h1 className="text-main text-md font-popins underline text-center">
            Get In Touch
          </h1>
          <p className="text-[#717171] mt-2 text-center">
            Any question or remarks? Just write us a message!
          </p>
          <div className="flex flex-row">
            <div className="flex w-1/2">
              <form className="w-full mt-2">
                <h1 className="text-lg text-black text-center">
                  Say something to start a message!
                </h1>
                <div className="my-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="my-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="my-4">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    className="w-full p-2 border rounded-md"
                    required
                  ></textarea>
                </div>
                <div className="my-6">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col w-1/2 p-5">
              <div className="flex flex-row p-3">
                <span>
                  <PlaceIcon />
                </span>
                <p className="text-md ml-6">
                  Buddhanagar, Kathmandu Nepal Bibhuti Marga
                </p>
              </div>
              <div className="flex flex-row p-3">
                <span>
                  <PhoneIcon />
                </span>
                <p className="text-md ml-6">9860009939</p>
              </div>
              <div className="flex flex-row p-3">
                <span>
                  <EmailIcon />
                </span>
                <p className="text-md ml-6">rajan.aryal195@gmail.com</p>
              </div>

              <div className="flex flex-row p-3">
                <h1 className="text-md">Social Links:</h1>
                <YouTubeIcon className="mx-2" sx={{ color: red[500] }} />
                <FacebookIcon className="mx-2" sx={{ color: blue[500] }} />
                <InstagramIcon className="mx-2" sx={{ color: red[500] }} />
                <TwitterIcon className="mx-2" sx={{ color: blue[500] }} />
              </div>
              <img src={locationimage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
