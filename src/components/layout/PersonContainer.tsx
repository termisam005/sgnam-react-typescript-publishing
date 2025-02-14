import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import InputComponent from '../input/InputComponent';
import ButtonComponent from '../common/ButtonComponent';
import PhotoComponent from '../common/PhotoComponent';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PersonContainer = () => {

    //라디오 탭
    const [radioTab, setRadioTab] = useState(1);
    const tabRadio = (index:number) => {
        setRadioTab(index);
    }

    //Datepicker
    const [datebox, setDatebox] = useState<boolean>(false);
    const handleFocus = () => {
        setDatebox(!datebox);
    }
    const closeBox = () => {
        setDatebox(false);
    }
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (
        <div className='vert_wrap'>
            <section className='user_info'>
                <div className='profile_cont'>
                    <PhotoComponent imgName={'prof_40.svg'}>
                        <p className='circle_g32'>
                            <ImgComponent src={'pencil_16.svg'} />
                        </p>
                    </PhotoComponent>
                </div>
                <div className='user_form'>
                    <dl className="check_dl user">
                        <dt>사용자 ID</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'USER001'} />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>사용자명</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'김인천'} />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>부서명</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'감사실'} />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>직위명</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'지방행정주사보'} />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>성별</dt>
                        <dd>
                            <div className='dflx_ac_jbet'>
                                <p className={radioTab === 1? "ch_radio on" : "ch_radio"} onClick={() => tabRadio(1)}>
                                    <span className="radio"></span>
                                    <span className="word">남</span>
                                </p>
                                <p className={radioTab === 2? "ch_radio on" : "ch_radio"} onClick={() => tabRadio(2)}>
                                    <span className="radio"></span>
                                    <span className="word">여</span>
                                </p>
                            </div>
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>생년월일</dt>
                        <dd>
                            <div className='w-100'>
                                <div onClick={closeBox} className={datebox? 'box_bg on':'box_bg'}></div>
                                <div onFocus={handleFocus} onBlur={closeBox} 
                                className={datebox? 'datebox line w-100 datepicker on' : 'datebox line w-100 datepicker'}>
                                    <DatePicker dateFormat="yyyy/MM/dd" selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                                </div>
                            </div>
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>근무형태</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'일반'} />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>담당업무</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'-'} />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>메일주소</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'-'} />
                        </dd>
                    </dl>
                    <dl className="check_dl user">
                        <dt>개인연락처</dt>
                        <dd>
                            <InputComponent type="text" className='wrput trans smline' value={'010-1234-5678'} />
                        </dd>
                    </dl>
                </div>
            </section>
            <section className='line_bottom'>
                <ButtonComponent className={'btn_secondary btn_m '} txt={'취소'} />
                <ButtonComponent className={'btn_secondary btn_m '} txt={'삭제'} />
                <ButtonComponent className={'btn_primary btn_m '} txt={'저장'} />
            </section>
        </div>
    );
};

export default PersonContainer;