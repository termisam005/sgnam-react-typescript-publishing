import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import BottInfo from '../common/BottInfo';
import BottMini from '../common/BottMini';


const BreakInfoIndicator = ({ IndClass, IndTitle }) => {

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
                <div className="grid_column2 col_gap4">
                    <BottInfo size={'small bridge'} contClass={'smart_cont bott'}>
                        <p className="sm_txt">
                            금일 돌발 건수
                        </p>
                        <p className="sm_result">
                            <span>1,234</span>
                            <span className="mini">건</span>
                        </p>
                        <p className="percent_txt up">
                            <span className="mini">전일 대비</span>
                            <span>2.5</span>
                            <span>%</span>
                            <span className="ic ic_up_red"></span>
                        </p>
                    </BottInfo>
                    <div className='display_grid row_gap4 flex1'>
                        <BottMini size={'small'} labelColor={'grade_color03'} labelWord={'장애'} 
                        countorClass={'fs_20_bold'} countor={'100'} unit={'km'} />
                        <BottMini size={'small'} labelColor={'dust_color03_3'} labelWord={'공사'} 
                        countorClass={'fs_20_bold'} countor={'100'} unit={'km'} />
                        <BottMini size={'small'} labelColor={'dust_color03'} labelWord={'통제'} 
                        countorClass={'fs_20_bold'} countor={'100'} unit={'km'} />
                        <BottMini size={'small'} labelColor={'label_color02'} labelWord={'행사'} 
                        countorClass={'fs_20_bold'} countor={'100'} unit={'km'} />
                        <BottMini size={'small'} labelColor={'label_color07_1'} labelWord={'기상'} 
                        countorClass={'fs_20_bold'} countor={'100'} unit={'km'} />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BreakInfoIndicator;