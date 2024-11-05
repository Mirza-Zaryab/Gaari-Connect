import * as React from "react";
import { Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ViewButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="flex items-center">
        <Typography>View</Typography>
        <div className="border rounded-full ml-12">
          <IconButton className="border rounded-full" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={handleClose}
            className="font-normal text-sm"
            style={{ color: "#667085" }}
          >
            How it will work
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className="font-normal text-sm"
            style={{ color: "#667085" }}
          >
            Company
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className="font-normal text-sm"
            style={{ color: "#667085" }}
          >
            Insurance & protection
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className="font-normal text-sm"
            style={{ color: "#667085" }}
          >
            Resources
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className="font-normal text-sm"
            style={{ color: "#D22A8F", border: "1px solid #F2F4F7" }}
          >
            Become a host
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className="font-normal text-sm"
            style={{ color: "#667085" }}
          >
            Sign up
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            className="font-normal text-sm"
            style={{ color: "#667085" }}
          >
            Login
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
