import * as React from 'react';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import Gallery from "./Gallery";
import { Typography } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link className='font-medium text-base cursor-pointer' style={{color:"#D22A8F"}} onClick={handleClickOpen}>
        See Ideal example
      </Link>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <Typography className='font-600 text-20 flex justify-center mt-20'>Photos ideal example</Typography>
        <hr className="mt-16"/>
        <DialogContent>
       {/* <Gallery/> */}
       <div className='flex justify-center mt-10'>
       <Button className='h-44 w-44 rounded-xl text-white' style={{backgroundColor:"#D22A8F"}} onClick={handleClose}>Close</Button>
       </div>
       </DialogContent>
      </Dialog>
    </div>
  );
}
