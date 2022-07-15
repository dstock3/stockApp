import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';
import '../css/Plot.css'
import LineGoesUp from '../assets/up.svg'
import LineGoesDown from '../assets/down.svg'
import Loading from '../components/Loading'

const NewPlot = ({isLoading, stockName, className, label, xValues, yValues, errorState, stockInfo }) => {
    const [range, setRange] = useState({xValues, yValues});
    const [buttonArray, setButtonArray] = useState(["", "", "", "selected"])
    const [plotDim, setPlotDim] = useState({width: 720, height: 440})

    useEffect(()=> {
        setRange({xValues, yValues});
        setButtonArray(["", "", "", "selected"])

    }, [xValues, yValues])

    useEffect(()=> {
        const media = window.matchMedia("(max-width: 800px)")
        if (media.matches) {
            setPlotDim({width: 345, height: 285})
        }
    }, [])

    const rangeSelect = (n, buttonIndex) => {
        let newXRange = xValues.slice(0, n)
        let newYRange = yValues.slice(0, n)

        setRange({xValues: newXRange, yValues: newYRange})

        let newArray = buttonArray;

        newArray[buttonIndex] = "selected";

        for (let i = 0; i < newArray.length; i++) {
            if (i !== buttonIndex) {
                newArray[i] = ""
            }
        }
        setButtonArray(newArray)
    }

    if (isLoading) {
        return (
            <div className="plot-container">
                <Loading />
            </div>
        )
    } else {
        if (label && (!errorState)) {
            return (
                <div className="plot-container">
                    <div className="plot-subcontainer">
                        <h2 className="plot-label">{label}</h2>
                        <Plot
                            className={className}
                            data={[
                            {
                                x: range.xValues,
                                y: range.yValues,
                                type: 'scatter',
                                mode: 'lines+markers',
                                marker: {color: '#1976d2'},
                            }]}
                            layout={ {width: plotDim.width, height: plotDim.height, title: {label}} }
                        />
    
                        <div className="range-button-container">
                            <button className={`range-button ${buttonArray[0]}`} onClick={() => rangeSelect(5, 0)}>5 Day</button>
                            <button className={`range-button ${buttonArray[1]}`} onClick={() => rangeSelect(30, 1)}>1 Month</button>
                            <button className={`range-button ${buttonArray[2]}`} onClick={() => rangeSelect(90, 2)}>3 Months</button>
                            <button className={`range-button ${buttonArray[3]}`} onClick={() => rangeSelect(xValues.length - 1, 3)}>Max Range</button>
                        </div>
                    </div>
                    {stockInfo && stockName ?
                        <div className="stock-info">
                            <h3 className="stock-name">{stockName}</h3>
                            <ul className="stock-info-list">
                                <li className="stock-info-line-item">Open: {parseFloat(stockInfo["1. open"]).toFixed(2)}</li>
                                <li className="stock-info-line-item">High: {parseFloat(stockInfo["2. high"]).toFixed(2)}</li>
                                <li className="stock-info-line-item">Low: {parseFloat(stockInfo["3. low"]).toFixed(2)}</li>
                                <li className="stock-info-line-item">Close: {parseFloat(stockInfo["4. close"]).toFixed(2)}</li>
                                <li className="stock-info-line-item">Vol: {stockInfo["5. volume"]}</li>
                            </ul> 
                        </div> : <Loading isMini={true} />
                    }
                </div>
            )
        } else if (errorState) {
            return (
                <div className="plot-container">
                    <div className="message">
                        There was a problem retrieving the data you requested.
                    </div>
                </div>
            )
        } else {
            return(
                <div className="plot-container">
                    <div className="message">
                        Search a ticker symbol to get started.
                    </div>
                </div>
            )
        }

    }


}

export default NewPlot