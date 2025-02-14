import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';


interface Props {
    zoneClass?: string;
	type?: string;
	placeholder?: string;
	messClass?: string;
	message?: string;
}

const InputMdComponent = ({ zoneClass, type, placeholder, messClass, message }:Props) => {

    const [id, setId] = useState('');
    const [idInput, setIdinput] = useState(false);
    const [deletor, setDeletor] = useState(false);

    const writePut = (e:any) => {
        setId(e.target.value);
        setIdinput(true);
        setDeletor(true);
    }
    const onDelete = () => {
        setId('');
        setIdinput(false);
        setDeletor(false);
    }

    return (
        <div className={zoneClass}>
            <input type={type} className={idInput? 'wrput p-r-32' : 'wrput'} placeholder={placeholder} value={id} onChange={writePut} />
            <span className={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} onClick={onDelete}>
                <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
            </span>
            <span className={messClass}>{message}</span>
        </div>
    );
};

export default InputMdComponent;
