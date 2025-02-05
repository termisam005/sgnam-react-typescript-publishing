import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/Header';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import SmartFooter from '../../components/footer/SmartFooter';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import HdtimeComponent from '../../components/common/HdtimeComponent';
import ProfileComponent from '../../components/common/ProfileComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import DiagonComponent from '../../components/common/DiagonComponent';
import ImgComponent from '../../components/common/ImgComponent';
import Nav from '../../components/header/Nav';

import IndicatorComponent from '../../components/card/IndicatorComponent';
import CommuniIndicatorBrief from '../../components/layout/CommuniIndicatorBrief';
import ComprehensiveIndicator from '../../components/layout/ComprehensiveIndicator';
import DelayIndicator from '../../components/layout/DelayIndicator';
import DefaultInidicator from '../../components/layout/DefaultInidicator';
import OverflowInidicator from '../../components/layout/OverflowInidicator';

const Smart = () => {
//스마트교차로 페이지

    return (
      <div className='back'>
        <div className='wrap_rel'>

          <Header>
            <HeaderLeft />
            <Nav />
            <HeaderRight>
              <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 some_snow_rain'} textClass={'hd_text'} temper={'23℃'} slash={'/'} air={'맑음'} />
              <HdtimeComponent stausClass={'hd_status'} textClass={'hd_text'} date={'2022-05-26'} slash={''} time={'14:10:40'} />
              <ProfileComponent />
            </HeaderRight>
          </Header>

          <section className={"board_left"}>
            <div className='board_line'>
                <div className="tab_dashboard">
                    <Link className={'btn_toggle_floating btn_m selected flex1'} to="/smart">교통상황 모니터링</Link>
                    <Link className={'btn_toggle_floating btn_m flex1'} to="/smartanalysis">교차로 분석</Link>
                </div>
                <CommuniIndicatorBrief IndClass={'indicator'} IndTitle={'소통정보'}></CommuniIndicatorBrief>
                <DelayIndicator IndClass={'indicator m-t-10'} IndTitle={'지체정보'}></DelayIndicator>
                <ComprehensiveIndicator IndClass={'indicator m-t-10'} IndTitle={'종합 평가'}></ComprehensiveIndicator>
            </div>
          </section>

          <section className={"board_right"}>
            <div className='board_line'>
                <DefaultInidicator IndClass={'indicator'} IndTitle={'서비스 수준'}>
                    <ImgComponent className={'w-100'} src={'service_level_chart.svg'} />
                </DefaultInidicator>
                <DefaultInidicator IndClass={'indicator m-t-10'} IndTitle={'주요 정체구간'}>
                    <div className="tab_line m-b-12">
                        <ButtonComponent className={'btn_line1 btn_xs selected flex1'} txt={'주요 도로'} />
                        <ButtonComponent className={'btn_line1 btn_xs flex1'} txt={'주요 교차로'} />
                    </div>
                    <ImgComponent className={'w-100'} src={'traffic_congestion.svg'} />
                </DefaultInidicator>
                <OverflowInidicator IndClass={'indicator overt m-t-10 p-b-0'} IndTitle={'교차로 및 도로 순위'}>
                    <div className="tab_line m-b-12 m-r-15">
                        <ButtonComponent className={'btn_line1 btn_xs selected flex1'} txt={'주요 도로'} />
                        <ButtonComponent className={'btn_line1 btn_xs flex1'} txt={'주요 교차로'} />
                    </div>
                    <div className="indi_vert326 scroll sc_y">
                        <table className="table_box small">
                            <caption className="hidden_tag">테이블 리스트</caption>
                            <thead>
                                <tr>
                                    <th className="tac"><p className='text_ellipsis w36'>순위</p></th>
                                    <th className="tac"><p className='text_ellipsis w72'>교차로명</p></th>
                                    <th className="tac"><p className='text_ellipsis w60'>신호제어 교차로 ID</p></th>
                                    <th className="tac"><p className='text_ellipsis w48'>교통량 (대)</p></th>
                                    <th className="tac"><p className='text_ellipsis w32'>LOS</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">시청역사거리</td>
                                    <td className="tac">100000</td>
                                    <td className="tac">1</td>
                                    <td className="tac">1</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">시청역사거리</td>
                                    <td className="tac">100000</td>
                                    <td className="tac">1</td>
                                    <td className="tac">1</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">시청역사거리</td>
                                    <td className="tac">100000</td>
                                    <td className="tac">1</td>
                                    <td className="tac">1</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">시청역사거리</td>
                                    <td className="tac">100000</td>
                                    <td className="tac">1</td>
                                    <td className="tac">1</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">시청역사거리</td>
                                    <td className="tac">100000</td>
                                    <td className="tac">1</td>
                                    <td className="tac">1</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">시청역사거리</td>
                                    <td className="tac">100000</td>
                                    <td className="tac">1</td>
                                    <td className="tac">1</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">시청역사거리</td>
                                    <td className="tac">100000</td>
                                    <td className="tac">1</td>
                                    <td className="tac">1</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">시청역사거리</td>
                                    <td className="tac">100000</td>
                                    <td className="tac">1</td>
                                    <td className="tac">1</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">시청역사거리</td>
                                    <td className="tac">100000</td>
                                    <td className="tac">1</td>
                                    <td className="tac">1</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">시청역사거리</td>
                                    <td className="tac">100000</td>
                                    <td className="tac">1</td>
                                    <td className="tac">1</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">시청역사거리</td>
                                    <td className="tac">100000</td>
                                    <td className="tac">1</td>
                                    <td className="tac">1</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">시청역사거리</td>
                                    <td className="tac">100000</td>
                                    <td className="tac">1</td>
                                    <td className="tac">1</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">시청역사거리</td>
                                    <td className="tac">100000</td>
                                    <td className="tac">1</td>
                                    <td className="tac">1</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">시청역사거리</td>
                                    <td className="tac">100000</td>
                                    <td className="tac">1</td>
                                    <td className="tac">1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="scroll_y h326">
                        <div className="scroll_y_wrap">
                            <div className="scroll_y_contetns">
                                
                            </div>
                        </div>
                    </div> */}
                </OverflowInidicator>
            </div>
          </section>

          <div className='board situation'>
            <div className='board_in'>               
                
            </div>
          </div>

          <div className='board_center'>
            <div className="dflx_jcent">
                <div className='polygon_list_box'>
                    <DiagonComponent contClass={'polygon_item'} tltClass={'polygon_tit'} tlt={'일 평균 속도'} 
                    resultClass={'polygon_result'} result={'00.0'} unitClass={'unit'} unit={'km'}>
                        <p className="polygon_unit">0km/h(-0%)</p>
                    </DiagonComponent>
                    <DiagonComponent contClass={'polygon_item'} tltClass={'polygon_tit'} tlt={'일 누적 교통량'} 
                    resultClass={'polygon_result'} result={'000'} unitClass={'unit'} unit={'대'}>
                        <p className="polygon_unit">0대(-0%)</p>
                    </DiagonComponent>
                    <DiagonComponent contClass={'polygon_item'} tltClass={'polygon_tit'} tlt={'일 평균 지체시간'} 
                    resultClass={'polygon_result'} result={'0.00'} unitClass={'unit'} unit={'초'}>
                        <p className="polygon_unit">0초(-0%)</p>
                    </DiagonComponent>
                    <DiagonComponent contClass={'polygon_item'} tltClass={'polygon_tit'} tlt={'일 평균 공간점유율'} 
                    resultClass={'polygon_result'} result={'0.00'} unitClass={'unit'} unit={'%'}>
                        <p className="polygon_unit">0%(-0%)</p>
                    </DiagonComponent>
                </div>
            </div>
          </div>

          <div className='board_bottom'>
            <IndicatorComponent className={'indicator w-100 m-t-20'}>
                <strong className='fc_primary'>접근로 검지 상황</strong>
                <div className="tab_line m-t-16">
                    <ButtonComponent type={'button'} className={'btn_line1 btn_xs'} txt={'지표'} onClick={''} />
                    <ButtonComponent type={'button'} className={'btn_line1 btn_xs selected'} txt={'차트'} onClick={''} />
                </div>
                <ImgComponent src={'smart_situation_chart.png'} className={'w-100 m-t-16'} />
            </IndicatorComponent>
          </div>

          <SmartFooter />
        </div>
      </div>
    );
};

export default Smart;
