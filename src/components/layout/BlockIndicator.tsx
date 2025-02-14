import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';


interface Props{
    IndClass?: string;
    IndTitle?: string;
}

const BlockIndicator = ({ IndClass, IndTitle }:Props) => {

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
                <div className='indi_chart'>
                    <ImgComponent src={'block_chart.svg'} />
                </div>
            </div>
        </article>
    );
};

export default BlockIndicator;