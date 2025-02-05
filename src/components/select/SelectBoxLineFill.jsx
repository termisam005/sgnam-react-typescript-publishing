import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';


const SelectBoxLineFill = ({ wrapClass, placeholder, disabled }) => {

    const [selbox, setSelbox] = useState(false);
    const handleFocus = () => {
        setSelbox(!selbox);
    }
    const closeBox = () => {
        setSelbox(false);
    }

    const [currentValue, setCurrentValue] = useState('');
    const onChangeSelectValue = (e) => {
        const {innerText} = e.target;
        setCurrentValue(innerText);
        setSelbox(false);
    };
    const onChangeValue = (e) =>{
        setCurrentValue(e.target.value);
    }

    return (
        <section className={wrapClass}>
            <div onClick={closeBox} className={selbox? 'box_bg on':'box_bg'}></div>
            <div onFocus={handleFocus} className={selbox? "selectbox w200 line fill h28 gap_8 on" : "selectbox w200 line fill h28 gap_8"}>
                <input type="text" class="selectbox_text" value={currentValue} onChange={onChangeValue} placeholder={placeholder} disabled={disabled} />
                <ImgComponent className="op06 w16 selectbox_arrow" src={'arrow_down_fff_16.svg'} />
                <ul class="selectbox_options scroll">
                    <li onClick={onChangeSelectValue} className="option">label 1</li>
                    <li onClick={onChangeSelectValue} className="option">label 2</li>
                    <li onClick={onChangeSelectValue} className="option">label 3</li>
                    <li onClick={onChangeSelectValue} className="option">label 4</li>
                    <li onClick={onChangeSelectValue} className="option">label 5</li>
                </ul>
            </div>
        </section>
    );
};

export default SelectBoxLineFill;
