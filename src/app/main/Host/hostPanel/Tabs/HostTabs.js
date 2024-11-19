import React from "react";
import { Card, CardContent, Rating, Paper } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Dashboard from "./Dashboard";
import Bookings from "./Bookings";
import Payments from "./Payments";
import MyCars from "./MyCars";
import Navbar from "../Navbar";
import Footer from "../../../Home/Footer/Footer";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";
import { makeStyles } from "@mui/styles";
import CalendarApp from "./calendar/CalendarApp";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function HostTabs() {
  const [value, setValue] = React.useState(0);
  const [date, setDate] = React.useState(new Date());
  const [starValue, setStarValue] = React.useState(4);
  const [show, setShow] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles({
    customPicker: {
      "& .Mui-selected": {
        backgroundColor: "#D22A8F",
      },
      "& .Mui-selected:hover": {
        backgroundColor: "#D22A8F",
      },
      "& .MuiPickersDay-root:focus": {
        backgroundColor: "#D22A8F",
      },
    },
  });

  const classes = useStyles();

  return (
    <div className="bg-gray-50">
      <div>
        <Navbar />
      </div>

      <div className="sm:m-96 md:m-32 mx-0 mt-96">
        <Box sx={{ maxWidth: "100%" }}>
          <div className="flex-row grid sm:grid-cols-4 grid-cols-1 gap-16">
            <div className="col-span-4">
              <Paper
                className="rounded-md w-full"
                sx={{ backgroundColor: "#E6EFFB" }}
              >
                <div className="flex flex-row justify-between">
                  <div className="my-auto ml-40">
                    <Typography className="text-16" color="text.secondary">
                      Sunday, May 8th
                    </Typography>
                    <Typography className="text-black text-32">
                      Good Morning
                    </Typography>
                    <Typography className="text-black text-20">
                      Hassan Ali
                    </Typography>
                  </div>
                  <div className="">
                    <img
                      src="assets/images/GariConnect/cloudcar.png"
                      alt="logo"
                    />
                  </div>
                </div>
              </Paper>
            </div>

            {/* <div className="flex flex-row col-span-1">
              <Card className="rounded-md w-full sm:ml-0 ml-28">
                <CardContent> */}
            {/* <div className="flex flex-row items-center space-x-10">
                    <img src="assets/images/profile/HassanAli.png" alt="" /> */}
            {/* <div>
                      <Typography className="text-base text-gray-900 font-semibold">
                        Hassan Ali
                      </Typography>
                      <div className="flex flex-row items-center space-x-4">
                        <Rating
                          name="simple-controlled"
                          value={starValue}
                          onChange={(event, newValue) => {
                            setStarValue(newValue);
                          }}
                          max={4}
                          size="small"
                        />
                        <Typography
                          className="text-10 font-normal"
                          style={{ color: "#667085" }}
                        >
                          4.0
                        </Typography>
                      </div>
                      <Typography
                        className="text-12 mt-6"
                        style={{ color: "#667085" }}
                      >
                        Host
                      </Typography>
                    </div>
                  </div> */}

            {/* <div className="flex flex-row items-center mt-32 space-x-6">
                    <Typography className="font-Gilroy-Medium text-sm text-gray-900">
                      Profile Completeness: 80%
                    </Typography>
                    <img src="assets/images/icons/question.svg" alt="" />
                  </div> */}
            {/* <div>
                    <Box sx={{ color: "#30C07D" }}>
                      <LinearProgress
                        color="inherit"
                        className="my-12"
                        variant="determinate"
                        value={80}
                      />
                    </Box>
                  </div> */}

            {/* <div>
                    <Typography
                      className="text-sm font-normal cursor-pointer underline underline-offset-1"
                      style={{ color: "#D22A8F" }}
                    >
                      Complete your profile
                    </Typography>
                  </div> */}
            {/* </CardContent>
              </Card>
            </div> */}

            <div className="flex flex-col col-span-3">
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  maxWidth: "100%",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#D22A8F",
                    },
                  }}
                  sx={{
                    "& .MuiTabs-flexContainer": {
                      flexWrap: "wrap",
                    },
                  }}
                >
                  <Tab
                    label={
                      <div className="flex flex-row items-center space-x-8">
                        {" "}
                        <Typography className="text-base font-medium">
                          Dashboard
                        </Typography>
                      </div>
                    }
                  />
                  <Tab
                    onClick={() => {
                      setShow(!show);
                    }}
                    label={
                      <div className="flex flex-row items-center space-x-8">
                        {" "}
                        <Typography className="text-base font-medium">
                          Bookings
                        </Typography>{" "}
                      </div>
                    }
                  />
                  <Tab
                    label={
                      <div className="flex flex-row items-center space-x-8">
                        {" "}
                        <Typography className="text-base font-medium">
                          My cars
                        </Typography>{" "}
                      </div>
                    }
                  />
                  <Tab
                    label={
                      <div className="flex flex-row items-center space-x-8">
                        {" "}
                        <Typography className="text-base font-medium">
                          Calender
                        </Typography>{" "}
                      </div>
                    }
                  />
                  <Tab
                    label={
                      <div className="flex flex-row items-center space-x-8">
                        {" "}
                        <Typography className="text-base font-medium">
                          Payments
                        </Typography>{" "}
                      </div>
                    }
                  />
                </Tabs>
              </Box>

              <TabPanel value={value} index={0}>
                <Dashboard />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Bookings />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <MyCars />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <CalendarApp />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Payments />
              </TabPanel>
            </div>

            <div className="flex flex-col col-span-1 sm:ml-0 ml-28">
              <div className="flex flex-col mb-14">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Card className="rounded-6 border">
                    <CalendarPicker
                      date={date}
                      onChange={(newDate) => setDate(newDate)}
                      classes={{ root: classes.customPicker }}
                    />
                  </Card>
                </LocalizationProvider>
              </div>

              <div className="flex flex-col space-y-12">
                <Typography className="text-lg font-medium">
                  Upcoming bookings
                </Typography>

                <Card
                  className="rounded-md border pl-8 pb-8"
                  style={{ backgroundColor: "rgba(48, 192, 125, 0.08)" }}
                >
                  <div className="flex flex-row space-x-32">
                    <div className="p-12 rounded-b-md">
                      <Typography className="text-xl font-semibold">
                        26
                      </Typography>
                      <Typography className="text-xs font-normal text-gray-500">
                        March
                      </Typography>
                    </div>

                    <div className="p-12 mt-10">
                      <Typography className="text-sm font-medium">
                        Honda Afb 8895- 19
                      </Typography>
                      <Typography
                        className="font-normal text-gray-400"
                        variant="subtitle2"
                      >
                        Booking for 5 days
                      </Typography>
                    </div>
                  </div>
                </Card>

                <Card
                  className="rounded-md border pl-8 pb-8"
                  style={{ backgroundColor: "rgba(255, 199, 0, 0.06)" }}
                >
                  <div className="flex flex-row space-x-32">
                    <div className="p-12 rounded-b-md">
                      <Typography className="text-xl font-semibold">
                        26
                      </Typography>
                      <Typography className="text-xs font-normal text-gray-500">
                        March
                      </Typography>
                    </div>

                    <div className="p-12 mt-10">
                      <Typography className="text-sm font-medium">
                        Honda Afb 8895- 19
                      </Typography>
                      <Typography
                        className="font-normal text-gray-400"
                        variant="subtitle2"
                      >
                        Booking for 5 days
                      </Typography>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Box>
      </div>
      <div className="mt-60">
        <Footer />
      </div>
    </div>
  );
}
