import React from 'react';


const WithLabelComponent = ({ className, squareClass, wordClass, word }) => {

    return (
        <p className={className}>
            <span className={squareClass}></span>
            <span className={wordClass}>{word}</span>
        </p>
    );
};

export default WithLabelComponent;