import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';


interface Props{
    lineClass?: string;
    zoneClass?: string;
    type?: string;
    inputClass?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    deleteClass?: string;
    onDelete?: ()=> void;
    buttonClass?: string;
}

const SearchComponent = ({ 
        lineClass, zoneClass, type, inputClass, placeholder, value, onChange, deleteClass, onDelete, buttonClass 
    }:Props) => {

    return (
        <div className={lineClass}>
            <div className={zoneClass}>
                <input type={type} className={inputClass} placeholder={placeholder} value={value} onChange={onChange} />
                <span className={deleteClass} onClick={onDelete}>
                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                </span>
            </div>
            <ButtonWithComponent type={'submit'} className={buttonClass}>
                <span className="dflx_ac_jcent op06">
                    <ImgComponent className={'w20'} src={'icon_srch_20.svg'} />
                </span>
            </ButtonWithComponent>
        </div>
    );
    
};

export default SearchComponent;
