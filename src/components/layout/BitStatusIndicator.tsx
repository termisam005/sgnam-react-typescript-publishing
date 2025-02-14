import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import TableBitStatus from '../table/TableBitStatus';
import InputComponent from '../input/InputComponent';


interface Props{
    IndClass?: string;
    IndTitle?: string;
}

const BitStatusIndicator = ({ IndClass, IndTitle }:Props) => {
// Bit 상태

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    return (
        <article className={IndClass}>
            <div className="indi_top" onClick={clickInd}>
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
                </div>
            </div>
        </article>
    );
};

export default BitStatusIndicator;