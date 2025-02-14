import { ReactNode } from 'react';

interface Props{
    className?: string;
    children?: ReactNode;
}

const IndicatorComponent = ({ className, children }:Props) => {

  return (
    <article className={className}>
        {children}
    </article>
  );
};

export default IndicatorComponent;