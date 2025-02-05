import React from 'react';


const ConnectComponent = ({ className, children }) => {

  return (
    <div className={className}>
        {children}
    </div>
  );
};

export default ConnectComponent;