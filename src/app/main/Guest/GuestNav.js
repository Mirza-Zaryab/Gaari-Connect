import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import styled from "styled-components";

const StyledIcon = styled(FavoriteBorderIcon)`
  :hover {
    stroke: #D22A8F;
    fill: #D22A8F;
  }
`;

const GuestNav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-20 border-b bg-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="/Home/LandingPage">
              <img
                className="headimage"
                src="assets/images/GariConnect/Gari Logo.png"
                alt="logo"
              />
            </a>
            <IconButton
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MenuIcon />
              <i className="fas fa-bars"></i>
            </IconButton>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto sm:space-x-10">
              <li>
                <Button
                  component={Link}
                  to="/Home/Landingpage"
                  className="rounded-4 h-36 text-white"
                  style={{ backgroundColor: "#D22A8F", width: "111px" }}
                >
                  Book now
                </Button>
              </li>
              <li className="nav-item sm:mt-0 mt-10">
                <Button
                  component={Link}
                  to="/HostTabs"
                  className="rounded-4 h-36"
                  style={{
                    border: "1px solid #C3CBCD",
                  }}
                >
                  Become a host
                </Button>
              </li>
              <li className="nav-item space-x-10">
                <IconButton component={Link} to="/FavouriteCars">
                  <StyledIcon />
                </IconButton>
                <IconButton component={Link} to="/Notifications">
                  <NotificationsNoneOutlinedIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl3}
                  id="account-menu"
                  open={open3}
                  onClose={handleClose3}
                  // onClick={handleClose3}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem>
                    <Typography className="text-12 font-semibold">
                      Notifications
                    </Typography>
                    <Typography
                      className="text-10 font-medium ml-auto"
                      sx={{ color: "#D22A8F" }}
                    >
                      Mark as all read
                    </Typography>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <div className="flex items-center">
                      <div className="flex items-center mr-10">
                        <img
                          className="mr-8"
                          style={{ maxWidth: 34, maxHeight: 34 }}
                          src="assets/images/profile/HassanAli.png"
                          alt="logo"
                        />
                        <Typography className="text-10 font-medium">
                          Hassan Ali{" "}
                          <span className="text-gray-500">
                            requested to extend dated <br /> of booking
                          </span>
                        </Typography>
                      </div>
                      <div className="flex-col text-right">
                        <MoreHorizIcon className="" />
                        <Typography
                          className=""
                          sx={{ fontSize: 8 }}
                          color="text.secondary"
                        >
                          3 minutes ago
                        </Typography>
                      </div>
                    </div>
                  </MenuItem>
                  <Divider className="mx-16" />
                  <MenuItem>
                    <div className="flex items-center">
                      <div className="flex items-center mr-10">
                        <img
                          className="mr-8"
                          style={{ maxWidth: 34, maxHeight: 34 }}
                          src="assets/images/profile/HassanAli.png"
                          alt="logo"
                        />
                        <Typography className="text-10 font-medium">
                          Hassan Ali{" "}
                          <span className="text-gray-500">
                            requested to extend dated <br /> of booking
                          </span>
                        </Typography>
                      </div>
                      <div className="flex-col text-right">
                        <MoreHorizIcon className="" />
                        <Typography
                          className=""
                          sx={{ fontSize: 8 }}
                          color="text.secondary"
                        >
                          3 minutes ago
                        </Typography>
                      </div>
                    </div>
                  </MenuItem>
                  <Divider className="mx-16" />
                  <MenuItem>
                    <div className="flex items-center">
                      <div className="flex items-center mr-10">
                        <img
                          className="mr-8"
                          style={{ maxWidth: 34, maxHeight: 34 }}
                          src="assets/images/profile/HassanAli.png"
                          alt="logo"
                        />
                        <Typography className="text-10 font-medium">
                          Hassan Ali{" "}
                          <span className="text-gray-500">
                            requested to extend dated <br /> of booking
                          </span>
                        </Typography>
                      </div>
                      <div className="flex-col text-right">
                        <MoreHorizIcon className="" />
                        <Typography
                          className=""
                          sx={{ fontSize: 8 }}
                          color="text.secondary"
                        >
                          3 minutes ago
                        </Typography>
                      </div>
                    </div>
                  </MenuItem>
                  <Divider className="mx-16" />
                  <MenuItem>
                    <div className="flex items-center">
                      <div className="flex items-center mr-10">
                        <img
                          className="mr-8"
                          style={{ maxWidth: 34, maxHeight: 34 }}
                          src="assets/images/profile/HassanAli.png"
                          alt="logo"
                        />
                        <Typography className="text-10 font-medium">
                          Hassan Ali{" "}
                          <span className="text-gray-500">
                            requested to extend dated <br /> of booking
                          </span>
                        </Typography>
                      </div>
                      <div className="flex-col text-right">
                        <MoreHorizIcon className="" />
                        <Typography
                          className=""
                          sx={{ fontSize: 8 }}
                          color="text.secondary"
                        >
                          3 minutes ago
                        </Typography>
                      </div>
                    </div>
                  </MenuItem>
                </Menu>

                <IconButton component={Link} to="/GuestSetting">
                  <SettingsIcon />
                </IconButton>
                <IconButton onClick={handleClick2}>
                  <PersonOutlineOutlinedIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl2}
                  open={open2}
                  onClose={handleClose2}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem
                    component={Link}
                    to="/Profile"
                    onClick={handleClose2}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/Settings"
                    onClick={handleClose2}
                  >
                    Settings
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/Support"
                    onClick={handleClose2}
                  >
                    Help & support
                  </MenuItem>
                  <MenuItem onClick={handleClose2}>Logout</MenuItem>
                </Menu>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default GuestNav;
