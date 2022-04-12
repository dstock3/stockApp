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
  useEffect(()=> {
    const apiKey = 'ce5445893c37418a9ee00568eb67e13c'

    let apiCall = `https://api.twelvedata.com/time_series?symbol=DJI,SPX,NDAQ&interval=1day&apikey=${apiKey}`

    fetch(apiCall)
      .then(
          function(response) {
              return response.json()
          }
      )
      .then(
          function(data) {
            let DowData = {
              yesterday: parseFloat(data.DJI.values[1].close),
              today: parseFloat(data.DJI.values[0].close)
            }
            let dowArrowValue
            let dowChangeValue
            if (DowData.yesterday > DowData.today) {
              dowArrowValue = "down"
              dowChangeValue = DowData.yesterday - DowData.today
            } else {
              dowArrowValue = "up"
              dowChangeValue = DowData.today - DowData.yesterday
            }

            setDow({ sym: 'Dow', price: DowData.today, change: dowChangeValue.toFixed(2), percent: 0.80, arrow: dowArrowValue })

            let nasData = {
              yesterday: parseFloat(data.NDAQ.values[1].close),
              today: parseFloat(data.NDAQ.values[0].close)
            }
            let nasArrowValue
            let nasChangeValue
            if (nasData.yesterday > nasData.today) {
              nasArrowValue = "down"
              nasChangeValue = nasData.yesterday - nasData.today
            } else {
              nasArrowValue = "up"
              nasChangeValue = nasData.today - nasData.yesterday
            }

            setNas({ sym: 'Nasdaq', price: nasData.today, change: nasChangeValue.toFixed(2), percent: 2.05, arrow: nasArrowValue })

            let spxData = {
              yesterday: parseFloat(data.SPX.values[1].close),
              today: parseFloat(data.SPX.values[0].close)
            }
            let spxArrowValue
            let spxChangeValue
            if (spxData.yesterday > spxData.today) {
              spxArrowValue = "down"
              spxChangeValue = spxData.yesterday - spxData.today
            } else {
              spxArrowValue = "up"
              spxChangeValue = spxData.today - spxData.yesterday
            }

            setSp({ sym: 'Nasdaq', price: nasData.today, change: spxChangeValue.toFixed(2), percent: 2.05, arrow: spxArrowValue })

          }
      )
      .catch(
          function(err) {
              console.log(err)
              //setErrorState(true)
          }
      )
  
  }, [])

  const [dow, setDow] = useState({ sym: 'Dow', price: 34754, change: 0.80, percent: 0.80, arrow: "up" })
  const [sp, setSp] = useState({ sym: 'S&P 500', price: 4463, change: 51.45, percent: 1.17, arrow: "up" })
  const [nas, setNas] = useState({ sym: 'Nasdaq', price: 13893, change: 279, percent: 2.05, arrow: "up" })
  const [indexes, setIndexes] = useState([dow, sp, nas])
  const [cellStyle, setCellStyle] = useState({lineHeight: 1.6, padding: "12px"})

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





