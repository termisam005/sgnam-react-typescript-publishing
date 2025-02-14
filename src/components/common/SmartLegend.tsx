import { useState } from 'react';
import ImgComponent from './ImgComponent';
import ButtonWithComponent from './ButtonWithComponent';
import PlacementComponent from '../popup/PlacementComponent';


interface Props{
    className?: string;
}

const SmartLegend = ({ className }:Props) => {

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
                'btn_icon icon_ffb btn_m tooltip_parents lgmode selected' : 'btn_icon icon_ffb btn_m tooltip_parents lgmode'}>
                <ImgComponent className={'img w24 op04'} src={'legend_fff_24.svg'} />
                <ImgComponent className={'img_on w24 '} src={'legend_sky_24.svg'} />
                <div className="tooltip_label">레이어</div>
            </ButtonWithComponent>
            <PlacementComponent boxClass={popOver? 'w320 placement show top left' : 'w320 placement top left'} 
            titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'범례'} close={closePop}>
                <div className={'popover_contents'}>
                    <div className="fs_13_medium fc_default m-b-12">교차로</div>
                    <div className="grid_column2 gap_row8 ">
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span className="circle_grey28">
                                <ImgComponent className={'img w20'} src={'smart_crossroad_20.svg'} />
                            </span>
                            <span className="fs_12">스마트</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_toggle_icon legend'}>
                            <span className="circle_grey28 popover">
                                <ImgComponent className={'img w20'} src={'crossroad_fill_20.svg'} />
                            </span>
                            <span className="fs_12">일반신호</span>
                        </ButtonWithComponent>                       
                    </div>
                    <div className="fs_13_medium fc_default m-t-24 m-b-12">대기행렬 최대 길이</div>
                    <ImgComponent className={'w48'} src={'queue_length_48_wh.svg'} />
                    <section>
                        <div className="m-t-24 m-b-12 ">
                            <div className="fs_13_medium fc_white">지표별 범례</div>
                        </div>
                        <div className="dflx_ac_jbet m-b-10">
                            <p className='fs_12 fc_white'>교통량</p>
                            <p className='fs_11 fc_white'>대</p>
                        </div>
                        <ImgComponent className={'img smartlegend_indicator'} src={'smartlegend_indicator.png'} />
                    </section>                   
                </div>
            </PlacementComponent>
        </div>
    )
}

export default SmartLegend;

