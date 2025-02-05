import React from 'react';


const CheckComponent = ({ checkClass, type, name, checked, disabled, onChange, checkId, labelClass, txt }) => {

    return (
        <div className={checkClass}>
            <input type={type} id={checkId} name={name} checked={checked} disabled={disabled} hidden /> 
            <label for={checkId} className={labelClass}>{txt}</label>
        </div>
    );
};

export default CheckComponent;
