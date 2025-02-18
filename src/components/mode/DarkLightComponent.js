import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import './DarkLight.css';


const DarkLightComponent = () =>{

    const setDarkMode = () =>{
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark');
    }
    const setLightMode = () =>{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('selectedTheme', 'light');
    }

    const selectedTheme = localStorage.getItem('selectedTheme');

    if(selectedTheme === 'dark'){
        setDarkMode();
    }
    if(selectedTheme === 'light'){
        setLightMode();
    }

    const toggleTheme = (e) => {
        if(e.target.checked) setDarkMode();
        else setLightMode();
    }

    return(
        <div className="dark_mode change_mode">
            <input className="change_mode_input" type="checkbox" id="mode-toggle" onChange={toggleTheme} 
             defaultChecked={selectedTheme === 'dark'} />
            <label className="change_mode_label" for='mode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    )

}

export default DarkLightComponent;