import React from 'react';


const DragdropComponent = ({ dragClass, style, numberClass, number, children }) => {

    return (
        <div className={dragClass} style={style}>
            <span className={numberClass}>{number}</span>
            {children}
            <div class="dragdrop_bg"></div>
        </div>
    );
};

export default DragdropComponent;