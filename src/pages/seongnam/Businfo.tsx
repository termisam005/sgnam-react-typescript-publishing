import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import HdtimeComponent from '../../components/common/HdtimeComponent';
import ProfileComponent from '../../components/common/ProfileComponent';
import Nav from '../../components/header/Nav';
import RoadtIndicator from '../../components/layout/RoadtIndicator';
import RouteIndicator from '../../components/layout/RouteIndicator';
import RouteListIndicator from '../../components/layout/RouteListIndicator';
import BusinfoFooter from '../../components/footer/BusinfoFooter';

import ImgComponent from '../../components/common/ImgComponent';
import MarkerComponent from '../../components/map/MarkerComponent';
import PopupComponent from '../../components/popup/PopupComponent';
import ExpPagingComponent from '../../components/common/ExpPagingComponent';


const Businfo = () => {
//버스정보 노선정보 페이지

    //지도 마커 토글
    const [markStatus, setMarkStatus] = useState<boolean>(false);
    const toggleMark = () => {
        setMarkStatus(!markStatus);
    }
    const closeMark = () =>{
        setMarkStatus(false);
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
                <div className="tab_dashboard w320">
                    <Link className={'btn_toggle_floating btn_m selected flex1'} to="/businfo">노선조회</Link>
                    <Link className={'btn_toggle_floating btn_m flex1'} to="/businfobit">BIT 상태</Link>
                </div>
                <RouteIndicator IndClass={'indicator'} IndTitle={'노선 조회'} />
                <RouteListIndicator IndClass={'indicator overt m-t-8'} IndTitle={'노선 목록'} />
            </div>
          </section>

          <section className={"board_right"}>
            <div className='board_line'>
              <div style={{position:'absolute', top:'0', right:'21.25rem'}}>
                <RoadtIndicator IndClass={'indicator'} IndTitle={'노선명'} empty={true} />
              </div>
              {/* '버스노선 없을때' 임의로 position 잡음  */}

              <RoadtIndicator IndClass={'indicator'} IndTitle={'(마을)013-1'} />
              {/* <RoadtIndicator IndClass={'indicator'} IndTitle={'노선명'} empty={true} /> */}
            </div>
          </section>

          <div className='board situation'>
            <div className='board_in'>
                <article className={'marker_container'} style={{top:'60%', left:'50%'}}>
                    <div className='tooltip_parents'>
                        <MarkerComponent onClick={toggleMark} className={markStatus? 'marker mk48 on' : 'marker mk48'}>
                            <ImgComponent className='img_off' src={'bus_stop_48.svg'} />
                            <ImgComponent className='img_selected' src={'bus_stop_selected_48.svg'} />
                        </MarkerComponent>
                        <PopupComponent boxClass={markStatus? 'popover_box w320 map_top dpblock' : 'popover_box w320 map_top'} titleBgClass={'popup_title_bg'} 
                        titleClass={'popup_title'} title={'경남아너스빌(11389)'} close={closeMark}>
                            <div className="popup_contents p-20">
                                <div className="bg_traffic p-8">
                                    <div className="dflx_ac m-b-10">
                                        <p className="label_tag grade_color08 fs_11_medium">일반</p>
                                        <p className="fs_16_bold p-l-8">076</p>
                                        <p className="label_txt fs_12">판교역동편 방면</p>
                                    </div>
                                    <div className="busrt_dl">
                                        <p className="op06 fs_11 p-r-10">1번째</p>
                                        <div className='dflx_ac'>
                                            <span className="fs_14_medium">7분 후</span>
                                            <div className="busrt_wrap m-l-8">
                                                <span className="call">5번째 전</span>
                                                <span className="green">여유</span>
                                                <span className="green">저상</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="busrt_dl m-t-4">
                                        <p className="op06 fs_11 p-r-10">2번째</p>
                                        <div className='dflx_ac'>
                                            <span className="fs_14_medium">20분 후</span>
                                            <div className="busrt_wrap m-l-8">
                                                <span className="call">20번째 전</span>
                                                <span className="red">혼잡</span>
                                                <span className="green">저상</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg_traffic p-8 m-t-4">
                                    <div className="dflx_ac m-b-10">
                                        <p className="label_tag grade_color08 fs_11_medium">일반</p>
                                        <p className="fs_16_bold p-l-8">076</p>
                                        <p className="label_txt fs_12">판교역동편 방면</p>
                                    </div>
                                    <div className="busrt_dl">
                                        <p className="op06 fs_11 p-r-10">1번째</p>
                                        <div className='dflx_ac'>
                                            <span className="fs_14_medium">7분 후</span>
                                            <div className="busrt_wrap m-l-8">
                                                <span className="call">5번째 전</span>
                                                <span className="green">여유</span>
                                                <span className="green">저상</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="busrt_dl m-t-4">
                                        <p className="op06 fs_11 p-r-10">2번째</p>
                                        <div className='dflx_ac'>
                                            <span className="fs_14_medium">20분 후</span>
                                            <div className="busrt_wrap m-l-8">
                                                <span className="call">20번째 전</span>
                                                <span className="red">혼잡</span>
                                                <span className="green">저상</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ExpPagingComponent />
                            </div>
                        </PopupComponent>
                    </div>
                </article>
                
            </div>
          </div>

          <BusinfoFooter />

        </div>
      </div>
    );
};

export default Businfo;
