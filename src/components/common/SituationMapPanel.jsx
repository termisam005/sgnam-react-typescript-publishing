import React, { Component } from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';


const SituationMapPanel = ({ className }) => {
// 상황관리 FooterRight 지도버튼 레이어

    const [popOver, setPopOver] = useState(false);
    const togglePop = () => {
        setPopOver(!popOver);
    }
    
    return (
        <div className={className}>
            <ButtonWithComponent onClick={togglePop} type={'button'} className={popOver? 
                'btn_icon btn_m selected lgmode' : 'btn_icon btn_m lgmode'}>
                <ImgComponent className={'img w24 op04'} src={'filter_fff_24.svg'} />
                <ImgComponent className={'img_on w24'} src={'filter_sky_24.svg'} />
                <span className='word'>지도</span>
            </ButtonWithComponent>

            <div className={popOver? 'placement show top left_center' : 'placement top left_center'}>
                <div className={'connect_line vertical'}>
                    <div className='con_vertical_in row_gap16 p-8'>
                        <ButtonWithComponent type={'button'} className={'btn_icon p-0 dflx_dcol_ac'}>
                            <span className='dflx_ac_jcent w24 h24'>
                                <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                            </span>
                            <span class="fs_10 word">일반</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_icon p-0 dflx_dcol_ac'}>
                            <span className='dflx_ac_jcent w24 h24'>
                                <ImgComponent className="img w24 op04" src={'satellite_fill_fff_24.svg'} />
                                <ImgComponent className="img_on w24 op04" src={'satellite_fill_sky_24.svg'} />
                            </span>
                            <span class="fs_10 word">위성</span>
                        </ButtonWithComponent>
                        <ButtonWithComponent type={'button'} className={'btn_icon p-0 dflx_dcol_ac'}>
                            <span className='dflx_ac_jcent w24 h24'>
                                <ImgComponent className="img w24 op04" src={'layer_fff_24.svg'} />
                                <ImgComponent className="img_on w24 op04" src={'layer_sky_24.svg'} />
                            </span>
                            <span class="fs_10 word">지형</span>
                        </ButtonWithComponent>
                        <div class="dflx_dcol_ac m-t-4">
                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb mini w28 h28'}>
                                <ImgComponent className="w20" src={'plus_line_fff_24.svg'} />
                            </ButtonWithComponent>
                            <div className='scaler_cont'>
                                <div className='scaler_bg'>
                                    <div className='scale_in' style={{height:'50%'}}>
                                        <div className='sc_bar_cont'>
                                            <p className='scale_bar'></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ButtonWithComponent type={'button'} className={'btn_icon icon_ffb mini w28 h28'}>
                                <ImgComponent className="w20" src={'minus_fff_24.svg'} />
                            </ButtonWithComponent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SituationMapPanel;

