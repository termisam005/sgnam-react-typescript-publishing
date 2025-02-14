import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import HdtimeComponent from '../../components/common/HdtimeComponent';
import ProfileComponent from '../../components/common/ProfileComponent';
import Nav from '../../components/header/Nav';

import BitStatusIndicator from '../../components/layout/BitStatusIndicator';
import BitDetailIndicator from '../../components/layout/BitDetailIndicator';
import BitInfoIndicator from '../../components/layout/BitInfoIndicator';


const BusinfoBit = () => {
//버스정보 BIT 상태 페이지

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
                    <Link to="/businfo" className={'btn_toggle_floating btn_m flex1'}>노선조회</Link>
                    <Link to="/businfobit" className={'btn_toggle_floating btn_m selected flex1'}>BIT 상태</Link>
                </div>
                <BitStatusIndicator IndClass={'indicator overt'} IndTitle={'BIT상태'} />
            </div>
          </section>

          <section className={"board_right"}>
            <div className='board_line'>
              <BitDetailIndicator IndClass={'indicator'} IndTitle={'주공2단지,창영초등학교'} />
              <BitInfoIndicator IndClass={'indicator m-t-8'} IndTitle={'BIT 상태(타이틀 중복)'} />
            </div>
          </section>

          <div className='board situation'>
            <div className='board_in'>
            </div>
          </div>

        </div>
      </div>
    );
};

export default BusinfoBit;
