import React from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';
import LayerContainer from '../common/LayerContainer';


const FooterLeft = () => {

    return (
        <article className='footer_left col_gap8'>
            <div className="tab_line">
                <LayerContainer className={"popover_box"} />
                <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents lgmode'}>
                    <ImgComponent className={'img w24 op04'} src={'legend_fff_24.svg'} />
                    <ImgComponent className={'img_on w24'} src={'legend_sky_24.svg'} />
                    <div class="tooltip_label">범례</div>
                </ButtonWithComponent>
                <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents lgmode'}>
                    <ImgComponent className={'img w24 op04'} src={'linked_group_fill_fff_24.svg'} />
                    <ImgComponent className={'img_on w24'} src={'linked_group_fill_sky_24.svg'} />
                    <div class="tooltip_label">연동그룹</div>
                </ButtonWithComponent>
            </div>
            <div class="connect_line h40">
                <ButtonWithComponent className={'btn_icon btn_m selected lgmode'}>
                    <ImgComponent className={'img w24 op04'} src={'map_fill_fff_24.svg'} />
                    <ImgComponent className={'img_on w24'} src={'map_fill_sky_24.svg'} />
                    <span class="word">소통정보</span>
                </ButtonWithComponent>
                <ButtonWithComponent className={'btn_icon btn_m lgmode'}>
                    <ImgComponent className={'img w24 op04'} src={'machine_20.svg'} />
                    <ImgComponent className={'img_on w24'} src={'machine_sky_20.svg'} />
                    <span class="word">시설물</span>
                </ButtonWithComponent>
                <ButtonWithComponent className={'btn_icon btn_m lgmode'}>
                    <ImgComponent className={'img w24 op04'} src={'analysis_fill_fff_24.svg'} />
                    <ImgComponent className={'img_on w24'} src={'analysis_fill_sky_24.svg'} />
                    <span class="word">현황</span>
                </ButtonWithComponent>
            </div>
        </article>
    );
};

export default FooterLeft;