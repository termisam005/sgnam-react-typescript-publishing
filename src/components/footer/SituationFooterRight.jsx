import React from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';
import DistanceComponent from '../map/DistanceComponent';
import SituationMapPanel from '../common/SituationMapPanel';


const SituationFooterRight = () => {
//상황관리 FooterRight

    return (
        <article className='footer_right col_gap8'>
            <div className="tab_line">
                <DistanceComponent distClass={'control_dist'} distance={'5km'} />
                <div class="connect_line h40">
                    <ButtonWithComponent className={'btn_icon btn_m lgmode'}>
                        <ImgComponent className={'img w24 op04'} src={'map_fill_fff_24.svg'} />
                        <ImgComponent className={'img_on w24'} src={'map_fill_sky_24.svg'} />
                        <span class="word">소통정보</span>
                    </ButtonWithComponent>

                    <SituationMapPanel className={'popover_box'} />
                    {/* 지도버튼 레이어 */}

                    <ButtonWithComponent className={'btn_icon btn_m lgmode'}>
                        <ImgComponent className={'img w24 op04'} src={'machine_20.svg'} />
                        <ImgComponent className={'img_on w24'} src={'machine_sky_20.svg'} />
                        <span class="word">시설물</span>
                    </ButtonWithComponent>
                    <ButtonWithComponent className={'btn_icon btn_m lgmode'}>
                        <ImgComponent className={'img w24 op04'} src={'icon_signal_24.svg'} />
                        <ImgComponent className={'img_on w24'} src={'icon_signal_sky_24.svg'} />
                        <span class="word">현시</span>
                    </ButtonWithComponent>
                    <ButtonWithComponent className={'btn_icon btn_m lgmode'}>
                        <ImgComponent className={'img w24 op04'} src={'setting_fill_fff_24.svg'} />
                        <ImgComponent className={'img_on w24'} src={'setting_fill_sky_24.svg'} />
                        <span class="word">설정</span>
                    </ButtonWithComponent>
                </div>
            </div>
        </article>
    );
};

export default SituationFooterRight;