import React from 'react';


const WeatherSign = ({ weatherClass, when, markClass, flexClass, resultClass, temperClass, temper, unitClass, unit, textClass, text }) => {

    return (
        <div className={weatherClass}>
            <span className='fs_13'>{when}</span>
            <p className={markClass}></p>
            <div className={flexClass}>
                <h1 className={resultClass}>
                    <span className={temperClass}>{temper}</span>
                    <span className={unitClass}>{unit}</span>
                </h1>
                <span className={textClass}>
                    {text}
                </span>
            </div>
        </div>
    );
};

export default WeatherSign;