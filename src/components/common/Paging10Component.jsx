import React from 'react';
import ImgComponent from './ImgComponent';


const Paging10Component = ({ wrapClass }) => {

    return (
        <div className={wrapClass}>
            <a className="h12">
                <ImgComponent className="valign_top w12" src={'arrow_left_fff_12.svg'} />
            </a>
            <a className="btn_pagination selected">
                <span className="fc_grey87">1</span>
            </a>
            <a className="btn_pagination">
                <span className="fc_grey87">2</span>
            </a>
            <a className="btn_pagination">
                <span className="fc_grey87">3</span>
            </a>
            <a className=" btn_pagination">
                <ImgComponent className="w20" src={'more_fff_24.svg'} />
            </a>                                
            <a className="btn_pagination">
                <span className="fc_grey87">10</span>
            </a>
            <a className="h12">
                <ImgComponent className="valign_top w12" src={'arrow_right_fff_12.svg'} />
            </a>
        </div>
    );
};

export default Paging10Component;
