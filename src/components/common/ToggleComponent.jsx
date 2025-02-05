import React from 'react';
import { useState } from 'react';


const ToggleComponent = ({ children, normal, selected, disabled }) => {

    const [toggleDiv, setToggleDiv] = useState(false);
    const clickToggle = () => {
        setToggleDiv(!toggleDiv);
    }

    return (
        <>
            {
                normal === true
                ? <div onClick={clickToggle} className={toggleDiv ? 'toggle on' : 'toggle'}>
                    {children}
                </div> : null
            }
            {
                selected === true
                ? <div onClick={clickToggle} className={toggleDiv ? 'toggle' : 'toggle on'}>
                    {children}
                </div> : null
            }
            {
                disabled === true
                ? <div onClick={clickToggle} className={toggleDiv ? 'toggle' : 'toggle'}>
                    {children}
                </div> : null
            }
        </>
    );
};

export default ToggleComponent;