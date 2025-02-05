import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import TrBitStatus from '../table/TrBitStatus';
import TableBitStatus from '../table/TableBitStatus';
import InputComponent from '../input/InputComponent';


const BitStatusIndicator = ({ IndClass, IndTitle }) => {
// Bit 상태

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    return (
        <article className={IndClass}>
            <div class="indi_top" onClick={clickInd}>
                <h1>{IndTitle}</h1>
                <p className={toggleInd? 'arr_up m-r-8 down':'arr_up m-r-8'}>
                    <ImgComponent src={'arrow_up16.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts del':'indi_conts'}>
                <ul className="two_row_col dflx_jbet m-b-12">
                    <li className='col_item more'>                        
                        <p className='fs_13'>전체대수</p>
                        <InputComponent type={'text'} className={'wrput line tac w68'} value={'894'} />
                    </li>
                    <li className='col_item more'>                        
                        <p className='fs_13'>통신장애</p>
                        <InputComponent type={'text'} className={'wrput line tac w68 read_error'} value={'2'} />
                    </li>
                </ul>
                <div className='indi_vert818 scroll sc_y'>
                    <TableBitStatus tableClass={'table_box table_route'} />

                    {/* <table className="table_box table_route m-b-20">
                        <caption className="hidden_tag">BIT상태 테이블 리스트</caption>
                        <thead>
                            <tr>
                                <th className="tac"><p className='w76'>모바일 번호</p></th>
                                <th className="tac"><p className='w136'>정류장명</p></th>
                                <th className="tac"><p className='text_ellipsis w32'>상태</p></th>
                                <th className="tac"><p className='text_ellipsis w32'>통신장애</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <TrBitStatus number={'121990000'} station={'주공2단지, 창영초등학교'} status={'정상'} communiColor={''} communicate={'정상'} />
                            <TrBitStatus number={'121990000'} station={'주공2단지, 창영초등학교'} status={'정상'} communiColor={'fc_error_code'} communicate={'장애'} />
                        </tbody>
                    </table> */}
                </div>
            </div>
        </article>
    );
};

export default BitStatusIndicator;