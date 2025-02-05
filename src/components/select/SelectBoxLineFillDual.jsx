import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';


const SelectBoxLineFillDual = ({ wrapClass, placeholder1, placeholder2 }) => {

    const [selbox1, setSelbox1] = useState(false);
    const handleFocus1 = () => {
        setSelbox1(!selbox1);
    }
    const closeBox1 = () => {
        setSelbox1(false);
    }
    const [currentValue01, setCurrentValue1] = useState('');
    const SelectValue1 = (e) => {
        const {innerText} = e.target;
        setCurrentValue1(innerText);
        setSelbox1(false);
    };
    const onChangeValue1 = (e) =>{
        setCurrentValue1(e.target.value);
    }

    const [selbox2, setSelbox2] = useState(false);
    const handleFocus2 = () => {
        setSelbox2(!selbox2);
    }
    const closeBox2 = () => {
        setSelbox2(false);
    }
    const [currentValue02, setCurrentValue2] = useState('');
    const SelectValue2 = (e) => {
        const {innerText} = e.target;
        setCurrentValue2(innerText);
        setSelbox2(false);
    };
    const onChangeValue2 = (e) =>{
        setCurrentValue2(e.target.value);
    }

    return (
        <section className={wrapClass}>
            <div onClick={closeBox1} className={selbox1? 'box_bg on':'box_bg'}></div>
            <div onClick={closeBox2} className={selbox2? 'box_bg on':'box_bg'}></div>

            <div className="dflx_ac gap_8">
                <div onFocus={handleFocus1} className={selbox1? "selectbox w88 line fill h28 gap_8 on" : "selectbox w88 line fill h28 gap_8"}>
                    <input type="text" class="selectbox_text" value={currentValue01} onChange={onChangeValue1} placeholder={placeholder1} />
                    <ImgComponent className="op06 w16 selectbox_arrow" src={'arrow_down_fff_16.svg'} />
                    <ul class="selectbox_options scroll">
                        <li onClick={SelectValue1} className="option">label1</li>
                        <li onClick={SelectValue1} className="option">label2</li>
                        <li onClick={SelectValue1} className="option">label3</li>
                        <li onClick={SelectValue1} className="option">label4</li>
                    </ul>
                </div>
                <div>~</div>
                <div onFocus={handleFocus2} className={selbox2? "selectbox w88 line fill h28 gap_8 on" : "selectbox w88 line fill h28 gap_8"}>
                    <input type="text" class="selectbox_text" value={currentValue02} onChange={onChangeValue2} placeholder={placeholder2} />
                    <ImgComponent className="op06 w16 selectbox_arrow" src={'arrow_down_fff_16.svg'} />
                    <ul class="selectbox_options scroll">
                        <li onClick={SelectValue2} className="option">label1</li>
                        <li onClick={SelectValue2} className="option">label2</li>
                        <li onClick={SelectValue2} className="option">label3</li>
                        <li onClick={SelectValue2} className="option">label4</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SelectBoxLineFillDual;
