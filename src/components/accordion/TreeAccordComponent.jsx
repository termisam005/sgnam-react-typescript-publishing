import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import CheckTextComponent from '../common/CheckTextComponent';



const TreeAccordComponent = ({ children, accordClass, treeTopClass, checkClass, txt }) => {

    const [accordion, setAccordion] = useState(false);
    const toggleAccord = () => {
        setAccordion(!accordion);
    }

    return (
        <div onClick={toggleAccord} className={accordClass}>
            <div className={treeTopClass}>
                <button className={accordion? 'accordion_toggle h12 on' : 'accordion_toggle h12'}>
                    <ImgComponent className={'accordion_up w12'} src={'arrow_down_fill_fff_12.svg'} />
                    <ImgComponent className={'accordion_down w12'} src={'arrow_right_fill_fff_12.svg'} />
                </button>
                <CheckTextComponent checkClass={checkClass} text={txt}>
                </CheckTextComponent>
            </div>
            <div className={accordion? 'tree_contents p-b-4 show': 'tree_contents p-b-4'}>
                {children}                                         
            </div>
        </div>
    );
};

export default TreeAccordComponent;
