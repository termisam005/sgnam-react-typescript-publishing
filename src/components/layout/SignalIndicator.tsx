import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import SelectComponent from '../select/SelectComponent';


interface Props{
    IndClass?: string;
    IndTitle?: string;
}

const SignalIndicator = ({ IndClass, IndTitle }:Props) => {

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState<boolean>(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    //탭버튼 이벤트
    const [rangeTab, setRangeTab] = useState<number>(1);
    const tabRange = (index:number) => {
        setRangeTab(index);
    }
    const [radioTab, setRadioTab] = useState<number>(1);
    const tabRadio = (index:number) => {
        setRadioTab(index);
    }

    return (
        <article className={IndClass}>
            <div className="indi_top primary_tobk" onClick={clickInd}>
                <h1>{IndTitle}</h1>
                <p className={toggleInd? 'arr_up down':'arr_up'}>
                    <ImgComponent src={'arrow_up16.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts del':'indi_conts'}>
                <dl className="check_dl">
                    <dt>분석범위</dt>
                    <dd>
                        <button type='button' className={rangeTab === 1? "btn_analy on" : "btn_analy"} onClick={() => tabRange(1)}>네트워크</button>
                        <button type='button' className={rangeTab === 2? "btn_analy on" : "btn_analy"} onClick={() => tabRange(2)}>도로</button>
                    </dd>
                </dl>
                <dl className="check_dl">
                    <dt>요일</dt>
                    <dd>
                        <p className={radioTab === 1? "ch_radio on" : "ch_radio"} onClick={() => tabRadio(1)}>
                            <span className="radio"></span>
                            <span className="word">월 ~ 목</span>
                        </p>
                        <p className={radioTab === 2? "ch_radio on" : "ch_radio"} onClick={() => tabRadio(2)}>
                            <span className="radio"></span>
                            <span className="word">금</span>
                        </p>
                        <p className={radioTab === 3? "ch_radio on" : "ch_radio"} onClick={() => tabRadio(3)}>
                            <span className="radio"></span>
                            <span className="word">토</span>
                        </p>
                        <p className={radioTab === 4? "ch_radio on" : "ch_radio"} onClick={() => tabRadio(4)}>
                            <span className="radio"></span>
                            <span className="word">일</span>
                        </p>
                    </dd>
                </dl>
                <dl className="check_dl">
                    <dt>시나리오</dt>
                    <dd>
                        <input type="text" className='wrput trans smline' value={'분석시나리오1'} />
                    </dd>
                </dl>
                <dl className="check_dl">
                    <dd>
                        <SelectComponent className={'selector sm w-100'}>
                            <option value="">결과1</option>
                            <option value="">결과2</option>
                            <option value="">결과3</option>
                        </SelectComponent>
                    </dd>
                </dl>
                <section className='status_analysis'>
                    <div className='dflx_ac_jbet col_gap4'>
                        <button type='button' className='btn_primary btn_m disabled flex1'>현황 분석</button>
                        <ImgComponent className={'w16'} src={'arrow_right_2line_sky_16.svg'} />
                        <button type='button' className='btn_primary btn_m flex1'>최적화 분석</button>
                    </div>
                </section>
            </div>
        </article>
    );
};

export default SignalIndicator;