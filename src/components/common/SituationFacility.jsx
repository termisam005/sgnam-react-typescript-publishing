import React, { Component } from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';
import PlacementComponent from '../popup/PlacementComponent';
import CheckComponent from './CheckComponent';


const SituationFacility = ({ className }) => {
// 상황관리 시설 설정

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
    
    return (
        <div className={className}>
            <ButtonWithComponent onClick={togglePop} type={'button'} className={popOver? 
                'btn_icon icon_ffb btn_m tooltip_parents selected' : 'btn_icon icon_ffb btn_m tooltip_parents'}>
                <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                <div class="tooltip_label">시설 설정</div>
            </ButtonWithComponent>
            
            <PlacementComponent boxClass={popOver? 'w320 placement show top left' : 'w320 placement top left'} 
            titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'시설 설정'} close={closePop}>
                <div className={'popover_contents p-0'}>
                    <div className='dflx_column gap_2'>
                        <div className="accordion_block default">
                            <div className="accordion_title dflx_ac">
                                <div className="fs_14_medium fc_white">운영 상태</div>
                                <ButtonWithComponent onClick={toggleAccord} className={accordion? 'accordion_toggle m-l-a' : 'accordion_toggle m-l-a on'}>
                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                </ButtonWithComponent>
                            </div>
                            <div className={accordion? 'accordion_contents': 'accordion_contents show'}>
                                <div className='dflx_ac h32'>
                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'operateAll'} 
                                    labelClass={'fs_14 p-l-30'} txt={'전체'} />
                                </div>
                                <div className="grid_column1 p-l-28">
                                    <CheckComponent checkClass={'checkbox_type dflx_ac h32'} type={'checkbox'} checkId={'normal'} 
                                    labelClass={'fs_14 p-l-30'} txt={'정상'} />
                                    <CheckComponent checkClass={'checkbox_type dflx_ac h32'} type={'checkbox'} checkId={'obstacle'} 
                                    labelClass={'fs_14 p-l-30'} txt={'장애'} />
                                </div>
                            </div>
                        </div>
                        <div className="accordion_block default">
                            <div className="accordion_title dflx_ac">
                                <div className="fs_14_medium fc_white">교통 시설</div>
                                <ButtonWithComponent onClick={toggleAccord} className={accordion? 'accordion_toggle m-l-a' : 'accordion_toggle m-l-a on'}>
                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                </ButtonWithComponent>
                            </div>
                            <div className={accordion? 'accordion_contents': 'accordion_contents show'}>
                                <div className='dflx_ac h32'>
                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'trafficAll'} 
                                    labelClass={'fs_14 p-l-30'} txt={'전체'} />
                                </div>
                                <div className="grid_column1 p-l-28">
                                    <CheckComponent checkClass={'checkbox_type dflx_ac h32'} type={'checkbox'} checkId={'radarType'} 
                                    labelClass={'fs_14 p-l-30'} txt={'레이더식 스마트교차로'} />
                                    <CheckComponent checkClass={'checkbox_type dflx_ac h32'} type={'checkbox'} checkId={'movieType'} 
                                    labelClass={'fs_14 p-l-30'} txt={'영상식 스마트교차로'} />
                                    <CheckComponent checkClass={'checkbox_type dflx_ac h32'} type={'checkbox'} checkId={'VDS'} 
                                    labelClass={'fs_14 p-l-30'} txt={'VDS'} />
                                    <CheckComponent checkClass={'checkbox_type dflx_ac h32'} type={'checkbox'} checkId={'DSRC-RSE'} 
                                    labelClass={'fs_14 p-l-30'} txt={'DSRC-RSE'} />
                                    <CheckComponent checkClass={'checkbox_type dflx_ac h32'} type={'checkbox'} checkId={'VMS'} 
                                    labelClass={'fs_14 p-l-30'} txt={'VMS'} />
                                    <CheckComponent checkClass={'checkbox_type dflx_ac h32'} type={'checkbox'} checkId={'교통 CCTV'} 
                                    labelClass={'fs_14 p-l-30'} txt={'교통 CCTV'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PlacementComponent>
        </div>
    )
}

export default SituationFacility;

