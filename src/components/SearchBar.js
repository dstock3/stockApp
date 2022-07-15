import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import SearchLogo from "../assets/search.svg";
import "../css/Search.css";

const SearchBar = ({ setIsLoading, setInputField, sym, setXValues, setYValues, setErrorState, setName, setStockInfo }) => {
    const [searchField, setSearchField] = useState("")
    const [stockData, setStockData] = useState(null)

    useEffect(()=> {
        if (sym) {
            setName(null)
            let twelveCall = `https://api.twelvedata.com/stocks`
        
            fetch(twelveCall)
                .then(
                    function(response) {
                        return response.json()
                    }
                )
                .then(
                    function(data) {
        
                    for (let prop in data) {
                        for (let newProp in data[prop]) {
                            if (data[prop][newProp].symbol === sym) {
                                setName(data[prop][newProp].name)
                            }
                        }
                    }
                    }
                )
                .catch(
                    function(err) {
                        console.log(err)
                    }
                )
        }
    }, [sym])

    useEffect(()=> {
        if (sym) {
            setIsLoading(true)
            const apiKey = 'EFBSPV0418NR9CSL'
    
            let apiCall = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${sym}&apikey=${apiKey}`
            
            fetch(apiCall)
                .then(
                    function(response) {
                        return response.json()
                    }
                )
                .then(
                    function(data) {
                        let metadata = data["Meta Data"]
                        let current = metadata["3. Last Refreshed"].slice(0,10);
                        let timeSeries = data["Time Series (Daily)"]
                        let currentData
                        let xValuesArray = []
                        let yValuesArray = []
                        
                        for (let prop in timeSeries) {
                            if (prop === current) {
                                currentData = timeSeries[prop]
                                setStockData(currentData)
                            }
                            
                            xValuesArray.push(prop)
                            yValuesArray.push(timeSeries[prop]["4. close"])
                        }
                        setStockInfo(currentData)
                        setXValues(xValuesArray)
                        setYValues(yValuesArray)
                        setErrorState(false)
                        setIsLoading(false)
                    }
                )
                .catch(
                    function(err) {
                        console.log(err)
                        setErrorState(true)
                        setIsLoading(false)
                    }
                )
        }

    }, [sym])

    const searchChangeHandler = e => {
        setSearchField(e.target.value);
    };

    const searchSubmit = e => {
        setInputField(searchField);
        e.preventDefault();
    }

    return (
        <form className="search-bar" onSubmit={searchSubmit}>
            <span onClick={searchSubmit} className="search-button">
                <img className="search-icon" src={SearchLogo} alt="magnifying glass logo"></img>
            </span>

            <TextField
                className="search-field"
                variant="filled"
                id="outlined-basic"
                onChange={searchChangeHandler}
                label="Search"
            />
        </form>
    );
};

export default SearchBar;
