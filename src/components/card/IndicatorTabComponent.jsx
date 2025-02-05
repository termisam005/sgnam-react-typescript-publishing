import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';



const IndicatorTabComponent = ({ IndClass, topClass, children }) => {

    const [toggleInd, setToggleInd] = useState(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    return (
        <article className={IndClass}>
            <div className={topClass}>
                <ul class="record_menu hauto">
                    <li>
                        <a class="on">Tab1</a>
                    </li>
                    <li>
                        <a>Tab2</a>
                    </li>
                    <li>
                        <a>Tab3</a>
                    </li>
                </ul>
                <p className={toggleInd? 'arr_up':'arr_up down'} onClick={clickInd}>
                  <ImgComponent className={'w20'} src={'arrow_up_sky_20.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts':'indi_conts del'}>
                {children}
            </div>
        </article>
    );
};

export default IndicatorTabComponent;