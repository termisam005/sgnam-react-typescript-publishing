/*
스마트교차로 현시패턴 패널
*/
import React from 'react';
import { useState } from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import InputComponent from '../../components/input/InputComponent';


const ManifestPattern = ({ IndClass, IndTitle }) => {

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }
    
    return (
        <article className={IndClass}>
            <div className="indi_top primary_tobk" onClick={clickInd}>
                <h1>{IndTitle}</h1>
                <p className={toggleInd? 'arr_up down':'arr_up'}>
                    <ImgComponent src={'arrow_up16.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts del':'indi_conts'}>
                <ul className="two_row_col">
                    <li className='col_item'>                        
                        <p className='fs_12'>교차로 구분</p>
                        <InputComponent type={'text'} className={'wrput fill line w60'} value={'[4]MI'} />
                    </li>
                    <li className='col_item'>                        
                        <p className='fs_12'>교차로 운영</p>
                        <InputComponent type={'text'} className={'wrput fill line w60'} value={'T100'} />
                    </li>
                    <li className='col_item'>                        
                        <p className='fs_12'>주기</p>
                        <InputComponent type={'text'} className={'wrput fill line w60'} value={'100초'} />
                    </li>
                    <li className='col_item'>                        
                        <p className='fs_12'>변동</p>
                        <InputComponent type={'text'} className={'wrput fill line w60'} value={'85초'} />
                    </li>
                </ul>                
                <table className="table_box th_small m-t-16">
                    <caption className="hidden_tag">현시 패턴 표 목록</caption>
                    <colgroup>
                        <col width={'135px'} />
                        <col width={'24px'} />
                        <col width={'24px'} />
                        <col width={'24px'} />
                        <col width={'24px'} />
                        <col width={'24px'} />
                        <col width={'24px'} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th className="tac" colSpan={2}>현시</th>
                            <th className="tac">1</th>
                            <th className="tac">1</th>
                            <th className="tac">1</th>
                            <th className="tac">1</th>
                            <th className="tac">1</th>
                            <th className="tac">6</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row_type2">
                            <td className="tac" rowSpan={5}>
                                <p className='text_ellipsis w32'>Ring A</p>
                            </td>
                            <td className="word_nowrap">이동류 번호</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="word_nowrap">방향</td>
                            <td className="tac">
                                <ImgComponent src={'ar_top_wh20.svg'} className={'w14'} />
                            </td>
                            <td className="tac">
                                <ImgComponent src={'ar_top_wh20.svg'} className={'w14'} />
                            </td>
                            <td className="tac">
                                <ImgComponent src={'arrow_down_right_20.svg'} />
                            </td>
                            <td className="tac">
                                <ImgComponent src={'ar_left_wh20.svg'} className={'w14'} />
                            </td>
                            <td className="tac">
                                <ImgComponent src={'ar_top_wh20.svg'} className={'w14'} />
                            </td>
                            <td className="tac">
                                <ImgComponent src={'ar_right_up_wh20.svg'} className={'w14'} />
                            </td>
                        </tr>
                        <tr className="row_type2">
                            <td className="word_nowrap">현시(초)</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="word_nowrap">최소녹색시간(초)</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="word_nowrap">황색시간(초)</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac" rowSpan={5}>
                                <p className='text_ellipsis w32'>Ring B</p>
                            </td>
                            <td className="word_nowrap">이동류 번호</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="word_nowrap">방향</td>
                            <td className="tac">
                                <ImgComponent src={'ar_top_wh20.svg'} className={'w14'} />
                            </td>
                            <td className="tac">
                                <ImgComponent src={'ar_top_wh20.svg'} className={'w14'} />
                            </td>
                            <td className="tac">
                                <ImgComponent src={'arrow_down_right_20.svg'} />
                            </td>
                            <td className="tac">
                                <ImgComponent src={'ar_left_wh20.svg'} className={'w14'} />
                            </td>
                            <td className="tac">
                                <ImgComponent src={'ar_top_wh20.svg'} className={'w14'} />
                            </td>
                            <td className="tac">
                                <ImgComponent src={'ar_right_up_wh20.svg'} className={'w14'} />
                            </td>
                        </tr>
                        <tr className="row_type2">
                            <td className="word_nowrap">현시(초)</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="word_nowrap">최소녹색시간(초)</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="word_nowrap">황색시간(초)</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                            <td className="tac">8</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    );
};

export default ManifestPattern;