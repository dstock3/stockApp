import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';
import '../css/Plot.css'

const NewPlot = ({className, label, xValues, yValues}) => {
    const [range, setRange] = useState({xValues, yValues});
    const [buttonArray, setButtonArray] = useState(["", "", "", "selected"])

    useEffect(()=> {
        setRange({xValues, yValues});

    }, [xValues, yValues])

    useEffect(()=> {
        console.log(range)
        
    }, [range])

    const rangeSelect = (n, buttonClass) => {
        let newXRange = xValues.slice(0, n)
        let newYRange = yValues.slice(0, n)

        setRange({xValues: newXRange, yValues: newYRange})
    }

    if (label) {
        return (
            <div className="plot-container">
                <h2 className="plot-label">{label}</h2>
                <Plot
                    className={className}
                    data={[
                    {
                        x: range.xValues,
                        y: range.yValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'blue'},
                    }]}
                    layout={ {width: 720, height: 440, title: {label}} }
                />
                <div className="range-button-container">
                    <button className={buttonArray[0]} onClick={() => rangeSelect(5, buttonArray[0])}>5 Day</button>
                    <button className={buttonArray[1]} onClick={() => rangeSelect(30, buttonArray[1])}>1 Month</button>
                    <button className={buttonArray[2]} onClick={() => rangeSelect(90, buttonArray[2])}>3 Months</button>
                    <button className={buttonArray[3]} onClick={() => rangeSelect(xValues.length - 1, buttonArray[3])}>Max Range</button>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default NewPlot