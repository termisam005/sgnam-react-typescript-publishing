/*
    대시보드 아코디언 박스 기본형
 */

import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';


const DefaultInidicator = ({ IndClass, IndTitle, children }) => {

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    return (
        <article className={IndClass}>
            <div class="indi_top" onClick={clickInd}>
                <h1>{IndTitle}</h1>
                <p className={toggleInd? 'arr_up down':'arr_up'}>
                    <ImgComponent src={'arrow_up16.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts del':'indi_conts'}>
                {children}
            </div>
        </article>
    );
};

export default DefaultInidicator;