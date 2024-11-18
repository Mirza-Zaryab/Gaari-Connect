import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Upcoming from "./Upcoming";
import TransactionDetails from "./TransactionDetails";

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
        <Box sx={{}}>
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

function Payments() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles({
    customTabs: {
      "& .Mui-selected": {
        backgroundColor: "rgba(210, 42, 143, 0.18)",
        color: "#D22A8F",
        borderRadius: "30px",
      },
    },
  });

  const classes = useStyles();
  const [statusshow, setstatus] = useState(false);
  return (
    <div>
      <div className="flex-row grid sm:grid-cols-3 grid-cols-1 gap-10">
        <Card className="rounded-md border col-span-1">
          <CardContent>
            <div className="flex flex-row">
              <div className="flex flex-col space-y-28">
                <Typography className="text-16 font-medium">
                  Total earnings
                </Typography>
                <div className="space-y-14">
                  <Typography className="text-3xl font-semibold">
                    4200 PKR
                  </Typography>
                  <Typography className="flex flex-row space-x-8">
                    <img src="assets/images/icons/GreenArrow.svg" alt="logo" />
                    <span className="text-sm text-green-700 font-medium">
                      40%
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      vs last month
                    </span>
                  </Typography>
                </div>
              </div>

              <div className="flex flex-col" />
            </div>
          </CardContent>
        </Card>

        {statusshow && (
          <Card className="rounded-md border col-span-1">
            <CardContent>
              <div className="flex flex-row">
                <div className="flex flex-col space-y-28">
                  <Typography className="text-16 font-medium">
                    Current Blance
                  </Typography>
                  <div className="space-y-14">
                    <Typography className="text-3xl font-semibold">
                      4200 PKR
                    </Typography>
                    <Typography className="flex flex-row space-x-8">
                      <span
                        className="text-sm font-medium"
                        style={{ color: "#D22A8F" }}
                      >
                        Get paid
                      </span>
                    </Typography>
                  </div>
                </div>

                <div className="flex flex-col" />
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="flex flex-row">
        <div className=" flex flex-col mt-20 border rounded-md w-full">
          <Card className="rounded-md">
            <div className="flex flex-row items-center">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ p: 1 }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={{
                      "& .MuiTabs-flexContainer": {
                        flexWrap: "wrap",
                      },
                    }}
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: "#FFFFFF",
                      },
                    }}
                    classes={{ root: classes.customTabs }}
                  >
                    <Tab
                      className="md:ml-0 ml-10"
                      label={
                        <Typography className="text-sm font-medium">
                          Payments
                        </Typography>
                      }
                      onClick={() => setstatus(false)}
                    />
                    <Tab
                      className="md:ml-0 ml-10"
                      label={
                        <Typography className="text-sm font-medium">
                          Transactions history
                        </Typography>
                      }
                      onClick={() => setstatus(true)}
                    />

                    <div className="md:ml-auto ml-10 flex  items-center  md:mr-5 md:my-0 my-14">
                      <Button variant="outlined" className="rounded-4 mr-10 ">
                        Export CSV
                      </Button>
                      <Button
                        variant="contained"
                        className="rounded-4 text-white"
                        style={{ backgroundColor: "#D22A8F" }}
                      >
                        Download Invoices
                      </Button>
                    </div>
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <Upcoming />
                </TabPanel>

                <TabPanel value={value} index={1}>
                  <TransactionDetails />
                </TabPanel>
              </Box>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Payments;
