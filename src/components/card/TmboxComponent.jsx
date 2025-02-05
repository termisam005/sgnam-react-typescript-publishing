import React from 'react';


const TmboxComponent = ({ className, children }) => {

  return (
    <div className={className}>
        {children}
    </div>
  );
};

export default TmboxComponent;