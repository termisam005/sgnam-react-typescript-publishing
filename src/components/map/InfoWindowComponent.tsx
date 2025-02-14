import { ReactNode } from 'react';
import ButtonComponent from '../common/ButtonComponent';


interface Props{
    className?:string; 
    title?: string;
    children?: ReactNode;
    infoTime?: string | number;
    infoPlace?: string;
    infoSupport?: string;
    buttonTxt?: string;
}

const InfoWindowComponent = ({ className, title, children, infoTime, infoPlace, infoSupport, buttonTxt }:Props) => {

  return (
    <div className={className}>
        <div className="infowindow_title">{title}</div>
        <div className="infowindow_content">
            <div className="dflx gap_4 m-b-10">
                {children}
            </div>
            <div className='info_text'>
                <p className="fc_grey60">
                    {infoTime}
                </p>
                <p className="fc_grey60">
                    {infoPlace}
                </p>
                <p className="fc_grey60">
                    {infoSupport}
                </p>
            </div>
            <ButtonComponent className={'btn_primary btn_xs m-t-10 w-100'} txt={buttonTxt} />
        </div>
    </div>
  );
};

export default InfoWindowComponent;