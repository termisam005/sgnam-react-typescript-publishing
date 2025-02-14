import { ReactNode } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';


interface Props{
    addedClass?: string; 
    children?: ReactNode;
    size?: string;
}

const ProgressComponent = ({ addedClass, children, size }:Props) => {

  return (
    <div className={addedClass ? 'control_line ' + addedClass : 'control_line '}>
        <ButtonWithComponent className={'btn_icon icon_ffb' + ' ' + size}>
            <ImgComponent className={'w20'} src={'minus_fff_24.svg'} />
        </ButtonWithComponent>
            {children}
        <ButtonWithComponent className={'btn_icon icon_ffb' + ' ' + size}>
            <ImgComponent className={'w20'} src={'plus_line_fff_24.svg'} />
        </ButtonWithComponent>
    </div>
    );
};

export default ProgressComponent;