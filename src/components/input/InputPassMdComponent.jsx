import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';


const InputPassMdComponent = ({ zoneClass, type, inputClass, placeholder, messClass, message }) => {

    const [password, setPassword] = useState('');
    const [viewer, setViewer] = useState(false);

    const writePass = (e) => {
        setPassword(e.target.value);
    }
    const onSee = (e) => {
        setPassword(e.target.value);
        setViewer(!viewer);
    }

    return (
        <div className={zoneClass}>
            <input type={type} className={inputClass} placeholder={placeholder} value={password} onChange={writePass} />
            <span className={viewer? 'put_check put_see on' : 'put_check put_see'} onClick={onSee}>
                <ImgComponent className={'img_see w20'} src={"eye_fff_on_20.svg"} />
                <ImgComponent className={'img_see_off w20 op04'} src={"eye_fff_off_20.svg"} />
            </span>
            <span className={messClass}>{message}</span>
        </div>
    );
};

export default InputPassMdComponent;
