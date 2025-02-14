import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/header/Header';
import HeaderLeft from '../../components/header/HeaderLeft';
import Gnb from '../../components/header/Gnb';
import HeaderRight from '../../components/header/HeaderRight';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';
import DiagonComponent from '../../components/common/DiagonComponent';
import SmartComponent from '../../components/common/SmartComponent';
import DatepickerFillWith from '../../components/date/DatepickerFillWith';
import WithLabelComponent from '../../components/common/WithLabelComponent';


const ExRecord = () => {

    //탭버튼 이벤트
    const [menuTab, setMenuTab] = useState<number>(1);
    const tabMenu = (index:number) => {
        setMenuTab(index);
    }

    return (
        <div className='back'>
            <div className='wrap_rel'>

                <Header headerClass="sub_header">
                    <HeaderLeft />
                    <Gnb />
                    <HeaderRight>
                        <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 some_snow_rain'} textClass={'hd_text'} temper={'23.0℃'} slash={'/'} air={'30mm'} />
                        <ProfileComponent />
                    </HeaderRight>
                </Header>

                <div className='board'>

                    <div className='board_inner'>
                        <div className='record_top'>
                            <ul className='record_menu'>
                                <li>
                                    <Link to="#" className={menuTab === 1? "on" : ""} onClick={() => tabMenu(1)}>통계</Link>
                                </li>
                                <li>
                                    <Link to="#" className={menuTab === 2? "on" : ""} onClick={() => tabMenu(2)}>반복정체</Link>
                                </li>
                                <li>
                                    <Link to="#"className={menuTab === 3? "on" : ""} onClick={() => tabMenu(3)}>이벤트</Link>
                                </li>
                            </ul>
                            <DatepickerFillWith />
                        </div>

                        <div className='record_back'>
                            <div className="record_wrap">
                                <article className='record_contain'>
                                    <div className='unicont_top'>
                                        <h1>이벤트 종합 현황</h1>
                                    </div>
                                    <div className='record_line'>
                                        <section className='record_diagon'>
                                            <DiagonComponent contClass={'diagon_cont'} tltClass={'diagon_tlt'} tlt={'반복정체 총 링크수'} 
                                            resultClass={'diagon_result'} result={'1,442'} unitClass={'unit'} unit={'건'} />
                                            <DiagonComponent contClass={'diagon_cont'} tltClass={'diagon_tlt'} tlt={'반복정체 총 건수'} 
                                            resultClass={'diagon_result'} result={'432'} unitClass={'unit'} unit={'건'} />
                                            <DiagonComponent contClass={'diagon_cont'} tltClass={'diagon_tlt'} tlt={'비반복정체 총 건수'} 
                                            resultClass={'diagon_result'} result={'942'} unitClass={'unit'} unit={'건'} />
                                            <DiagonComponent contClass={'diagon_cont'} tltClass={'diagon_tlt'} tlt={'스마트교차로 감지 건수'} 
                                            resultClass={'diagon_result'} result={'1,442'} unitClass={'unit'} unit={'건'} />
                                        </section>
                                        
                                        <section className='record_dash'>
                                            <div className='dash_box vert'>
                                                <div className='vert_tlt'>심각도별 현황</div>
                                                <article className='vert_chart_wrap'>
                                                    <div className='vert_chart'>
                                                        <ImgComponent className={'img_chart'} src={'pie4.svg'} />
                                                    </div>
                                                    <div className='vert_labels labels_center'>
                                                        <WithLabelComponent className={'gr_label'} squareClass={'square'} 
                                                            wordClass={'word'} word={'매우경미'}  />
                                                        <WithLabelComponent className={'gr_label'} squareClass={'square sky_blue'} 
                                                            wordClass={'word'} word={'경미'}  />
                                                        <WithLabelComponent className={'gr_label'} squareClass={'square sky'} 
                                                            wordClass={'word'} word={'보통'}  />
                                                        <WithLabelComponent className={'gr_label'} squareClass={'square green'}
                                                            wordClass={'word'} word={'심각'}  />
                                                        <WithLabelComponent className={'gr_label'} squareClass={'square purple'}
                                                            wordClass={'word'} word={'매우심각'}  />
                                                    </div>
                                                </article>
                                            </div>
                                            <div className='dash_box vert'>
                                                <div className='vert_tlt'>도로유형별 건수</div>
                                                <article className='vert_chart_wrap'>
                                                    <div className='vert_chart'>
                                                        <ImgComponent className={'img_chart'} src={'pie3.svg'} />
                                                    </div>
                                                    <div className='vert_labels'>
                                                        <WithLabelComponent className={'gr_label'} squareClass={'square'}
                                                            wordClass={'word'} word={'주간선도로'}  />
                                                        <WithLabelComponent className={'gr_label'} squareClass={'square sky'}
                                                            wordClass={'word'} word={'보조간선도로'}  />
                                                    </div>
                                                </article>
                                            </div>
                                            <div className='dash_box vert'>
                                                <div className='vert_tlt'>돌발검지기 이벤트 확정률</div>
                                                <article className='vert_chart_wrap'>
                                                    <div className='vert_chart'>
                                                        <ImgComponent className={'img_chart'} src={'pie1.svg'} />
                                                    </div>
                                                    <div className='vert_labels'>
                                                        <WithLabelComponent className={'gr_label'} squareClass={'square'}
                                                            wordClass={'word'} word={'확정'}  />
                                                        <WithLabelComponent className={'gr_label'} squareClass={'square sky'}
                                                            wordClass={'word'} word={'미확정'}  />
                                                    </div>
                                                </article>
                                            </div>
                                            <div className='dash_box vert'>
                                                <div className='vert_tlt'>스마트교차로 이벤트 확정률</div>
                                                <article className='vert_chart_wrap'>
                                                    <div className='vert_chart'>
                                                        <ImgComponent className={'img_chart'} src={'pie2.svg'} />
                                                    </div>
                                                    <div className='vert_labels'>
                                                        <WithLabelComponent className={'gr_label'} squareClass={'square'}
                                                            wordClass={'word'} word={'확정'}  />
                                                        <WithLabelComponent className={'gr_label'} squareClass={'square sky'}
                                                            wordClass={'word'} word={'미확정'}  />
                                                    </div>
                                                </article>
                                            </div>
                                            <div className='dash_box cases4'>
                                                <h3 className='dash_tlt'>
                                                    스마트교차로 유형별 발생건수
                                                </h3>
                                                <article className='smart_line'>
                                                    <SmartComponent labelClass={'label sky_light'} labelWord={'차량정지'} number={'109'} />
                                                    <SmartComponent labelClass={'label label_color05'} labelWord={'역주행'} number={'109'} />
                                                    <SmartComponent labelClass={'label rainbow_color07'} labelWord={'꼬리물기'} number={'109'} />
                                                    <SmartComponent labelClass={'label label_color07'} labelWord={'보행자'} number={'109'} />
                                                </article>
                                            </div>
                                            <div className='dash_box cases3'>
                                                <h3 className='dash_tlt'>
                                                    돌발검지기 유형별 발생 건수
                                                </h3>
                                                <article className='smart_line'>
                                                    <SmartComponent labelClass={'label sky_light'} labelWord={'차량정지'} number={'109'} />
                                                    <SmartComponent labelClass={'label label_color05'} labelWord={'역주행'} number={'109'} />
                                                    <SmartComponent labelClass={'label rainbow_color07'} labelWord={'보행자'} number={'109'} />
                                                </article>
                                            </div>
                                            <div className='dash_box types'>
                                                <div className='types_contain'>
                                                    <article className='type_share'>
                                                        <h3 className='dash_tlt'>
                                                            이벤트 유형별
                                                        </h3>
                                                        <div className='types_lineb'>
                                                            <div className='types_chart'>
                                                                <ImgComponent className={'img_chart'} src={'pie4.svg'} />
                                                            </div>
                                                            <div className='p-l-20'>
                                                                <div className='display_grid row_gap4'>
                                                                    <WithLabelComponent className={'gr_label'} squareClass={'square green'}
                                                                        wordClass={'word'} word={'사고'} />
                                                                    <WithLabelComponent className={'gr_label'} squareClass={'square sky'}
                                                                        wordClass={'word'} word={'공사'} />
                                                                    <WithLabelComponent className={'gr_label'} squareClass={'square sky_blue'}
                                                                        wordClass={'word'} word={'행사'} />
                                                                    <WithLabelComponent className={'gr_label'} squareClass={'square'}
                                                                        wordClass={'word'} word={'기상'} />                                                                    
                                                                    <WithLabelComponent className={'gr_label'} squareClass={'square violet'}
                                                                        wordClass={'word'} word={'통제'} />                                      
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                    <article className='type_share'>
                                                        <div className='smart_line grid3'>
                                                            <SmartComponent labelClass={'label label_color08'} labelWord={'사고발생'} number={'109'}>
                                                                {/* <p className='smart_more'>재난 발생 건수</p> */}
                                                            </SmartComponent>
                                                            <SmartComponent labelClass={'label rainbow_color07'} labelWord={'공사검지'} number={'109'}>
                                                            </SmartComponent>
                                                            <SmartComponent labelClass={'label gradeko_color02'} labelWord={'행사검지'} number={'109'}>
                                                            </SmartComponent>
                                                            <SmartComponent labelClass={'label label_color11'} labelWord={'기상발생'} number={'109'}>
                                                            </SmartComponent>
                                                            <SmartComponent labelClass={'label label_color03'} labelWord={'통제검지'} number={'109'}>
                                                            </SmartComponent>
                                                            <SmartComponent labelClass={'label etc'} labelWord={'정체발생'} number={'109'}>
                                                            </SmartComponent>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </article>

                                <article className='record_contain'>
                                    <div className='unicont_top'>
                                        <h1>이벤트 발생율</h1>
                                    </div>
                                    <section className='rate_line'>
                                        <div className='dash_box'>
                                            <div className='dflx_ac_jbet'>
                                                <h3 className='dash_tlt'>시간대별</h3>
                                                <div className='dflx_ac col_gap20'>
                                                    <WithLabelComponent className={'ball_label'} squareClass={'ball accident'}
                                                        wordClass={'word'} word={'사고'} />
                                                    <WithLabelComponent className={'ball_label'} squareClass={'ball construction'}
                                                        wordClass={'word'} word={'공사'} />
                                                    <WithLabelComponent className={'ball_label'} squareClass={'ball event'}
                                                        wordClass={'word'} word={'행사'} />
                                                    <WithLabelComponent className={'ball_label'} squareClass={'ball weather'}
                                                        wordClass={'word'} word={'기상'} />
                                                    <WithLabelComponent className={'ball_label'} squareClass={'ball control'}
                                                        wordClass={'word'} word={'통제'} />
                                                    <WithLabelComponent className={'ball_label'} squareClass={'ball stagnate'}
                                                        wordClass={'word'} word={'정체'} />
                                                </div>
                                            </div>
                                            <div className='rate_line_chart'>
                                                <ImgComponent className={'img_chart img_dark'} src={'rate_chart01.svg'} />
                                                <ImgComponent className={'img_chart img_light'} src={'rate_chart01_light.svg'} />
                                            </div>
                                        </div>
                                        <div className='dash_box'>
                                            <div className='dflx_ac_jbet'>
                                                <h3 className='dash_tlt'>도로별</h3>
                                                <div className='dflx_ac col_gap20'>
                                                    <WithLabelComponent className={'gr_label m-0'} squareClass={'square green'}
                                                        wordClass={'word'} word={'Label'} />
                                                    <WithLabelComponent className={'gr_label m-0'} squareClass={'square sky'}
                                                        wordClass={'word'} word={'Label'} />
                                                    <WithLabelComponent className={'gr_label m-0'} squareClass={'square'}
                                                        wordClass={'word'} word={'Label'} />
                                                    <WithLabelComponent className={'gr_label m-0'} squareClass={'square blue'}
                                                        wordClass={'word'} word={'Label'} />
                                                    <WithLabelComponent className={'gr_label m-0'} squareClass={'square violet'}
                                                        wordClass={'word'} word={'Label'} />
                                                    <WithLabelComponent className={'gr_label m-0'} squareClass={'square violet_light'}
                                                        wordClass={'word'} word={'Label'} />
                                                </div>
                                            </div>
                                            <div className='rate_line_chart'>
                                                <ImgComponent className={'img_chart img_dark'} src={'rate_chart02.svg'} />
                                                <ImgComponent className={'img_chart img_light'} src={'rate_chart02_light.svg'} />
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </div>
                        
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default ExRecord;
