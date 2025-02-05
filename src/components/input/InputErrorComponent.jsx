import React from 'react';
import ImgComponent from '../common/ImgComponent';


const InputErrorComponent = ({ zoneClass, type, inputClass, placeholder, value, messClass, message }) => {


    return (
        <div className={zoneClass}>
            <input type={type} className={inputClass} placeholder={placeholder} value={value} />
            <span className={'put_check put_delete'}>
                <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
            </span>
            <span className={messClass}>{message}</span>
        </div>
    );
};

export default InputErrorComponent;
