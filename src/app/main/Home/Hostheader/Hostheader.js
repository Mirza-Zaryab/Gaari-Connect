import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "styles/garistyle.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuIcon from '@mui/icons-material/Menu';


const preventDefault = (event) => event.preventDefault();

export default function Hostheader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 shadow-xl shadow-white min-h-64">
     
     <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start pl-96 sm:pt-0 pt-10 sm:pb-0 pb-10 ">
            <a
              href="/Home/Landingpage"
            >
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
              "lg:flex flex-grow items-center justify-center pt-12 pb-12 pr-48" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
             
              
              <li className="nav-item">
                <Button
                  className="headbutton"
                  style={{
                    background: "#C3CBCD",
                    color: "#000000",
                    borderRadius: "4px",
                  }}
                >
                  List your car
                </Button>
              </li>
              <li className="nav-item">
                <IconButton>
                  <NotificationsNoneOutlinedIcon />
                </IconButton>
                <IconButton>
                  <SettingsIcon />
                </IconButton>
                <IconButton>
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              </li>
              <li className="nav-item">
               
              </li>
              <li className="nav-item">
              
              </li>
            </ul>
          </div>
        
      </nav>
    </>
  );
}
