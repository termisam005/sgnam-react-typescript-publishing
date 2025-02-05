import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonComponent from '../common/ButtonComponent';
import WeatherSign from '../card/WeatherSign';
import WeatherBox from '../card/WeatherBox';
import DustcontComponent from '../card/DustcontComponent';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const WeatherIndicator = ({ IndClass, IndTitle }) => {
//기상 정보

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    //오늘 탭
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

                <div className='dflx_ac_jbet m-b-8'>
                    <div className="tab_line">
                        <ButtonComponent className={menuTab === 1? "btn_line1 btn_xs selected" : "btn_line1 btn_xs"} onClick={() => tabMenu(1)} 
                        txt={'오늘'} />
                        <ButtonComponent className={menuTab === 2? "btn_line1 btn_xs selected" : "btn_line1 btn_xs"} onClick={() => tabMenu(2)}
                        txt={'내일'} />
                    </div>
                    <section className='swiper_wrap_mini'>
                        <Swiper className="swiper_mini" navigation={true} modules={[Navigation]} slidesPerView={1} >
                            <SwiperSlide>분당구</SwiperSlide>
                            <SwiperSlide>팔달구</SwiperSlide>
                            <SwiperSlide>강남구</SwiperSlide>
                            <SwiperSlide>구로구</SwiperSlide>
                        </Swiper>
                    </section>
                </div>

                <div className={menuTab === 1? "wtcont_wrap" : "wtcont_wrap dpnone"}>
                    <div className="exp_weather col_gap4">
                        <div className='weather_sign_wrap'>
                            <WeatherSign weatherClass={'weather_sign sgnam only'} markClass={'weath_mark40 sun'} flexClass={'dflx_dcol_ac'}
                            resultClass={'dflx_ac fs_16_bold fc_white col_gap4'} temper={'-12.3'} unitClass={'unit fs_11'} unit={'℃'} 
                            textClass={'fs_11 m-t-4'} text={'맑음'} />
                        </div>
                        <WeatherBox boxClass={'weather_box sgnam'} weathClass={'weath_dl'} direction={'서북서'} speed={'2'} 
                        humidity={'82'} precipitation={'50'} />
                    </div>
                    <div className="dflx_ac col_gap4">
                        <DustcontComponent contClass={'dust_cont'} recordClass={'weath_record m-b-4'} record={'초 미세먼지'} 
                        resultClass={'dflx_ac fc_white'} countClass={'fc_green_normal fs_18_bold m-r-4'} count={'24'} 
                        unitClass={'unit fs_12 op06'} unit={'㎍/㎥'} />
                        <DustcontComponent contClass={'dust_cont'} recordClass={'weath_record m-b-4'} record={'미세먼지'} 
                        resultClass={'dflx_ac fc_white'} countClass={'fc_yellow_normal fs_18_bold m-r-4'} count={'135'} 
                        unitClass={'unit fs_12 op06'} unit={'㎍/㎥'} />
                    </div>
                </div>

                <div className={menuTab === 2? "wtcont_wrap" : "wtcont_wrap dpnone"}>
                    <div className="exp_weather col_gap4">
                        <div className='weather_sign_wrap'>
                            <WeatherSign weatherClass={'weather_sign sgnam'} when={'오전'} markClass={'weath_mark40 sun'} flexClass={'dflx_dcol_ac'}
                            resultClass={'dflx_ac fs_16_bold fc_white col_gap4'} temper={'-12.3'} unitClass={'unit fs_11'} unit={'℃'} 
                            textClass={'fs_11 m-t-4'} text={'맑음'} />
                            <WeatherSign weatherClass={'weather_sign sgnam'}  when={'오후'} markClass={'weath_mark40 sun_night'} flexClass={'dflx_dcol_ac'}
                            resultClass={'dflx_ac fs_16_bold fc_white col_gap4'} temper={'-12.3'} unitClass={'unit fs_11'} unit={'℃'} 
                            textClass={'fs_11 m-t-4'} text={'맑음'} />
                        </div>
                        <WeatherBox boxClass={'weather_box sgnam'} weathClass={'weath_dl'} direction={'서북서'} speed={'2'} 
                        humidity={'82'} precipitation={'50'} />
                    </div>
                    <div className="dflx_ac col_gap4">
                        <DustcontComponent contClass={'dust_cont'} recordClass={'weath_record m-b-4'} record={'초 미세먼지'} 
                        resultClass={'dflx_ac fc_white'} countClass={'fc_green_normal fs_18_bold m-r-4'} count={'24'} 
                        unitClass={'unit fs_12 op06'} unit={'㎍/㎥'} />
                        <DustcontComponent contClass={'dust_cont'} recordClass={'weath_record m-b-4'} record={'미세먼지'} 
                        resultClass={'dflx_ac fc_white'} countClass={'fc_yellow_normal fs_18_bold m-r-4'} count={'135'} 
                        unitClass={'unit fs_12 op06'} unit={'㎍/㎥'} />
                    </div>
                </div>

            </div>
        </article>
    );
};

export default WeatherIndicator;