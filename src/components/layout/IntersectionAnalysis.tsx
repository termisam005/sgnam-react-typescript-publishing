import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import SelectComponent from '../select/SelectComponent';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


interface Props{
    IndClass?: string;
    IndTitle?: string;
}

const IntersectionAnalysis = ({ IndClass, IndTitle }:Props) => {

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState<boolean>(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    //탭버튼 이벤트
    const [radioTab, setRadioTab] = useState<number>(1);
    const tabRadio = (index:number) => {
        setRadioTab(index);
    }
    const [timeTab, setTimeTab] = useState<number>(1);
    const tabTime = (index:number) => {
        setTimeTab(index);
    }

    //Datepicker
    const [datebox, setDatebox] = useState<boolean>(false);
    const handleFocus = () => {
        setDatebox(!datebox);
    }
    const closeBox = () => {
        setDatebox(false);
    }
    const [startDate, setStartDate] = useState(new Date());

    return (
        <article className={IndClass}>
            <div className="indi_top primary_tobk" onClick={clickInd}>
                <h1>{IndTitle}</h1>
                <p className={toggleInd? 'arr_up down':'arr_up'}>
                    <ImgComponent src={'arrow_up16.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts del':'indi_conts'}>
                <div className="dflx_ac">
                    <p className="dt_type">분석 범위</p>
                    <div className='flex1'>
                        <SelectComponent className={'selector sm w-100'}>
                            <option value="">[2]전체</option>
                            <option value="">[3]분석</option>
                            <option value="">[4]분석</option>
                        </SelectComponent>
                    </div>
                </div>
                <div className="dflx_ac m-t-14">
                    <p className="dt_type">요일</p>
                    <div className='dflx'>
                        <p className={radioTab === 1? "ch_radio on" : "ch_radio"} onClick={() => tabRadio(1)}>
                            <span className="radio"></span>
                            <span className="word">월~목</span>
                        </p>
                        <p className={radioTab === 2? "ch_radio on" : "ch_radio"} onClick={() => tabRadio(2)}>
                            <span className="radio"></span>
                            <span className="word">금</span>
                        </p>
                        <p className={radioTab === 3? "ch_radio on" : "ch_radio"} onClick={() => tabRadio(3)}>
                            <span className="radio"></span>
                            <span className="word">토</span>
                        </p>
                        <p className={radioTab === 4? "ch_radio on p-r-0" : "ch_radio p-r-0"} onClick={() => tabRadio(4)}>
                            <span className="radio"></span>
                            <span className="word">일</span>
                        </p>
                    </div>
                </div>
                <div className="dflx_ac m-t-14">
                    <p className="dt_type">분석 범위</p>
                    <div className='flex1'>
                        <div onClick={closeBox} className={datebox? 'box_bg on':'box_bg'}></div>
                        <div onFocus={handleFocus} onBlur={closeBox} className={datebox? 'datebox line w-100 datepicker on' : 'datebox line w-100 datepicker'}>
                            <DatePicker 
                            portalId="root-portal"
                            dateFormat="yyyy/MM/dd" 
                            selected={startDate} 
                            onChange={(date:any) => setStartDate(date)} 
                            />
                        </div>
                    </div>
                </div>                
                <div className="dflx_ac m-t-14">
                    <p className="dt_type">시간</p>
                    <div className='dflx'>
                        <p className={timeTab === 1? "ch_radio on" : "ch_radio"} onClick={() => tabTime(1)}>
                            <span className="radio"></span>
                            <span className="word">지정</span>
                        </p>
                        <p className={timeTab === 2? "ch_radio on" : "ch_radio"} onClick={() => tabTime(2)}>
                            <span className="radio"></span>
                            <span className="word">첨두</span>
                        </p>
                        <p className={timeTab === 3? "ch_radio on" : "ch_radio"} onClick={() => tabTime(3)}>
                            <span className="radio"></span>
                            <span className="word">주기</span>
                        </p>
                    </div>
                </div>
                <div className="dflx_ac m-t-14">
                    <p className="dt_type">시간대</p>
                    <SelectComponent className={'selector sm flex1'}>
                        <option value="">00:00~01:00</option>
                        <option value="">07:00~16:00</option>
                        <option value="">16:00~01:00</option>
                    </SelectComponent>
                </div>
                <div className="dflx_ac m-t-8">
                    <p className="dt_type">지표</p>
                    <SelectComponent className={'selector sm flex1'}>
                        <option value="">교통량</option>
                        <option value="">통행량</option>
                    </SelectComponent>
                </div>
                <div className="dflx_ac m-t-8">
                    <p className="dt_type">차종</p>
                    <SelectComponent className={'selector sm flex1'}>
                        <option value="">소형</option>
                        <option value="">중형</option>
                        <option value="">대형</option>
                    </SelectComponent>
                </div>
                <button type='button' className='btn_primary btn_m m-t-20 w-100'>분석 결과 조회</button>
            </div>
        </article>
    );
};

export default IntersectionAnalysis;