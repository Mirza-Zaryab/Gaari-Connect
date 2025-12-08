import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Radio from "@mui/material/Radio";
import { styled } from "@mui/material/styles";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

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

export default function Star() {
  const [price, setPrice] = React.useState(false);

  const priceClick = () => {
    setPrice((prev) => !prev);
  };

  const priceClickAway = () => {
    setPrice(false);
  };
  const styles = {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    p: 1,
    bgcolor: "background.paper",
    width: 170,
    height: 77,
  };
  return (
    <ClickAwayListener onClickAway={priceClickAway}>
      <Box sx={{ position: "relative" }}>
        <Button
          className="text-xs w-136 h-52 rounded-lg"
          style={{
            border: "1px solid #D0D5DD",
            color: "#667085",
          }}
          type="button"
          onClick={priceClick}
          // endIcon={
            
          // }
        >
          With driver
          <KeyboardArrowDownIcon style={{ color: "rgba(0, 0, 0, 1)",marginLeft:"30px" }}/>
        </Button>
        {price ? (
          <Box className="mt-28" sx={styles}>
            <RadioGroup
              defaultValue="female"
              aria-labelledby="demo-customized-radios"
              name="customized-radios"
            >
              <div className="">
                <div className="flex">
                  <FormControlLabel
                    value="female"
                    control={<BpRadio />}
                    label=""
                  />
                  <Typography className="font-medium text-sm pt-6">
                    With driver
                  </Typography>
                </div>
                <div className="flex">
                  <FormControlLabel
                    value="male"
                    control={<BpRadio />}
                    label=""
                  />
                  <Typography className="font-medium text-sm pt-6">
                    Without driver
                  </Typography>
                </div>
              </div>
            </RadioGroup>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
