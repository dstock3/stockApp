import React from 'react'
import Plot from 'react-plotly.js';

const NewPlot = ({label, xValues, yValues}) => {
    if (label) {
        return (
            <Plot
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
        )
    } else {
        return null
    }
}

export default NewPlot