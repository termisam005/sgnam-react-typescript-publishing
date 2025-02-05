import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';


const InputMdLineComponent = ({ zoneClass, type, placeholder, messClass, message }) => {

    const [id, setId] = useState('');
    const [idInput, setIdinput] = useState();
    const [deletor, setDeletor] = useState(false);

    const writePut = (e) => {
        setId(e.target.value);
        setIdinput(true);
        setDeletor(true);
    }
    const onDelete = (e) => {
        setId(e.target.value = '');
        setIdinput(false);
        setDeletor(false);
    }

    return (
        <div className={zoneClass}>
            <input type={type} className={idInput? 'wrput line p-r-32' : 'wrput line'} placeholder={placeholder} value={id} onChange={writePut} />
            <span className={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} onClick={onDelete}>
                <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
            </span>
            <span className={messClass}>{message}</span>
        </div>
    );
};

export default InputMdLineComponent;
