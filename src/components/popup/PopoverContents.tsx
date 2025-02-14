import { ReactNode } from 'react';


interface Props{
    className?: string;
    children?: ReactNode;
}

const PopoverContents = ({ className, children }:Props) => {
    
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default PopoverContents;

