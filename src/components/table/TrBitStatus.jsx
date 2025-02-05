import React from 'react';


const TrBitStatus = ({ number, station, status, communiColor, communicate }) => {
// BIT 상태 테이블 tr 컴포넌트

    return (
        <tr className={'row_type2'}>
            <td className="tac"><p>{number}</p></td>
            <td className="tac"><p>{station}</p></td>
            <td className="tac"><p>{status}</p></td>
            <td className="tac"><p className={'text_ellipsis ' + communiColor}>{communicate}</p></td>
        </tr>
    );
};

export default TrBitStatus;