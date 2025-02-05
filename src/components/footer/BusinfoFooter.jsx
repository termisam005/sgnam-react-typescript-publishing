import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';
import BusinfoLegend from '../common/BusinfoLegend';
import DistanceComponent from '../map/DistanceComponent';


const BusinfoFooter = () => {
//버스정보 푸터

    const [popOver, setPopOver] = useState(false);
    const togglePop = () => {
        setPopOver(!popOver);
    }

    return (
        <footer>
            <div className='footer_in'>
                <article className='footer_left col_gap8'>
                    <div className="tab_line">
                        {/* <ButtonWithComponent onClick={togglePop} type={'button'} 
                        className={popOver? 'btn_icon icon_ffb btn_m tooltip_parents selected' : 'btn_icon icon_ffb btn_m tooltip_parents'}>
                            <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                            <ImgComponent className={'img_on w24 '} src={'layer_sky_24.svg'} />
                            <div class="tooltip_label">시설 설정</div>
                        </ButtonWithComponent> */}
                        <BusinfoLegend className={'popover_box'} />
                    </div>
                </article>
                <article className='footer_right col_gap8'>
                    <div className="tab_line">
                        {/* <DistanceComponent distClass={'control_dist'} distance={'5km'} /> */}
                    </div>
                </article>
            </div>
        </footer>
    );
};

export default BusinfoFooter;