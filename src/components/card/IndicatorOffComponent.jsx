import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';



const IndicatorOffComponent = ({ IndClass, topClass, IndTitle, children }) => {

    const [toggleInd, setToggleInd] = useState(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    return (
        <article className={IndClass}>
            <div className={topClass} onClick={clickInd}>
                <h1>{IndTitle}</h1>
                <p className={toggleInd? 'arr_up':'arr_up down'}>
                  <ImgComponent className={'w20'} src={'arrow_up_sky_20.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts':'indi_conts del'}>
                {children}
            </div>
        </article>
    );
};

export default IndicatorOffComponent;