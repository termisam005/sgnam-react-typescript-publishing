import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import DiagonComponent from '../common/DiagonComponent';


const BreakIndicator = ({ IndClass, IndTitle }) => {

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    const [menuTab, setMenuTab] = useState(1);
    const tabMenu = (index) => {
        setMenuTab(index);
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
                <ul className='record_menu hauto'>
                    <li>
                        <a className={menuTab === 1? "on" : ""} onClick={() => tabMenu(1)}>차트</a>
                    </li>
                    <li>
                        <a className={menuTab === 2? "on" : ""} onClick={() => tabMenu(2)}>표</a>
                    </li>
                </ul>
                <section className='tmbox p-0'>
                    <ImgComponent className={'w-100'} src={'pie_break.svg'} />
                </section>
                <div className='digon_wrap'>
                    <DiagonComponent contClass={'diagon_cont sm'} tltClass={'diagon_tlt'} tlt={'처리'} 
                    resultClass={'diagon_result'} result={'100'} unit={'건'}/>
                    <DiagonComponent contClass={'diagon_cont sm'} tltClass={'diagon_tlt'} tlt={'미처리'} 
                    resultClass={'diagon_result'} result={'225'} unit={'건'} />
                </div>
            </div>
        </article>
    );
};

export default BreakIndicator;