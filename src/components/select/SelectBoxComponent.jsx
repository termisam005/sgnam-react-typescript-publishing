import React from 'react';
import ImgComponent from '../common/ImgComponent';


const SelectBoxComponent = ({ focus, selboxClass, open, close, placeholder, currentValue, children, size, onChange }) => {

    return (
        <section>
            <div onClick={close} className={open? 'box_bg on':'box_bg'}></div>
            <div onFocus={focus} className={selboxClass}>
                <input type="text" class="selectbox_text flex1" placeholder={placeholder} value={currentValue} size={size} onChange={onChange} />
                <ImgComponent className="op06 w16 selectbox_arrow" src={'arrow_down_fff_16.svg'} />
                <ul class="selectbox_options scroll">
                    {children}
                </ul>
            </div>
        </section>
    );
};

export default SelectBoxComponent;
