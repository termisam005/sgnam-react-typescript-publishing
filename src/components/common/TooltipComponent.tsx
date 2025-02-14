import { ReactNode } from 'react';

interface Props{
  className?: string;
  onClick?: ()=>void;
  txt?: string;
  children?: ReactNode
}

const TooltipComponent = ({ className, onClick, txt, children }:Props) => {

  return (
    <div className={className} onClick={onClick}>
        {txt}
        {children}
    </div>
  );
};

export default TooltipComponent;