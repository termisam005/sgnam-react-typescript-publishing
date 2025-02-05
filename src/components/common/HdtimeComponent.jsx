import React from 'react';

const HdtimeComponent = ({ stausClass, markClass, textClass, date, slash, time }) => {
    
  return (
    <div className={stausClass}>
        <p className={markClass}></p>
        <span className={textClass}>
            <span>{date}</span>
            <span>{slash}</span>
            <span>{time}</span>
        </span>
    </div>
  );
};

export default HdtimeComponent;