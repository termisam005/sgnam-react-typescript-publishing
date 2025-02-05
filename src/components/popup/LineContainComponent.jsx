import React from 'react';


const LineContainComponent = ({ className, children }) => {
    
    return (
        <article className={className}>
            {children}
        </article>
    )
}

export default LineContainComponent;

