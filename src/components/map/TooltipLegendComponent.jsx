import React from 'react';

const TooltipLegendComponent = ({addedClass, children}) => {

  return (
    <div className={'legend_label '+ addedClass}>
        {children}
    </div>
  );
};

export default TooltipLegendComponent;