import { useState, CSSProperties } from 'react';
import ImgComponent from '../common/ImgComponent';
import PopupComponent from './PopupComponent';
import InputComponent from '../input/InputComponent';


interface Props{
    style?: CSSProperties; 
    title?: string;
}

const PopSummary = ({ style, title }:Props) => {

    const [markStatus, setMarkStatus] = useState<boolean>(true);
    const closeMark = () =>{
      setMarkStatus(false);
    }
    
    return (
        <article className={'marker_container'} style={style}>

            <PopupComponent boxClass={markStatus? 'w700' : 'dpnone'} titleBgClass={'popup_title_bg'} titleClass={'popup_title'} title={title} close={closeMark}>
                <div className="popup_contents p-20">
                    <div className='dflx m-b-20'>
                        <span className='fs_13 op06'>23.12.05(토)</span>
                    </div>

                    <div className='grid_column2 col_gap30 row_gap4'>
                        <dl className='popinfo_dl'>
                            <dt className='w64'>교차로 번호</dt>
                            <dd>
                                <InputComponent type={'text'} className={'wrput read_light w-100'} value={'33'} />
                            </dd>
                        </dl>
                        <dl className='popinfo_dl'>
                            <dt className='w64'>지역</dt>
                            <dd>
                                <InputComponent type={'text'} className={'wrput read_light w-100'} value={'성남시 중원구'} />
                            </dd>
                        </dl>
                        <dl className='popinfo_dl'>
                            <dt className='w64'>교차로명</dt>
                            <dd>
                                <InputComponent type={'text'} className={'wrput read_light w-100'} value={'장미사거리'} />
                            </dd>
                        </dl>
                        <dl className='popinfo_dl'>
                            <dt className='w64'>조사일</dt>
                            <dd>
                                <InputComponent type={'text'} className={'wrput read_light w-100'} value={'2024.10.02'} />
                            </dd>
                        </dl>
                    </div>

                    <section className='summary_zone m-t-20'>
                        <div className='cross_zone'>
                            <p className='p_cross'>
                                <ImgComponent className={'w70'} src={'img_cross_indi.svg'} />
                            </p>
                            <article className='cross_box'>
                                <p className='cross_txt top'>야탑사거리</p>
                                <p className='cross_txt right'>야탑공원 앞삼거리</p>
                                <p className='cross_txt bottom'>야탑역단일로</p>
                                <p className='cross_txt left'>터미널삼거리</p>
                                <div className='cross_conts'>
                                    <div></div>
                                    <div className='cross_road top'>
                                        <div className='road_direct dflx_dcol_ac'>
                                            <span className='direct_number'>10</span>
                                            <p className='dflx_ac_jcent w20 h20'>
                                                <ImgComponent className={'w-100'} src={'arrow_diagonal_left_down_20.svg'} />
                                            </p>
                                        </div>
                                        <div className='road_direct dflx_dcol_ac'>
                                            <span className='direct_number'>3</span>
                                            <p className='dflx_ac_jcent w20 h20'>
                                                <ImgComponent className={'w-100'} src={'arrow_down_20.svg'} />
                                            </p>
                                        </div>
                                        <div className='road_direct dflx_dcol_ac'>
                                            <span className='direct_number'>4</span>
                                            <p className='dflx_ac_jcent w20 h20'>
                                                <ImgComponent className={'w-100'} src={'arrow_diagonal_right_down_20.svg'} />
                                            </p>
                                        </div>
                                    </div>
                                    <div></div>
                                    <div className='cross_road left'>
                                        <div className='road_direct dflx_ac'>
                                            <span className='direct_number'>6</span>
                                            <p className='dflx_ac_jcent w20 h20'>
                                                <ImgComponent className={'w-100'} src={'arrow_diagonal_right_up_20.svg'} />
                                            </p>
                                        </div>
                                        <div className='road_direct dflx_ac'>
                                            <span className='direct_number'>5</span>
                                            <p className='dflx_ac_jcent w20 h20'>
                                                <ImgComponent className={'w-100'} src={'arrow_right_20.svg'} />
                                            </p>
                                        </div>
                                        <div className='road_direct dflx_ac'>
                                            <span className='direct_number'>11</span>
                                            <p className='dflx_ac_jcent w20 h20'>
                                                <ImgComponent className={'w-100'} src={'arrow_diagonal_right_down_20.svg'} />
                                            </p>
                                        </div>
                                    </div>
                                    <div></div>
                                    <div className='cross_road right'>
                                        <div className='road_direct dflx_ac'>
                                            <p className='dflx_ac_jcent w20 h20'>
                                                <ImgComponent className={'w-100'} src={'arrow_diagonal_left_up_20.svg'} />
                                            </p>
                                            <span className='direct_number'>12</span>
                                        </div>
                                        <div className='road_direct dflx_ac'>
                                            <p className='dflx_ac_jcent w20 h20'>
                                                <ImgComponent className={'w-100'} src={'arrow_left_20.svg'} />
                                            </p>
                                            <span className='direct_number'>7</span>
                                        </div>
                                        <div className='road_direct dflx_ac'>
                                            <p className='dflx_ac_jcent w20 h20'>
                                                <ImgComponent className={'w-100'} src={'arrow_diagonal_left_down_20.svg'} />
                                            </p>
                                            <span className='direct_number'>8</span>
                                        </div>
                                    </div>
                                    <div></div>
                                    <div className='cross_road bottom'>
                                        <div className='road_direct dflx_dcol_ac'>
                                            <p className='dflx_ac_jcent w20 h20'>
                                                <ImgComponent className={'w-100'} src={'arrow_diagonal_left_up_20.svg'} />
                                            </p>
                                            <span className='direct_number'>2</span>
                                        </div>
                                        <div className='road_direct dflx_dcol_ac'>
                                            <p className='dflx_ac_jcent w20 h20'>
                                                <ImgComponent className={'w-100'} src={'arrow_up_20.svg'} />
                                            </p>
                                            <span className='direct_number'>1</span>
                                        </div>
                                        <div className='road_direct dflx_dcol_ac'>
                                            <p className='dflx_ac_jcent w20 h20'>
                                                <ImgComponent className={'w-100'} src={'arrow_diagonal_right_up_20.svg'} />
                                            </p>
                                            <span className='direct_number'>9</span>
                                        </div>
                                    </div>
                                    <div></div>
                                </div>
                            </article>
                        </div>
                        <table className="table_box th_medium">
                            <caption className="hidden_tag">교통량 집계표 목록</caption>
                            <thead>
                                <tr>
                                    <th className="tac" rowSpan={2} style={{width:'7%'}}>LINK NO</th>
                                    <th className="tac bd_bottom1" colSpan={3}>AM (08:00 ~ 09:00)</th>
                                    <th className="tac bd_bottom1" colSpan={3}>OFF (12:00 ~ 13:00)</th>
                                    <th className="tac bd_bottom1" colSpan={3}>PM (17:00 ~ 18:00)</th>
                                </tr>
                                <tr>
                                    <th className="tac">대형</th>
                                    <th className="tac">소형</th>
                                    <th className="tac">P.C.U</th>
                                    <th className="tac">대형</th>
                                    <th className="tac">소형</th>
                                    <th className="tac">P.C.U</th>
                                    <th className="tac">대형</th>
                                    <th className="tac">소형</th>
                                    <th className="tac">P.C.U</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row_type2">
                                    <td className="tac">1</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">2</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">3</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">4</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">5</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">6</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">7</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">8</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">9</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">10</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">11</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                </tr>
                                <tr className="row_type2">
                                    <td className="tac">12</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                    <td className="tac">8</td>
                                    <td className="tac">79</td>
                                    <td className="tac">95</td>
                                </tr>
                                <tr className='row_type2 selected'>
                                    <td className="tac">Total</td>
                                    <td className="tac">102</td>
                                    <td className="tac">102</td>
                                    <td className="tac">102</td>
                                    <td className="tac">102</td>
                                    <td className="tac">102</td>
                                    <td className="tac">102</td>
                                    <td className="tac">102</td>
                                    <td className="tac">102</td>
                                    <td className="tac">102</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section className='dflx gap_20 m-t-32'>
                        <div className='flex1'>
                            <div className='dflx_jbet m-b-12'>
                                <p className='fs_13_medium fc_white'>자료 분석</p>
                            </div>
                            <table className='table_box th_medium'>
                                <thead>
                                    <tr>
                                        <th className='tac' style={{width:'22%'}}></th>
                                        <th className='tac'>AM</th>
                                        <th className='tac'>AM</th>
                                        <th className='tac'>AM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='row_type2'>
                                        <th className='tac td'>SUM</th>
                                        <td className='tac'>2003</td>
                                        <td className='tac'>2003</td>
                                        <td className='tac'>2003</td>
                                    </tr>
                                    <tr className='row_type2'>
                                        <th className='tac td'>P.H.F</th>
                                        <td className='tac'>2003</td>
                                        <td className='tac'>2003</td>
                                        <td className='tac'>2003</td>
                                    </tr>
                                    <tr className='row_type2'>
                                        <th className='tac td'>HOV</th>
                                        <td className='tac'>2003</td>
                                        <td className='tac'>2003</td>
                                        <td className='tac'>2003</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='flex1'>
                            <div className='dflx_jbet m-b-12'>
                                <p className='fs_13_medium fc_white'>RATE</p>
                            </div>
                            <table className='table_box th_medium'>
                                <thead>
                                    <tr>
                                        <th className='tac' style={{width:'22%'}}></th>
                                        <th className='tac'>AM</th>
                                        <th className='tac'>AM</th>
                                        <th className='tac'>AM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='row_type2'>
                                        <th className='tac td'>NBL</th>
                                        <td className='tac'>3.1%</td>
                                        <td className='tac'>3.9%</td>
                                        <td className='tac'>5.3%</td>
                                    </tr>
                                    <tr className='row_type2'>
                                        <th className='tac td'>NBL</th>
                                        <td className='tac'>3.1%</td>
                                        <td className='tac'>3.9%</td>
                                        <td className='tac'>5.3%</td>
                                    </tr>
                                    <tr className='row_type2'>
                                        <th className='tac td'>NBL</th>
                                        <td className='tac'>3.1%</td>
                                        <td className='tac'>3.9%</td>
                                        <td className='tac'>5.3%</td>
                                    </tr>
                                    <tr className='row_type2'>
                                        <th className='tac td'>NBL</th>
                                        <td className='tac'>SBL</td>
                                        <td className='tac'>EBL</td>
                                        <td className='tac'>WBL</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </PopupComponent>

        </article>
    )
}

export default PopSummary;

