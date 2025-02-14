import { CSSProperties, ReactNode, useState } from 'react';

interface Props{
    style?: CSSProperties;
    size?: string;
    children?: ReactNode
}

const MarkerOnlyComponent = ({ style, size, children }:Props) => {

    const [markStatus, setMarkStatus] = useState(false);
    const toggleMark = () => {
      setMarkStatus(!markStatus);
    }

    return (
        <article className={'marker_container'} style={style}>
            <div className='tooltip_parents'>
                <div onClick={toggleMark} className={markStatus? 'marker on ' + size : 'marker ' + size}>
                    {children}
                </div>
            </div>
        </article>
    );
};

export default MarkerOnlyComponent;