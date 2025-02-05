import React from 'react';
import { useState } from "react";
import ImgComponent from '../common/ImgComponent';


const TrRoute = ({ number, start, arrive, company }) => {
//노선목록 테이블 tr 컴포넌트

    const [statusTd, setStatsuTd] = useState(false);
    const deleteTd = () => {
        setStatsuTd(true);
    }

    return (
        <tr className={statusTd? 'row_type2 dpnone' : 'row_type2'}>
            <td className="tac"><p className='w40'>{number}</p></td>
            <td className="tac"><p className='text_ellipsis w66'>{start}</p></td>
            <td className="tac"><p className='text_ellipsis w66'>{arrive}</p></td>
            <td className="tac"><p className='text_ellipsis w66'>{company}</p></td>
            <td className="tac">
                <button type='button' className='w28 h28' onClick={deleteTd}>
                    <ImgComponent className={'w12 op06'} src={'close_fill_fff_12.svg'} />
                </button>
            </td>
        </tr>
    );
};

export default TrRoute;