import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import DiagonComponent from '../common/DiagonComponent';


const CommuniIndicator = ({ IndClass, IndTitle }) => {

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
                <section className='communi_speed'>
                    <div className='communi_top'>
                        <h5>통행속도</h5>
                        <span className='indi_unit'>(km/h)</span>
                    </div>
                    <div className='vert_2line'>
                        <div className='speed_box'>
                            <ImgComponent className={'img_chart'} src={'pie_d_half.svg'} />
                        </div>
                        <div className='speed_box table'>
                            <dl className='table_dl'>
                                <dt className='tal'>전일</dt>
                                <dd className='tar'>00.00 (-00)</dd>
                            </dl>
                            <dl className='table_dl'>
                                <dt className='tal'>전일</dt>
                                <dd className='tar'>00.00 (-00)</dd>
                            </dl>
                        </div>
                    </div>
                    <div className='digon_wrap'>
                        <DiagonComponent contClass={'diagon_cont sm'} tltClass={'diagon_tlt'} tlt={'소통상황'} 
                        resultClass={'diagon_result'} result={'원활'} />
                        <DiagonComponent contClass={'diagon_cont sm'} tltClass={'diagon_tlt'} tlt={'시설물상태'} 
                        resultClass={'diagon_result'} result={'정상'} />
                        <DiagonComponent contClass={'diagon_cont sm'} tltClass={'diagon_tlt'} tlt={'주차현황'} 
                        resultClass={'diagon_result'} result={'원활'} />
                        <DiagonComponent contClass={'diagon_cont sm'} tltClass={'diagon_tlt'} tlt={'긴급출동'} 
                        resultClass={'diagon_result'} result={'10'} unit={'건'} />
                    </div>
                </section>
                <section className='communi_speed'>
                    <div className='communi_top'>
                        <h5>교통량 상태</h5>
                    </div>
                    <div className='vert_2line'>
                        <div className='speed_box dflx_ac_jcent'>
                            <h1 className='speed_result'>
                                <span>2,780</span>
                                <span className='unit'>대</span>
                            </h1>
                        </div>
                        <div className='speed_box table'>
                            <dl className='table_dl'>
                                <dt className='tal'>전일</dt>
                                <dd className='tar'>00.00 (-00)</dd>
                            </dl>
                            <dl className='table_dl'>
                                <dt className='tal'>전일</dt>
                                <dd className='tar'>00.00 (-00)</dd>
                            </dl>
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

export default CommuniIndicator;