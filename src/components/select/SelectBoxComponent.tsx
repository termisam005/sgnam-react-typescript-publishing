import { ReactNode } from 'react';
import ImgComponent from '../common/ImgComponent';


interface Props{
    focus?: ()=>void;
    selboxClass?: string;
    open?: boolean;
    close?: ()=> void;
    placeholder?: string;
    currentValue?: string | number;
    children?: ReactNode;
    size?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SelectBoxComponent = ({ 
        focus, selboxClass, open, close, placeholder, currentValue, children, size, onChange 
    }:Props) => {

    return (
        <section>
            <div onClick={close} className={open? 'box_bg on':'box_bg'}></div>
            <div onFocus={focus} className={selboxClass}>
                <input type="text" className="selectbox_text w-100" placeholder={placeholder} value={currentValue} size={size} onChange={onChange} />
                <ImgComponent className="op06 w16 selectbox_arrow" src={'arrow_down_fff_16.svg'} />
                <ul className="selectbox_options scroll">
                    {children}
                </ul>
            </div>
        </section>
    );
};

export default SelectBoxComponent;