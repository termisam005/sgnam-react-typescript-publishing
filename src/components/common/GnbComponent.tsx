import { useLocation, useNavigate } from 'react-router';
import { memo } from 'react';


interface Props{
    path: string;
    title: string;
}

const GnbComponent = memo(({ path, title }:Props) => {

    const navigator = useNavigate();
    const pathname = useLocation().pathname;
    const onClick = () => {
        if (path != null) {
            navigator(path);
        }
    };

    return (
        <li>
            <a href="#none" className={(pathname.includes(path) ? ' on' : '')} onClick={onClick}>
                {title}
            </a>
        </li>
    );
});

export default GnbComponent;