import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import SelectBoxComponent from '../common/SelectBoxComponent';
import ProfileComponent from '../common/ProfileComponent';


const Header1 = ({children}) => {

    return (
        <header>
            <article className='header_in'>
                <HeaderLeft>
                    <SelectBoxComponent />
                </HeaderLeft>
                <HeaderRight>
                    {children}
                    <ProfileComponent />
                </HeaderRight>
            </article>
        </header>
    );
};

export default Header1;