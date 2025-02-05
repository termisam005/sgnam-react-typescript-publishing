import React, { Component } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';



const PlacementComponent = ({ boxClass, titleBgClass, title, titleClass, close, children }) => {
    
    return (
        <div className={boxClass}>
            <div className={titleBgClass}>
                <h5 className={titleClass}>{title}</h5>
                <ButtonWithComponent type={'button'} className={'popover_close'} onClick={close}>
                    <ImgComponent className={'w24'} src={"close_line_fff_24.svg"} />
                </ButtonWithComponent>
            </div>
            {children}
        </div>
    )
}

export default PlacementComponent;

