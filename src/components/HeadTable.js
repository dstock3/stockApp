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
  const [dow, setDow] = useState({ sym: 'Dow', price: null, change: null, percent: null, arrow: null })
  const [sp, setSp] = useState({ sym: 'S&P 500', price: null, change: null, percent: null, arrow: null })
  const [nas, setNas] = useState({ sym: 'Nasdaq', price: null, change: null, percent: null, arrow: null })
  
  const processIndexData = (indexData, indexState, setData) => {
    let arrowValue
    let changeValue
    if (indexData.yesterday > indexData.today) {
      arrowValue = "down"
      changeValue = indexData.yesterday - indexData.today
    } else {
      arrowValue = "up"
      changeValue = indexData.today - indexData.yesterday
    }
    let percentChange = (indexData.today - indexData.yesterday) / indexData.yesterday * 100

    setData({...indexState, price: indexData.today.toFixed(2), change: changeValue.toFixed(2), percent: percentChange.toFixed(2), arrow: arrowValue })

  }

  useEffect(()=> {
    const apiKey = 'ce5445893c37418a9ee00568eb67e13c'

    let apiCall = `https://api.twelvedata.com/time_series?symbol=DJI,SPX,IXIC&interval=1day&apikey=${apiKey}`

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
            processIndexData(DowData, dow, setDow)


            let NasData = {
              yesterday: parseFloat(data.IXIC.values[1].close),
              today: parseFloat(data.IXIC.values[0].close)
            }
            processIndexData(NasData, nas, setNas)


            let SpxData = {
              yesterday: parseFloat(data.SPX.values[1].close),
              today: parseFloat(data.SPX.values[0].close)
            }
            processIndexData(SpxData, sp, setSp)


          }
      )
      .catch(
          function(err) {
              console.log(err)
              //setErrorState(true)
          }
      )
  
  }, [])

  useEffect(() => {
    setIndexes([dow, sp, nas])

  }, [dow, sp, nas])

  const [indexes, setIndexes] = useState([dow, sp, nas])
  const [cellStyle, setCellStyle] = useState({lineHeight: 1.6, padding: "11px"})


  return (
      <TableContainer id="head-table-container" component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableBody>
            {indexes.map((index) => (
              <TableRow
                key={index.sym}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                
              >
                <TableCell style={{minWidth: "65px", lineHeight: 1.6, padding: "11px", fontWeight: "bold"}} align="left">{index.sym}</TableCell>
                <TableCell style={cellStyle} align="left">{index.price}</TableCell>
                
                {index.arrow==="up" ?
                   <TableCell style={{lineHeight: 1.6, padding: "11px", color: "green", fontWeight: "bold"}} align="left">{index.change}</TableCell>:
                   <TableCell style={{lineHeight: 1.6, padding: "11px", color: "red", fontWeight: "bold"}} align="left">{index.change}</TableCell>
                }
                {index.arrow==="up" ?
                   <TableCell style={{lineHeight: 1.6, padding: "11px", color: "green", fontWeight: "bold"}} align="left">{index.percent}%</TableCell>:
                   <TableCell style={{lineHeight: 1.6, padding: "11px", color: "red", fontWeight: "bold"}} align="left">{index.percent}%</TableCell>
                }

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





