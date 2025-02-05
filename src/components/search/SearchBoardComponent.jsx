import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonComponent from '../common/ButtonComponent';


const SearchBoardComponent = ({ lineClass, zoneClass, btClass, type, placeholder, value }) => {

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
    const closeBoard = () => {
        setSrchInput(false);
    }
    const onDelete = (e) => {
        setSearch(e.target.value = '');
        setSrchInput(false);
        setDeletor(false);
        setButton(false);
    }
    const onSelectValue = (e) => {
        const {innerText} = e.target;
        setSearch(innerText);
        setSrchInput(false);
    };

    return (
        <article class="pos_rel">
            <div onClick={closeBoard} className={srchInput? 'box_bg on':'box_bg'}></div>
            <section className={lineClass}>
                <div className={zoneClass}>
                    <div className={srchInput? 'srch_zone w-100 on' : 'srch_zone w-100'}>
                        <button type="button" className={btClass}></button>
                        <input type={type} className={srchInput? 'srch_put p-r-24' : 'srch_put'} placeholder={placeholder} value={value} onChange={writePut} />
                        <span className={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} onClick={onDelete}>
                            <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                        </span>
                    </div>
                </div>
                <ButtonComponent type={'submit'} txt={'검색'} className={button? 'btn_srch28 word shadow on' : 'btn_srch28 word shadow'} />
            </section>
            <section className={srchInput? 'srch_brd on' : 'srch_brd'}>
                <ul className="srch_ul">
                    <li>
                        <p onClick={onSelectValue} className="p_val">부천시(전체)</p>
                    </li>
                    <li>
                        <p onClick={onSelectValue} className="p_val">부천시청</p>
                    </li>
                    <li>
                        <p onClick={onSelectValue} className="p_val">부천시청 사거리</p>
                    </li>
                    <li>
                        <p onClick={onSelectValue} className="p_val">부천역 사거리</p>
                    </li>
                </ul>
            </section>
        </article>
    );
    
};

export default SearchBoardComponent;
