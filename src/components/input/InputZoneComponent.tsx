import React from 'react';
import ImgComponent from '../common/ImgComponent';


interface Props {
    type?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    zoneClass?: string;
    inputClass?: string;
    deleteClass?: string;
    onDelete?: () => void;
    messClass?: string;
    message?: string;
    readOnly?: boolean;
}

const InputZoneComponent = ({ 
        zoneClass, type, inputClass, placeholder, value, onChange, deleteClass, onDelete, messClass, message, readOnly 
    }:Props) => {

    return (
        <div className={zoneClass}>
            <input type={type} className={inputClass} placeholder={placeholder} value={value} onChange={onChange} readOnly={readOnly} />
            <span className={deleteClass} onClick={onDelete}>
                <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
            </span>
            <span className={messClass}>{message}</span>
        </div>
    );
};

export default InputZoneComponent;