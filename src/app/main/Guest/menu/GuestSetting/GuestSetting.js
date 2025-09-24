import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PropTypes from "prop-types";
import { Typography, Tabs, Tab, Box, Card, Divider } from "@mui/material";
import Footer from "../../../Home/Footer/Footer";
import GuestAccount from "../GuestSetting/Tabs/GuestAccount";
import { makeStyles } from "@mui/styles";
import Password from "./Tabs/GuestPassword&Security";
import PaymentsBilling from "./Tabs/GuestPayments&Billing";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function GuestSetting() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles({
    container: {
      display: "flex",
      height: "100%",
      width: "100%",
    },
    panel: {
      width: "87%",
    },
  });

  const classes = useStyles();

  return (
    <div className="bg-gray-50 h-full">
      <div className="">
        <div className="flex flex-row items-center mx-auto w-5/6 py-24">
          <IconButton component={Link} to="/GuestPanel">
            <ArrowBackIcon size="large" className="mr-20" />
          </IconButton>
          <Typography className="text-2xl font-normal font-Gilroy-Medium">
            Settings
          </Typography>
        </div>

        <div className="mx-auto w-5/6">
          <Card className="rounded-md border border-gray-300 shadow-none mb-52">
            <Box
              className={classes.container}
              sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}
            >
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                  borderRight: 1,
                  borderColor: "divider",
                  "& .MuiTab-root": {
                    alignItems: "self-start",
                    justifyContent: "center",
                  },
                }}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#D22A8F",
                  },
                  sx: {
                    width: 3,
                    left: 0,
                  },
                }}
              >
                <Tab label="Account" {...a11yProps(0)} />
                {/* <Divider className="mx-12" /> */}
                <Tab label="Password & security" {...a11yProps(1)} />
                {/* <Divider className="mx-12" /> */}
                <Tab label="Payments and billing" {...a11yProps(2)} />
                {/* <Divider className="mx-12" /> */}
              </Tabs>
              <TabPanel className={classes.panel} value={value} index={0}>
                <GuestAccount />
              </TabPanel>
              <TabPanel className={classes.panel} value={value} index={1}>
                <Password />
              </TabPanel>
              <TabPanel className={classes.panel} value={value} index={2}>
                <PaymentsBilling />
              </TabPanel>
            </Box>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default GuestSetting;
