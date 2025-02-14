import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';


interface Props{
    IndClass?: string;
    IndTitle?: string;
}

const ServiceIndicator = ({ IndClass, IndTitle }:Props) => {

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState(false);
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
                <div className='half_pie_charts m-b-20'>
                    <ImgComponent className={'img_pie'} src={'pie_d_half.svg'} />
                </div>
                <dl className="check_dl current">
                    <dt>평균속도</dt>
                    <dd>
                        <input type="text" className="wrput trans smline" placeholder="" value="24.5 km/h" disabled />
                    </dd>
                </dl>
                <dl className="check_dl current">
                    <dt>대기행렬</dt>
                    <dd>
                        <input type="text" className="wrput trans smline" placeholder="" value="150 m" disabled />
                    </dd>
                </dl>
                <dl className="check_dl current">
                    <dt>정지횟수</dt>
                    <dd>
                        <input type="text" className="wrput trans smline" placeholder="" value="2.3 회" disabled />
                    </dd>
                </dl>
                <dl className="check_dl current">
                    <dt>지체시간</dt>
                    <dd>
                        <input type="text" className="wrput trans smline" placeholder="" value="150 초" disabled />
                    </dd>
                </dl>
            </div>
        </article>
    );
};

export default ServiceIndicator;