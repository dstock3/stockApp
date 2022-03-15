import React from 'react'
import Plot from 'react-plotly.js';
import '../css/Plot.css'

const NewPlot = ({className, label, xValues, yValues}) => {
    if (label) {
        return (
            <div className="plot-container">
                <h2 className="plot-label">{label}</h2>
                <Plot
                    className={className}
                    data={[
                    {
                        x: xValues,
                        y: yValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'blue'},
                    }]}
                    layout={ {width: 720, height: 440, title: {label}} }
                />
            </div>
        )
    } else {
        return null
    }
}

export default NewPlot