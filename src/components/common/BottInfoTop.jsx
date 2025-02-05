import React from 'react';

const BottInfoTop = ({ size, labelColor, labelWord, datetime, contClass, children }) => {

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