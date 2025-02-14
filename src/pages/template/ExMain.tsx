import { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import HeaderLeft from '../../components/header/HeaderLeft';
import Gnb from '../../components/header/Gnb';
import HeaderRight from '../../components/header/HeaderRight';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import HdtimeComponent from '../../components/common/HdtimeComponent';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import BoardTitle from '../../components/layout/BoardTitle';
import BreakIndicator from '../../components/layout/BreakIndicator';
import EventIndicator from '../../components/layout/EventIndicator';
import CommuniIndicator from '../../components/layout/CommuniIndicator';
import BlockIndicator from '../../components/layout/BlockIndicator';
import EtcIndicator from '../../components/layout/EtcIndicator';
import MarkerSettComponent from '../../components/map/MarkerSettComponent';


const ExMain = () => {

    //화살이벤트
    const [leftDel, setLeftDel] = useState<boolean>(false);
    const DeleteLeft = () => {
      setLeftDel(!leftDel);
    }
    const [rightDel, setRightDel] = useState<boolean>(false);
    const DeleteRight = () => {
      setRightDel(!rightDel);
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

          <BoardTitle boardTitle={'부천역사거리 앞 3중 추돌, 부상 3명'} />

          <section className={leftDel? "board_left p-l-0" : "board_left"}>
            <div className='board_line'>
              <ButtonWithComponent onClick={DeleteLeft} className='btn_arrow_l right'>
                <ImgComponent className={'w16'} src={'arrow_left_2line_sky_16.svg'} />
              </ButtonWithComponent>
              <BreakIndicator IndClass={leftDel? 'indicator del' : 'indicator'} IndTitle={'돌발상황 현황'} />
              <EventIndicator IndClass={leftDel? 'indicator overt m-t-8 del' : 'indicator overt m-t-8'} IndTitle={'이벤트 현황'} />
              <article className={leftDel? 'board_etc lefting' : 'board_etc'}>
                <EtcIndicator etcClass={'indi_etc'} IndTitle={'FAB 1'} />
                <EtcIndicator etcClass={'indi_etc'} IndTitle={'FAB 2'} />
                <EtcIndicator etcClass={'indi_etc'} IndTitle={'FAB 3'} />
              </article>
            </div>
          </section>

          <section className={rightDel? "board_right p-r-0" : "board_right"}>
            <div className='board_line'>
              <ButtonWithComponent onClick={DeleteRight} className='btn_arrow_l left'>
                <ImgComponent className={'w16'} src={'arrow_right_2line_sky_16.svg'} />
              </ButtonWithComponent>
              <CommuniIndicator IndClass={rightDel? 'indicator del' : 'indicator'} IndTitle={'소통정보'} />
              <BlockIndicator IndClass={rightDel? 'indicator m-t-8 del' : 'indicator m-t-8'} IndTitle={'주요 정체구간'} />
            </div>
          </section>

          <div className='board main'>
            <div className='board_in'>
              <MarkerSettComponent style={{top:'45%', left:'35%'}} />
              <MarkerSettComponent style={{top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}} />
              <MarkerSettComponent style={{top:'60%', left:'60%'}} />
            </div>
          </div>

          <Footer />

        </div>
      </div>
    );
};

export default ExMain;
