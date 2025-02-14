import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';


interface Props{
    lineClass?: string;
    zoneClass?: string;
    type?: string;
    placeholder?: string;
}

const SearchSettLineComponent = ({ lineClass, zoneClass, type, placeholder }:Props) => {

    const [search, setSearch] = useState<string>('');
    const [srchInput, setSrchInput] = useState<boolean>(false);
    const [deletor, setDeletor] = useState<boolean>(false);
    const [button, setButton] = useState<boolean>(false);

    const writePut = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setSrchInput(true);
        setDeletor(true);
        setButton(true);
    }
    const onDelete = () => {
        setSearch('');
        setSrchInput(false);
        setDeletor(false);
        setButton(false);
    }

    return (
        <div className={lineClass}>
            <div className={zoneClass}>
                <input type={type} className={srchInput? 'wrput line p-r-32' : 'wrput line'} placeholder={placeholder} value={search} onChange={writePut} />
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

export default SearchSettLineComponent;
