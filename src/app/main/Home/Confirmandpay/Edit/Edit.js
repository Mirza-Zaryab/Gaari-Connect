import React from "react";
import { Typography, Divider, Box, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileTimePicker from "@mui/lab/MobileTimePicker";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputAdornment from "@mui/material/InputAdornment";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseIcon from "@mui/icons-material/Close";

const Edit = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = React.useState(new Date("2014-08-18T21:11:54"));
  const [values1, setValues1] = React.useState(new Date("2014-08-18T21:11:54"));
  const [timevalue, settimeValue] = React.useState(
    new Date("2018-01-01T00:00:00.000Z")
  );
  const handleChangedate = (newValue) => {
    setValues(newValue);
  };
  const handleChangetime = (newValue) => {
    settimeValue(newValue);
  };
  const handleChangedate2 = (newValue) => {
    setValues1(newValue);
  };

  return (
    <div>
      <IconButton
        onClick={handleClickOpen}
        className="w-44 h-44"
        style={{ border: "1px solid #D0D5DD" }}
      >
        <EditOutlinedIcon style={{ color: "#D22A8F" }} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="flex justify-between items-center border-b">
          <Typography className="text-20 font-medium">
            Edit trip dates
          </Typography>
          <IconButton  onClick={handleClose}>
            <CloseIcon className="text-black" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div>
            <Typography className="py-12 font-medium">From</Typography>

            <div
              className="grid grid-cols-3 rounded-8 h-48"
              style={{ border: "1px solid #D0D5DD" }}
            >
              <div className="flex flex-row items-center col-span-2">
                <Box sx={{ width: "100%", px: 1 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack>
                      <MobileDatePicker
                        label=""
                        inputFormat="MM-dd-yyyy"
                        value={values}
                        onChange={handleChangedate}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            InputProps={{
                              disableUnderline: true,
                              endAdornment: (
                                <InputAdornment position="end">
                                  <KeyboardArrowDownIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Box>
              </div>

              <div className="flex flex-row items-center justify-center col-span-1">
                <Divider orientation="vertical" flexItem />
                <div>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileTimePicker
                      label=""
                      value={timevalue}
                      onChange={handleChangetime}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="standard"
                          className="pl-6"
                          InputProps={{
                            disableUnderline: true,
                            endAdornment: (
                              <InputAdornment position="end">
                                <KeyboardArrowDownIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Typography className="py-12 font-medium">Until</Typography>

            <div
              className="grid grid-cols-3 rounded-8 h-48"
              style={{ border: "1px solid #D0D5DD" }}
            >
              <div className="flex flex-row col-span-2 items-center">
                <Box sx={{ width: "100%", px: 1 }}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack>
                      <MobileDatePicker
                        label=""
                        inputFormat="MM-dd-yyyy"
                        value={values1}
                        onChange={handleChangedate2}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            InputProps={{
                              disableUnderline: true,
                              endAdornment: (
                                <InputAdornment position="end">
                                  <KeyboardArrowDownIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Box>
              </div>

              <div className="flex flex-row items-center justify-center col-span-1">
                <Divider orientation="vertical" flexItem />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <MobileTimePicker
                    label=""
                    value={values}
                    onChange={handleChangedate}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        className="pl-6"
                        InputProps={{
                          disableUnderline: true,
                          endAdornment: (
                            <InputAdornment position="end">
                              <KeyboardArrowDownIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Button
             
              fullWidth
              variant="contained"
              size="large"
              className="rounded-md"
              style={{ backgroundColor: "#D22A8F" }}
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Edit;
