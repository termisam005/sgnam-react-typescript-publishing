import React from 'react';

const BottInfo = ({ size, labelColor, labelWord, datetime, contClass, children }) => {

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