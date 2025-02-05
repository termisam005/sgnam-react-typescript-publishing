import React from 'react';

const SmartComponent = ({ labelClass, labelWord, number, children }) => {

    return (
        <div className='smart'>
            <div className='smart_top'>
                <span className={labelClass}>{labelWord}</span>
            </div>
            <div className='smart_cont'>
                <p className='smart_result'>
                    <span>{number}</span>
                    <span>건</span>
                </p>
                {children}
            </div>
        </div>
    );
};

export default SmartComponent;