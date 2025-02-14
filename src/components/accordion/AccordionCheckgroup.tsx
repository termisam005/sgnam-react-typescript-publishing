import { useState, ReactNode } from 'react';
import ImgComponent from '../common/ImgComponent';
import CheckComponent from '../common/CheckComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';


interface Props{
    accordClass?: string;
    accordTitle?: string;
    addTitleClass?: string;
    checkId?: string;
    defaultChecked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    children?: ReactNode;
}

const AccordionCheckgroup = ({ accordClass, addTitleClass, accordTitle, checkId, defaultChecked, onChange, children }:Props) => {

    //accordion 이벤트
    const [accordion, setAccordion] = useState(false);
    const toggleAccord = () => {
        setAccordion(!accordion);
    }

    return (
        <div className={accordClass}>
            <div className={'accordion_title dflx_ac_jbet ' + addTitleClass}>
                <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={checkId} labelClass={'fs_14 p-l-30'} txt={accordTitle}
                defaultChecked={defaultChecked} onChange={onChange} />
                <ButtonWithComponent onClick={toggleAccord} className={accordion? 'accordion_toggle h20 on': 'accordion_toggle h20'}>
                    <ImgComponent className={'accordion_up w20'} src={'arrow_up_fff_20.svg'} />
                    <ImgComponent className={'accordion_down w20'} src={'arrow_down_fff_20.svg'} />
                </ButtonWithComponent>
            </div>
            <div className={accordion? 'accordion_contents show': 'accordion_contents'}>
                {children}
            </div>
        </div>
    );
};

export default AccordionCheckgroup;
