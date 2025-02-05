import React, { Component } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';



const PopoverTitle = ({ titleBgClass, titleClass, title, close }) => {
    
    return (
        <div className={titleBgClass}>
            <h5 className={titleClass}>{title}</h5>
            <ButtonWithComponent className={'popover_close'} onClick={close}>
                <ImgComponent src={'close_line_fff_24.svg'} />
            </ButtonWithComponent>
        </div>
    )
}

export default PopoverTitle;

