import { ReactNode } from 'react';

interface Props{
    size?: string;
    labelColor?: string;
    labelWord?: string;
    datetime?: number | string;
    contClass?: string;
    children?: ReactNode;
}

const BottInfoTop = ({ 
        size, labelColor, labelWord, datetime, contClass, children 
    }:Props) => {

    return (
        <div className={'bott_info ' + size}>
            <div className="smart_top h26">
                <span className={'label_tag small fs_12_medium as_start ' + labelColor}>{labelWord}</span>
                <span className={"date fs_11 flex1 as_start"}>{datetime}</span>
            </div>
            <div className={contClass}>
                {children}
            </div>
        </div>
    );
};

export default BottInfoTop;