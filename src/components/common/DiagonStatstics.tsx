import { ReactNode } from 'react';

interface Props{
    contClass?: string;
    tltClass?: string;
    tlt?: string;
    resultClass?: string;
    result?: string | number;
    unitClass?: string;
    unit?: string;
    children?: ReactNode;
}

const DiagonComponent = ({ 
        contClass, tltClass, tlt, resultClass, result, unitClass, unit, children 
    }:Props) => {

    return (
        <div className={contClass}>
            <p className={tltClass}>{tlt}</p>
            <p className={resultClass}>
                <span>{result}</span>
                <span className={unitClass}>{unit}</span>
            </p>
            {children}
        </div>
    );
};

export default DiagonComponent;