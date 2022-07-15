import React from 'react'

const Loading = ({isMini}) => {
    if (isMini) {
        return (
            <div className="loading-container">
                <div className="mini-spinner"></div>
            </div>
          )
    } else {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
            </div>
          )
    }
}

export default Loading