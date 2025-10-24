import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

function Attachments() {
  const [value, setValue] = React.useState(null);
  return (
    <div>
      <div>
        <div>
              <Typography
                className="font-normal text-sm"
                style={{ color: "#667085" }}
              >
                Please upload required documents to proceed the booking process
              </Typography>
              <hr className="mt-20" />
              <FormControl fullWidth variant="outlined">
                <Typography
                  style={{
                    marginTop: "14px",
                    fontSize: "14px",
                    fontWeight: "500px",
                    color: "#344054",
                  }}
                >
                  CNIC number
                </Typography>
                <OutlinedInput
                  className="rounded-lg mb-11 "
                  placeholder="34605 2012136 9"
                  style={{ marginTop: "6px", height: "44px" }}
                />
              </FormControl>
              <div className="flex mt-36">
                <div>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                      marginBottom: "6px",
                    }}
                  >
                    Valid till
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      disableOpenPicker={false}
                      inputFormat="dd/MM/yyy"
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
                              height: "48px",
                            },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <div className="mt-44 ml-28">
                  <img src="assets/images/logos/filepicker.svg" alt="logo" />
                </div>
                <div className="mt-44 ml-8">
                  <Typography
                    className="text-sm font-medium"
                    style={{ color: "#D22A8F" }}
                  >
                    Attach CNIC
                  </Typography>
                </div>
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
                  Driving license
                </Typography>
                <OutlinedInput
                  className="rounded-lg mb-11 "
                  placeholder="34605 2012136 9"
                  style={{ marginTop: "6px", height: "44px" }}
                />
              </FormControl>
              <div className="flex mt-36">
                <div>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "500px",
                      color: "#344054",
                      marginBottom: "6px",
                    }}
                  >
                    Valid till
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      inputFormat="dd/MM/yyy"
                      disableOpenPicker={false}
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
                              height: "48px",
                            },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
                <div className="mt-44 ml-28">
                  <img src="assets/images/logos/filepicker.svg" alt="logo" />
                </div>
                <div className="mt-44 ml-8">
                  <Typography
                    className="text-sm font-medium"
                    style={{ color: "#D22A8F" }}
                  >
                    Attach license
                  </Typography>
                </div>
              </div>
              <div className="flex" style={{ marginTop: "12px" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ color: "#D22A8F", borderRadius: "4px" }}
                      defaultChecked
                    />
                  }
                  label="Keep my documents for future bookings"
                />
              </div>
                <Button
                  className="ml-10 mt-24 w-full"
                  style={{
                    height: "44px",
                    background: "#D22A8F",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "500px",
                    borderRadius: "8px",
                  }}
                >
                  Continue to booking
                </Button>
        </div>
      </div>
    </div>
  );
}

export default Attachments;
