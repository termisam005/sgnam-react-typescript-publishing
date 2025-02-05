import React from 'react';
import { useState } from 'react';


const PutDropComponent = ({ children, normal, selected, disabled, seeOff, see, seeSelected, seeDisabled }) => {

    const [togglePut, setTogglePut] = useState(false);
    const clickTogglePut = () => {
        setTogglePut(!togglePut);
    }

    return (
        <>
            {
                normal === true? 
                <p onClick={clickTogglePut} className={togglePut ? 'put_drop on' : 'put_drop'}>
                    {children}
                </p> : null
            }
            {
                selected === true? 
                <div onClick={clickTogglePut} className={togglePut ? 'put_drop' : 'put_drop on'}>
                    {children}
                </div> : null
            }
            {
                disabled === true? 
                <div className={'put_drop'}>
                    {children}
                </div> : null
            }
            {
                seeOff === true? 
                <p onClick={clickTogglePut} className={togglePut ? 'put_see off on' : 'put_see off'}>
                    {children}
                </p> : null
            }
            {
                see === true? 
                <p onClick={clickTogglePut} className={togglePut ? 'put_see on' : 'put_see'}>
                    {children}
                </p> : null
            }
            {
                seeSelected === true? 
                <div onClick={clickTogglePut} className={togglePut ? 'put_see' : 'put_see on'}>
                    {children}
                </div> : null
            }
            {
                seeDisabled === true? 
                <div className={'put_see off'}>
                    {children}
                </div> : null
            }
        </>
    );
};

export default PutDropComponent;