import React, { Component } from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';



const ImagePopover = ({ className, src, img }) => {    
    return (
        <div className={className}>
            {
                img === true 
                ? 
                <ImgComponent src={src} />
                : null
            }
        </div>
    )
}

export default ImagePopover;

