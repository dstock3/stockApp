import React, {useState, useEffect} from 'react'
import './css/Reset.css';
import './App.css';
import HeadTable from './components/HeadTable';
import MarketRow from './components/MarketRow';
import NewPlot from './components/NewPlot';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';

const App = () => {
  const [inputField, setInputField] = useState("");
  const [xValues, setXValues] = useState([])
  const [yValues, setYValues] = useState([])
  const [errorState, setErrorState] = useState(false)

  useEffect(()=> {
    document.title = "MarketQuest";
  }, [])

  return (
    <div className="App">
      <nav className="head-nav">
        <div className="head-subcontanier">
          <h1 className="head-title">MarketQuest</h1>
          <SearchBar setInputField={setInputField} />
        </div>
        <HeadTable />
      </nav>

      <table className="primary-table">
        <tbody className="markets">
          <MarketRow sym={inputField} setXValues={setXValues} setYValues={setYValues} setErrorState={setErrorState}/>
           {/*
          <MarketRow sym="DOW" index="Dow Jones Industrial Average"/>
          <MarketRow sym="NASDAQ:^IXIC" index="Nasdaq Composite"/>
          <MarketRow sym="GSPC" index="S&P 500"/>
          <MarketRow sym="GDOW"/>
          <MarketRow sym="GC00"/>
          <MarketRow sym="CL.1"/>
          */}
        </tbody>
      </table>

      <main>
        <NewPlot className={"search-plot"} label={inputField} xValues={xValues} yValues={yValues} errorState={errorState} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
