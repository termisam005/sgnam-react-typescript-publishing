import React from 'react';
import { useState } from 'react';
import ButtonWithComponent from './ButtonWithComponent';


const ButtonWithToggle = ({ wordClass, word, children }) => {

    const [dropBtn, setDropBtn] = useState(false);
    const toggleDrop = () => {
        setDropBtn(!dropBtn);
    }

    return (
        <ButtonWithComponent type={'button'} className={dropBtn? 'btn_floating btn_m btn_drop selected' : 'btn_floating btn_m btn_drop'} 
            onClick={toggleDrop}>
            <span className={wordClass}>{word}</span>
            {children}
        </ButtonWithComponent>
    );
};

export default ButtonWithToggle;