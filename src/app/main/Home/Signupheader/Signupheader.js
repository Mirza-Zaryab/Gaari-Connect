import * as React from "react";

// importing material UI components
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

const preventDefault = (event) => event.preventDefault();

export default function Signupheader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar className="Header">
      <Toolbar className="flex flex-row justify-between fullWidth">
        <div className="flex">
          <a href="/Home/LandingPage">
            <img
              className="headimage"
              src="assets/images/GariConnect/Gari Logo.png"
              alt="logo"
            />
          </a>
        </div>
        <div>
          <div className="flex mt-5 text-sm font-normal space-x-10">
            <Typography
              style={{
                color: "#667085",

              }}
            >
              Not registered yet?
            </Typography>
            <Typography
              component={Link}
              to="/signup"
              style={{
                fontSize: "14px",
                fontWeight: "500px",
                color: "#D22A8F",
                textDecoration: "none"
              }}
            >
              Sign up
            </Typography>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
