import React from 'react';


const SmartContComponent = ({ className, children }) => {

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default SmartContComponent;