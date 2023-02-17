import React from 'react';

const Loading = ({ isMini }) => (
  <div className="loading-container">
    <div className={isMini ? 'mini-spinner' : 'spinner'}></div>
  </div>
);

export default Loading;
