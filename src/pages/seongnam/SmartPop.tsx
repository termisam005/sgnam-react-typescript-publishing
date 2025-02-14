import Header from '../../components/header/Header';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import SmartFooter from '../../components/footer/SmartFooter';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import HdtimeComponent from '../../components/common/HdtimeComponent';
import ProfileComponent from '../../components/common/ProfileComponent';
import ImgComponent from '../../components/common/ImgComponent';
import Nav from '../../components/header/Nav';
import IndicatorComponent from '../../components/card/IndicatorComponent';


const SmartPop = () => {
//스마트교차로 팝업모음 페이지

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
                <article className={'indicator p-b-0'}>
                    <p className='fs_14_bold'>접근로 목록</p>                    
                    <div className="scroll_y h400 m-t-16">
                        <div className="scroll_y_wrap">
                            <div className="scroll_y_contetns">
                                <table className="table_box m-b-20">
                                    <caption className="hidden_tag">접근로 목록 테이블</caption>
                                    <thead>
                                        <tr>
                                            <th className="tac"><p className='w80'>접근로명</p></th>
                                            <th className="tac"><p className='w118'>방향</p></th>
                                            <th className="tac"><p className='w80'>현시번호</p></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="row_type2">
                                            <td className="tac">1</td>
                                            <td className="tac">네이버앞사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>
                                        <tr className="row_type2">
                                            <td className="tac">2</td>
                                            <td className="tac">삼평사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[1]주교차로</p>
                                            </td>
                                        </tr>   
                                        <tr className="row_type2">
                                            <td className="tac">3</td>
                                            <td className="tac">백현사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>
                                        <tr className="row_type2">
                                            <td className="tac">4</td>
                                            <td className="tac">동막교삼거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>
                                        <tr className="row_type2">
                                            <td className="tac">5</td>
                                            <td className="tac">장미사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>
                                        <tr className="row_type2">
                                            <td className="tac">6</td>
                                            <td className="tac">궁내사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>
                                        <tr className="row_type2">
                                            <td className="tac">7</td>
                                            <td className="tac">미금사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>
                                        <tr className="row_type2">
                                            <td className="tac">8</td>
                                            <td className="tac">등자로사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>
                                        <tr className="row_type2">
                                            <td className="tac">9</td>
                                            <td className="tac">고등동사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>
                                        <tr className="row_type2">
                                            <td className="tac">1</td>
                                            <td className="tac">네이버앞사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>
                                        <tr className="row_type2">
                                            <td className="tac">2</td>
                                            <td className="tac">삼평사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>   
                                        <tr className="row_type2">
                                            <td className="tac">3</td>
                                            <td className="tac">백현사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>
                                        <tr className="row_type2">
                                            <td className="tac">4</td>
                                            <td className="tac">동막교삼거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>
                                        <tr className="row_type2">
                                            <td className="tac">5</td>
                                            <td className="tac">장미사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>
                                        <tr className="row_type2">
                                            <td className="tac">6</td>
                                            <td className="tac">궁내사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>
                                        <tr className="row_type2">
                                            <td className="tac">7</td>
                                            <td className="tac">미금사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>
                                        <tr className="row_type2">
                                            <td className="tac">8</td>
                                            <td className="tac">등자로사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>
                                        <tr className="row_type2">
                                            <td className="tac">9</td>
                                            <td className="tac">고등동사거리</td>
                                            <td className="tac">
                                                <p className='text_ellipsis w64'>[2]주교차로</p>
                                            </td>
                                        </tr>                          
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
          </section>

          <section className={"board_right"}>
            <div className='board_line'>
            </div>
          </section>

          <div className='board situation'>
            <div className='board_in'>               
            </div>
          </div>

          <section className='board_bottom'>
            <IndicatorComponent className={'indicator w-100'}>
                <strong className='fc_primary'>도로 정보</strong>
                <table className="table_box m-t-16">
                    <caption className="hidden_tag">테이블 리스트</caption>
                    <thead className='approach_detect_table'>
                        <tr>
                            <th className="tac"><p className='text_ellipsis'>도로명</p></th>
                            <th className="tac"><p className='text_ellipsis'>등급</p></th>
                            <th className="tac"><p className='text_ellipsis'>길이</p></th>
                            <th className="tac"><p className='text_ellipsis'>편도 차선수</p></th>
                            <th className="tac"><p className='text_ellipsis'>교차로 방향</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row_type2">
                            <td className="tac">문매역4</td>
                            <td className="tac">1</td>
                            <td className="tac">200m</td>
                            <td className="tac">2</td>
                            <td className="tac">3012</td>
                        </tr>
                    </tbody>
                </table>
                <div className='indi_chart m-t-16'>
                    <ImgComponent src={'smart_road_chart.png'} />
                </div>
            </IndicatorComponent>
          </section>

          <SmartFooter />
        </div>
      </div>
    );
};

export default SmartPop;
