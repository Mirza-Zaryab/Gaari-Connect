import React from 'react';
import { Card, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Upcoming from './Upcoming';
import NewRequests from './NewRequests';

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

function Bookings() {
    const [date, setDate] = React.useState(new Date());
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
        <div className="flex-row space-x-14 grid sm:grid-cols-3 grid-cols-1">
            <div className="flex flex-col mt-20 border rounded-md col-span-3">
                <Card className="rounded-md">
                    <div className="flex flex-row items-center">
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ p: 1 }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                                    TabIndicatorProps={{
                                        style: {
                                            backgroundColor: "#FFFFFF",
                                        }
                                    }}
                                    classes={{ root: classes.customTabs }}
                                >
                                    <Tab label={<Typography className="text-sm font-medium">New booking requests</Typography>} />
                                    <Tab label={<Typography className="text-sm font-medium">Active</Typography>} />
                                    <Tab label={<Typography className="text-sm font-medium">Upcoming</Typography>} />
                                    <Tab label={<Typography className="text-sm font-medium">Completed</Typography>} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <NewRequests />
                            </TabPanel>

                            <TabPanel value={value} index={1}>
                                <Upcoming />
                            </TabPanel>

                            <TabPanel value={value} index={2}>
                                <Upcoming />
                            </TabPanel>

                            <TabPanel value={value} index={3}>
                                <Upcoming />
                            </TabPanel>
                        </Box>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Bookings