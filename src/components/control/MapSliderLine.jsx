import React from 'react';

const MapSliderLine = ({addedClass, size, children}) => {
    return (
        <div className={addedClass}>        
            <div className={'map_control_rate ' + size}>
                <div className='rate_block'></div>
            </div>
            {children}
        </div>
    );
};

export default MapSliderLine;
