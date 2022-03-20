import React, { useEffect, useState } from 'react'

const MarketRow = ({sym, setXValues, setYValues, setErrorState}) => {
    const [stockData, setStockData] = useState(null)
   
    useEffect(()=> {
        if (sym) {
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
                        setXValues(xValuesArray)
                        setYValues(yValuesArray)
                    }
                )
                .catch(
                    function(err) {
                        console.log(err)
                        setErrorState(true)

                    }
                )
        }
    }, [sym])

    if (stockData) {
        return (
            <tr className="index">
                {/*
                <td className="name">{index}</td>
                <td className="open">Open: {stockData["1. open"]}</td>
                <td className="high">High: {stockData["2. high"]}</td>
                <td className="low">Low: {stockData["3. low"]}</td>
                <td className="close">Close: {stockData["4. close"]}</td>
                <td className="vol">Volume: {stockData["5. volume"]}</td>
                */}
            </tr>
        )
    } else {
        return null
    }

}

export default MarketRow