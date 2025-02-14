import { ReactNode } from 'react';


interface Props {
	headerClass?: string;
	children?: ReactNode;
}

const Header = ({ headerClass, children }:Props) => {

  return (
    <header className={headerClass}>
        <article className='header_in'>
            {children}
        </article>
    </header>
  );
};

export default Header;