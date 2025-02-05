import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import TableRouteList from '../table/TableRouteList';


const RouteListIndicator = ({ IndClass, IndTitle }) => {
//노선 목록

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
                <div className='indi_height268 scroll sc_y'>
                    <TableRouteList empty={false} />
                </div>
            </div>
        </article>
    );
};

export default RouteListIndicator;