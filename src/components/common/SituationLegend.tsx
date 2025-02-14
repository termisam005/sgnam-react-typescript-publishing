import { useState } from 'react';
import ImgComponent from './ImgComponent';
import ButtonWithComponent from './ButtonWithComponent';
import PlacementComponent from '../popup/PlacementComponent';


interface Props{
    className?: string;
}

const SituationLegend = ({ className }:Props) => {
// 상황관리 범례

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
                'btn_icon icon_ffb btn_m tooltip_parents selected' : 'btn_icon icon_ffb btn_m tooltip_parents'}>
                <ImgComponent className={'img w24 op04'} src={'legend_fff_24.svg'} />
                <ImgComponent className={'img_on w24'} src={'legend_sky_24.svg'} />
                <div className="tooltip_label">범례</div>
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
                            <span className="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'vms_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'vms_sky_20.svg'} />
                            </span>
                            <span className="fs_12">VMS</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span className="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'anpr_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'anpr_sky_20.svg'} />
                            </span>
                            <span className="fs_12 tal lh_16">레이더식 스마트교차로</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span className="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'cctv_fff_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'cctv_sky_20.svg'} />
                            </span>
                            <span className="fs_12">교통 CCTV</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span className="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'vds_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'vds_sky_20.svg'} />
                            </span>
                            <span className="fs_12">영상식 스마트교차로</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span className="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'dsrc_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'dsrc_sky_20.svg'} />
                            </span>
                            <span className="fs_12">DSRC</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span className="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'radar_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'radar_sky_20.svg'} />
                            </span>
                            <span className="fs_12">VDS</span>
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
                        <div className="dflx_ac_jbet m-t-24 m-b-12 ">
                            <div className="fs_13_medium fc_white">소통정보(시군도)</div>
                            <div className="fs_12 fc_grey60">(단위 : km/h)</div>
                        </div>
                        <div className="grid_column3">
                            <div>
                                <div className="dust_color02 h12"></div>
                                <p className="tac fs_12 fc_white m-t-4">
                                    <span className="dpblock lh_18">원활</span>
                                    <span>26이상</span>
                                </p>
                            </div>
                            <div>
                                <div className="dust_color03 h12"></div>
                                <p className="tac fs_12 fc_white m-t-4">
                                    <span className="dpblock lh_18">서행</span>
                                    <span>16 이상</span>
                                </p>
                            </div>
                            <div>
                                <div className="dust_color04 h12"></div>
                                <p className="tac fs_12 fc_white m-t-4">
                                    <span className="dpblock lh_18">정체</span>
                                    <span>15 이하</span>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </PlacementComponent>
        </div>
    )
}

export default SituationLegend;

