import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import TmboxEvent from '../card/TmboxEvent';


interface Props{
    IndClass?: string;
    IndTitle?: string;
}

const EventStIndicator = ({ IndClass, IndTitle }:Props) => {

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    return (
        <article className={IndClass}>
            <div className="indi_top" onClick={clickInd}>
                <h1>{IndTitle}</h1>
                <p className={toggleInd? 'arr_up m-r-8 down':'arr_up m-r-8'}>
                    <ImgComponent src={'arrow_up16.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts del':'indi_conts'}>
                <div className='indi_vert416 scroll sc_y'>
                    <TmboxEvent boxClass={'tmbox'} datetime={'2022년 01월 23일 21:12'} labelColor={'grade_color03'} labelWord={'사고'}
                    tmTitle={'<통제> 서울외곽순환고속도로 판교JC에서 판교JC방량 기점 방향 차량증가/정체 서울외곽순환고속도로 판교JC에서 판교JC방량'} />
                    <TmboxEvent boxClass={'tmbox'} datetime={'2022년 01월 23일 21:12'} labelColor={'dust_color03'} labelWord={'통제'}
                    tmTitle={'<통제> 서울외곽순환고속도로 판교JC에서 판교JC방량 기점 방향 차량증가/정체 서울외곽순환고속도로 판교JC에서 판교JC방량'} />
                    <TmboxEvent boxClass={'tmbox'} datetime={'2022년 01월 23일 21:12'} labelColor={'label_color02'} labelWord={'행사'}
                    tmTitle={'<통제> 서울외곽순환고속도로 판교JC에서 판교JC방량 기점 방향 차량증가/정체'} />
                    <TmboxEvent boxClass={'tmbox'} datetime={'2022년 01월 23일 21:12'} labelColor={'label_color07_1'} labelWord={'기상'}
                    tmTitle={'<통제> 서울외곽순환고속도로 판교JC에서 판교JC방량 기점 방향 차량증가/정체'} />
                    <TmboxEvent boxClass={'tmbox'} datetime={'2022년 01월 23일 21:12'} labelColor={'dust_color03_3'} labelWord={'공사'}
                    tmTitle={'<통제> 서울외곽순환고속도로 판교JC에서 판교JC방량 기점 방향 차량증가/정체'} />
                    <TmboxEvent boxClass={'tmbox'} datetime={'2022년 01월 23일 21:12'} labelColor={'grade_color03'} labelWord={'사고'}
                    tmTitle={'<통제> 서울외곽순환고속도로 판교JC에서 판교JC방량 기점 방향 차량증가/정체'} />
                </div>
            </div>
        </article>
    );
};

export default EventStIndicator;