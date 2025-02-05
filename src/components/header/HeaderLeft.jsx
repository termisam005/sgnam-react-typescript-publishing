import React from 'react';
import { useNavigate } from 'react-router';
import ImgComponent from '../common/ImgComponent';


const HeaderLeft = ({children}) => {

  const navigator = useNavigate();

  return (
    <div className='header_left'>
        <h1 className='header_logo'>
            <a onClick={() => navigator('/main')}>
                <span className='sp_logo_seongnam'></span>
            </a>
        </h1>
        {children}
    </div>
  );
};

export default HeaderLeft;