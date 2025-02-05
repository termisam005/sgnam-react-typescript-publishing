import React from 'react';


const IndidlComponent = ({ dlClass, title, result, unitClass, unit }) => {

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