import React from 'react';


const SmarttopComponent = ({ smartClass, labelClass, label, dateClass, datetime }) => {

  return (
    <div className={smartClass}>
        <span className={labelClass}>{label}</span>
        <span className={dateClass}>{datetime}</span>
    </div>
  );
};

export default SmarttopComponent;