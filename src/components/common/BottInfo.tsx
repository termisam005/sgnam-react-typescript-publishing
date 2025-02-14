import { ReactNode } from 'react';


interface Props{
    size?: string;
    labelColor?: string;
    labelWord?: string;
    datetime?: string;
    contClass?: string;
    children?: ReactNode;
}

const BottInfo = ({ size, labelColor, labelWord, datetime, contClass, children }:Props) => {

    return (
        <div className={'bott_info ' + size}>
            <div className="smart_top">
                <span className={'label_tag small fs_12_medium ' + labelColor}>{labelWord}</span>
                <span className={"date fs_11 flex1"}>{datetime}</span>
            </div>
            <div className={contClass}>
                {children}
            </div>
        </div>
    );
};

export default BottInfo;