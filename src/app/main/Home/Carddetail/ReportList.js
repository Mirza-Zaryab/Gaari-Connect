import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 20,
  height: 20,
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
    width: 20,
    height: 20,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#D22A8F",
  },
});

// Inspired by blueprintjs
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

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link
        style={{ color: "red" }}
        className="cursor-pointer"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Report listing
      </Link>
      <Dialog
        style={{
          background: "#FFFFFF",
          border: "1px solid rgba(195, 203, 205, 0.42)",
          borderRadius: "8px",
        }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle className=" text-20 mt-20    mr-384">
          Report listing
        </DialogTitle>{" "}
        <hr />
        <DialogContent>
          <DialogContentText>
            <div>
              <RadioGroup
                defaultValue="A"
                aria-labelledby="demo-customized-radios"
                name="customized-radios"
              >
                <div className="grid text-black font-500 text-16 ">
                  <div className=" flex">
                    <FormControlLabel
                      value="A"
                      control={<BpRadio />}
                      label=""
                    />
                    <Typography className="font-medium text-sm pt-6">
                      Inappropriate/offensive content
                    </Typography>
                  </div>
                  <div className="flex">
                    <FormControlLabel
                      value="B"
                      control={<BpRadio />}
                      label=""
                    />
                    <Typography className="font-medium text-sm pt-6">
                      Other
                    </Typography>
                  </div>
                  <div className=" flex">
                    <FormControlLabel
                      value="C"
                      control={<BpRadio />}
                      label=""
                    />
                    <Typography className="font-medium text-sm pt-6">
                      Spam
                    </Typography>
                  </div>
                  <div className=" flex">
                    <FormControlLabel
                      value="D"
                      control={<BpRadio />}
                      label=""
                    />
                    <Typography className="font-medium text-sm pt-6 ">
                      MisLeading/suspicious information
                    </Typography>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </DialogContentText>
          <TextField
            placeholder="write your problem"
            margin="dense"
            id="problem"
            type="text"
            multiline
            rows={7}
            fullWidth
            sx={{
              "& feildset": {
                borderRadius: "8px",
              },
            }}
          />

          <Button
            className=" w-full h-44 rounded-lg text-white font-500 text-16 mt-16"
            style={{
              background: "#D22A8F",
            }}
            onClick={handleClose}
          >
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
