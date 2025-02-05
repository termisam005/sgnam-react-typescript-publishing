import React, { Component } from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';
import PlacementComponent from './PlacementComponent';
import CheckComponent from '../common/CheckComponent';
import AccordionIconComponent from '../accordion/AccordionIconComponent';
import ToggleComponent from '../common/ToggleComponent';



const PopoverContainer2 = ({ className }) => {

    const [popOver, setPopOver] = useState(true);
    const togglePop = () => {
        setPopOver(!popOver);
    }
    const closePop = () => {
        setPopOver(true);
    }

    //Inner Accordion
    const [Inaccordion, setInaccordion] = useState(true);
    const toggleInAccord = () => {
        setInaccordion(!Inaccordion);
    }

    //라디오 탭
    const [radioIndi, setRadioIndi] = useState(1);
    const tabIndi = (index) =>{
        setRadioIndi(index);
    }
    
    return (
        <div className={className}>

            <ButtonWithComponent onClick={togglePop} type={'button'} className={popOver? 'btn_icon icon_ffb btn_m selected m-t-a' : 'btn_icon icon_ffb btn_m m-t-a'}>
                <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
            </ButtonWithComponent>

            <PlacementComponent boxClass={popOver? 'w320 placement show top left' : 'w320 placement top left'} 
            titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'레이어 관리'} close={closePop}>
                <div className={'popover_contents p-0'}>
                    <div class="dflx_column gap_2">
                        <AccordionIconComponent accordClass={'accordion_block default'} iconSrc={'crossroad_name_fff_20.svg'} accordTitle={'교차로명'} normal>
                            <div className="accordion_row2">
                                <div className="dflx_ac level_one_min">
                                    <div className="w50 fs_11">색상</div>
                                    <div className="map_color__tag label_color15"></div>
                                </div>
                                <div className="dflx_ac level_one_min">
                                    <div className="w50 fs_11">크기</div>
                                    <div className="flex1">
                                        <div className="map_control_line">
                                            <div className="map_control_rate h14 m-b-4 w-40">
                                                <div className="rate_block"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AccordionIconComponent>
                        <AccordionIconComponent accordClass={'accordion_block default accordion_row2'} iconSrc={'heatmap_line_fff_20.svg'} accordTitle={'히트맵'} level>
                            <div className="accordion_title accord_title_in dflx_ac">
                                <div className="fs_14">표출지표</div>
                                <ButtonWithComponent onClick={toggleInAccord} type={'button'} 
                                className={Inaccordion? 'accordion_toggle h20 on m-l-a' : 'accordion_toggle h20 m-l-a'}>
                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                    <ImgComponent className={'accordion_down w20 '} src={'arrow_down_fff_20.svg'} />
                                </ButtonWithComponent>
                            </div>
                            <div className={Inaccordion? "accordion_contents show" : "accordion_contents"}>
                                <div className="">
                                    <div class="dflx_as gap_20 level_two_min">
                                        <p className={radioIndi === 1? "ch_radio p-0 on" : "ch_radio p-0"} onClick={() => tabIndi(1)}>
                                            <span className="radio"></span>
                                            <span className="word">개별차량 궤적</span>
                                        </p>
                                        <p className={radioIndi === 2? "ch_radio p-0 on" : "ch_radio p-0"} onClick={() => tabIndi(2)}>
                                            <span className="radio"></span>
                                            <span className="word">세그먼트</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AccordionIconComponent>
                        <div className={'accordion_block default'}>
                            <div className={'accordion_title dflx_ac'}>
                                <ToggleComponent>
                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                </ToggleComponent>
                                <div>
                                    <ImgComponent className={'m-l-16 w20 img_with'} src={'2d_map_fff_20.svg'} />
                                </div>
                                <div class="fs_14 fc_white m-l-16">신호패턴</div>
                            </div>   
                        </div>
                        <div className={'accordion_block default'}>
                            <div className={'accordion_title dflx_ac'}>
                                <ToggleComponent>
                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                </ToggleComponent>
                                <div>
                                    <ImgComponent className={'m-l-16 w20 img_with'} src={'2d_map_fff_20.svg'} />
                                </div>
                                <div class="fs_14 fc_white m-l-16">CI, 교차로 서비스 수준</div>
                            </div>   
                        </div>
                    </div>
                </div>
            </PlacementComponent>

        </div>
    )
}

export default PopoverContainer2;

