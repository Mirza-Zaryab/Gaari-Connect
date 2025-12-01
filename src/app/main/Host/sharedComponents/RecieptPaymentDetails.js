import React from 'react'
import { Typography, Button, DialogTitle, DialogContent, DialogActions, Dialog } from '@mui/material';
import Icon from '@mui/material/Icon';



const RecieptPaymentDetails = ({ childToParent }) => {
    const [open, setOpen] = React.useState(true);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        childToParent(false);
    };
    return (
        <>

            <Dialog open={open} onClose={handleClose} fullWidth  >
                <DialogTitle className="border-b mb-16 flex flex-row justify-between items-center">
                    <Typography className="text-xl">
                        Booking receipt
                    </Typography>
                    <Icon className="cursor-pointer" onClick={handleClose}>close</Icon>
                </DialogTitle>

                <DialogContent className="flex flex-col justify-between">

                    <div className='flex flex-row justify-between'>
                        <Typography sx={{ color: '#667085' }}>Host</Typography>
                        <Typography>Hassan Ali</Typography>
                    </div>

                    <div className='flex flex-row justify-between py-12'>
                        <Typography sx={{ color: '#667085' }}>Date</Typography>
                        <Typography>07-05-2022</Typography>
                    </div>

                    <div className='flex flex-row justify-between pb-12'>
                        <Typography sx={{ color: '#667085' }}>Booking ID</Typography>
                        <Typography sx={{ color: '#D22A8F' }} className='underline'>4851sdd4s</Typography>
                    </div>

                    <div className='flex flex-row justify-between  pb-12'>
                        <Typography sx={{ color: '#667085' }}>Service charges</Typography>
                        <Typography>PKR 200</Typography>
                    </div>

                    <div className='flex flex-row justify-between  pb-12'>
                        <Typography sx={{ color: '#667085' }}>Booked for</Typography>
                        <Typography>5 days * 1500</Typography>
                    </div>

                    <div className='flex flex-row justify-between  pb-10'>
                        <Typography sx={{ color: '#667085' }}>Life insurance</Typography>
                        <Typography>PKR 200/day</Typography>
                    </div>


                    <div className='border-t flex flex-row justify-between pt-16'>
                        <Typography sx={{ color: '#667085' }}>Total price</Typography>
                        <Typography className='font-bold'>PKR 8500</Typography>
                    </div>


                </DialogContent>
                <DialogActions>
                    <Button fullWidth size="large" className="mx-14 mb-20 rounded-md text-white" style={{ backgroundColor: '#D22A8F' }}>
                        Download
                    </Button>
                </DialogActions>
            </Dialog>


        </>

    )
}

export default RecieptPaymentDetails
