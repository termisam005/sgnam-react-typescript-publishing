/*
스마트교차로 푸터 레이어 관리
 */
import React, { Component } from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';
import PlacementComponent from '../popup/PlacementComponent';
import PopoverContents from '../../components/popup/PopoverContents';
import ToggleComponent from '../../components/common/ToggleComponent';
import CheckComponent from '../../components/common/CheckComponent';


const SmartLayerMonitoring = ({ className }) => {

    const [popOver, setPopOver] = useState(false);
    const togglePop = () => {
        setPopOver(!popOver);
    }
    const closePop = () => {
        setPopOver(false);
    }

    //accordion 이벤트
    const [accordion, setAccordion] = useState(false);
    const toggleAccord = () => {
        setAccordion(!accordion);
    }

    //라디오 탭
    const [radioIndi, setRadioIndi] = useState(1);
    const tabIndi = (index) =>{
        setRadioIndi(index);
    }
    const [radioDator, setRadioDator] = useState(1);
    const tabDator = (index) => {
        setRadioDator(index);
    }
    
    return (
        <div className={className}>
            <ButtonWithComponent onClick={togglePop} type={'button'} className={popOver? 
                'btn_icon icon_ffb btn_m tooltip_parents lgmode selected' : 'btn_icon icon_ffb btn_m tooltip_parents lgmode'}>
                <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                <div className="tooltip_label">레이어</div>
            </ButtonWithComponent>
            <PlacementComponent boxClass={popOver? 'w320 placement show top left' : 'w320 placement top left'} 
            titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'레이어 관리'} close={closePop}>
                <PopoverContents className={'popover_contents p-0'}>
                    <div className="dflx_column gap_2">
                        <div className="accordion_block default">
                            <div className="accordion_title dflx_ac">
                                <ToggleComponent selected>
                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                </ToggleComponent>
                                <div className="fs_14 fc_white m-l-16">교차로</div>
                            </div>
                        </div>
                        <div className="accordion_block default">
                            <div className="accordion_title dflx_ac">
                                <ToggleComponent selected>
                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                </ToggleComponent>
                                <div className="fs_14 fc_grey87 m-l-16">개별차량 아이콘</div>
                                <ButtonWithComponent onClick={toggleAccord} className={accordion? 'accordion_toggle m-l-a' : 'accordion_toggle m-l-a on'}>
                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                </ButtonWithComponent>
                            </div>
                            <div className={accordion? 'accordion_contents': 'accordion_contents accordion_level2 show p-0'}>
                                <div className="accordion_contents show">
                                    <div className="p-t-10 p-b-12">
                                        <div className="dflx_ac gap_20">
                                            <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'car01'} name={'sample_car01'} 
                                            labelClass={'fs_13'} txt={'개별차량'} checked={true} />
                                            <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'car02'} name={'sample_car01'} 
                                            labelClass={'fs_13'} txt={'속도'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>     
                        <div className="accordion_block default">
                            <div className="accordion_title dflx_ac">
                                <ToggleComponent selected>
                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                </ToggleComponent>
                                <div className="fs_14 fc_grey87 m-l-16">히트맵</div>
                                <ButtonWithComponent onClick={toggleAccord} className={accordion? 'accordion_toggle m-l-a' : 'accordion_toggle m-l-a on'}>
                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                </ButtonWithComponent>
                            </div>
                            <div className={accordion? 'accordion_contents': 'accordion_contents accordion_level2 show p-0'}>
                                <div className="accordion_contents show">
                                    <div className="p-t-10 p-b-12">
                                        <div className="dflx_ac gap_20">
                                            <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'heatmap01'} name={'heatmap_checkbox'} 
                                            labelClass={'fs_13'} txt={'개별차량 궤적'} checked={true} />
                                            <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'heatmap02'} name={'heatmap_checkbox'} 
                                            labelClass={'fs_13'} txt={'세그먼트'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                          
                        <div className="accordion_block default">
                            <div className="accordion_title dflx_ac_jbet">
                                <ToggleComponent selected>
                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                </ToggleComponent>
                                <div className="m-l-16">
                                    <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                </div>
                                <div className="fs_14 fc_white m-l-8">소통정보 3D</div>
                                <ButtonWithComponent onClick={toggleAccord} className={accordion? 'accordion_toggle m-l-a' : 'accordion_toggle m-l-a on'}>
                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                </ButtonWithComponent>
                            </div>
                            <div className={accordion? 'accordion_contents': 'accordion_contents accordion_level2 show p-0'}>
                                <div className="accordion_contents show">
                                    <div className="p-t-10 p-b-12">
                                        <div className="dflx_ac gap_20">
                                            <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'comm01'} name={'info3d'} 
                                            labelClass={'fs_13'} txt={'속도'} />
                                            <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'comm02'} name={'info3d'} 
                                            labelClass={'fs_13'} txt={'교통량'} />
                                            <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'comm03'} name={'info3d'} 
                                            labelClass={'fs_13'} txt={'시간점유율'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion_block default">
                            <div className="accordion_title dflx_ac_jbet">
                                <ToggleComponent normal>
                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                </ToggleComponent>
                                <div className="m-l-16">
                                    <ImgComponent className={'w20'} src={'2d_map_fff_20.svg'} />
                                </div>
                                <div className="fs_14 fc_white m-l-8">소통정보 2D</div>
                                <ButtonWithComponent onClick={toggleAccord} className={accordion? 'accordion_toggle m-l-a' : 'accordion_toggle m-l-a on'}>
                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                </ButtonWithComponent>
                            </div>
                            <div className={accordion? 'accordion_contents': 'accordion_contents accordion_level2 show p-0'}>
                                <div className="accordion_contents show">
                                    <div className="p-t-10 p-b-12">
                                        <div className="dflx_ac gap_20">
                                            <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'comm04'} name={'info2d'} 
                                            labelClass={'fs_13'} txt={'속도'} />
                                            <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'comm05'} name={'info2d'} 
                                            labelClass={'fs_13'} txt={'교통량'} />
                                            <CheckComponent type={'radio'} checkClass={'radio_type'} checkId={'comm06'} name={'info2d'} 
                                            labelClass={'fs_13'} txt={'시간점유율'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion_block default">
                            <div className="accordion_title dflx_ac">
                                <ToggleComponent normal>
                                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                                </ToggleComponent>
                                <div className="fs_14 fc_white m-l-16">도로 네트워크</div>
                            </div>
                        </div>
                    </div>
                </PopoverContents>
            </PlacementComponent>
        </div>
    )
}

export default SmartLayerMonitoring;

