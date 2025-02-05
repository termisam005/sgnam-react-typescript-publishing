import React from 'react';
import { useState } from 'react';
import ImgComponent from './ImgComponent';


const CheckBoxComponent = () => {

    const [checkBox, setCheckBox] = useState(false);
    const clickCheck = () => {
        setCheckBox(!checkBox);
    }

    return (
        <p onClick={clickCheck} className={checkBox ? 'check_box on' : 'check_box'}>
            <ImgComponent className={'icon'} src={'check_off20.svg'} />
            <ImgComponent className={'icon_on'} src={'check_on20.svg'} />
        </p>
    );
};

export default CheckBoxComponent;
