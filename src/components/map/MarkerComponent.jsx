import React from 'react';


const MarkerComponent = ({ onClick, className, children }) => {

  return (
    <div onClick={onClick} className={className}>
        {children}
    </div>
  );
};

export default MarkerComponent;