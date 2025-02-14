interface Props{
    contClass?: string;
    recordClass?: string;
    record?: string;
    resultClass?: string;
    countClass?: string;
    count?: number;
    unitClass?: string;
    unit?: string;
}

const DustcontComponent = ({ 
        contClass, recordClass, record, resultClass, countClass, count, unitClass, unit 
    }:Props) => {

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