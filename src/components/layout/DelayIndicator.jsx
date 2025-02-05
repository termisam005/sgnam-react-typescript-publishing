/*
    교통상황 모니터링 지체정보
*/
import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import TabledlComponent from '../../components/card/TabledlComponent';


const DelayIndicator = ({ IndClass, IndTitle }) => {

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
                <section>
                    <div className="vert_2line">
                        <div className="exp_cont p-4 hauto">
                            <div className="dflx_as_jbet m-t-6 m-b-6">
                                <p className="fs_13_medium fc_primary">지체시간</p>
                                <p className="fs_13_medium fc_primary dflx_ae">
                                    <span>71</span>
                                    <span>초</span>
                                </p>
                            </div>
                            <div className="speed_box table bord">
                                <TabledlComponent dlClass={'table_dl'} title={'전일'} ddClass={'tar p-r-8'} ddText={'00.00 (▾ 00)'} />
                                <TabledlComponent dlClass={'table_dl'} title={'전주'} ddClass={'tar p-r-8'} ddText={'00.00 (▾ 00)'} />
                            </div>
                        </div>
                        <div className="exp_cont p-4 hauto">
                            <div className="dflx_as_jbet m-t-6 m-b-6">
                                <p className="fs_13_medium fc_primary">대기행렬</p>
                                <p className="fs_13_medium fc_primary dflx_ae">
                                    <span>398</span>
                                    <span>m</span>
                                </p>
                            </div>
                            <div className="speed_box table bord">
                                <TabledlComponent dlClass={'table_dl'} title={'전일'} ddClass={'tar p-r-8'} ddText={'00.00 (▾ 00)'} />
                                <TabledlComponent dlClass={'table_dl'} title={'전주'} ddClass={'tar p-r-8'} ddText={'00.00 (▾ 00)'} />
                            </div>
                        </div>
                    </div>              
                    <div className='indi_chart'>
                        <ImgComponent src={'speed_chart.svg'} />
                    </div>
                </section>
            </div>
        </article>
    );
};

export default DelayIndicator;