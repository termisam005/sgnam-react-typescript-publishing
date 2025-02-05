import React, { Component } from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';
import PlacementComponent from './PlacementComponent';



const PopoverContainerScroll = ({ className, normal, scroll }) => {

    const [popOver, setPopOver] = useState(true);
    const togglePop = () => {
        setPopOver(!popOver);
    }
    const closePop = () => {
        setPopOver(false);
    }
    
    return (
        <div className={className}>

            <ButtonWithComponent onClick={togglePop} type={'button'} className={popOver? 'btn_icon icon_ffb btn_m selected m-t-a' : 'btn_icon icon_ffb btn_m m-t-a'}>
                <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
            </ButtonWithComponent>

            <PlacementComponent boxClass={popOver? 'w320 placement show top left' : 'w320 placement top left'} 
            titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'Title'} close={closePop}>
                {
                    normal === true 
                    ? 
                    <div className="popover_contents">
                        <div className="scroll h200">
                            <p className='h300'></p>
                        </div>
                    </div>
                    : null
                }
                {
                    scroll === true 
                    ? 
                    <div className="popover_contents p-r-6">
                        <div className="scroll h200 p-r-14">
                            <p className='h300'></p>
                        </div>
                    </div>
                    : null
                }
            </PlacementComponent>

        </div>
    )
}

export default PopoverContainerScroll;

