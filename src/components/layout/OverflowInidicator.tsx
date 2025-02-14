//대시보드 아코디언 박스 기본형
import { ReactNode, useState } from 'react';
import ImgComponent from '../common/ImgComponent';


interface Props{
    IndClass?: string;
    IndTitle?: string;
    children?: ReactNode;
}

const OverflowInidicator = ({ IndClass, IndTitle, children }:Props) => {

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState<boolean>(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    return (
        <article className={IndClass}>
            <div className="indi_top" onClick={clickInd}>
                <h1>{IndTitle}</h1>
                <p className={toggleInd? 'arr_up down m-r-8':'arr_up m-r-8'}>
                    <ImgComponent src={'arrow_up16.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts del':'indi_conts'}>
                {children}
            </div>
        </article>
    );
};

export default OverflowInidicator;