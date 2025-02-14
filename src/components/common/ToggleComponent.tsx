import { useState, ReactNode } from 'react';


interface Props{
    children?: ReactNode;
    normal?: boolean;
    selected?: boolean;
    disabled?: boolean;
}

const ToggleComponent = ({ children, normal, selected, disabled }:Props) => {

    const [toggleDiv, setToggleDiv] = useState<boolean>(false);
    const clickToggle = () => {
        setToggleDiv(!toggleDiv);
    }

    return (
        <>
            {
                normal === true
                ? <div onClick={clickToggle} className={toggleDiv ? 'toggle on' : 'toggle'}>
                    {children}
                </div> : null
            }
            {
                selected === true
                ? <div onClick={clickToggle} className={toggleDiv ? 'toggle' : 'toggle on'}>
                    {children}
                </div> : null
            }
            {
                disabled === true
                ? <div onClick={clickToggle} className={toggleDiv ? 'toggle' : 'toggle'}>
                    {children}
                </div> : null
            }
        </>
    );
};

export default ToggleComponent;