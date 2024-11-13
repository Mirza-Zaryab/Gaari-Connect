import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(vehicleid, make, number, location, host,priceperday,date,view) {
  return { vehicleid, make, number, location, host,priceperday,date,view };
}

const rows = [
  createData('159753', 159, 6.0, 24, 4.0,123,'02mar2012'),
  createData('159753', 237, 9.0, 37, 4.3,125,'02mar2012'),
  createData('159753', 262, 16.0, 24, 6.0,145,'02mar2012'),
  createData('159753', 305, 3.7, 67, 4.3,456,'02mar2012'),
  createData('159753', 356, 16.0, 49, 3.9,789,'02mar2012'),
  createData('159753', 356, 16.0, 49, 3.9,741,'02mar2012'),
  createData('159753', 356, 16.0, 49, 3.9,963,'02mar2012'),
  createData('159753', 356, 16.0, 49, 3.9,852,'02mar2012'),

];

export default function DataTable2() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Vehicle Id</StyledTableCell>
            <StyledTableCell align="right">Make</StyledTableCell>
            <StyledTableCell align="right">Number</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Host</StyledTableCell>
            <StyledTableCell align="right">Price Per Day</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.vehicleid}
              </StyledTableCell>
              <StyledTableCell align="right">{row.make}</StyledTableCell>
              <StyledTableCell align="right">{row.number}</StyledTableCell>
              <StyledTableCell align="right">{row.location}</StyledTableCell>
              <StyledTableCell align="right">{row.host}</StyledTableCell>
              <StyledTableCell align="right">{row.priceperday}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.view}
              <Button variant="contained" align="right" size="small">Small</Button></StyledTableCell>
              
          
        

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
