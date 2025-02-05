import React from 'react';

const DiagonComponent = ({ contClass, tltClass, tlt, resultClass, result, unitClass, unit, children }) => {

    return (
        <div className={contClass}>
            <p className={tltClass}>{tlt}</p>
            <h1 className={resultClass}>
                <span>{result}</span>
                <span className={unitClass}>{unit}</span>
            </h1>
            {children}
        </div>
    );
};

export default DiagonComponent;