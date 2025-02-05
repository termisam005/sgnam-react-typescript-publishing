import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/Header';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import HdtimeComponent from '../../components/common/HdtimeComponent';
import ProfileComponent from '../../components/common/ProfileComponent';
import Nav from '../../components/header/Nav';

import TrafficStIndicator from '../../components/layout/TrafficStIndicator';
import MonitorIndicator from '../../components/layout/MonitorIndicator';
import WeatherIndicator from '../../components/layout/WeatherIndicator';
import EventStIndicator from '../../components/layout/EventStIndicator';
import BreakInfoIndicator from '../../components/layout/BreakInfoIndicator';
import BreaktotallIndicator from '../../components/layout/BreaktotallIndicator';

import PopupComponent from '../../components/popup/PopupComponent';
import TableMachine from '../../components/table/TableMachine';
import ImgComponent from '../../components/common/ImgComponent';
import MarkerComponent from '../../components/map/MarkerComponent';
import TableCrossMachine from '../../components/table/TableCrossMachine';
import TableCrossInfo from '../../components/table/TableCrossInfo';
import SituationFooter from '../../components/footer/SituationFooter';
import MarkerOnlyComponent from '../../components/map/MarkerOnlyComponent';


const Main = () => {
//상황관리 페이지

    //시설물 모니터링 리스트 보여주기
    const [showList, setShowList] = useState(false);
    const clickList = () => {
      setShowList(true);
    }
    const closeList = () =>{
      setShowList(false);
    }

    //지도 마커 토글
    const [markStatus, setMarkStatus] = useState(false);
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
              <TrafficStIndicator IndClass={'indicator'} IndTitle={'교통 현황'} />
              <BreaktotallIndicator IndClass={'indicator m-t-8'} IndTitle={'돌발 통계'} />
              <WeatherIndicator IndClass={'indicator m-t-8'} IndTitle={'기상 정보'} />
              <div className={showList? 'board_list dpblock' : 'board_list'}>
                <PopupComponent boxClass={'popover_box w320'} titleBgClass={'popup_title_bg'} titleClass={'popup_title'} 
                title={'기기 목록'} close={closeList}>
                    <div className="popup_contents p-20">
                      <TableMachine tableClass={'uni_table01 list_table'} />
                    </div>
                </PopupComponent>
              </div>
            </div>
          </section>

          <section className={"board_right"}>
            <div className='board_line'>
              <EventStIndicator IndClass={'indicator overt'} IndTitle={'이벤트 현황'} />
              <MonitorIndicator IndClass={'indicator m-t-8'} IndTitle={'시설물 모니터링'} clickList={clickList} />
            </div>
          </section>

          <div className='board situation'>
            <div className='board_in'>

              <MarkerOnlyComponent size={'mk48'} style={{top:'60%', left:'35%'}}>
                <ImgComponent className='img_off' src={'crossroad_violet_48.svg'} />
                <ImgComponent className='img_selected' src={'crossroad_violet_selected_48.svg'} />
              </MarkerOnlyComponent>

              <MarkerOnlyComponent size={'mk48'} style={{top:'60%', left:'40%'}}>
                <ImgComponent className='img_off' src={'crossroad_mv_48.svg'} />
                <ImgComponent className='img_selected' src={'crossroad_mv_selected_48.svg'} />
              </MarkerOnlyComponent>

              <article className={'marker_container'} style={{top:'60%', left:'50%'}}>
                <div className='tooltip_parents'>
                    <MarkerComponent onClick={toggleMark} className={markStatus? 'marker mk48 on' : 'marker mk48'}>
                        <ImgComponent className='img_off' src={'crossroad_mv_48.svg'} />
                        <ImgComponent className='img_selected' src={'crossroad_mv_selected_48.svg'} />
                    </MarkerComponent>
                    <PopupComponent boxClass={markStatus? 'popover_box w480 map_top dpblock' : 'popover_box w480 map_top'} titleBgClass={'popup_title_bg'} 
                      titleClass={'popup_title'} title={'영상 스마트교차로 정보'} close={closeMark}>
                        <div className="popup_contents p-20">
                          <TableCrossMachine tableClass={'uni_table01 list_table m-b-12'} />
                          <TableCrossInfo tableClass={'uni_table01 monitor_table info'} />
                        </div>
                    </PopupComponent>
                </div>
              </article>

            </div>
          </div>

          <SituationFooter />

        </div>
      </div>
    );
};

export default Main;
