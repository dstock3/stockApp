import React, { useEffect, useState } from 'react'

const MarketRow = ({sym, index}) => {
    const [stockData, setStockData] = useState(null)
    useEffect(()=> {
        if (sym) {
            console.log(sym)
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
                        console.log(data)
                        let metadata = data["Meta Data"]
                        let current = metadata["3. Last Refreshed"].slice(0,10);
                        let timeSeries = data["Time Series (Daily)"]
                        let currentData
                        
                        for (let prop in timeSeries) {
                            if (prop === current) {
                                currentData = timeSeries[prop]
                                setStockData(currentData)
                            }
                        }
                    }
                )
        }
    }, [sym])

    if (stockData) {
        return (
            <tr className="index">
                <td className="name">{index}</td>
                <td className="open">{stockData["1. open"]}</td>
                <td className="high">{stockData["2. high"]}</td>
                <td className="low">{stockData["3. low"]}</td>
                <td className="close">{stockData["4. close"]}</td>
                <td className="vol">{stockData["5. volume"]}</td>
            </tr>
        )
    } else {
        return null
    }

}

export default MarketRow