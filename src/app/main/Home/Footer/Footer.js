import React from "react";
import Typography from "@mui/material/Typography";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => (
  <footer
    style={{ backgroundColor: "#000000" }}
    className="footer-1 footer py-8 sm:py-12"
  >
    <div className="container mx-auto px-4">
      <div className="mx-32 py-4">
        <div className="mt-72">
          <img
            width="201"
            height="27px"
            src="assets/images/GariConnect/Frame.png"
            alt="logo"
          />
        </div>
        <div>
          <Typography className="text-sm font-normal mt-32 text-white">
            Visit{" "}
            <a href="#" style={{ color: "#FFFFFF" }}>
              Help Center
            </a>
          </Typography>
        </div>
        <div className="sm:flex  sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/6 xl:w-1/6 mt-64">
            <h5
              style={{ color: "#D22A8F" }}
              className="text-lg font-medium text-white mb-6"
            >
              Company
            </h5>
            <ul className="list-none">
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  About
                </Typography>
              </li>
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  Team
                </Typography>
              </li>
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  Policies
                </Typography>
              </li>
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  Careers
                </Typography>
              </li>
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  Press
                </Typography>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/6 xl:w-1/6 mt-8 sm:mt-0">
            <h5
              style={{ color: "#D22A8F" }}
              className="text-lg font-medium text-white mb-6  mt-64"
            >
              Hosting
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-2 ">
                <Typography className="text-white text-sm font-medium mt-16">
                  List your car
                </Typography>
              </li>
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  Carculator
                </Typography>
              </li>
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  All star hosts
                </Typography>
              </li>
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  Host tools
                </Typography>
              </li>
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  Insurance&protection
                </Typography>
              </li>
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  FAQs
                </Typography>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/6 xl:w-1/6 mt-8 md:mt-0">
            <h5
              style={{ color: "#D22A8F" }}
              className="text-lg font-medium text-white mb-6  mt-64"
            >
              Support
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  Help center
                </Typography>
              </li>
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  Safety information
                </Typography>
              </li>
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  Cancellation policy
                </Typography>
              </li>
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  Our COVID-19 Response{" "}
                </Typography>
              </li>
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  Report a problem{" "}
                </Typography>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5
              style={{ color: "#D22A8F" }}
              className="text-lg font-medium text-white mb-6  mt-64"
            >
              Explore
            </h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  Book a car{" "}
                </Typography>
              </li>
              <li className="mb-2">
                <Typography className="text-white text-sm font-medium mt-16">
                  Sustainability{" "}
                </Typography>
              </li>
            </ul>
          </div>
        </div>

        <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
          <div className="sm:flex px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0 sm:space-x-10">
            <img
              width="176"
              height="52px"
              src="assets/images/logos/PlayStore.svg"
              alt="logo"
            />
            <img
              className="sm:mt-0 mt-10"
              width="176"
              height="52px"
              src="assets/images/logos/Apple.svg"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <hr
        className="w-full mt-56"
        style={{
          color: "rgba(255, 255, 255, 0.56)",
          border: "1px solid rgba(255, 255, 255, 0.56)",
        }}
      />
      <div className="container mx-auto px-4">
        <div className="sm:flex justify-between mx-32 mt-28">
          <div className=" space-x-36 flex items-center pb-28">
            <Typography
              className=" text-16 font-normal "
              style={{ color: "#98A2B3" }}
            >
              © 2022 GariConnect. All rights reserved.
            </Typography>

            <Typography
              style={{ color: "#C3CBCD" }}
              className="text-sm font-normal "
            >
              Cookies Policy Legal Terms Privacy Policy
            </Typography>
          </div>

          <div className="flex mb-28 space-x-40 sm:mt-0 mt-40">
            <img width="16px" src="assets/images/logos/Vector.svg" alt="logo" />
            <img
              width="15px"
              src="assets/images/logos/Vector1.svg"
              alt="logo"
            />
            <img
              width="15px"
              src="assets/images/logos/Vector2.svg"
              alt="logo"
            />
            <img
              width="15px"
              src="assets/images/logos/Vector3.svg"
              alt="logo"
            />
            <img
              width="16px"
              src="assets/images/logos/Vector4.svg"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
