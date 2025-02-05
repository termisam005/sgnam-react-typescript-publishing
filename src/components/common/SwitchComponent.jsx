import React from 'react';
import { useState } from 'react';


const SwitchComponent = ({ labelClass, spanClass }) => {

    const [onSwitch, setSwitch] = useState(false);
    const ToggleSwitch = () => {
        setSwitch(!onSwitch);
    }

    return (
        <div onClick={ToggleSwitch} className={onSwitch? 'swith_room on' : 'swith_room'}>
            <input className="switch_checkbox" type="checkbox" />
            <label className={labelClass}>
                <span className={spanClass}></span>
            </label>
        </div>
    );
};

export default SwitchComponent;
