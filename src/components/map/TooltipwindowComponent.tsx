import { ReactNode } from 'react';

interface Props{
  addedClass?: string;
  title?: string;
  children?: ReactNode;
}

const TooltipwindowComponent = ({addedClass, title, children}:Props) => {

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