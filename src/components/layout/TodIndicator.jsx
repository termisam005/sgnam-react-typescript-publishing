import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import TodCont1 from '../common/TodCont1';
import TodCont2 from '../common/TodCont2';


const TodIndicator = ({ IndClass, IndTitle }) => {

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
                <TodCont1 contClass={'tod_cont'} />
                <TodCont2 contClass={'tod_cont m-t-20'} />
            </div>
        </article>
    );
};

export default TodIndicator;