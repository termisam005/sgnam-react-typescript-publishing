import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import BottInfoTop from '../common/BottInfoTop';


interface Props{
    IndClass?: string;
    IndTitle?: string;
}

const TrafficStIndicator = ({ IndClass, IndTitle }:Props) => {

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState<boolean>(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    return (
        <article className={IndClass}>
            <div className="indi_top" onClick={clickInd}>
                <h1>{IndTitle}</h1>
                <p className={toggleInd? 'arr_up down':'arr_up'}>
                    <ImgComponent src={'arrow_up16.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts del':'indi_conts'}>
                <div className="dflx col_gap4">
                    <BottInfoTop size={'small'} labelColor={'label_color02'} labelWord={'주차통합'} datetime={'2023.01.01 16:05'} contClass={'smart_cont bott'}>
                        <p className="sm_txt">
                            (5분)주차 점유율
                        </p>
                        <p className="sm_result">
                            <span>51.23</span>
                            <span className="mini">%</span>
                        </p>
                        <p className="fs_12_medium fc_yellow">
                            10,983/15,925(대)
                        </p>
                    </BottInfoTop>
                    <BottInfoTop size={'small'} labelColor={'label_color02'} labelWord={'주차통합'} datetime={'2023.01.01'} contClass={'smart_cont bott'}>
                        <p className="sm_txt">
                            일평균 주차 회전율
                        </p>
                        <p className="sm_result">
                            <span>231.17</span>
                            <span className="mini">%</span>
                        </p>
                        <p className="percent_txt up">
                            <span className="mini">전주 대비</span>
                            <span>0.0</span>
                            <span>%</span>
                            <span className="ic ic_down_red"></span>
                        </p>
                    </BottInfoTop>
                </div>
            </div>
        </article>
    );
};

export default TrafficStIndicator;