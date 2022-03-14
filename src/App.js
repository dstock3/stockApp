import React, {useState} from 'react'
import './App.css';
import MarketRow from './components/MarketRow';
import NewPlot from './components/NewPlot';
import SearchBar from './components/SearchBar';

const App = () => {
  const [inputField, setInputField] = useState("");
  const [xValues, setXValues] = useState([])
  const [yValues, setYValues] = useState([])

  return (
    <div className="App">
      
      <SearchBar setInputField={setInputField} />

      <table className="primary-table">
        <tbody className="markets">
          <MarketRow sym={inputField} index={`Search Results: ${inputField}`} setXValues={setXValues} setYValues={setYValues}/>
          <NewPlot label={inputField} xValues={xValues} yValues={yValues} />

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
    </div>
  );
}

export default App;
