import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import CheckComponent from '../common/CheckComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';

const AccordionCheckSingle = ({ accordClass, accordTitle, checkId, checked, disabled}) => {

    //accordion 이벤트
    const [accordion, setAccordion] = useState(false);
    const toggleAccord = () => {
        setAccordion(!accordion);
    }

    return (
        <div className={accordClass}>
            <div className={accordion? 'accordion_title dflx_ac_jbet on': 'accordion_title dflx_ac_jbet'}>
                <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={checkId} labelClass={'fs_14 p-l-30'} txt={accordTitle}
                disabled={disabled}  
                checked={checked}
                onChange={toggleAccord} />
            </div>
        </div>
    );
};

export default AccordionCheckSingle;
