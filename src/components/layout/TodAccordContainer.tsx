import { ReactNode, useState } from 'react';
import ImgComponent from '../common/ImgComponent';


interface Props{
    IndClass?: string;
    IndTitle?: string;
    children?: ReactNode;
}

const TodAccordContainer = ({ IndClass, IndTitle, children }:Props) => {

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    return (
        <article className={IndClass}>
            <div className="indi_top accord" onClick={clickInd}>
                <h1>{IndTitle}</h1>
                <p className={toggleInd? 'arr_up down':'arr_up'}>
                    <ImgComponent src={'arrow_up16.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts m-0 del':'indi_conts m-0'}>
                {children}
            </div>
        </article>
    );
};

export default TodAccordContainer;