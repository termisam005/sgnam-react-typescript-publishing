import React from 'react';


const TooltipComponent = ({ className, txt, children }) => {

  return (
    <div className={className}>
        {txt}
        {children}
    </div>
  );
};

export default TooltipComponent;