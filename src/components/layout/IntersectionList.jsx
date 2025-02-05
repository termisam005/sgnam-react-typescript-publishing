/*
스마트교차로 교차로 목록
*/
import React from 'react';
import { useState } from 'react';

import SearchSettLineComponent from '../../components/search/SearchSettLineComponent';

const IntersectionList = ({ IndClass, IndTitle }) => {

    return (
        <article className={IndClass}>
            <h2 className='fs_14_bold'>{IndTitle}</h2>
            <SearchSettLineComponent lineClass={'srch_line m-t-16 m-r-8'} zoneClass={'put_zone'} type={'text'} placeholder={'Search'} value={'Label'} />
            
            <div className="indi_vert430 scroll sc_y m-t-8">
                <table className="table_box m-b-20">
                    <caption className="hidden_tag">테이블 리스트</caption>
                    <thead>
                        <tr>
                            <th className="tac"><p className='text_ellipsis w40'>No.</p></th>
                            <th className="tac"><p className='text_ellipsis w118'>교차로명</p></th>
                            <th className="tac"><p className='text_ellipsis w120'>주교차로구분 코드명</p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row_type2">
                            <td className="tac">1</td>
                            <td className="tac">네이버앞사거리</td>
                            <td className="tac">[2]주교차로</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac">2</td>
                            <td className="tac">삼평사거리</td>
                            <td className="tac">[1]주교차로</td>
                        </tr>   
                        <tr className="row_type2">
                            <td className="tac">3</td>
                            <td className="tac">백현사거리</td>
                            <td className="tac">[2]주교차로</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac">4</td>
                            <td className="tac">동막교삼거리</td>
                            <td className="tac">[1]주교차로</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac">5</td>
                            <td className="tac">장미사거리</td>
                            <td className="tac">[2]주교차로</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac">6</td>
                            <td className="tac">궁내사거리</td>
                            <td className="tac">[1]주교차로</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac">7</td>
                            <td className="tac">미금사거리</td>
                            <td className="tac">[2]주교차로</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac">8</td>
                            <td className="tac">등자로사거리</td>
                            <td className="tac">[3]주교차로</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac">9</td>
                            <td className="tac">고등동사거리</td>
                            <td className="tac">[1]연등교차로</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac">1</td>
                            <td className="tac">네이버앞사거리</td>
                            <td className="tac">[2]주교차로</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac">2</td>
                            <td className="tac">삼평사거리</td>
                            <td className="tac">[1]주교차로</td>
                        </tr>   
                        <tr className="row_type2">
                            <td className="tac">3</td>
                            <td className="tac">백현사거리</td>
                            <td className="tac">[2]주교차로</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac">4</td>
                            <td className="tac">동막교삼거리</td>
                            <td className="tac">[1]주교차로</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac">5</td>
                            <td className="tac">장미사거리</td>
                            <td className="tac">[2]주교차로</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac">6</td>
                            <td className="tac">궁내사거리</td>
                            <td className="tac">[1]주교차로</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac">7</td>
                            <td className="tac">미금사거리</td>
                            <td className="tac">[2]주교차로</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac">8</td>
                            <td className="tac">등자로사거리</td>
                            <td className="tac">[3]주교차로</td>
                        </tr>
                        <tr className="row_type2">
                            <td className="tac">9</td>
                            <td className="tac">고등동사거리</td>
                            <td className="tac">[1]연등교차로</td>
                        </tr>                          
                    </tbody>
                </table>
            </div>
        </article>
    );
};

export default IntersectionList;