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

function createData(accountid, name, email, cnic, licensenumber,phonenumber,city,date,view) {
  return { accountid, name, email, cnic, licensenumber,phonenumber,city,date,view };
}

const rows = [
  createData('159753', 159, 6.0, 24, 4.0,123,'lahore','02mar2012'),
  createData('159753', 237, 9.0, 37, 4.3,125,'lahore','02mar2012'),
  createData('159753', 262, 16.0, 24, 6.0,145,'lahore','02mar2012'),
  createData('159753', 305, 3.7, 67, 4.3,456,'lahore','02mar2012'),
  createData('159753', 356, 16.0, 49, 3.9,789,'lahore','02mar2012'),
  createData('159753', 356, 16.0, 49, 3.9,741,'lahore','02mar2012'),
  createData('159753', 356, 16.0, 49, 3.9,963,'lahore','02mar2012'),
  createData('159753', 356, 16.0, 49, 3.9,852,'lahore','02mar2012'),

];

export default function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Account Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">CNIC number</StyledTableCell>
            <StyledTableCell align="right">License number</StyledTableCell>
            <StyledTableCell align="right">Phone number</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.accountid}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.cnic}</StyledTableCell>
              <StyledTableCell align="right">{row.licensenumber}</StyledTableCell>
              <StyledTableCell align="right">{row.phonenumber}</StyledTableCell>
              <StyledTableCell align="right">{row.city}</StyledTableCell>
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
