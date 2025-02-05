import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';
import ToggleComponent from '../common/ToggleComponent';


const AccordionIconComponent = ({ accordClass, accordTitle, iconDisplay, iconSrc, children, normal, level }) => {

    const [accordion, setAccordion] = useState(false);
    const toggleAccord = () => {
        setAccordion(!accordion);
    }

    return (
        <div className={accordClass}>
            <div className={'accordion_title dflx_ac'}>
                <ToggleComponent>
                    <ImgComponent className={'img_off w20 op04'} src={'layer_fff_off_20.svg'} />
                    <ImgComponent className={'img_selected w20'} src={'layer_sky_on_20.svg'} />
                </ToggleComponent>
                <div className={iconDisplay}>
                    <ImgComponent className={'m-l-16 w20 img_with'} src={iconSrc} />
                </div>
                <div class="fs_14 fc_white m-l-16">{accordTitle}</div>
                <ButtonWithComponent onClick={toggleAccord} className={accordion? 'accordion_toggle m-l-a on' : 'accordion_toggle m-l-a'}>
                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                </ButtonWithComponent>
            </div>     
            {
                normal === true 
                ? 
                <div className={accordion? 'accordion_contents show' : 'accordion_contents'}>
                    {children}
                </div>
                : null
            }
            {
                level === true 
                ? 
                <div className={accordion? 'accordion_contents accordion_level2 p-0 show' : 'accordion_contents accordion_level2 p-0'}>
                    {children}
                </div>
                : null
            }
                                     
        </div>
    );
};

export default AccordionIconComponent;
