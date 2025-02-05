import React from 'react';


const DustcontComponent = ({ contClass, recordClass, record, resultClass, countClass, count, unitClass, unit }) => {

    return (
        <div className={contClass}>
            <span className={recordClass}>
                {record}
            </span>
            <h1 className={resultClass}>
                <span className={countClass}>{count}</span>
                <span className={unitClass}>{unit}</span>
            </h1>
        </div>
    );
};

export default DustcontComponent;