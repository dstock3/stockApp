import React, { useEffect } from 'react'
import '../css/Sidebar.css'

const Sidebar = ({setInputField}) => {
  
  useEffect(()=> {
    const sideItems = Array.from(document.querySelectorAll(".side-item"))

    for (let i = 0; i < sideItems.length; i++) {
      let sideItem = sideItems[i]

      sideItem.addEventListener("click", function() {
        for (let y = 0; y < sideItems.length; y++) {
          sideItems[y].classList.remove("item-selected")
        }

        sideItem.classList.add("item-selected")
      })
    }

  }, [])


  return (
    <div className="sidebar">
        <h2 className="side-head">
            Frequently Searched Stocks
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