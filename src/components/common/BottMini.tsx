interface Props{
    size?: string;
    labelColor?: string;
    labelWord?: string;
    countorClass?: string;
    countor?: number;
    unit?: string;
}

const BottMini = ({ 
        size, labelColor, labelWord, countorClass, countor, unit 
    }:Props) => {

    return (
        <div className={'bott_info hauto flex1 ' + size}>
            <div className="smart_top">
                <span className={'label_tag small fs_12_medium ' + labelColor}>{labelWord}</span>
                <p className={'sm_result'}>
                    <span className={countorClass}>{countor}</span>
                    <span className="mini">{unit}</span>
                </p>
            </div>
        </div>
    );
};

export default BottMini;