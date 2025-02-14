interface Props{
    dlClass?: string;
    title?: string;
    result?: string;
    unitClass?: string;
    unit?: string;
}

const IndidlComponent = ({ dlClass, title, result, unitClass, unit }:Props) => {

    return (
        <dl className={dlClass}>
            <dd>
                {title}
            </dd>
            <dt>
                <span>{result}</span>
                <span className={unitClass}>{unit}</span>
            </dt>
        </dl>
    );
};

export default IndidlComponent;