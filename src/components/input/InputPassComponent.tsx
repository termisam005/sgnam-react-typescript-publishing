import React from 'react';
import ImgComponent from '../common/ImgComponent';


interface Props {
    type?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    zoneClass?: string;
    inputClass?: string;
    seeClass?: string;
    onSee?: () => void;
    messClass?: string;
    message?: string;
}

const InputPassComponent = ({ 
        zoneClass, type, inputClass, placeholder, value, onChange, seeClass, onSee, messClass, message 
    }:Props) => {

    return (
        <div className={zoneClass}>
            <input type={type} className={inputClass} placeholder={placeholder} value={value} onChange={onChange} />
            <button type={'button'} className={seeClass} onClick={onSee}>
                <ImgComponent className={'img_see w20'} src={"eye_fff_on_20.svg"} />
                <ImgComponent className={'img_see_off w20 op04'} src={"eye_fff_off_20.svg"} />
            </button>
            <span className={messClass}>{message}</span>
        </div>
    );
    
};

export default InputPassComponent;
