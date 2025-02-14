interface Props{
    dlClass?: string;
    title?: string;
    ddClass?: string;
    ddText?: string;
}

const TabledlComponent = ({ dlClass, title, ddClass, ddText}:Props) => {

    return (
        <dl className={dlClass}>
            <dt>{title}</dt>
            <dd className={ddClass}>{ddText}</dd>
        </dl>
    );
};

export default TabledlComponent;