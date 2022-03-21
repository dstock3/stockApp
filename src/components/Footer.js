import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="link-container">
            <ul>
                <li><a className="social-link" href="https://github.com/dstock3/stockApp" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a className="social-link" href="https://dstock.biz/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer