import TrRoute from './TrRoute';


interface Props{
    empty?: boolean;
}

const TableRouteList = ({ empty }:Props) => {
//노선목록 테이블

    return (
        <table className="table_box table_route">
            <caption className="hidden_tag">테이블 리스트</caption>
            <thead>
                <tr>
                    <th className="tac"><p className='w40'>노선명</p></th>
                    <th className="tac"><p className='w66'>출발정류장</p></th>
                    <th className="tac"><p className='w66'>도착정류정</p></th>
                    <th className="tac"><p className='w66'>운수사</p></th>
                    <th className="tac"><p className='w28'></p></th>
                </tr>
            </thead>
            {
                empty === true? 
                <tbody>
                    <tr className={'row_type2'}>
                        <td colSpan={5} className="tac">
                            <p className='op04'>Empty text</p>
                        </td>
                    </tr>
                </tbody> :
                <tbody>
                    <TrRoute number={'013-4'} start={'역곡역북부 (마을)'} arrive={'중동역 신한은행'} company={'서경운수'} />
                    <TrRoute number={'013-1'} start={'역곡역북부 (마을)'} arrive={'중동역 신한은행'} company={'서경운수'} />
                    <TrRoute number={'013-2'} start={'역곡역북부 (마을)'} arrive={'중동역 신한은행'} company={'서경운수'} />
                    <TrRoute number={'013-3'} start={'역곡역북부 (마을)'} arrive={'중동역 신한은행'} company={'서경운수'} />
                    <TrRoute number={'013-4'} start={'역곡역북부 (마을)'} arrive={'중동역 신한은행'} company={'서경운수'} />
                    <TrRoute number={'013-4'} start={'역곡역북부 (마을)'} arrive={'중동역 신한은행'} company={'서경운수'} />
                    <TrRoute number={'013-4'} start={'역곡역북부 (마을)'} arrive={'중동역 신한은행'} company={'서경운수'} />
                    <TrRoute number={'013-4'} start={'역곡역북부 (마을)'} arrive={'중동역 신한은행'} company={'서경운수'} />
                </tbody>
            }
        </table>
    );
};

export default TableRouteList;