import { useState } from 'react';
import ImgComponent from './ImgComponent';
import ButtonWithComponent from './ButtonWithComponent';
import PlacementComponent from '../popup/PlacementComponent';
import PopoverContents from '../popup/PopoverContents';


interface Props{
    className?: string;
}

const ParkingLegned = ({ className }:Props) => {

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
                <div className="tooltip_label">범례</div>
            </ButtonWithComponent>
            <PlacementComponent boxClass={popOver? 'w320 placement show top left' : 'w320 placement top left'} 
            titleBgClass={'popover_title'} titleClass={'fs_16_medium'} title={'범례'} close={closePop}>
                <PopoverContents className={'popover_contents'}>
                    <div className="fs_13_medium fc_default m-b-12">주차 혼잡도</div>
                    <div className="dflx_jbet">
                        <div>
                            <div className='parking_congestion green'>
                                <ImgComponent className={''} src={'park_20.svg'} />
                            </div>
                            <p className='parking_txt'>여유</p>
                            <p className='parking_txt'>0~35%</p>
                        </div>
                        <div>
                            <div className='parking_congestion yellow'>
                                <ImgComponent className={''} src={'park_20.svg'} />
                            </div>
                            <p className='parking_txt'>보통</p>
                            <p className='parking_txt'>36~70%</p>
                        </div>
                        <div>
                            <div className='parking_congestion red'>
                                <ImgComponent className={''} src={'park_20.svg'} />
                            </div>
                            <p className='parking_txt'>혼잡</p>
                            <p className='parking_txt'>71%</p>
                        </div>
                        <div>
                            <div className='parking_congestion gray'>
                                <ImgComponent className={''} src={'park_20.svg'} />
                            </div>
                            <p className='parking_txt'>정보없음</p>
                            <p className='parking_txt'>-</p>
                        </div>
                    </div>
                </PopoverContents>
            </PlacementComponent>
        </div>
    )
}

export default ParkingLegned;

