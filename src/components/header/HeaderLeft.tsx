import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props{
  children?: ReactNode;
}


const HeaderLeft = ({children}:Props) => {

  return (
    <div className='header_left'>
        <h1 className='header_logo'>
            <Link to={'/main'}>
                <span className='sp_logo_seongnam'></span>
            </Link>
        </h1>
        {children}
    </div>
  );
};

export default HeaderLeft;