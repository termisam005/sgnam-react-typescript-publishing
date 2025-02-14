import Header from '../../components/header/Header';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import HdtimeComponent from '../../components/common/HdtimeComponent';
import ProfileComponent from '../../components/common/ProfileComponent';
import Nav from '../../components/header/Nav';
import SituationFooter from '../../components/footer/SituationFooter';
import BreakInfoIndicator from '../../components/layout/BreakInfoIndicator';

import MarkerPopDetail from '../../components/popup/MarkerPopDetail';
import MarkerPopStreet from '../../components/popup/MarkerPopStreet';
import MarkerPopVms from '../../components/popup/MarkerPopVms';
import MarkerPopVds from '../../components/popup/MarkerPopVds';
import MarkerPopDsrc from '../../components/popup/MarkerPopDsrc';
import MarkerPopBreak from '../../components/popup/MarkerPopBreak';
import PopSummary from '../../components/popup/PopSummary';


const MainPop = () => {
//상황관리 추가 팝업 페이지

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

          <section className={"board_right"}>
            <div className='board_line'>
              <BreakInfoIndicator IndClass={'indicator m-t-8'} IndTitle={'돌발 정보'} />
            </div>
          </section>

          <div className='board situation'>
            <div className='board_in'>
                
                <MarkerPopDetail style={{top:'58%',left:'30%'}} title={'레이더식S교차로 상세정보'} />
                <MarkerPopStreet style={{top:'58%',left:'48%'}} title={'시청역사거리'} />
                <MarkerPopVms style={{top:'58%',left:'70%'}} title={'VMS 정보'} />
                <MarkerPopVds style={{top:'92%',left:'25%'}} title={'VDS 정보'} />
                <MarkerPopDsrc style={{top:'92%',left:'54%'}} title={'DSRC 정보'} />
                <MarkerPopBreak style={{top:'92%',left:'78%'}} title={'돌발 정보'} />

                {/* 교통량 집계표 팝업 */}
                <PopSummary style={{top:'55%',left:'20%'}} title={'교통량 집계표'} />
                
            </div>
          </div>

          <SituationFooter />

        </div>
      </div>
    );
};

export default MainPop;
