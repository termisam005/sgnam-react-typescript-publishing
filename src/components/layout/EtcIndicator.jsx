import React from 'react';


const EtcIndicator = ({ etcClass, onClick, IndTitle }) => {

    return (
        <div className={etcClass} onClick={onClick}>
            <h3 className='indi_tlt'>{IndTitle}</h3>
        </div>
    );
};

export default EtcIndicator;