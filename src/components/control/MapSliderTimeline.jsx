import React from 'react';

const MapSliderTimeline = ({children, small, addedClass}) => {
    return (
        <div className={addedClass}>
            <div className={small ? 'dflx_jbet map_timeline small top' : 'dflx_jbet map_timeline m-b-4'}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {children}
            <div className={small ? 'dflx_jbet map_timeline small bottom' : 'dflx_jbet map_timeline m-t-4'}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default MapSliderTimeline;
