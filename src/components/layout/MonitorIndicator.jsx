import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import BottMini from '../common/BottMini';
import TableMonitoring from '../table/TableMonitoring';


const MonitorIndicator = ({ IndClass, IndTitle, clickList }) => {

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    return (
        <article className={IndClass}>
            <div class="indi_top" onClick={clickInd}>
                <h1>{IndTitle}</h1>
                <p className={toggleInd? 'arr_up down':'arr_up'}>
                    <ImgComponent src={'arrow_up16.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts del':'indi_conts'}>
                <div className="dflx_jbet col_gap4 m-b-4">
                    <BottMini size={'small'} labelColor={'label_color08'} labelWord={'정상'} 
                    countorClass={'fs_20_bold'} countor={'100'} unit={'건'} />
                    <BottMini size={'small'} labelColor={'grade_color03'} labelWord={'장애'} 
                    countorClass={'fs_20_bold'} countor={'100'} unit={'건'} />
                </div>
                <div className='indi_vert378 scroll'>
                    <TableMonitoring tableClass={'uni_table01 monitor_table'} clickList={clickList} />
                </div>
            </div>
        </article>
    );
};

export default MonitorIndicator;