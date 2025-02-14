import { ReactNode } from 'react';

interface Props{
    children?: ReactNode;
}


const FooterCenter = ({ children }:Props) => {

    return (
        <article className='footer_center'>
            {children}
        </article>
    );
};

export default FooterCenter;