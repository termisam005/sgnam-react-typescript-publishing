import React from 'react';


const ListBlockComponent = ({ listClass, children }) => {

    return (
        <div className={listClass}>
            {children}
        </div>
    );
};

export default ListBlockComponent;