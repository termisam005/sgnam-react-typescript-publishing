import React from 'react';


const SnackBarComponent = ({ barClass, children }) => {
  
  return (
        <div className={barClass}>
            {children}
        </div>
  );
};

export default SnackBarComponent;