import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { DateRangePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
import Box from "@mui/material/Box";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import InputAdornment from "@mui/material/InputAdornment";

export default function Navbar() {
  const [value, setValue] = React.useState(["20,May", "21,April"]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [view, setView] = React.useState(null);
  const viewOpen = Boolean(anchorEl);
  const viewClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const viewClose = () => {
    setAnchorEl(null);
  };
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-20 shadow-lg mb-2">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ml-56 h-auto">
          <a href="/Home/LandingPage">
            <img
              className="headimage"
              src="assets/images/GariConnect/Gari Logo.png"
              alt="logo"
            />
          </a>
          <IconButton
            className="text-black cursor-pointer md:mr-40 mr-20 text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
          <ul
            className="flex lg:flex-row list-none h-full md:mt-auto mt-20"
            
          >
            <div className=" border rounded-full w-auto md:w-md">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 h-full w-full">
                <div className="flex items-center">
                  {/* <Divider orientation="vertical" variant="middle" />  */}
                  <FmdGoodOutlinedIcon className="ml-5" style={{color:"#98A2B3"}}/>
                  <Typography className="mx-6" style={{color:"#98A2B3"}}>Location</Typography>
                  <Stack>
                    <Autocomplete
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      sx={{ width: 150 }}
                      options={top100Films.map((option) => option.title)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          InputProps={{
                            ...params.InputProps,
                            disableUnderline: true,
                            type: "search",
                          }}
                        />
                      )}
                    />
                  </Stack>
                </div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateRangePicker
                    startText=""
                    endText=""
                    value={value}
                    inputFormat="dd,MMM"
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                      <React.Fragment>
                        <div className="w-2xl ml-10">
                          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <Divider
                              orientation="vertical"
                              className="h-36 md:visible invisible"
                              sx={{ color: "action.active", mr: 1, my: 0.5 }}
                              variant="middle"
                            />
                            <TextField
                              {...startProps}
                              variant="standard"
                              className="w-auto mb-5"
                              InputProps={{
                                disableUnderline: true,
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <KeyboardArrowDownIcon />
                                  </InputAdornment>
                                ),
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <CalendarTodayOutlinedIcon className="w-20"/>
                                    <Typography className="ml-6">From</Typography>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Box>
                        </div>
                        <div className="w-2xl">
                          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                            <Divider
                              orientation="vertical"
                              className="h-36"
                              sx={{ color: "action.active", mr: 1, my: 0.5 }}
                              variant="middle"
                            />
                            <TextField
                              {...endProps}
                              variant="standard"
                              className="w-auto mb-5"
                              InputProps={{
                                disableUnderline: true,
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <KeyboardArrowDownIcon className="mr-6"/>
                                  </InputAdornment>
                                ),
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <CalendarTodayOutlinedIcon className="w-20" />
                                    <Typography className="ml-6">Until</Typography>
                                  </InputAdornment>
                                ),
                              }}
                            />
                          </Box>
                        </div>
                      </React.Fragment>
                    )}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </ul>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center justify-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none h-full ml-48 md:w-auto w-full md:mt-auto mt-14">
            <li className="nav-item ">
              <div className="flex items-center justify-center md:mb-0 mb-20">
                <Typography className="font-600 text-14 pr-20 ">
                  Become a host
                </Typography>
                <IconButton
                  onClick={viewClick}
                  aria-label="delete"
                  size="large"
                  style={{ backgroundColor: "#F0F1F4" }}
                >
                  <PersonOutlineOutlinedIcon fontSize="inherit" />
                </IconButton>
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
                    onClick={viewClose}
                    className="font-normal text-sm"
                    style={{ color: "#667085" }}
                  >
                    How it will work
                  </MenuItem>
                  <MenuItem
                    onClick={viewClose}
                    className="font-normal text-sm"
                    style={{ color: "#667085" }}
                  >
                    Company
                  </MenuItem>
                  <MenuItem
                    onClick={viewClose}
                    className="font-normal text-sm"
                    style={{ color: "#667085" }}
                  >
                    Insurance & protection
                  </MenuItem>
                  <MenuItem
                    onClick={viewClose}
                    className="font-normal text-sm"
                    style={{ color: "#667085" }}
                  >
                    Resources
                  </MenuItem>
                  <MenuItem
                    onClick={viewClose}
                    className="font-normal text-sm"
                    style={{ color: "#D22A8F", border: "1px solid #F2F4F7" }}
                  >
                    Become a host
                  </MenuItem>
                  <MenuItem
                    onClick={viewClose}
                    className="font-normal text-sm"
                    style={{ color: "#667085" }}
                  >
                    Sign up
                  </MenuItem>
                  <MenuItem
                    onClick={viewClose}
                    className="font-normal text-sm"
                    style={{ color: "#667085" }}
                  >
                    Login
                  </MenuItem>
                </Menu>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  }
];
