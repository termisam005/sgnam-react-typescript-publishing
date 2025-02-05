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

// 통계분석 - 무단횡단 통계 페이지
const StatisticalJaywalking = () => {

    //탭버튼 이벤트
    const [menuTab, setMenuTab] = useState(1);
    const tabMenu = (index) => {
        setMenuTab(index);
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
    
    const [currentValue, setCurrentValue] = useState('5분 교통량');
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
                            <div className="dflx col_gap16 h-100">
                                <div className='w320'>
                                    <div className="edge_block h-100">                                    
                                        <div className='unicont_top p-b-16'>
                                            <h2>교차로 목록</h2>
                                        </div>
                                        <table className='table_box statistics_table'>
                                            <thead>
                                                <tr>
                                                    <th className='table_number'>No.</th>
                                                    <th className='w220'>교차로명</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='row_type2'>
                                                    <td>16</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>15</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>14</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>13</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>12</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>11</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>10</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>9</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>8</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>7</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>6</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>5</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>4</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>3</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>1</td>
                                                    <td>야탑역 사거리</td>
                                                </tr>
                                            </tbody>
                                        </table>                                    
                                        <div className="m-t-20 dflx_ac_jcent gap_8">
                                            <PagingComponent />
                                        </div>
                                    </div>
                                </div>
                                <div className='dflx_column flex1'>
                                    <div className="dflx col_gap16">
                                        <div className="edge_block w320">                                    
                                            <div className='unicont_top p-b-16'>
                                                <h2>무단횡단 통계</h2>
                                            </div>
                                            <div className="chart_bg">
                                                <ImgComponent src='pedestrian_chart01.png' />
                                            </div>
                                        </div>
                                        <div className="edge_block pedestrian_chart">                                    
                                            <div className='unicont_top p-b-16'>
                                                <h2>시간별 보행자 수(타이틀 중복)</h2>
                                            </div>
                                            <div className='peak_content'>
                                                <ImgComponent className={'w-100'} src='pedestrian_barchart_01.png' />
                                                <ImgComponent className={'w-100'} src='pedestrian_barchart_02.png' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="edge_block m-t-16 f_auto">
                                        <div className='unicont_top p-b-16'>
                                            <h2>접근로/시간대별 무단횡단 수</h2>
                                        </div>
                                        <div className='peak_content dflx_jcent dflx_dcol_ac'>
                                            <div className='w-100'>
                                                <ImgComponent className={'w-100'} src='pedestrian_linechart_01.png' />
                                            </div>
                                            <div className='m-t-20 tac'>                                        
                                                <ImgComponent src='pedestrian_linechart_02.png' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w594'>                                  
                                    <div className="edge_block f_auto">                                    
                                        <div className='unicont_top p-b-16'>
                                            <h2>무단횡단 수</h2>
                                        </div>
                                        <table className='table_box statistics_table medium'>
                                            <thead>
                                                <tr>
                                                    <th className='w200'>시간</th>
                                                    <th>접근로명 1</th>
                                                    <th>접근로명 2</th>
                                                    <th>접근로명 3</th>
                                                    <th>접근로명 4</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>3</td>
                                                    <td>3</td>
                                                    <td>10</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:01:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2024-01-01 00:00:05</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
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
        </div>
    );
};

export default StatisticalJaywalking;
