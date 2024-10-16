import React from 'react';
import { Button, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TransactionHistory = () => {

    return (
        <TableContainer >
            <Table aria-label="simple table">
                <TableHead >
                    <TableRow className="border-t bg-gray-50">

                        <TableCell className="text-12 font-medium" sx={{ width: '18%' }}>
                            <div className='flex flex-row items-center ml-9'>

                                Date
                                <div className=' flex flex-col items-center px-5'>
                                    <img src="/assets/images/icons/polygonup.svg" className='p-2 w-12' alt="Up" />
                                    <img src="/assets/images/icons/polygondown.svg" className='p-2 w-12' alt="Down" />
                                </div>
                            </div>
                        </TableCell>
                        <TableCell className="text-12 font-medium " sx={{ width: '10%' }}>Booking ID</TableCell>
                        <TableCell className="text-12 font-medium" sx={{ width: '10%' }}>
                            <div className='flex flex-row items-center'>

                                Amount
                                <div className=' flex flex-col items-center px-5'>
                                    <img src="/assets/images/icons/polygonup.svg" className='p-2 w-12' alt="Up" />
                                    <img src="/assets/images/icons/polygondown.svg" className='p-2 w-12' alt="Down" />
                                </div>
                            </div>

                        </TableCell>
                        <TableCell className="text-12 font-medium " sx={{ width: '10%' }}>

                            <div className='flex flex-row items-center'>

                                Account
                                <div className=' flex flex-col items-center px-5'>
                                    <img src="/assets/images/icons/polygonup.svg" className='p-2 w-12' alt="Up" />
                                    <img src="/assets/images/icons/polygondown.svg" className='p-2 w-12' alt="Down" />
                                </div>
                            </div>
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                    >
                        <TableCell >
                            <Typography className="text-12 font-medium ml-8">21 March 2022</Typography>
                        </TableCell>
                        <TableCell className="text-12 text-gray-500 font-normal">515551dd</TableCell>
                        <TableCell className="text-12 text-gray-500 font-normal">15000 PKR</TableCell>
                        <TableCell className="text-12 text-gray-500 font-normal">HBL Account</TableCell>
                        <TableCell className="font-normal" align='right'><Typography className='text-12' style={{ color: '#D22A8F' }}>View reciept</Typography></TableCell>
                    </TableRow>

                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>
                            <Typography className="text-12 font-medium ml-8">21 March 2022</Typography>
                        </TableCell>
                        <TableCell className="text-12 text-gray-500 font-normal">515551dd</TableCell>
                        <TableCell className="text-12 text-gray-500 font-normal">15000 PKR</TableCell>
                        <TableCell className="text-12 text-gray-500 font-normal">HBL Account</TableCell>
                        <TableCell className="font-normal" align='right'><Typography className='text-12' style={{ color: '#D22A8F' }}>View reciept</Typography></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default TransactionHistory