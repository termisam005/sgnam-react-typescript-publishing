import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';


const Counter = ({ boxClass, type, inputClass }) => {

    const [ count, setCount ] = useState(0);

    const plus = () => {
        setCount(count + 1);
    }
    const minus = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }

    console.log(count);

    
    return (
        <div className={boxClass}>
            <input type={type} className={inputClass} value={count} />
            <button type="button" className="stepper_arrow up" onClick={plus}>
                <ImgComponent src={'arrow_up_fill_fff_12.svg'} />
            </button>
            <button type="button" className="stepper_arrow down" onClick={minus}>
                <ImgComponent src={'arrow_down_fill_fff_12.svg'} />
            </button>
        </div>
    );
};

export default Counter;