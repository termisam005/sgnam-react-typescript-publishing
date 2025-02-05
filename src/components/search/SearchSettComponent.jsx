import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';


const SearchSettComponent = ({ lineClass, zoneClass, type, placeholder, value }) => {

    const [search, setSearch] = useState('');
    const [srchInput, setSrchInput] = useState();
    const [deletor, setDeletor] = useState(false);
    const [button, setButton] = useState(false);

    const writePut = (e) => {
        setSearch(e.target.value);
        setSrchInput(true);
        setDeletor(true);
        setButton(true);
    }
    const onDelete = (e) => {
        setSearch(e.target.value = '');
        setSrchInput(false);
        setDeletor(false);
        setButton(false);
    }

    return (
        <div className={lineClass}>
            <div className={zoneClass}>
                <input type={type} className={srchInput? 'wrput p-r-32' : 'wrput'} placeholder={placeholder} value={value} onChange={writePut} />
                <span className={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} onClick={onDelete}>
                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                </span>
            </div>
            <ButtonWithComponent type={'submit'} className={button? 'btn_srch28 on' : 'btn_srch28'}>
                <span className="dflx_ac_jcent op06">
                    <ImgComponent className={'w20'} src={'icon_srch_20.svg'} />
                </span>
            </ButtonWithComponent>
        </div>
    );
    
};

export default SearchSettComponent;
