import React, { Component } from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';
import PlacementComponent from '../popup/PlacementComponent';


const LayerContainer = ({ className }) => {

    const [popOver, setPopOver] = useState(false);
    const togglePop = () => {
        setPopOver(!popOver);
    }
    const closePop = () => {
        setPopOver(false);
    }
    
    return (
        <div className={className}>
            <ButtonWithComponent onClick={togglePop} type={'button'} className={popOver? 
                'btn_icon icon_ffb btn_m tooltip_parents lgmode selected' : 'btn_icon icon_ffb btn_m tooltip_parents lgmode'}>
                <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                <div class="tooltip_label">레이어</div>
            </ButtonWithComponent>
            <PlacementComponent boxClass={popOver? 'w320 placement show top left' : 'w320 placement top left'} 
            titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'범례'} close={closePop}>
                <div className={'popover_contents'}>
                    <div className="fs_13_medium fc_default m-b-12">이벤트</div>
                    <div className="grid_column2 gap_row10">
                        <div className="dflx_ac col_gap8">
                            <ImgComponent className={'w28 img_dark'} src={'legend_car_accident_28.svg'} />
                            <ImgComponent className={'w28 img_light'} src={'legend_car_accident_28_light.svg'} />
                            <span className="fs_12 fc_default">사고</span>
                        </div>
                        <div className="dflx_ac col_gap8">
                            <ImgComponent className={'w28 img_dark'} src={'legend_weather_28.svg'} />
                            <ImgComponent className={'w28 img_light'} src={'legend_weather_28_light.svg'} />
                            <span className="fs_12 fc_default">기상</span>
                        </div>
                        <div className="dflx_ac col_gap8">
                            <ImgComponent className={'w28 img_dark'} src={'legend_construction_28.svg'} />
                            <ImgComponent className={'w28 img_light'} src={'legend_construction_28_light.svg'} />
                            <span className="fs_12 fc_default">공사</span>
                        </div>
                        <div className="dflx_ac col_gap8">
                            <ImgComponent className={'w28 img_dark'} src={'legend_event_28.svg'} />
                            <ImgComponent className={'w28 img_light'} src={'legend_event_28_light.svg'} />
                            <span className="fs_12 fc_default">행사</span>
                        </div>
                        <div className="dflx_ac col_gap8">
                            <ImgComponent className={'w28 img_dark'} src={'legend_etc_28.svg'} />
                            <ImgComponent className={'w28 img_light'} src={'legend_etc_28_light.svg'} />
                            <span className="fs_12 fc_default">기타</span>
                        </div>
                    </div>
                    <div className="fs_13_medium fc_default m-t-24 m-b-12">교통 시설</div>
                    <div className="grid_column2 gap_row8 ">
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span class="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'vms_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'vms_sky_20.svg'} />
                            </span>
                            <span class="fs_12">VMS</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span class="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'vds_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'vds_sky_20.svg'} />
                            </span>
                            <span class="fs_12">번호인식검지기</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span class="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'cctv_fff_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'cctv_sky_20.svg'} />
                            </span>
                            <span class="fs_12">교통 CCTV</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span class="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'anpr_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'anpr_sky_20.svg'} />
                            </span>
                            <span class="fs_12">영상검지기</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span class="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'dsrc_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'dsrc_sky_20.svg'} />
                            </span>
                            <span class="fs_12">DSRC</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span class="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'edge_box_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'edge_box_sky_20.svg'} />
                            </span>
                            <span class="fs_12">엣지박스</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span class="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'radar_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'radar_sky_20.svg'} />
                            </span>
                            <span class="fs_12">레이더검지기</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span class="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'smart_cctv_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'smart_cctv_sky_20.svg'} />
                            </span>
                            <span class="fs_12">스마트CCTV</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span class="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'pims_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'pims_sky_20.svg'} />
                            </span>
                            <span class="fs_12">PIMS</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span class="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'oldcar_monitoring_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'oldcar_monitoring_sky_20.svg'} />
                            </span>
                            <span class="fs_12">노후차량단속카메라</span>
                        </ButtonWithComponent>
                    </div>
                    <div className="fs_13_medium fc_default m-t-24 m-b-12">운영 상태</div>
                    <div className="grid_column2 ">
                        <div className="dflx_ac col_gap8">
                            <ImgComponent className={'w28'} src={'cctv_normal_28.svg'} />
                            <span className="fs_12 fc_default">정상</span>
                        </div>         
                        <div className="dflx_ac col_gap8">
                            <ImgComponent className={'w28'} src={'cctv_obstacle_28.svg'} />
                            <span className="fs_12 fc_default">장애</span>
                        </div> 
                    </div>
                    <section>
                        <div class="dflx_ac_jbet m-t-24 m-b-12 ">
                            <div class="fs_13_medium fc_white">소통정보(시군도)</div>
                            <div class="fs_12 fc_grey60">(단위 : km/h)</div>
                        </div>
                        <div class="grid_column3">
                            <div>
                                <div class="dust_color02 h12"></div>
                                <p class="tac fs_12 fc_white m-t-4">
                                    <span class="dpblock lh_18">원활</span>
                                    <span>26이상</span>
                                </p>
                            </div>
                            <div>
                                <div class="dust_color03 h12"></div>
                                <p class="tac fs_12 fc_white m-t-4">
                                    <span class="dpblock lh_18">서행</span>
                                    <span>16 이상</span>
                                </p>
                            </div>
                            <div>
                                <div class="dust_color04 h12"></div>
                                <p class="tac fs_12 fc_white m-t-4">
                                    <span class="dpblock lh_18">정체</span>
                                    <span>15 이하</span>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="dflx_ac_jbet m-t-24 m-b-12 ">
                            <div class="fs_13_medium fc_white">소통정보(고속도로)</div>
                            <div class="fs_12 fc_grey60">(단위 : km/h)</div>
                        </div>
                        <div class="grid_column3">
                            <div>
                                <div class="dust_color02 h12"></div>
                                <p class="tac fs_12 fc_white m-t-4">
                                    <span class="dpblock lh_18">원활</span>
                                    <span>81 이상</span>
                                </p>
                            </div>
                            <div>
                                <div class="dust_color03 h12"></div>
                                <p class="tac fs_12 fc_white m-t-4">
                                    <span class="dpblock lh_18">서행</span>
                                    <span>41 이상</span>
                                </p>
                            </div>
                            <div>
                                <div class="dust_color04 h12"></div>
                                <p class="tac fs_12 fc_white m-t-4">
                                    <span class="dpblock lh_18">정체</span>
                                    <span>40.9 이하</span>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="dflx_ac_jbet m-t-25 m-b-12 ">
                            <div class="fs_13 fc_white">교차로 교통정보</div>
                            <div class="fs_12 fc_grey60">(단위 : level)</div>
                        </div>
                        <div class="grid_column6">
                            <div>
                                <div class="dust_color02 h12"></div>
                                <p class="tac fs_12 fc_white m-t-4">
                                    <span class="dpblock lh_18">A</span>
                                </p>
                            </div>
                            <div>
                                <div class="dust_color02_1 h12"></div>
                                <p class="tac fs_12 fc_white m-t-4">
                                    <span class="dpblock lh_18">B</span>
                                </p>
                            </div>
                            <div>
                                <div class="dust_color03 h12"></div>
                                <p class="tac fs_12 fc_white m-t-4">
                                    <span class="dpblock lh_18">C</span>
                                </p>
                            </div>
                            <div>
                                <div class="dust_color03_1 h12"></div>
                                <p class="tac fs_12 fc_white m-t-4">
                                    <span class="dpblock lh_18">D</span>
                                </p>
                            </div>
                            <div>
                                <div class="dust_color03_2 h12"></div>
                                <p class="tac fs_12 fc_white m-t-4">
                                    <span class="dpblock lh_18">E</span>
                                </p>
                            </div>
                            <div>
                                <div class="dust_color04 h12"></div>
                                <p class="tac fs_12 fc_white m-t-4">
                                    <span class="dpblock lh_18">F</span>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </PlacementComponent>
        </div>
    )
}

export default LayerContainer;

