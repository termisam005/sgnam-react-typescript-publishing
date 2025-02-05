import React from 'react';

const TooltipwindowComponent = ({addedClass, title, children}) => {

  return (
    <div className={'infowindow_box '+ addedClass}>
        <h5 className='infowindow_title'>{title}</h5>
        <div className='infowindow_content'>
            {children}
        </div>
    </div>
  );
};

export default TooltipwindowComponent;