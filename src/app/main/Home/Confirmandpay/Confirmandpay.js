import {
  Button,
  Card,
  CardContent,
  Typography,
  Rating,
  Divider,
} from "@mui/material";
import React from "react";
import Footer from "app/main/Home/Footer/Footer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import Navbar from "../Navbar/Navbar";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Documents from "./Documents/Documents";
import Pickanddrop from "./Pickanddrop/Pickanddrop";
import Edit from "./Edit/Edit";
import Otp from "./Otp/Otp";
import Insurance from "./Insurance/Insurance";
import Payment from "./Payment/Payment";



export default function Confirmandpay() {
  const [expanded, setExpanded] = React.useState(false);

  const confirmChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [value, setValue] = React.useState(4);

  return (
    <div>
      <Navbar />

      <div>
        <div className="mt-32 sm:mr-0 mr-36">
          <div className="flex flex-row  px-24 py-24 sm:ml-28 md:ml-28 lg:ml-96">
            <ArrowBackIcon size="large" className="mr-20 sm:ml-44 ml-0" />
            <Typography className="text-2xl font-normal font-Gilroy-Medium">
              Confirm and pay
            </Typography>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20"
            style={{ marginLeft: "10%" }}
          >
            <div className="col-span-1">
              <div
                className="flex mt-24 rounded-lg h-64"
                style={{
                  backgroundColor: "rgba(4, 106, 243, 0.07)",
                  border: "1px solid #046AF3",
                  maxWidth: "489px",
                }}
              >
                <ShieldOutlinedIcon
                  className="my-auto ml-24"
                  fontSize="large"
                  style={{ color: "#046AF3" }}
                />
                <Typography
                  className="text-xs font-normal my-auto ml-20"
                  style={{ color: "#101828" }}
                >
                  To protect your payment, never transfer money or communicate
                  <br></br> outside os the Gari Connect website or app.
                </Typography>
              </div>
              <div className="mt-16">
                <Accordion
                  sx={{ maxWidth: "489px" }}
                  expanded={expanded === "panel1"}
                  onChange={confirmChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon style={{ color: "rgba(0, 0, 0, 1)" }} />
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className="text-lg font-semibold">
                      Upload documents
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Documents />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ maxWidth: "489px" }}
                  expanded={expanded === "panel2"}
                  onChange={confirmChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon style={{ color: "rgba(0, 0, 0, 1)" }} />
                    }
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className="text-lg font-semibold">
                      {" "}
                      Pick and drop off{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Pickanddrop />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ maxWidth: "489px" }}
                  expanded={expanded === "panel3"}
                  onChange={confirmChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon style={{ color: "rgba(0, 0, 0, 1)" }} />
                    }
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <Typography className="text-lg font-semibold">
                      Insurance
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Insurance />
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  sx={{ maxWidth: "489px" }}
                  expanded={expanded === "panel4"}
                  onChange={confirmChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon style={{ color: "rgba(0, 0, 0, 1)" }} />
                    }
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                  >
                    <Typography className="text-lg font-semibold">
                      Payment
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Payment/>
                    <Otp />
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <div className="col-span-1">
              <Card
                className="shadow-none rounded-md border"
                sx={{ maxWidth: "533px", minHeight: "510px" }}
              >
                <CardContent>
                  <div className="flex flex-row">
                    <div className="flex sm:flex-col md:flex-row flex-col md:items-center">
                      <div className="flex">
                        <div>
                          <img
                            width="180"
                            className="mr-12"
                            src="assets/images/logos/HondaAfb.svg"
                            alt=""
                          />
                        </div>

                        <div className="flex flex-col">
                          <div className="sm:flex flex-row items-center mb-4">
                            <Rating
                              className="text-16"
                              name="simple-controlled"
                              value={value}
                              onChange={(event, newValue) => {
                                setValue(newValue);
                              }}
                              max={4}
                            />
                            <Typography
                              className="text-sm font-normal ml-8"
                              color="text.black"
                            >
                              4.0
                            </Typography>
                            <Typography
                              className="text-sm pl-8"
                              style={{ color: "#667085" }}
                            >
                              15 trips
                            </Typography>
                          </div>
                          <Typography className="text-16 font-600 font-Manrope">
                            Honda Afb 8895-19
                          </Typography>

                          <Typography
                            className="text-12"
                            color="text.secondary"
                          >
                            Gulberg 3
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="mt-20" />
                  <div className="flex justify-between">
                    <div className="mt-24">
                      <Typography className="text-lg font-medium">
                        Sat, Oct 12
                      </Typography>
                      <Typography
                        className="text-sm"
                        style={{ color: "#667085" }}
                      >
                        10:00 AM
                      </Typography>
                    </div>
                    <div className="mt-48">
                      <img
                        className="mr-12"
                        src="assets/images/logos/Arrow 12.svg"
                        alt=""
                      />
                    </div>
                    <div className="mt-24">
                      <Typography className="text-lg font-medium">
                        Sat, Oct 19
                      </Typography>
                      <Typography
                        className="text-sm"
                        style={{ color: "#667085" }}
                      >
                        10:00 AM
                      </Typography>
                    </div>
                    <div className="mt-48">
                      <Edit />
                    </div>
                  </div>
                  <hr className="mt-20" />
                  <div className="mt-16">
                    <Typography className="text-xl">Price details</Typography>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Trip price
                    </Typography>
                    <Typography className="text-base">Rs 4000/day</Typography>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Trip fee
                    </Typography>
                    <Typography className="text-base">5 days</Typography>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Life insurance
                    </Typography>
                    <Typography className="text-base">Rs 200/day</Typography>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Pick / Drop off
                    </Typography>
                    <Typography className="text-base">Rs 8200/-</Typography>
                  </div>
                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Total per day
                    </Typography>
                    <Typography className="text-base">Rs 8200/-</Typography>
                  </div>

                  <Divider className="my-16" />

                  <div className="flex flex-row justify-between items-center mt-20 mr-14">
                    <Typography className="text-base" color="text.secondary">
                      Total 7 day price
                    </Typography>
                    <Typography
                      className="text-xl font-semibold"
                      style={{ color: "#373F41" }}
                    >
                      Rs 8200/-
                    </Typography>
                  </div>

                  <div className="flex flex-row justify-end space-x-10 mt-44 mb-10">
                    <Button
                      variant="contained"
                      className="rounded-4 text-white w-full"
                      style={{ backgroundColor: "#D22A8F" }}
                    >
                      Pay now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="mt-32">
          <Footer />
        </div>
      </div>
    </div>
  );
}
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];
