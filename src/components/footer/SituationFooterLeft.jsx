import React from 'react';
import SituationFacility from '../common/SituationFacility';
import SituationLegend from '../common/SituationLegend';


const SituationFooterLeft = () => {
//상황관리 FooterLeft 시설설정, 범례

    return (
        <article className='footer_left col_gap8'>
            <div className="tab_line">
                <SituationFacility className={'popover_box'} />
                <SituationLegend className={'popover_box'} />
            </div>
        </article>
    );
};

export default SituationFooterLeft;