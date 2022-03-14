import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';

const MarketRow = ({sym, index}) => {
    const [stockData, setStockData] = useState(null)
    const [xValues, setXValues] = useState([])
    const [yValues, setYValues] = useState([])

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
                            yValuesArray.push(timeSeries[prop]["1. open"])
                        }
                        setXValues(xValuesArray)
                        setYValues(yValuesArray)
                    }
                )
        }
    }, [sym])

    if (stockData) {
        return (
            <>
            <tr className="index">
                <td className="name">{index}</td>
                <td className="open">Open: {stockData["1. open"]}</td>
                <td className="high">High: {stockData["2. high"]}</td>
                <td className="low">Low: {stockData["3. low"]}</td>
                <td className="close">Close: {stockData["4. close"]}</td>
                <td className="vol">Volume: {stockData["5. volume"]}</td>
            </tr>
            <Plot
                data={[
                {
                    x: xValues,
                    y: yValues,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'blue'},
                }]}
                layout={ {width: 720, height: 440, title: {sym}} }
            />
            </>
        )
    } else {
        return null
    }

}

export default MarketRow