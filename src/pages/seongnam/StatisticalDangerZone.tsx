import { useState } from 'react';
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


// 통계분석 - 교차로 위험구간 분석 페이지
const StatisticalDangerZone = () => {
    
    //selectBox
    const [selbox, setSelbox] = useState<boolean>(false);
    const handleFocus = () => {
        setSelbox(!selbox);
    };
    const closeBox = () => {
        setSelbox(false);
    };
    
    const [currentValue, setCurrentValue] = useState<string>('5분 교통량');
    const onChangeSelectValue = (e:any) => {
        const {innerText} = e.target;
        setCurrentValue(innerText);
        setSelbox(false);
    };
    const onChangeValue = (e:any) =>{
        setCurrentValue(e.target.value);
    };

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
                                    <div className="edge_block">                                    
                                        <div className='unicont_top'>
                                            <h2>교차로 목록</h2>
                                        </div>
                                        <div className="danger_box">
                                            <div className="chart_bg flex1">
                                                <ImgComponent className={'w-100'} src='line_violation_chart01.png' />
                                            </div>
                                            <div className="chart_bg flex1">
                                                <ImgComponent className={'w-100'} src='line_violation_chart02.png' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="edge_block m-t-16 f_auto">
                                        <div className='unicont_top'>
                                            <h2>시간별 중앙선 침범 횟수</h2>
                                        </div>
                                        <div className='peak_content dflx_jcent dflx_dcol_ac'>
                                            <ImgComponent className={'w-100 h-80'} src='line_violation_chart.png' />
                                            <ImgComponent className={'w-100'} src='line_violation_chart_label.png' />
                                        </div>
                                    </div>
                                </div>
                                <div className='w594'>                                  
                                    <div className="edge_block f_auto">                                    
                                        <div className='unicont_top p-b-16'>
                                            <h2>중앙선 침범</h2>
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

export default StatisticalDangerZone;
