import React from "react";
import {
  Card,
  CardContent,
  Button,
  FormControl,
  TextField,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#D22A8F",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#D22A8F",
  },
});

function BpRadio(props) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const PaymentsBilling = () => {
  const [value, setValue] = React.useState(4);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className=" h-md">
        <div className="flex flex-row justify-between items-center border-b">
          <div className="">
            <Typography className="text-lg font-medium text-gray-900 ml-24">
              Payments & Billing
            </Typography>
          </div>
          <div className="flex flex-row space-x-10 mr-10">
            <Button variant="outlined" className="rounded-4">
              Discard
            </Button>
            <Button
              variant="contained"
              className="rounded-4 text-white"
              style={{ backgroundColor: "#D22A8F" }}
            >
              Save changes
            </Button>
          </div>
        </div>
        <div className="ml-36 mt-36">
          <Accordion className="w-2/5">
            <AccordionSummary
              InputProps={{ className: "h-80" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className=" flex">
                <div className=" mt-12 ml-20 ">
                  <img src="assets/images/logos/visa.svg" alt="" />
                </div>
                <div className=" ml-16 ">
                  {" "}
                  <Typography className="font-500">
                    1554.............545
                  </Typography>
                  <Typography className=" text-grey-500 font-400">
                    Exp. Jun 2028
                  </Typography>
                </div>
              </div>
            </AccordionSummary>

            <AccordionDetails>
              <hr className="mt-8" />
              <div className="flex justify-between mt-16">
                <RadioGroup
                  className="mx-auto"
                  defaultValue="female"
                  aria-labelledby="demo-customized-radios"
                  name="customized-radios"
                >
                  <div className="sm:flex sm:space-x-10">
                    <Card style={{ width: "142px" }}>
                      <CardContent>
                        <div className="flex">
                          <FormControlLabel
                            value="Visa"
                            control={<BpRadio />}
                            label=""
                          />
                          <img src="assets/images/logos/visa.svg" alt="" />

                        </div>
                      </CardContent>
                    </Card>
                    <Card style={{ width: "142px" }}>
                      <CardContent>
                        <div className="flex">
                          <FormControlLabel
                            value="master"
                            control={<BpRadio />}
                            label=""
                          />
                          <img
                            src="assets/images/logos/Mastercard.svg"
                            alt=""
                          />
                        </div>
                      </CardContent>
                    </Card>
                    <Card style={{ width: "142px" }}>
                      <CardContent>
                        <div className="flex">
                          <FormControlLabel
                            value="Jazzcash"
                            control={<BpRadio />}
                            label=""
                          />
                          <img src="assets/images/logos/Jazzcash.svg" alt="" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </RadioGroup>
              </div >
              <FormControl fullWidth variant="outlined">
                <Typography
                  style={{
                    marginTop: "14px",
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                  }}
                >
                  Enter card number
                </Typography>
                <TextField
                  placeholder="155485541554"
                  sx={{
                    "& fieldset": {
                      borderRadius: "8px",
                      height: "50px",
                      marginTop: "6px",
                    },
                  }}
                />
              </FormControl>
              <div className="flex space-x-10 w-full">
                <div className="mt-16 w-1/2">
                  <Typography
                    className=" font-medium text-sm"
                    style={{
                      color: "#344054",
                    }}
                  >
                    Expiry date
                  </Typography>
                  <FormControl fullWidth variant="outlined">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        inputFormat="dd/MM/yyy"
                        disableOpenPicker={true}
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            sx={{
                              "& fieldset": {
                                borderRadius: "8px",
                                height: "50px",
                                marginTop: "6px",
                              },
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </div>
                <FormControl className="w-1/2" variant="outlined">
                  <Typography
                    style={{
                      marginTop: "14px",
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                    }}
                  >
                    CSV
                  </Typography>
                  <TextField
                    placeholder="854"
                    sx={{
                      "& fieldset": {
                        borderRadius: "8px",
                        height: "50px",
                        marginTop: "6px",
                      },
                    }}
                  />
                </FormControl>
              </div>
              <Button
                onClick={handleClickOpen}
                variant="contained"
                className="rounded-4 text-white w-full mt-16 h-44"
                style={{
                  backgroundColor: "#D22A8F",
                  color: "#FFFFFF",
                }}
              >
                Book car for Rs 8200
              </Button>
              <div className="space-x-10 mb-20" style={{ float: "right" }}>
                <Button
                  variant="contained"
                  className="rounded-8 text-black w-96 mt-16 h-44"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(222, 225, 231, 1)"
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  className="rounded-8 text-white w-96 mt-16 h-44"
                  style={{
                    backgroundColor: "#D22A8F",
                  }}
                >
                  Add
                </Button>
              </div>
            </AccordionDetails >
          </Accordion >
        </div >
      </div >
    </>
  );
};

export default PaymentsBilling;
