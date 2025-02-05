import React from 'react';


const PopoverContents = ({ className, children }) => {
    
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default PopoverContents;

