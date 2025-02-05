import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import BottInfo from '../common/BottInfo';


const TrafficStIndicator = ({ IndClass, IndTitle }) => {

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
                <div className="dflx col_gap4">
                    <BottInfo size={'small'} labelColor={'label_color02'} labelWord={'원활'} datetime={'00:00'} contClass={'smart_cont bott'}>
                        <p className="sm_txt">
                            전체 교통량
                        </p>
                        <p className="sm_result">
                            <span>1,450,100</span>
                            <span className="mini">대</span>
                        </p>
                        <p className="percent_txt down">
                            <span className="mini">전주 대비</span>
                            <span>0.0</span>
                            <span>%</span>
                            <span className="ic ic_up"></span>
                        </p>
                    </BottInfo>
                    <BottInfo size={'small'} labelColor={'dust_color03'} labelWord={'서행'} datetime={'00:00'} contClass={'smart_cont bott'}>
                        <p className="sm_txt">
                            (평균) 서비스 수준
                        </p>
                        <p className="sm_result">
                            <span>A</span>
                        </p>
                        <p className="percent_txt down">
                            <span className="mini">전주 대비</span>
                            <span>0.0</span>
                            <span>%</span>
                            <span className="ic ic_down"></span>
                        </p>
                    </BottInfo>
                </div>
            </div>
        </article>
    );
};

export default TrafficStIndicator;