import React from 'react';

const InputComponent = ({ type, className, placeholder, value, disabled, id, hidden }) => {

    return (
        <input id={id} type={type} className={className} placeholder={placeholder} value={value} disabled={disabled} hidden={hidden} />
    );
};

export default InputComponent;