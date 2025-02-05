import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import HeaderLeft from '../../components/header/HeaderLeft';
import Nav from '../../components/header/Nav';
import HeaderRight from '../../components/header/HeaderRight';
import StatisticsTabMenu from '../../components/header/StatisticsTabMenu';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import ProfileComponent from '../../components/common/ProfileComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import ImgComponent from '../../components/common/ImgComponent';
import PagingComponent from '../../components/common/PagingComponent';

import DatepickerLine from '../../components/date/DatepickerLine';
import InputComponent from '../../components/input/InputComponent';
import SelectBoxComponent from '../../components/select/SelectBoxComponent';

// 통계분석 - 첨두/비첨두 교통량 페이지
const StatisticalPeakHour = () => {

    //탭버튼 이벤트
    const [menuTab, setMenuTab] = useState(1);
    const tabMenu = (index) => {
        setMenuTab(index);
    }
    
    //탭버튼 이벤트
    const [radioTab, setRadioTab] = useState(1);
    const tabRadio = (index) => {
        setRadioTab(index);
    }

    //Datepicker
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
    const [startDate, endDate] = dateRange;

    //지도 마커 토글
    const [markStatus, setMarkStatus] = useState(true);
    const toggleMark = () => {
        setMarkStatus(!markStatus);
    }
    
    //SelectBox
    const [selbox, setSelbox] = useState(false);
    const handleFocus = () => {
        setSelbox(!selbox);
    }
    const closeBox = () => {
        setSelbox(false);
    }
    
    const [currentValue, setCurrentValue] = useState('월별');
    const onChangeSelectValue = (e) => {
        const {innerText} = e.target;
        setCurrentValue(innerText);
        setSelbox(false);
    };
    const onChangeValue = (e) =>{
        setCurrentValue(e.target.value);
    }


    return (
        <div className='back'>
            <div className='wrap_rel'>

                <Header headerClass="sub_header">
                    <HeaderLeft />
                    <Nav />
                    <HeaderRight>
                        <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 some_snow_rain'} textClass={'hd_text'} temper={'23.0℃'} slash={'/'} air={'30mm'} />
                        <ProfileComponent />
                    </HeaderRight>
                </Header>

                <div className='board'>
                    <div className='board_inner'>
                        <div className='record_top'>
                            <StatisticsTabMenu />
                        </div>
                        <div className="header_search col_gap20">
                            <div className="dflx_ac col_gap16">
                                <ImgComponent src={'filter_shape_16px.svg'} />
                                <p className='fs_13'>교차로명</p>
                                <InputComponent type="text" className='wrput trans line w200' value={''} />
                                <p className='fs_13 m-l-32'>통계</p>
                                <SelectBoxComponent selboxClass={selbox? "selectbox w200 line h28 gap_8 on" : "selectbox w200 line h28 gap_8"}
                                    focus={handleFocus} open={selbox} close={closeBox} onChange={onChangeValue} placeholder={'사용자 ID'} currentValue={currentValue}>
                                    <li onClick={onChangeSelectValue} className="option">사용자 ID1</li>
                                    <li onClick={onChangeSelectValue} className="option">사용자 ID2</li>
                                    <li onClick={onChangeSelectValue} className="option">사용자 ID3</li>
                                </SelectBoxComponent>
                                <p className='fs_13 m-l-32'>날짜</p>
                                <DatepickerLine />
                            </div>
                            <div className="dflx_ac col_gap8">
                                <ButtonComponent className={'btn_primary btn_s w68'} txt={'조회'} />
                                <ButtonComponent className={'btn_primary btn_s w68'} txt={'엑셀다운'} />
                            </div>
                        </div>

                        <div className='statistics_body'>                         
                            <div className='peak_offpeak_grid'>
                                <div className="dflx col_gap16">
                                    <div className="edge_block w320">                                    
                                        <div className='unicont_top p-b-16'>
                                            <h2>전체 교통량</h2>
                                        </div>
                                        <div className='chart_bg'>
                                            <ImgComponent className='w-100' src='peak_pie_chart01.png' />
                                        </div>
                                    </div>
                                    <div className="edge_block flex1">                                    
                                        <div className='unicont_top p-b-16'>
                                            <h2>첨두/비첨두 교통량</h2>
                                        </div>
                                        <div className='peak_content dflx_jcent dflx_dcol_ac'>
                                            <ImgComponent className={'w-100 h-80'} src='peak_bar_chart01.png' />
                                            <div className='m-t-20 tac'>
                                                <ImgComponent src='peak_bar_chart02.png' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="edge_block">
                                    <div className='unicont_top p-b-16'>
                                        <h2>제목 없음</h2>
                                    </div>
                                    <div className='dflx col_gap18'>
                                        <p className={radioTab === 1? "ch_radio on" : "ch_radio"} onClick={() => tabRadio(1)}>
                                            <span className="radio"></span>
                                            <span className="word fs16">첨두+비첨두</span>
                                        </p>
                                        <p className={radioTab === 2? "ch_radio on" : "ch_radio"} onClick={() => tabRadio(2)}>
                                            <span className="radio"></span>
                                            <span className="word fs16">첨두</span>
                                        </p>
                                        <p className={radioTab === 3? "ch_radio on" : "ch_radio"} onClick={() => tabRadio(3)}>
                                            <span className="radio"></span>
                                            <span className="word fs16">비첨두</span>
                                        </p>
                                    </div>
                                    <table className='table_box peak_table m-t-10'>
                                        <caption className='hidden_tag'>첨두 비첨두 교통량 관련 표</caption>
                                        <thead>
                                            <tr>
                                                <th className='th_first' rowSpan={2} scope='col'>교차로명</th>
                                                <th colSpan={7} scope='col' className='btm_white12'>오전 첨두 교통량(7시~9시)</th>
                                                <th colSpan={7} scope='col' className='btm_white12'>비첨두 교통량(12시~16시)</th>
                                                <th colSpan={7} scope='col' className='btm_white12'>오후 첨두 교통량(17시~19시)</th>
                                            </tr>
                                            <tr>
                                                <th className='th_day' scope='row'>월</th>
                                                <th className='th_day'>화</th>
                                                <th className='th_day'>수</th>
                                                <th className='th_day'>목</th>
                                                <th className='th_day'>금</th>
                                                <th className='th_day'>토</th>
                                                <th className='th_day'>일</th>
                                                <th className='th_day'>월</th>
                                                <th className='th_day'>화</th>
                                                <th className='th_day'>수</th>
                                                <th className='th_day'>목</th>
                                                <th className='th_day'>금</th>
                                                <th className='th_day'>토</th>
                                                <th className='th_day'>일</th>
                                                <th className='th_day'>월</th>
                                                <th className='th_day'>화</th>
                                                <th className='th_day'>수</th>
                                                <th className='th_day'>목</th>
                                                <th className='th_day'>금</th>
                                                <th className='th_day'>토</th>
                                                <th className='th_day'>일</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='row_type2'>
                                                <td className='td_first'>야탑사거리</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                            </tr> 
                                            <tr className='row_type2'>
                                                <td className='td_first'>야탑사거리</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                            </tr>
                                            <tr className='row_type2'>
                                                <td className='td_first'>야탑사거리</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                            </tr>
                                            <tr className='row_type2'>
                                                <td className='td_first'>야탑사거리</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                            </tr>
                                            <tr className='row_type2'>
                                                <td className='td_first'>야탑사거리</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                            </tr>
                                            <tr className='row_type2'>
                                                <td className='td_first'>야탑사거리</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                            </tr>
                                            <tr className='row_type2'>
                                                <td className='td_first'>야탑사거리</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                                <td>20,000</td>
                                            </tr>
                                        </tbody>
                                    </table>  
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default StatisticalPeakHour;
