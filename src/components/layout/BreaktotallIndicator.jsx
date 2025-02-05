import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import BottInfo from '../common/BottInfo';


const BreaktotallIndicator = ({ IndClass, IndTitle }) => {

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
                <div className="grid_column1 row_gap16">
                    <BottInfo size={'small with_grid1'} contClass={'smart_cont bott'}>
                        <p className="sm_txt">
                            금일 돌발 건수
                        </p>
                        <p className="sm_result">
                            <span>1,234</span>
                            <span className="mini">건</span>
                        </p>
                        <p className="percent_txt up">
                            <span className="mini">전일 대비</span>
                            <span>2.5</span>
                            <span>%</span>
                            <span className="ic ic_up_red"></span>
                        </p>
                    </BottInfo>
                    <div className='m-b-8'>
                        <h5 className='fs_14_bold'>돌발 유형별 현황</h5>
                    </div>
                    <div className='indi_chart'>
                        <ImgComponent src={'break_type_chart.svg'} />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BreaktotallIndicator;