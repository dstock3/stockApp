import React, {useState} from 'react'
import './App.css';
import MarketRow from './components/MarketRow';
import SearchBar from './components/SearchBar';

const App = () => {
  const [inputText, setInputText] = useState("");
  
  return (
    <div className="App">
      
      <SearchBar setInputText={setInputText}/>

      {/*
      <table className="primary-table">
        <tbody className="markets">
          <MarketRow sym="DOW" index="Dow Jones Industrial Average"/>
          <MarketRow sym="NASDAQ:^IXIC" index="Nasdaq Composite"/>
          <MarketRow sym="GSPC" index="S&P 500"/>
          <MarketRow sym="GDOW"/>
          <MarketRow sym="GC00"/>
          <MarketRow sym="CL.1"/>
        </tbody>
      </table>
      */}
    </div>
  );
}

export default App;
