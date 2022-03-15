import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';
import '../css/Plot.css'

const NewPlot = ({className, label, xValues, yValues}) => {
    const [range, setRange] = useState({xValues, yValues});

    useEffect(()=> {
        setRange({xValues, yValues});

    }, [xValues, yValues])

    useEffect(()=> {
        console.log(range)
        
    }, [range])

    const rangeSelect = n => {
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
                    <button onClick={() => rangeSelect(5)}>5 Day</button>
                    <button onClick={() => rangeSelect(30)}>1 Month</button>
                    <button onClick={() => rangeSelect(90)}>3 Months</button>
                    <button onClick={() => rangeSelect(xValues.length - 1)}>Max Range</button>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default NewPlot