import { ReactNode } from 'react';


interface Props{
  onClick?: ()=>void;
  className?: string;
  children?: ReactNode;
}

const MarkerComponent = ({ onClick, className, children }:Props) => {

  return (
    <div onClick={onClick} className={className}>
        {children}
    </div>
  );
};

export default MarkerComponent;