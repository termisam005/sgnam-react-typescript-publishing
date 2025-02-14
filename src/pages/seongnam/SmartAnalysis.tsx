import { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/Header';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import SmartFooter from '../../components/footer/SmartFooter';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import HdtimeComponent from '../../components/common/HdtimeComponent';
import ProfileComponent from '../../components/common/ProfileComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import DiagonComponent from '../../components/common/DiagonComponent';
import ImgComponent from '../../components/common/ImgComponent';
import Nav from '../../components/header/Nav';

import IndicatorComponent from '../../components/card/IndicatorComponent';
import IntersectionAnalysis from '../../components/layout/IntersectionAnalysis';
import IntersectionList from '../../components/layout/IntersectionList';
import ManifestPattern from '../../components/layout/ManifestPattern';
import TooltipwindowComponent from '../../components/map/TooltipwindowComponent';


const SmartAnalysis = () => {
//스마트교차로 교차로 분석 페이지

    // marker toggle
    const [markStatus, setMarkStatus] = useState<boolean>(false);
    const toggleMark = () => {
    setMarkStatus(!markStatus);
    }

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
                    <Link to="/smart" className={'btn_toggle_floating btn_m flex1'}>교통상황 모니터링</Link>
                    <Link to="/smartanalysis" className={'btn_toggle_floating btn_m selected flex1'}>교차로 분석</Link>
                </div>
                <IntersectionAnalysis IndClass={'indicator'} IndTitle={'교차로 분석'} />
                <IntersectionList IndClass={'indicator overt p-b-0 m-t-8'} IndTitle={'교차로 목록'} />
            </div>
          </section>

          <section className={"board_right"}>
            <ManifestPattern IndClass={'indicator'} IndTitle={'현시패턴'}></ManifestPattern>
            <div className='board_line'>      
            </div>
          </section>

          <div className='board situation'>
            <div className='board_in'>               
                <div className='marker_container' style={{left:'50%', top:'50%'}}>
                    <div className='tooltip_parents'>
                        <ButtonWithComponent type={'button'} onClick={toggleMark} className={markStatus? 'marker mk48 on' : 'marker mk48'}>
                            <ImgComponent className='img_off' src={'crossroad_mv_48.svg'} />
                            <ImgComponent className='img_selected' src={'crossroad_mv_selected_48.svg'} />
                        </ButtonWithComponent>
                        <TooltipwindowComponent title='중앙공원4 (3013) (예술로_문화로)' addedClass={markStatus? 'top on with_marker' : 'top with_marker'}>
                            <div className="marker_information">
                                <div className="marker_textitem">
                                    <p className='info_tit'>속도</p>
                                    <p className='info_details'>45km/h</p>
                                </div>
                                <div className="marker_textitem">
                                    <p className='info_tit'>교통량</p>
                                    <p className='info_details'>365대</p>
                                </div>
                                <div className="marker_textitem">
                                    <p className='info_tit'>최대 대기행렬</p>
                                    <p className='info_details'>789.12m</p>
                                </div>
                                <div className="marker_textitem">
                                    <p className='info_tit'>최소 대기행렬</p>
                                    <p className='info_details'>121.02m</p>
                                </div>
                                <div className="marker_textitem">
                                    <p className='info_tit'>교차로 LOS 등급</p>
                                    <p className='info_details'>A</p>
                                </div>
                            </div>
                        </TooltipwindowComponent>
                    </div>
                </div>
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
                <IndicatorComponent className={'indicator w-100'}>
                    <strong className='fc_primary'>교차로 분석 정보</strong>
                    <div className="tab_line m-t-16">
                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs selected w76'} txt={'직진'} />
                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs w76'} txt={'접근로별'} />
                    </div>
                    <ImgComponent src={'smart_analysis_chart.png'} className={'w-100 m-t-16'} />
                </IndicatorComponent>
                {/* <IndicatorComponent className={'indicator w-100 m-t-20'}>
                    <strong className='fc_primary'>교차로 분석 정보</strong>
                    <div className="tab_line m-t-16">
                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs w76'} txt={'직진'} onClick={''} />
                        <ButtonComponent type={'button'} className={'btn_line1 btn_xs selected w76'} txt={'접근로별'} onClick={''} />
                    </div>                        
                </IndicatorComponent> */}
            </div>

            <SmartFooter />
        </div>
      </div>
    );
};

export default SmartAnalysis;
