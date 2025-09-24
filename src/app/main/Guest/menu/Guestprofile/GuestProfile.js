import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Card, CardContent, Typography, Rating, Divider } from '@mui/material';
import Footer from '../../../Home/Footer/Footer';

export default function GuestProfile() {
    const [value, setValue] = React.useState(4);

    return (
        <div className="bg-gray-50 h-full">
            <Navbar />

            <div className="">
                <div className="flex flex-row items-center mx-auto w-5/6 py-24">
                    <ArrowBackIcon size="large" className="mr-20" />
                    <Typography className="text-2xl font-normal font-Gilroy-Medium">Profile</Typography>
                </div>

                <div className="flex-row grid grid-cols-4 gap-16 mx-auto w-5/6">
                    <div className="col-span-1">
                        <Card className="flex flex-col items-center border shadow-none rounded-md">
                            <CardContent className="">
                                <img className="my-24" src="assets/images/profile/Hassan.png" alt="" />
                                <Typography className="text-2xl text-center font-Manrope font-semibold">Hassan Ali</Typography>
                                <div className="flex items-center justify-center">
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        size="small"
                                        max={4}
                                    />
                                    <Typography className="text-12 font-normal" style={{ color: '#667085' }}>4.0</Typography>
                                </div>

                                <Divider className="my-20" />

                                <div className="">
                                    <Typography className="text-12 font-normal mb-10" color="text.secondary">Address</Typography>
                                    <Typography className="text-14 font-medium mb-20">St. 36 Block D, Gulberg 2. Lahore</Typography>

                                    <Typography className="text-12 font-normal mb-10" color="text.secondary">Email</Typography>
                                    <Typography className="text-14 font-medium mb-20">jhondoe@gmail.com</Typography>

                                    <Typography className="text-12 font-normal mb-10" color="text.secondary">Phone</Typography>
                                    <Typography className="text-14 font-medium mb-20">03456789955</Typography>

                                    <Typography className="text-12 font-normal mb-10" color="text.secondary">CNIC</Typography>
                                    <Typography className="text-14 font-medium mb-20">3405 259157 8</Typography>

                                    <Typography className="text-12 font-normal mb-10" color="text.secondary">Driving license</Typography>
                                    <Typography className="text-14 font-medium mb-20">154446d5451541d5</Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-span-3">
                        <Card className="flex flex-col items-start border shadow-none rounded-md h-full">
                            <CardContent className="ml-40 pt-28">
                                <div className="flex flex-row items-center mb-32">
                                    <Typography className="text-16 font-semibold mr-14">Reviews and ratings</Typography>
                                    <Rating
                                        className="mr-12"
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        size="large"
                                        max={4}
                                    />
                                    <Typography className="text-16 font-normal" style={{ color: '#000000' }}>4.0</Typography>
                                </div>

                                <div className="">
                                    <div className="flex mb-10">
                                        <img className="mr-14" style={{ width: 44, height: 44 }} src="assets/images/profile/HassanAli.png" alt="logo" />
                                        <div className="">
                                            <div className="flex items-center">
                                                <Rating
                                                    name="simple-controlled"
                                                    value={value}
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                    size="small"
                                                    max={4}
                                                />
                                                <Typography className="text-14 font-normal ml-10" style={{ color: '#000000' }}>4.0</Typography>
                                            </div>
                                            <div className="flex items-center space-x-8">
                                                <Typography className="text-10 font-medium">Hassan Ali</Typography>
                                                <Typography className="text-10" color="text.secondary">10-05-2022</Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <Typography className="text-14">thank you for everything i appreciate you!</Typography>
                                </div>

                                <Divider className="my-20" />

                                <div className="">
                                    <div className="flex mb-10">
                                        <img className="mr-14" style={{ width: 44, height: 44 }} src="assets/images/profile/HassanAli.png" alt="logo" />
                                        <div className="">
                                            <div className="flex items-center">
                                                <Rating
                                                    name="simple-controlled"
                                                    value={value}
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                    size="small"
                                                    max={4}
                                                />
                                                <Typography className="text-14 font-normal ml-10" style={{ color: '#000000' }}>4.0</Typography>
                                            </div>
                                            <div className="flex items-center space-x-8">
                                                <Typography className="text-10 font-medium">Hassan Ali</Typography>
                                                <Typography className="text-10" color="text.secondary">10-05-2022</Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <Typography className="text-14">thank you for everything i appreciate you!</Typography>
                                </div>

                                <Divider className="my-20" />

                                <div className="">
                                    <div className="flex mb-10">
                                        <img className="mr-14" style={{ width: 44, height: 44 }} src="assets/images/profile/HassanAli.png" alt="logo" />
                                        <div className="">
                                            <div className="flex items-center">
                                                <Rating
                                                    name="simple-controlled"
                                                    value={value}
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                    size="small"
                                                    max={4}
                                                />
                                                <Typography className="text-14 font-normal ml-10" style={{ color: '#000000' }}>4.0</Typography>
                                            </div>
                                            <div className="flex items-center space-x-8">
                                                <Typography className="text-10 font-medium">Hassan Ali</Typography>
                                                <Typography className="text-10" color="text.secondary">10-05-2022</Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <Typography className="text-14">thank you for everything i appreciate you!</Typography>
                                </div>

                                <Divider className="my-20" />

                                <div className="">
                                    <div className="flex mb-10">
                                        <img className="mr-14" style={{ width: 44, height: 44 }} src="assets/images/profile/HassanAli.png" alt="logo" />
                                        <div className="">
                                            <div className="flex items-center">
                                                <Rating
                                                    name="simple-controlled"
                                                    value={value}
                                                    onChange={(event, newValue) => {
                                                        setValue(newValue);
                                                    }}
                                                    size="small"
                                                    max={4}
                                                />
                                                <Typography className="text-14 font-normal ml-10" style={{ color: '#000000' }}>4.0</Typography>
                                            </div>
                                            <div className="flex items-center space-x-8">
                                                <Typography className="text-10 font-medium">Hassan Ali</Typography>
                                                <Typography className="text-10" color="text.secondary">10-05-2022</Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <Typography className="text-14">thank you for everything i appreciate you!</Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    )
}
