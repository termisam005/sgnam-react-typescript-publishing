import React from 'react';
import { useState } from 'react';
import ImgComponent from './ImgComponent';
import ButtonWithComponent from './ButtonWithComponent';


const NotificComponent = ({ bgClass, titleClass, title }) => {

    const [checNotific, setCheckNotific] = useState(false);
    const clickToggle = () => {
        setCheckNotific(!checNotific);
    }

    return (
        <div className={checNotific? "notification_box hide m-t-20" : "notification_box m-t-20"}>
            <div className={bgClass}>
                <p className={titleClass}>{title}</p>
            </div>
            <ButtonWithComponent type={'button'} className={'btn_notification'} onClick={clickToggle}>
                <ImgComponent className={'w24'} src={'hero_notification_off_24.svg'} />
            </ButtonWithComponent>
        </div>
    );
};

export default NotificComponent;
