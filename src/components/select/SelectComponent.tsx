import { ReactNode } from 'react';


interface Props{
    className?: string;
    disabled?: boolean;
    children?: ReactNode;
}

const SelectComponent = ({ className, disabled, children }:Props) => {

    return (
        <select className={className} disabled={disabled}>
            {children}
        </select>
    );
};

export default SelectComponent;
