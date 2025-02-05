import React from 'react';

const RateBar = ({color, percent}) => {
    return (
        <div className='share_rate_bar'>
            <div className='share_rate' style={{width: percent}}>
                <div className={color}></div>
            </div>
            <p className='share_rate_txt'>{percent}</p>
        </div>
    );
};

export default RateBar;
