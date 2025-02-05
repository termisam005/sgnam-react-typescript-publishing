import React from 'react';


const CardblockComponent = ({ className, children }) => {

  return (
    <div className={className}>
        {children}
    </div>
  );
};

export default CardblockComponent;