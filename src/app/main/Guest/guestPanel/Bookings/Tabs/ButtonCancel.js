import * as React from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function ButtonCancel() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        className="rounded-4 text-white"
        style={{ background: "#D22A8F" }}
      >
        Cancel Booking
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="mx-auto">
          <img src="/assets/images/icons/Featuredicon.svg" alt="logo" />
        </DialogTitle>
        <DialogContent>
          <Typography
            className="text-18 font-medium text-center mb-10"
            id="alert-dialog-slide-description"
          >
            Cancel booking
          </Typography>
          <Typography className="text-13 font-normal text-gray-500 text-center mb-24 space-x-4">
            Are you sure you want to booking? Cancellation
            <br /> charges PKR 500 will applied, for more information
            <br /> read
            <span style={{ color: "#D22A8F" }}>cancallation policy</span>
          </Typography>
          <div className="flex items-center justify-center space-x-12">
            <Button
              variant="outlined"
              size="large"
              className="w-160 min-h-28 rounded-md"
            >
              Yes Cancel
            </Button>
            <Button
              onClick={handleClose}
              variant="contained"
              size="large"
              className="w-160 min-h-28 rounded-md"
              style={{ backgroundColor: "#D22A8F" }}
            >
              No
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
