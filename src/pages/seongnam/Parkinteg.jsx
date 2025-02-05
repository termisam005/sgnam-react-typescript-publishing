import React from 'react';
import Header from '../../components/header/Header';
import HeaderLeft from '../../components/header/HeaderLeft';
import HeaderRight from '../../components/header/HeaderRight';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import HdtimeComponent from '../../components/common/HdtimeComponent';
import ProfileComponent from '../../components/common/ProfileComponent';
import Nav from '../../components/header/Nav';
import ParkingFooter from '../../components/footer/ParkingFooter';

import ButtonComponent from '../../components/common/ButtonComponent';
import ImgComponent from '../../components/common/ImgComponent';
import RateBar from '../../components/etc/RateBar';

import DefaultInidicator from '../../components/layout/DefaultInidicator';
import ParkingIndicator from '../../components/layout/ParkingIndicator';
import OverflowInidicator from '../../components/layout/OverflowInidicator';

import SelectComponent from '../../components/select/SelectComponent';

const Parkinteg = () => {
//주차통합 페이지

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
                <ParkingIndicator IndClass={'indicator'} IndTitle={'주차현황'} />
                <OverflowInidicator IndClass={'indicator overt m-t-10 p-b-0'} IndTitle={'주차장 목록'}>
                    <div className="indi_vert682 scroll sc_y">
                        <table className="table_box m-b-20">
                            <caption className="hidden_tag">테이블 리스트</caption>
                            <thead>
                                <tr>
                                    <th className="tac"><p className='text_ellipsis w88'>ID</p></th>
                                    <th className="tac"><p className='text_ellipsis w150'>주차장</p></th>
                                    <th className="tac"><p className='text_ellipsis w40'>현황</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row_type2">
                                    <td className="tac">SNPK0001</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_error_code">만차</td>
                                </tr>    
                                <tr className="row_type2">
                                    <td className="tac">SNPK0002</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_yellow">혼잡</td>
                                </tr> 
                                <tr className="row_type2">
                                    <td className="tac">SNPK0003</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_green_list">여유</td>
                                </tr>        
                                <tr className="row_type2">
                                    <td className="tac">SNPK0001</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_error_code">만차</td>
                                </tr>    
                                <tr className="row_type2">
                                    <td className="tac">SNPK0001</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_error_code">만차</td>
                                </tr>    
                                <tr className="row_type2">
                                    <td className="tac">SNPK0001</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_error_code">만차</td>
                                </tr>    
                                <tr className="row_type2">
                                    <td className="tac">SNPK0001</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_error_code">만차</td>
                                </tr>    
                                <tr className="row_type2">
                                    <td className="tac">SNPK0001</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_error_code">만차</td>
                                </tr>    
                                <tr className="row_type2">
                                    <td className="tac">SNPK0002</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_yellow">혼잡</td>
                                </tr>  
                                <tr className="row_type2">
                                    <td className="tac">SNPK0002</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_yellow">혼잡</td>
                                </tr>  
                                <tr className="row_type2">
                                    <td className="tac">SNPK0002</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_yellow">혼잡</td>
                                </tr>  
                                <tr className="row_type2">
                                    <td className="tac">SNPK0002</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_yellow">혼잡</td>
                                </tr>  
                                <tr className="row_type2">
                                    <td className="tac">SNPK0002</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_yellow">혼잡</td>
                                </tr>       
                                <tr className="row_type2">
                                    <td className="tac">SNPK0003</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_green_list">여유</td>
                                </tr>   
                                <tr className="row_type2">
                                    <td className="tac">SNPK0003</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_green_list">여유</td>
                                </tr>   
                                <tr className="row_type2">
                                    <td className="tac">SNPK0003</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_green_list">여유</td>
                                </tr>   
                                <tr className="row_type2">
                                    <td className="tac">SNPK0003</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_green_list">여유</td>
                                </tr>   
                                <tr className="row_type2">
                                    <td className="tac">SNPK0003</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac fc_green_list">여유</td>
                                </tr>                               
                            </tbody>
                        </table>
                    </div>
                </OverflowInidicator>
                <article className={'board_with'}>                
                    <ButtonComponent type={'button'} className={'btn_floating btn_m btn_board_left'} txt={'지역별 점유율'} />
                </article>
            </div>
          </section>

          <section className={"board_right"}>
            <div className='board_line'>
                <DefaultInidicator IndClass={'indicator'} IndTitle={'성남시청 주차현황'}>
                    <p className='fs_11_medium fc_grey60 m-b-16'>2023.01.01</p>
                    <p className='fs_14_bold m-b-8'>시간별 점유율</p>
                    <ImgComponent src='parking_rate_hour.png' />

                    <p className='fs_14_bold m-t-16 m-b-8'>시간별 점유율</p>
                    <RateBar color={'skyblue'} percent={'50.8%'}></RateBar>

                    <p className='fs_14_bold m-t-16 m-b-8'>일평균 점유율</p>
                    <RateBar color={'blue'} percent={'75.9%'}></RateBar>
                </DefaultInidicator>

                <OverflowInidicator IndClass={'indicator overt m-t-8 p-b-0'} IndTitle={'주차 효율'}>
                    <div className='m-b-8 m-r-8'>
                        <SelectComponent className={'selector sm w-100'}>
                            <option value="">월단위 주차효율 Top 5</option>
                            <option value="">월단위 주차효율 Top 10</option>
                            <option value="">월단위 주차효율 Top 15</option>
                        </SelectComponent>
                    </div>                    
                    <div className="indi_vert216 scroll sc_y">
                        <table className="table_box m-b-20">
                            <caption className="hidden_tag">테이블 리스트</caption>
                            <thead>
                                <tr>
                                    <th className="tac"><p className='text_ellipsis w36'>순위</p></th>
                                    <th className="tac"><p className='text_ellipsis w125'>주차장</p></th>
                                    <th className="tac"><p className='text_ellipsis w118'>주차효율</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac">120.00%</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">2</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac">120.00%</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">3</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac">120.00%</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">4</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac">120.00%</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">5</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac">120.00%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </OverflowInidicator>

                <OverflowInidicator IndClass={'indicator overt m-t-8 p-b-0'} IndTitle={'월 주차 점유율'}>
                    <div className='m-b-8 m-r-8'>
                        <SelectComponent className={'selector sm w-100'}>
                            <option value="">월단위 주차효율 Top 5</option>
                            <option value="">월단위 주차효율 Top 10</option>
                            <option value="">월단위 주차효율 Top 15</option>
                        </SelectComponent>
                    </div>                    
                    <div className="indi_vert216 scroll sc_y">
                        <table className="table_box m-b-20">
                            <caption className="hidden_tag">테이블 리스트</caption>
                            <thead>
                                <tr>
                                    <th className="tac"><p className='text_ellipsis w36'>순위</p></th>
                                    <th className="tac"><p className='text_ellipsis w125'>주차장</p></th>
                                    <th className="tac"><p className='text_ellipsis w118'>점유율</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac">120.00%</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">2</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac">120.00%</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">3</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac">120.00%</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">4</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac">120.00%</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">5</td>
                                    <td className="tac">종합운동장부설주차장</td>
                                    <td className="tac">120.00%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </OverflowInidicator>
            </div>
          </section>

          <div className='board situation'>
            <div className='board_in'>
            </div>
          </div>

        </div>
        <ParkingFooter />
      </div>
    );
};

export default Parkinteg;
