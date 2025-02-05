import React from 'react';
import ImgComponent from '../common/ImgComponent';


const InputPassComponent = ({ zoneClass, type, inputClass, placeholder, value, onChange, seeClass, onSee, messClass, message }) => {

    return (
        <div className={zoneClass}>
            <input type={type} className={inputClass} placeholder={placeholder} value={value} onChange={onChange} />
            <span className={seeClass} onClick={onSee}>
                <ImgComponent className={'img_see w20'} src={"eye_fff_on_20.svg"} />
                <ImgComponent className={'img_see_off w20 op04'} src={"eye_fff_off_20.svg"} />
            </span>
            <span className={messClass}>{message}</span>
        </div>
    );
    
};

export default InputPassComponent;
