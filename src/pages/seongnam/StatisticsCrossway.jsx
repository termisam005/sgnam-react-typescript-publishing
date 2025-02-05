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
import WithLabelComponent from '../../components/common/WithLabelComponent';
import PagingComponent from '../../components/common/PagingComponent';
import TooltipComponent from '../../components/common/TooltipComponent';

import DatepickerLine from '../../components/date/DatepickerLine';
import InputComponent from '../../components/input/InputComponent';
import SelectBoxComponent from '../../components/select/SelectBoxComponent';
import MarkerComponent from '../../components/map/MarkerComponent';
import MarkerOnlyComponent from '../../components/map/MarkerOnlyComponent';

// 통계분석 - 교차로 통계 페이지
const StatisticsCrossway = () => {

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
                                <p className='gnb_txt'>교차로명</p>
                                <InputComponent type="text" className='wrput trans line w200' value={''} />
                                <p className='gnb_txt m-l-32'>교차로 ID</p>
                                <InputComponent type="text" className='wrput trans line w200' value={''} />
                                <p className='gnb_txt m-l-32'>통계</p>
                                <SelectBoxComponent selboxClass={selbox? "selectbox w200 line h28 gap_8 on" : "selectbox w200 line h28 gap_8"}
                                    focus={handleFocus} open={selbox} close={closeBox} onChange={onChangeValue} placeholder={'사용자 ID'} currentValue={currentValue}>
                                    <li onClick={onChangeSelectValue} className="option">사용자 ID1</li>
                                    <li onClick={onChangeSelectValue} className="option">사용자 ID2</li>
                                    <li onClick={onChangeSelectValue} className="option">사용자 ID3</li>
                                </SelectBoxComponent>
                                <p className='gnb_txt m-l-32'>날짜</p>
                                <DatepickerLine />
                            </div>
                            <div className="dflx_ac col_gap8">
                                <ButtonComponent className={'btn_primary btn_s w68'} txt={'조회'} />
                                <ButtonComponent className={'btn_primary btn_s w68'} txt={'엑셀다운'} />
                            </div>
                        </div>

                        <div className='statistics_body'>                         
                            <div className="dflx col_gap16 h-100">
                                <div className='flex1'>
                                    <div className="edge_block h-100">             
                                        <div className='unicont_top p-b-16'>
                                            <h2>교차로 목록</h2>
                                        </div>                  
                                        <table className='table_box statistics_table'>
                                            <thead>
                                                <tr>
                                                    <th className='table_number'>No.</th>
                                                    <th className='w220'>교차로명</th>
                                                    <th>교차로 ID</th>
                                                    <th>교통량(대)</th>
                                                    <th>평균 속도(km/h)</th>
                                                    <th>서비스 수준</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='row_type2'>
                                                    <td>16</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>15</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000002</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>14</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000002</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>13</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000002</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>12</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000002</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>11</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000002</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>10</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>9</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>8</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>7</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>6</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>5</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>4</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>3</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>1</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(F)</td>
                                                </tr>
                                            </tbody>
                                        </table>                                    
                                        <div className="m-t-20 dflx_ac_jcent gap_8">
                                            <PagingComponent />
                                        </div>
                                    </div>
                                </div>
                                <div className='dflx_column row_gap16 flex1'>                                  
                                    <div className="edge_block crossway_fixed_tb">
                                        <div className='unicont_top p-b-16'>
                                            <h2>접근로 목록</h2>
                                        </div>                          
                                        <table className='table_box statistics_table'>
                                            <thead>
                                                <tr>
                                                    <th className='table_number'>No.</th>
                                                    <th className='w220'>접근로명</th>
                                                    <th>접근로 ID</th>
                                                    <th>교통량(대)</th>
                                                    <th>평균 속도(km/h)</th>
                                                    <th>LOS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='row_type2'>
                                                    <td>5</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(A)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>4</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(A)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>3</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(A)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>2</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(A)</td>
                                                </tr>
                                                <tr className='row_type2'>
                                                    <td>1</td>
                                                    <td>야탑역 사거리</td>
                                                    <td>0000001</td>
                                                    <td>15,121</td>
                                                    <td>35</td>
                                                    <td>13.4(A)</td>
                                                </tr>
                                            </tbody>
                                        </table>     
                                    </div>
                                    <div className="edge_block crossway_map flex1">  
                                        <article className={'marker_container'} style={{top:'65%', left:'62%'}}>
                                            <MarkerComponent onClick={toggleMark} className={markStatus? 'marker mk48 on' : 'marker mk48'}>
                                                <ImgComponent className='img_off' src={'smart_vds_48.svg'} />
                                                <ImgComponent className='img_selected' src={'smart_vds_selected_48.svg'} />
                                            </MarkerComponent>   
                                            <TooltipComponent onClick={toggleMark} className={markStatus? 'tooltip_label top on' : 'tooltip_label top'} txt={'시청역 사거리'} />
                                        </article>
                                        <MarkerOnlyComponent size={'mk48'} style={{top:'75%', left:'60%'}}>
                                            <ImgComponent className='img_off' src={'crossroad_mv_48.svg'} />
                                            <ImgComponent className='img_selected' src={'crossroad_mv_selected_48.svg'} />
                                        </MarkerOnlyComponent>
                                        <MarkerOnlyComponent size={'mk48'} style={{top:'72%', left:'54%'}}>
                                            <ImgComponent className='img_off' src={'smart_vds_48.svg'} />
                                            <ImgComponent className='img_selected' src={'smart_vds_selected_48.svg'} />
                                        </MarkerOnlyComponent>
                                        <MarkerOnlyComponent size={'mk48'} style={{top:'75%', left:'66%'}}>
                                            <ImgComponent className='img_off' src={'smart_vds_48.svg'} />
                                            <ImgComponent className='img_selected' src={'smart_vds_selected_48.svg'} />
                                        </MarkerOnlyComponent>
                                        <MarkerOnlyComponent size={'mk48'} style={{top:'85%', left:'59%'}}>
                                            <ImgComponent className='img_off' src={'smart_vds_48.svg'} />
                                            <ImgComponent className='img_selected' src={'smart_vds_selected_48.svg'} />
                                        </MarkerOnlyComponent>
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

export default StatisticsCrossway;
