import React from 'react';

const CustomOverlayComponent = ({addedClass, children}) => {

  return (
    <div className={'custom_overlay '+ addedClass}>
        {children}
    </div>
  );
};

export default CustomOverlayComponent;