//교통상황 모니터링 종합평가
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import IndidlComponent from '../card/IndidlComponent';


interface Props{
    IndClass?: string;
    IndTitle?: string;
}

const ComprehensiveIndicator = ({ IndClass, IndTitle }:Props) => {

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
                <section>
                    <div className="indi_share">
                        <IndidlComponent dlClass={'indi_dl'} title={'속도'} result={'F'} />
                        <IndidlComponent dlClass={'indi_dl'} title={'지체시간'} result={'A'} />
                        <IndidlComponent dlClass={'indi_dl'} title={'대기행렬'} result={'C'} />
                        <IndidlComponent dlClass={'indi_dl'} title={'교통량'} result={'F'} />
                    </div>
                    <div className='dflx_jcent m-t-24 m-b-24'>
                        <ImgComponent className={'w210'} src={'radar_chart.svg'} />
                    </div>
                    <div className="communi_top"><h5>종합평가 등급</h5></div>
                    <div className='dflx_jcent p-t-12 relative'>
                        <ImgComponent className={'w-100'} src={'total_grade.svg'} />
                        <ImgComponent src={'indicator_arrow_24.svg'} className={'comprehensive_arrow'} />
                    </div>                    
                </section>
            </div>
        </article>
    );
};

export default ComprehensiveIndicator;