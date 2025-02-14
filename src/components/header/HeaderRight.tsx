import { ReactNode } from 'react';

interface Props{
  children?: ReactNode;
}

const HeaderRight = ({children}:Props) => {

  return (
    <div className='header_right'>
        {children}
    </div>
  );
};

export default HeaderRight;