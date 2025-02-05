import React from 'react';

const SelectComponent = ({ className, disabled, children }) => {

    return (
        <select className={className} disabled={disabled}>
            {children}
        </select>
    );
};

export default SelectComponent;
