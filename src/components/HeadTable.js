import React, { useState } from 'react'
import '../css/HeadTable.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(sym, price, change, percent, arrow) {
  return { sym, price, change, percent, arrow };
}

const rows = [
  createData('Dow', 34754, 274.17, 0.80, "up"),
  createData('S&P 500', 4463, 51.45, 1.17, "up"),
  createData('Nasdaq', 13893, 279, 2.05, "up"),
];

const HeadTable = () => {
  return (
    <div className="head-table-container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.sym}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row.sym}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">{row.change}</TableCell>
                <TableCell align="left">{row.arrow}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default HeadTable





