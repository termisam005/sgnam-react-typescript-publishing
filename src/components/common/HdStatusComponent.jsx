import React from 'react';

const HdStatusComponent = ({ stausClass, markClass, textClass, temper, slash, air }) => {
    
  return (
    <div className={stausClass}>
        <p className={markClass}></p>
        <span className={textClass}>
            <span>{temper}</span>
            <span>{slash}</span>
            <span>{air}</span>
        </span>
    </div>
  );
};

export default HdStatusComponent;