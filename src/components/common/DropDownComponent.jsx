import React from 'react';
import { useState } from 'react';
import ImgComponent from './ImgComponent';
import ButtonWithComponent from './ButtonWithComponent';


const DropDownComponent = ({ wordClass, word, children }) => {

    const [dropStatus, setDropStatus] = useState(false);
    const toggleDropSett = () => {
        setDropStatus(!dropStatus);
    }

    return (
        <article className={dropStatus? 'drop_wrap on' : 'drop_wrap'}>
            <ButtonWithComponent type={'button'} className={dropStatus? 'btn_floating btn_m btn_drop selected' : 'btn_floating btn_m btn_drop'} 
            onClick={toggleDropSett}>
                <span className={wordClass}>{word}</span>
                <p className="put_see">
                    <ImgComponent className="img_see w20" src={'eye_sky_on_20.svg'} />
                </p>
            </ButtonWithComponent>
            {children}
        </article>
    );
};

export default DropDownComponent;
