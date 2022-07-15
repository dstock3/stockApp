import React, { useState } from 'react'
import './css/Reset.css';
import './App.css';
import HeadTable from './components/HeadTable';
import NewPlot from './components/NewPlot';
import SearchBar from './components/SearchBar';
import Sidebar from './components/Sidebar';

const App = () => {
  const [inputField, setInputField] = useState("");
  const [xValues, setXValues] = useState([])
  const [yValues, setYValues] = useState([])
  const [errorState, setErrorState] = useState(false)
  const [stockName, setName] = useState(null)
  const [stockInfo, setStockInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="App">
      <header className="head-nav">
        <nav className="head-subcontanier">
          <h1 className="head-title">MarketQuest</h1>
          <SearchBar setIsLoading={setIsLoading} setInputField={setInputField} sym={inputField} setXValues={setXValues} setYValues={setYValues} setErrorState={setErrorState} setName={setName} setStockInfo={setStockInfo} />
        </nav>
        <HeadTable />
      </header>

      <main>
        <Sidebar setInputField={setInputField} />
        <NewPlot isLoading={isLoading} stockName={stockName} className={"search-plot"} label={inputField} xValues={xValues} yValues={yValues} errorState={errorState} stockInfo={stockInfo} />
      </main>

      <footer>
        <div className="link-container">
            <ul>
                <li><a className="social-link" href="https://github.com/dstock3/stockApp" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a className="social-link" href="https://dstock.biz/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
