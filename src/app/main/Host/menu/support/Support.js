import { Typography, TextField, FormControl, Paper, Input, Button, Box, Card, CardContent, CardActions, DialogTitle, DialogContent, DialogActions, Dialog } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Icon from '@mui/material/Icon';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'
import Navbar from '../../hostPanel/Navbar';
import Footer from '../../../Home/Footer/Footer';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';

const card = (
    <React.Fragment>
        <CardContent>
            <Typography className="text-black mb-8 font-medium" sx={{ fontSize: 18 }}>
                How can i change my email address?
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                This webpage requires data that you entered earlier in order to be properly displayed....
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" sx={{ color: '#D22A8F' }}>Read more</Button>
        </CardActions>
    </React.Fragment>
);

const Support = () => {
    const [open, setOpen] = React.useState(false);
    const mainTheme = useSelector(selectMainTheme);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="bg-gray-50 h-full">
            <Navbar />

            <div className="mx-auto w-5/6 py-24">
                <div className="flex flex-row items-center mx-auto mb-28">
                    <ArrowBackIcon size="large" className="mr-20" />
                    <Typography className="text-2xl font-normal font-Gilroy-Medium">Help & support</Typography>
                </div>

                <div className="flex flex-1 justify-between items-center mb-20">
                    <ThemeProvider theme={mainTheme}>
                        <Paper
                            component={motion.div}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                            className="flex items-center rounded-md shadow-none border w-full max-w-512 px-8 py-4 rounded-16 shadow"
                        >
                            <Input
                                placeholder="Search topics"
                                className="flex flex-1 mx-8"
                                disableUnderline
                                fullWidth
                                // value={searchText}
                                inputProps={{
                                    'aria-label': 'Search',
                                }}
                            //   onChange={(ev) => dispatch(setProductsSearchText(ev))}
                            />
                        </Paper>
                    </ThemeProvider>

                    <Button
                        onClick={handleClickOpen}
                        variant="contained"
                        className="rounded-4 text-white sm:text-12 text-10"
                        style={{ backgroundColor: '#D22A8F' }}
                    >
                        Report a problem
                    </Button>
                </div>

                <div className="">
                    <Box sx={{}} className="flex justify-around grid sm:grid-cols-3 md:grid-cols-4 grid-cols-1 gap-10">
                        <Card variant="outlined" className="rounded-md col-span-1">{card}</Card>
                        <Card variant="outlined" className="rounded-md col-span-1">{card}</Card>
                        <Card variant="outlined" className="rounded-md col-span-1">{card}</Card>
                        <Card variant="outlined" className="rounded-md col-span-1">{card}</Card>
                        <Card variant="outlined" className="rounded-md col-span-1">{card}</Card>
                        <Card variant="outlined" className="rounded-md col-span-1">{card}</Card>
                        <Card variant="outlined" className="rounded-md col-span-1">{card}</Card>
                        <Card variant="outlined" className="rounded-md col-span-1">{card}</Card>
                        <Card variant="outlined" className="rounded-md col-span-1">{card}</Card>
                        <Card variant="outlined" className="rounded-md col-span-1">{card}</Card>
                    </Box>
                </div>
            </div>

            <Dialog open={open} onClose={handleClose} className="" sx={{ '& .MuiDialog-paper': { borderRadius: 2 } }}>
                <DialogTitle className="border-b mb-16 flex flex-row justify-between items-center">
                    <Typography className="text-xl">
                        Report a problem
                    </Typography>
                    <Icon className="cursor-pointer" onClick={handleClose}>close</Icon>
                </DialogTitle>
                <DialogContent className="flex flex-col">
                    <FormControl>
                        <TextField
                            sx={{
                                width: 530,
                                maxWidth: '100%',
                            }}
                            className="rounded-none"
                            margin="dense"
                            id="name"
                            label="Your name"
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            sx={{
                                width: 530,
                                maxWidth: '100%',
                            }}
                            className="rounded-none"
                            margin="dense"
                            id="email"
                            label="Email address"
                            type="email"
                            fullWidth
                            variant="outlined"
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            sx={{
                                width: 530,
                                maxWidth: '100%',
                            }}
                            className="rounded-none"
                            margin="dense"
                            id="detail"
                            label="Write your problem"
                            type="text"
                            fullWidth
                            variant="outlined"
                            multiline
                            rows={6}
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button fullWidth onClick={handleClose} size="large" className="mx-14 mb-20 rounded-md text-white" style={{ backgroundColor: '#D22A8F' }}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

            <Footer />
        </div>
    )
}

export default Support