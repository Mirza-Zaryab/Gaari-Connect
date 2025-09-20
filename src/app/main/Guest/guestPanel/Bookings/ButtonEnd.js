import * as React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
  Box,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="" ref={ref} {...props} />;
});

export default function ButtonEnd() {
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
        Trip End
      </Button>
      <Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className='text-lg mx-auto'>{"End trip"}</DialogTitle>
        <DialogContent>
          <DialogContentText className='text-sm' style={{color:"#667085"}} id="alert-dialog-slide-description">
          Go to your mobile application and end trip there
          </DialogContentText>
        </DialogContent>
        <DialogActions className='flex justify-center'>
          <Button className='w-full h-44 rounded-lg mb-12 text-sm' style={{background: "#D22A8F", color:"#FFFFFF"}} onClick={handleClose}>Okay</Button>
        </DialogActions>
      </Dialog>
      </Box>
    </div>
  );
}
