import React, { useState, useEffect } from 'react'
import '../css/HeadTable.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LineGoesUp from '../assets/up.svg'
import LineGoesDown from '../assets/down.svg'

const HeadTable = () => {
  const [dow, setDow] = useState({ sym: 'Dow', price: 34754, change: 0.80, percent: 0.80, arrow: "up" })
  const [sp, setSp] = useState({ sym: 'S&P 500', price: 4463, change: 51.45, percent: 1.17, arrow: "up" })
  const [nas, setNas] = useState({ sym: 'Nasdaq', price: 13893, change: 279, percent: 2.05, arrow: "up" })
  const [indexes, setIndexes] = useState([dow, sp, nas])
  const [cellStyle, setCellStyle] = useState({lineHeight: 1.6, padding: "12px"})

  useEffect(()=> {
    const apiKey = 'ce5445893c37418a9ee00568eb67e13c'

    let apiCall = `https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=${apiKey}`

    fetch(apiCall)
      .then(
          function(response) {
              return response.json()
          }
      )
      .then(
          function(data) {
            console.log(data)

              

          }
      )
      .catch(
          function(err) {
              console.log(err)
              //setErrorState(true)

          }
      )
  

  }, [])

  return (
      <TableContainer id="head-table-container" component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableBody>
            {indexes.map((index) => (
              <TableRow
                key={index.sym}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell style={cellStyle} align="left">{index.sym}</TableCell>
                <TableCell style={cellStyle} align="left">{index.price}</TableCell>
                <TableCell style={cellStyle} align="left">{index.change}</TableCell>
                <TableCell style={cellStyle} align="left">{
                  index.arrow==="up" ? 
                    <img className="arrow-indicator" src={LineGoesUp} alt="trending up"></img> :
                    <img className="arrow-indicator" src={LineGoesDown} alt="trending down"></img>
                }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default HeadTable





