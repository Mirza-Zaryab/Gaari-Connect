import {
    Card,
    CardContent,
    Typography,
  } from "@mui/material";
import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import RadioGroup from "@mui/material/RadioGroup";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Radio from "@mui/material/Radio";

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
export default  function Payment(){
    const [value, setValue] = React.useState(4);
    return(
<div>
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
            <img
              src="assets/images/logos/visa.svg"
              alt=""
            />
          </div>
        </CardContent>
      </Card>
      <Card
        className="sm:mt-0 mt-10"
        style={{ width: "142px" }}
      >
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
      <Card
        className="sm:mt-0 mt-10"
        style={{ width: "142px" }}
      >
        <CardContent>
          <div className="flex">
            <FormControlLabel
              value="Jazzcash"
              control={<BpRadio />}
              label=""
            />
            <img
              src="assets/images/logos/Jazzcash.svg"
              alt=""
            />
          </div>
        </CardContent>
      </Card>
    </div>
  </RadioGroup>
</div>
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
</div>
    );
}
