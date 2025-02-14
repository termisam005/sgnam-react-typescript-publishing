import { ReactNode } from 'react';


interface Props{
    children?: ReactNode;
}

const FooterRight = ({ children }:Props) => {

    return (
        <article className='footer_right col_gap16'>
            {children}
        </article>
    );
};

export default FooterRight;