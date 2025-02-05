import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import HeaderLeft from '../../components/header/HeaderLeft';
import Gnb from '../../components/header/Gnb';
import HeaderRight from '../../components/header/HeaderRight';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import HdtimeComponent from '../../components/common/HdtimeComponent';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import ProfileComponent from '../../components/common/ProfileComponent';
import SignalIndicator from '../../components/layout/SignalIndicator';
import ServiceIndicator from '../../components/layout/ServiceIndicator';
import TodAccordContainer from '../../components/layout/TodAccordContainer';
import TodCont3 from '../../components/common/TodCont3';
import AccordionComponent from '../../components/accordion/AccordionComponent';
import FooterRight from '../../components/footer/FooterRight';
import DistanceComponent from '../../components/map/DistanceComponent';
import ProgressComponent from '../../components/map/ProgressComponent';


const ExSignal = () => {

    //화살이벤트
    const [leftDel, setLeftDel] = useState(false);
    const DeleteLeft = () => {
      setLeftDel(!leftDel);
    }

    return (
        <div className='back'>
            <div className='wrap_rel'>
                
                <Header>
                    <HeaderLeft />
                    <Gnb />
                    <HeaderRight>
                        <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 some_snow_rain'} textClass={'hd_text'} temper={'23℃'} slash={'/'} air={'맑음'} />
                        <HdtimeComponent stausClass={'hd_status'} textClass={'hd_text'} date={'2022-05-26'} slash={''} time={'14:10:40'} />
                        <ProfileComponent />
                    </HeaderRight>
                </Header>

                <div className='board'>
                    <div className='signal_contents'>

                        <article className='signal_body'>
                            <div className='bg_track track01'></div>
                            <section className={leftDel? "board_left p-l-0" : "board_left"}>
                                <div className='board_line'>
                                    <ButtonWithComponent onClick={DeleteLeft} className='btn_arrow_l right'>
                                        <ImgComponent className={'w16'} src={'arrow_left_2line_sky_16.svg'} />
                                    </ButtonWithComponent>
                                    <SignalIndicator IndClass={leftDel? 'indicator del' : 'indicator'} IndTitle={'신호 최적화 분석'} />
                                    <article className={leftDel? 'board_etc lefting' : 'board_etc'}>
                                        {/* <EtcIndicator etcClass={'indi_etc'} IndTitle={'[1] 계양구'} /> */}
                                        <ButtonWithComponent type={'button'} className={'btn_floating btn_m btn_drop'} >
                                            <span className={'word'}>[1] 계양구</span>
                                            <p className="put_see">
                                                <ImgComponent className="img_see w20" src={'eye_sky_on_20.svg'} />
                                            </p>
                                        </ButtonWithComponent>
                                    </article>
                                </div>
                            </section>
                            <section className={"board_right"}>
                                <div className='board_line'>
                                    <ServiceIndicator IndClass={'indicator'} IndTitle={'[현황분석] 서비스 수준'} />
                                    {/* <TodIndicator IndClass={rightDel? 'indicator m-t-8 del' : 'indicator m-t-8'} IndTitle={'TOD - 현황분석'} /> */}
                                    <TodAccordContainer IndClass={'indicator p-0 m-t-8'} IndTitle={'[현황분석] TOD'}>
                                        <div className="dflx_column row_gap2">
                                            <AccordionComponent accordClass={'accordion_block point'} accordTitle={'연동그룹 1'} normal>
                                                <div className='accordion_paragraph h282 scroll'>
                                                    <TodCont3 contClass={'tod_cont'} place={'원적 사거리'} />
                                                    <TodCont3 contClass={'tod_cont m-t-20'} place={'극동아파트'} />
                                                </div>
                                            </AccordionComponent>
                                            <AccordionComponent accordClass={'accordion_block point'} accordTitle={'연동그룹 2'} normal>
                                                <div className='accordion_paragraph h282 scroll'>
                                                    <TodCont3 contClass={'tod_cont'} place={'원적 사거리'} />
                                                    <TodCont3 contClass={'tod_cont m-t-20'} place={'극동아파트'} />
                                                </div>
                                            </AccordionComponent>
                                            <AccordionComponent accordClass={'accordion_block point'} accordTitle={'연동그룹 3'} normal>
                                                <div className='accordion_paragraph'>
                                                    <TodCont3 contClass={'tod_cont'} place={'극동아파트'} />
                                                </div>
                                            </AccordionComponent>
                                            <AccordionComponent accordClass={'accordion_block point'} accordTitle={'연동그룹 4'} normal>
                                                <div className='accordion_paragraph'>
                                                    <TodCont3 contClass={'tod_cont'} place={'극동아파트'} />
                                                </div>
                                            </AccordionComponent>
                                        </div>
                                    </TodAccordContainer>
                                </div>
                            </section>
                            <div className='bottom_title'>
                                현황 분석
                            </div>
                        </article>

                        <article className='signal_body'>
                            <div className='bg_track track01'></div>
                            <section className={"board_right"}>
                                <div className='board_line'>
                                    <ServiceIndicator IndClass={'indicator'} IndTitle={'[현황분석] 서비스 수준'} />
                                    <TodAccordContainer IndClass={'indicator p-0 m-t-8'} IndTitle={'[현황분석] TOD'}>
                                        <div className="dflx_column row_gap2">
                                            <AccordionComponent accordClass={'accordion_block point'} accordTitle={'연동그룹 1'} normal>
                                                <div className='accordion_paragraph h282 scroll'>
                                                    <TodCont3 contClass={'tod_cont'} place={'원적 사거리'} />
                                                    <TodCont3 contClass={'tod_cont m-t-20'} place={'극동아파트'} />
                                                </div>
                                            </AccordionComponent>
                                            <AccordionComponent accordClass={'accordion_block point'} accordTitle={'연동그룹 2'} normal>
                                                <div className='accordion_paragraph h282 scroll'>
                                                    <TodCont3 contClass={'tod_cont'} place={'원적 사거리'} />
                                                    <TodCont3 contClass={'tod_cont m-t-20'} place={'극동아파트'} />
                                                </div>
                                            </AccordionComponent>
                                            <AccordionComponent accordClass={'accordion_block point'} accordTitle={'연동그룹 3'} normal>
                                                <div className='accordion_paragraph'>
                                                    <TodCont3 contClass={'tod_cont'} place={'극동아파트'} />
                                                </div>
                                            </AccordionComponent>
                                            <AccordionComponent accordClass={'accordion_block point'} accordTitle={'연동그룹 4'} normal>
                                                <div className='accordion_paragraph'>
                                                    <TodCont3 contClass={'tod_cont'} place={'극동아파트'} />
                                                </div>
                                            </AccordionComponent>
                                        </div>
                                    </TodAccordContainer>
                                </div>
                            </section>
                            <div className='bottom_title on'>
                                최적화 분석
                            </div>
                        </article>
                    
                    </div>
                </div>
                
                <footer>
                    <div className='footer_in'>
                        <article className='footer_left col_gap8'>
                            <div class="tab_line">
                                <ButtonWithComponent className={'btn_icon icon_ffb btn_m tooltip_parents lgmode'}>
                                    <ImgComponent className={'img w24 op04'} src={'layer_fff_24.svg'} />
                                    <ImgComponent className={'img_on w24'} src={'layer_sky_24.svg'} />
                                    <div class="tooltip_label">레이어</div>
                                </ButtonWithComponent>
                            </div>
                        </article>
                        <FooterRight>
                            <DistanceComponent distClass={'control_dist'} distance={'5km'} />
                            <ProgressComponent size='large'>
                            </ProgressComponent>
                        </FooterRight>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default ExSignal;
