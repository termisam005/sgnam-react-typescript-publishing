import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import CheckTextComponent from '../common/CheckTextComponent';



const TreeComponent = ({ children, accordClass, treeTopClass, checkClass, txt }) => {

    const [accordion, setAccordion] = useState(false);
    const toggleAccord = () => {
        setAccordion(!accordion);
    }

    return (
        <div onClick={toggleAccord} className={accordClass}>
            <div className={treeTopClass}>
                <CheckTextComponent checkClass={checkClass} text={txt}>
                    <ImgComponent className={'img_off w20'} src={'checkbox_line_20.svg'} />
                    <ImgComponent className={'img_selected w20'} src={'checkbox_checked_minus_20.svg'} />
                </CheckTextComponent>
            </div>
            <div className={accordion? 'tree_contents p-b-4 show': 'tree_contents p-b-4'}>
                {children}                                         
            </div>
        </div>
    );
};

export default TreeComponent;
