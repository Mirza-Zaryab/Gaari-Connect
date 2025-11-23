import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PropTypes from 'prop-types';
import { Typography, Tabs, Tab, Box, Card, Divider, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CarDetails from '../../../sharedComponents/carListing/CarDetails';
import CarLocation from '../../../sharedComponents/carListing/CarLocation';
import Features from '../../../sharedComponents/carListing/Features';
import Guidelines from '../../../sharedComponents/carListing/Guidelines';
import Availability from '../../../sharedComponents/carListing/Availability';
import AddImages from '../../../sharedComponents/carListing/AddImages';
import AddPrice from '../../../sharedComponents/carListing/AddPrice';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0, }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function EditCarlisting() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const useStyles = makeStyles({
        container: {
            display: "flex",
            height: "100%",
            width: "100%"
        },
        panel: {
            width: "100%",
            height: "64rem"
        },
        head: {
            width: "20%",
            paddingTop: "3px"
        }
    });

    const classes = useStyles();

    return (
        <div>
            <div className="">
                <div className="flex flex-row items-center mx-auto w-full py-24">
                    <ArrowBackIcon size="large" className="mr-20" />
                    <Typography className="text-2xl font-normal font-Gilroy-Medium">Edit car listing</Typography>
                </div>

                <div className="mx-auto w-full">
                    <Card className="rounded-md border border-gray-300 shadow-none">
                        <Box
                            className={classes.container}
                            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
                        >
                            <Tabs
                                className={classes.head}
                                orientation="vertical"
                                value={value}
                                onChange={handleChange}
                                aria-label="Vertical tabs example"
                                sx={{
                                    borderRight: 1, borderColor: 'divider',
                                    '& .MuiTab-root': { alignItems: 'self-start', justifyContent: 'center' }
                                }}
                                TabIndicatorProps={{
                                    style: {
                                        backgroundColor: "#D22A8F"
                                    },
                                    sx: {
                                        width: 3,
                                        left: 0,
                                    }
                                }}
                            >
                                <Tab sx={{ borderBottom: '1px solid #EAECF0', margin: '0 10px 0 10px' }} label="Car details" {...a11yProps(0)} />
                                <Tab sx={{ borderBottom: '1px solid #EAECF0', margin: '0 10px 0 10px' }} label="Features" {...a11yProps(1)} />
                                <Tab sx={{ borderBottom: '1px solid #EAECF0', margin: '0 10px 0 10px' }} label="Guildlines" {...a11yProps(2)} />
                                <Tab sx={{ borderBottom: '1px solid #EAECF0', margin: '0 10px 0 10px' }} label="Location" {...a11yProps(3)} />
                                <Tab sx={{ borderBottom: '1px solid #EAECF0', margin: '0 10px 0 10px' }} label="Photos" {...a11yProps(4)} />
                                <Tab sx={{ borderBottom: '1px solid #EAECF0', margin: '0 10px 0 10px' }} label="Price" {...a11yProps(5)} />
                                <Tab label="Availibility" {...a11yProps(6)} />
                            </Tabs>

                            <TabPanel className={classes.panel} value={value} index={0}>
                                <div className="flex flex-row justify-between items-center border-b">
                                    <div className="">
                                        <Typography className="text-lg font-medium text-gray-900 ml-24">Car details</Typography>
                                    </div>
                                    <div className="flex flex-row space-x-10 mr-10">
                                        <Button variant="outlined" className="rounded-4">Discard</Button>
                                        <Button variant="contained" className="rounded-4 text-white" style={{ backgroundColor: '#D22A8F' }}>Save changes</Button>
                                    </div>
                                </div>
                                <div className="mx-20">
                                    <CarDetails />
                                </div>
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={1}>
                                <div className="flex flex-row justify-between items-center border-b">
                                    <div className="">
                                        <Typography className="text-lg font-medium text-gray-900 ml-24">Features</Typography>
                                    </div>
                                    <div className="flex flex-row space-x-10 mr-10">
                                        <Button variant="outlined" className="rounded-4">Discard</Button>
                                        <Button variant="contained" className="rounded-4 text-white" style={{ backgroundColor: '#D22A8F' }}>Save changes</Button>
                                    </div>
                                </div>
                                <div className="mx-20">
                                    <Features />
                                </div>
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={2}>
                                <div className="flex flex-row justify-between items-center border-b">
                                    <div className="">
                                        <Typography className="text-lg font-medium text-gray-900 ml-24">Guidelines</Typography>
                                    </div>
                                    <div className="flex flex-row space-x-10 mr-10">
                                        <Button variant="outlined" className="rounded-4">Discard</Button>
                                        <Button variant="contained" className="rounded-4 text-white" style={{ backgroundColor: '#D22A8F' }}>Save changes</Button>
                                    </div>
                                </div>
                                <div className="mx-20">
                                    <Guidelines />
                                </div>
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={3}>
                                <div className="flex flex-row justify-between items-center border-b">
                                    <div className="">
                                        <Typography className="text-lg font-medium text-gray-900 ml-24">Location</Typography>
                                    </div>
                                    <div className="flex flex-row space-x-10 mr-10">
                                        <Button variant="outlined" className="rounded-4">Discard</Button>
                                        <Button variant="contained" className="rounded-4 text-white" style={{ backgroundColor: '#D22A8F' }}>Save changes</Button>
                                    </div>
                                </div>
                                <div className="mx-20">
                                    <CarLocation />
                                </div>
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={4}>
                                <div className="flex flex-row justify-between items-center border-b">
                                    <div className="">
                                        <Typography className="text-lg font-medium text-gray-900 ml-24">Photos</Typography>
                                    </div>
                                    <div className="flex flex-row space-x-10 mr-10">
                                        <Button variant="outlined" className="rounded-4">Discard</Button>
                                        <Button variant="contained" className="rounded-4 text-white" style={{ backgroundColor: '#D22A8F' }}>Save changes</Button>
                                    </div>
                                </div>
                                <div className="mx-20">
                                    <AddImages />
                                </div>
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={5}>
                                <div className="flex flex-row justify-between items-center border-b">
                                    <div className="">
                                        <Typography className="text-lg font-medium text-gray-900 ml-24">Price</Typography>
                                    </div>
                                    <div className="flex flex-row space-x-10 mr-10">
                                        <Button variant="outlined" className="rounded-4">Discard</Button>
                                        <Button variant="contained" className="rounded-4 text-white" style={{ backgroundColor: '#D22A8F' }}>Save changes</Button>
                                    </div>
                                </div>
                                <div className="mx-20">
                                    <AddPrice />
                                </div>
                            </TabPanel>

                            <TabPanel className={classes.panel} value={value} index={6}>
                                <div className="flex flex-row justify-between items-center border-b">
                                    <div className="">
                                        <Typography className="text-lg font-medium text-gray-900 ml-24">Availability</Typography>
                                    </div>
                                    <div className="flex flex-row space-x-10 mr-10">
                                        <Button variant="outlined" className="rounded-4">Discard</Button>
                                        <Button variant="contained" className="rounded-4 text-white" style={{ backgroundColor: '#D22A8F' }}>Save changes</Button>
                                    </div>
                                </div>
                                <div className="mx-20">
                                    <Availability />
                                </div>
                            </TabPanel>
                        </Box>
                    </Card>
                </div>
            </div>
        </div >
    )
}

export default EditCarlisting