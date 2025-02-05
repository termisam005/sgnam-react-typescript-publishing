import React, { Component } from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';
import PlacementComponent from './PlacementComponent';



const PopoverContainer1 = ({ className }) => {

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
                <div className={'popover_contents'}>
                    <div className="fs_13 fc_white m-b-12">교차로</div>
                    <div className="grid_column2 gap_row8">
                        <ButtonWithComponent className={'btn_toggle_icon'}>
                            <span className="circle_grey28">
                                <ImgComponent className={'w20'} src={'smart_crossroad_20.svg'} />
                            </span>
                            <span className="fs_12">스마트</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent className={'btn_toggle_icon'}>
                            <span className="circle_grey28">
                                <ImgComponent className={'w20'} src={'crossroad_fill_20.svg'} />
                            </span>
                            <span className="fs_12">일반신호</span>
                        </ButtonWithComponent>
                    </div>
                    <div className="fs_13 fc_white m-t-24">지표별 범례</div>
                    <div class="dflx_ac_jbet m-t-8 m-b-8">
                        <div class="fs_12 fc_white">교통량</div>
                        <div class="fs_11 fc_grey60">대</div>
                    </div>
                    <div>
                        <ImgComponent className={'w-100'} src={'chart_popover_traffic.svg'} />
                    </div>
                </div>
            </PlacementComponent>

        </div>
    )
}

export default PopoverContainer1;

