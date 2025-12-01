import { Button, Card, CardContent, Typography, Rating, Divider } from '@mui/material'
import Footer from 'app/main/Home/Footer/Footer'
import React from 'react'
import Navbar from '../hostPanel/Navbar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function BookingDetails() {
    const [value, setValue] = React.useState(4);

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className="bg-gray-50 h-full">
            <Navbar />

            <div className="mt-32">
                <Card className="mx-auto w-5/6 shadow-none border rounded-md">
                    <div className="flex flex-row items-center px-24 py-24 border-b">
                        <ArrowBackIcon size="large" className="mr-20" />
                        <Typography className="text-2xl font-normal font-Gilroy-Medium">Booking details</Typography>
                    </div>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20">
                            <div className="col-span-1">
                                <div className="flex flex-col sm:flex-wrap md:flex-row md:items-center">
                                    <div className="mr-16">
                                        <img style={{ maxWidth: 180, maxHeight: 115 }} src="assets/images/GariConnect/carimage.png" alt="" />
                                    </div>
                                    <div className="sm:mt-10 md:my-auto mt-10">
                                        <div className="flex flex-row items-center">
                                            <Rating
                                                className="text-18"
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                                max={4}
                                            />
                                            <Typography className="text-14 font-normal ml-8" style={{ color: '#000000' }}>4.0</Typography>
                                            <Typography className="text-12 font-normal ml-8" color="text.secondary">15 trips</Typography>
                                        </div>
                                        <div className="flex items-center">
                                            <Typography className="text-lg font-medium">Honda Afb 8895- 19</Typography>
                                        </div>
                                        <div className="flex items-center">
                                            <Typography className="text-12 font-normal" color="text.secondary">Gulberg 3</Typography>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-36 mb-32">
                                    <Typography className="text-18 font-medium mb-6">Dates</Typography>
                                    <Typography className="text-sm font-normal" color="text.secondary">May 13 – 20</Typography>
                                </div>
                                <Divider />
                                <div className="mt-28">
                                    <Card className="shadow-none rounded-md border mb-24" sx={{ maxWidth: 415, minHeight: 206 }}>
                                        <div className="border-b">
                                            <Typography className="text-12 font-medium px-20 py-10">Guest</Typography>
                                        </div>
                                        <CardContent>
                                            <div className="flex flex-row">
                                                <div className="flex sm:flex-col md:flex-row flex-col md:items-center">
                                                    <img className="mr-12" style={{ maxWidth: 70, maxHeight: 70 }} src="assets/images/profile/HassanAli.png" alt="" />
                                                    <div className="flex flex-col">
                                                        <Typography className="text-16 font-600 font-Manrope">Hassan Ali</Typography>
                                                        <div className="flex flex-row items-center mb-4">
                                                            <Rating
                                                                className="text-16"
                                                                name="simple-controlled"
                                                                value={value}
                                                                onChange={(event, newValue) => {
                                                                    setValue(newValue);
                                                                }}
                                                                max={4}
                                                            />
                                                            <Typography className="text-12 font-normal ml-8" color="text.secondary">4.0</Typography>
                                                        </div>
                                                        <Typography className="text-12" color="text.secondary">487 trips - Joined Sep 2020</Typography>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row items-start ml-auto">
                                                    <Typography className="text-12 mr-4" color="text.secondary">Verified</Typography>
                                                    <Checkbox
                                                        icon={<RadioButtonUncheckedIcon />}
                                                        checkedIcon={<CheckCircleIcon />}
                                                        checked={checked}
                                                        onChange={handleChange}
                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                        style={{ padding: 0 }}
                                                        sx={{
                                                            '& .MuiSvgIcon-root': { fontSize: 14, color: '#D22A8F' },
                                                            '& .MuiTouchRipple-root': { display: 'none' },
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-28">
                                                <Button fullWidth size="large" className="rounded-md text-white" style={{ backgroundColor: '#D22A8F' }}>
                                                    Chat with Guest
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <Card className="shadow-none rounded-md border ml-auto" sx={{ backgroundColor: '#F0F1F4', maxWidth: '540px' }}>
                                    <CardContent>
                                        <div className="mt-16">
                                            <Typography className="text-xl">Price details</Typography>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-20 mr-14">
                                            <Typography className="text-base" color="text.secondary">Rate per day</Typography>
                                            <Typography className="text-base">Rs 4000/day</Typography>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-20 mr-14">
                                            <Typography className="text-base" color="text.secondary">Booked for</Typography>
                                            <Typography className="text-base">5 days</Typography>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-20 mr-14">
                                            <Typography className="text-base" color="text.secondary">Life insurance</Typography>
                                            <Typography className="text-base">Rs 200/day</Typography>
                                        </div>
                                        <div className="flex flex-row justify-between items-center mt-20 mr-14">
                                            <Typography className="text-base" color="text.secondary">Subtotal</Typography>
                                            <Typography className="text-base">Rs 8200/-</Typography>
                                        </div>

                                        <Divider className="my-16" />

                                        <div className="flex flex-row justify-between items-center mt-20 mr-14">
                                            <Typography className="text-base" color="text.secondary">Total price</Typography>
                                            <Typography className="text-base font-semibold">Rs 8200/-</Typography>
                                        </div>

                                        <div className="flex flex-row justify-end space-x-10 mt-44 mb-10">
                                            <Button variant="outlined" className="rounded-4">Decline</Button>
                                            <Button variant="contained" className="rounded-4 text-white" style={{ backgroundColor: '#D22A8F' }}>Confirm</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Footer />
        </div >
    )
}
