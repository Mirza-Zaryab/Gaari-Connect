import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Payment from './Tabs/Payment';
import TransactionHistory from './Tabs/TransactionHistory';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{}}>
                    <div>{children}</div>
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

function Payments() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const useStyles = makeStyles({
        customTabs: {
            "& .Mui-selected": {
                backgroundColor: "rgba(210, 42, 143, 0.18)",
                color: '#D22A8F',
                borderRadius: '30px'
            }
        }
    });

    const classes = useStyles();
    return (
        <div>
            <div className="flex flex-row">
                <div className=" flex flex-col mt-20 border rounded-md w-full">
                    <Card className="rounded-md">
                        <div className="flex flex-row items-center">
                            <Box sx={{ width: '100%' }} >
                                <Box sx={{ p: 1 }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                                        sx={{
                                            '& .MuiTabs-flexContainer': {
                                                flexWrap: 'wrap',
                                            },
                                        }}
                                        TabIndicatorProps={{
                                            style: {
                                                backgroundColor: "#FFFFFF"
                                            }
                                        }}
                                        classes={{ root: classes.customTabs }}
                                    >
                                        <Tab className='md:ml-0 ml-10' label={<Typography className="text-sm font-medium">Payments</Typography>} />
                                        {/* <Tab className='md:ml-0 ml-10' label={<Typography className="text-sm font-medium">Transactions history</Typography>} /> */}

                                        <div className="md:ml-auto ml-10 flex  items-center  md:mr-5 md:my-0 my-14">
                                            <Button variant="outlined" className="rounded-4 mr-10 h-36 text-xs">Export CSV</Button>
                                            <Button variant="contained" className="rounded-4 text-white h-36" style={{ backgroundColor: '#101828' }}>Download Invoices</Button>
                                        </div>
                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0} >
                                    <Payment />
                                </TabPanel>

                                <TabPanel value={value} index={1}>
                                    <TransactionHistory />
                                </TabPanel>
                            </Box>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Payments




