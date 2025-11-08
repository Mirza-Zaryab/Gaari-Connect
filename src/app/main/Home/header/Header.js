import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "styles/garistyle.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';


export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const logStatus = useSelector(({ auth }) => auth.login);
  console.log(logStatus.success)

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
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 shadow-xl shadow-white h-auto">

        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start sm:pt-0 pt-10 sm:pb-0 pb-10 ml-96">
          <a
            href="/Home/LandingPage"
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
            "lg:flex flex-grow items-center sm:mr-96 justify-center pt-12 pb-12" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item mt-6 pr-12">
              <Button
                className="text-sm font-medium "
              >
                How It works
              </Button>
            </li>
            <li className="nav-item mt-6 pr-12">
              <Button
                id="basic-button"
                onClick={handleClick}

                endIcon={<KeyboardArrowDownIcon />}
              >
                Company
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </li>
            <li className="nav-item mt-6">
              <Button
                id="basic-button"
                onClick={handleClick}
                className="mr-48"
                endIcon={<KeyboardArrowDownIcon />}
              >
                Resources
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </li>
            {logStatus.success === true ? (
              <li className="nav-item mr-32 flex space-x-6 sm:mb-0 mb-16 sm:mx-0 mx-auto">
                <Button component={Link} to="/SignIn" style={{ color: "black", fontSize: "14px", fontWeight: "500px", textDecoration: "none" }}>
                  Log out
                </Button>
              </li>
            ) : (

              <li className="nav-item mr-32 mt-10 flex space-x-6 sm:mb-0 mb-16 sm:mx-0 mx-auto">
                <Typography style={{ color: "black", fontSize: "14px", fontWeight: "500px", textDecoration: "none" }} component={Link} to="/SignIn">
                  Sign in
                </Typography>
                <Typography style={{ color: "rgba(195, 203, 205, 1)", fontSize: "14px", fontWeight: "500px" }}>
                  |
                </Typography>
                <Typography style={{ color: "black", fontSize: "14px", fontWeight: "500px", textDecoration: "none" }} component={Link} to="/Signup">
                  Sign up
                </Typography>
              </li>
            )}

            <li className="nav-item sm:mb-0 mb-16 ml-10">
              <Button
                component={Link}
                to="/HostTabs"
                className="headbutton"
                style={{
                  background: "#D22A8F",
                  color: "#FFFFFF",
                }}
              >
                Become a host
              </Button>
            </li>
          </ul>
        </div>

      </nav>
    </>
  );
}
