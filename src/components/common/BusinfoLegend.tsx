import { useState } from 'react';
import ImgComponent from './ImgComponent';
import ButtonWithComponent from './ButtonWithComponent';
import PlacementComponent from '../popup/PlacementComponent';


interface Props{
    className?: string;
}

const BusinfoLegend = ({ className }:Props) => {
// 버스정보 범례

    const [popOver, setPopOver] = useState<boolean>(false);
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
                    <div className="fs_13_medium fc_default m-b-12">버스</div>
                    <div className="dflx_as col_gap20">
                        <p className={'road_bus straight'}>직행</p>
                        <p className={'road_bus seat'}>좌석</p>
                        <p className={'road_bus normal'}>일반</p>
                        <p className={'road_bus lowseat'}>저상</p>
                        <p className={'road_bus village'}>마을</p>
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
                    <div className="fs_13_medium fc_default m-t-24 m-b-12">교통 시설</div>
                    <div className="grid_column2 gap_row8 ">
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span className="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'bus_stop_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'bus_stop_20.svg'} />
                            </span>
                            <span className="fs_12">정류장</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span className="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'bit_20.svg'} />
                                <ImgComponent className={'img_on w20'} src={'bit_sky_20.svg'} />
                            </span>
                            <span className="fs_12 tal lh_16">BIT</span>
                        </ButtonWithComponent>
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

export default BusinfoLegend;

