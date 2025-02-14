import { ReactNode, useState } from 'react';


interface Props{
    boxClass?: string;
    datetime?: string;
    labelColor?: string;
    labelWord?: string;
    tmTitle?: string;
    children?: ReactNode;
}

const TmboxEvent = ({ 
        boxClass, datetime, labelColor, labelWord, tmTitle, children 
    }:Props) => {

    const [toggleMore, setToggleMore] = useState<boolean>(false);
    const clickMore = () => {
        setToggleMore(!toggleMore);
    }

    return (
        <div className={boxClass}>
            <div className="tmbox_top">
                <p className="tmbox_date">
                    <span>{datetime}</span>
                </p>
                <span className={'label_tag small fs_12_medium ' + labelColor}>{labelWord}</span>
            </div>
            <dl className="tm_dl">
                <dt>
                    <p className={toggleMore? 'pure dpblock' : 'pure'}>{tmTitle}</p>
                </dt>
                {children}
                <p className={toggleMore? 'detail_see on' : 'detail_see'} onClick={clickMore}>
                    <span className="word">더보기</span>
                    <span className="mark_trig_down12"></span>
                </p> 
            </dl>
        </div>
    );
};

export default TmboxEvent;