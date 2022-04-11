import React from 'react'
import '../css/Sidebar.css'

const Sidebar = ({setInputField}) => {

  return (
    <div className="sidebar">
        <h2 className="side-head">
            Frequently Search Stocks
        </h2>

        <ul className="side-list">
            <li onClick={()=>setInputField("EPAM")} className="side-item">EPAM</li>
            
            <li onClick={()=>setInputField("CTRA")} className="side-item">CTRA</li>

            <li onClick={()=>setInputField("OXY")} className="side-item">OXY</li>

            <li onClick={()=>setInputField("ENPH")} className="side-item">ENPH</li>

            <li onClick={()=>setInputField("MPWR")} className="side-item">MPWR</li>
        </ul>
    </div>
  )
}

export default Sidebar