import React from 'react';
import { useState } from 'react';


const LightModeToggle = ({ className }) => {
    //lightmode Toggle

    const [modeLight, setModeLight] = useState(false);
    const [modeDark, setModeDark] = useState(true);

    const clickLight = () => {
        document.documentElement.setAttribute('data-theme', 'light');
        setModeLight(true);
        setModeDark(false);
    };
    const clickDark = () => {
        document.documentElement.setAttribute('data-theme', 'dark');
        setModeLight(false);
        setModeDark(true);
    };

    return (
        <div className={"lightmode"}>
            <div className="inner">
                <input type="radio" name="toggle" id="toggle-radio-light" checked={modeLight} />
                <label for="toggle-radio-light" className="tolight" onClick={clickLight}>
                    <i className="fas fa-sun tolight"></i>
                </label>
                <input type="radio" name="toggle" id="toggle-radio-dark" checked={modeDark} />
                <label for="toggle-radio-dark" className="todark" onClick={clickDark}>
                    <i className="fas fa-moon todark"></i>
                </label>
            </div>
        </div>
    );
};

export default LightModeToggle;