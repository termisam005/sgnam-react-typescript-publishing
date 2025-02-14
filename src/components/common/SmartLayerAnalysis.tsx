import { useState } from 'react';
import ImgComponent from './ImgComponent';
import ButtonWithComponent from './ButtonWithComponent';
import PlacementComponent from '../popup/PlacementComponent';
import PopoverContents from '../popup/PopoverContents';
import ToggleComponent from './ToggleComponent';


interface Props{
    className?: string;
}

const SmartLayerMonitoring = ({ className }:Props) => {

    const [popOver, setPopOver] = useState<boolean>(false);
    const togglePop = () => {
        setPopOver(!popOver);
    }
    const closePop = () => {
        setPopOver(false);
    }

    //accordion 이벤트
    const [accordion, setAccordion] = useState<boolean>(false);
    const toggleAccord = () => {
        setAccordion(!accordion);
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
                                <div className="fs_14 fc_grey87 m-l-16">교차로명</div>
                                <ButtonWithComponent onClick={toggleAccord} className={accordion? 'accordion_toggle m-l-a' : 'accordion_toggle m-l-a on'}>
                                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                                </ButtonWithComponent>
                            </div>
                            <div className={accordion? 'accordion_contents': 'accordion_contents accordion_level2 show p-0'}>
                                <div className="accordion_contents show">
                                    <div className="dflx_ac h36">
                                        <div className="w44 fs_13_medium">크기</div>
                                        <div className="flex1">
                                            <div className="map_control_line ">
                                                <div className="map_control_rate h14 m-b-4 w-40">
                                                    <div className="rate_block"></div>
                                                </div>
                                            </div>
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

