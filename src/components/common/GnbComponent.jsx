import React from 'react';
import { useLocation, useNavigate } from 'react-router';


const GnbComponent = ({ path, title }) => {

    const navigator = useNavigate();
    const pathname = useLocation().pathname;
    const onClick = () => {
        if (path != null) {
            navigator(path);
        }
    };

    return (
    <li>
        <a className={(pathname.includes(path) ? ' on' : '')} onClick={onClick}>
            {title}
        </a>
    </li>
    );
};

export default GnbComponent;