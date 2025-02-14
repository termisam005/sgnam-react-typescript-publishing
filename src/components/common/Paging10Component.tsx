import ImgComponent from './ImgComponent';


interface Props{
    wrapClass?: string;
}

const Paging10Component = ({ wrapClass }:Props) => {

    return (
        <div className={wrapClass}>
            <a href='#none' className="h12">
                <ImgComponent className="valign_top w12" src={'arrow_left_fff_12.svg'} />
            </a>
            <a href='#none' className="btn_pagination selected">
                <span className="fc_grey87">1</span>
            </a>
            <a href='#none' className="btn_pagination">
                <span className="fc_grey87">2</span>
            </a>
            <a href='#none' className="btn_pagination">
                <span className="fc_grey87">3</span>
            </a>
            <a href='#none' className=" btn_pagination">
                <ImgComponent className="w20" src={'more_fff_24.svg'} />
            </a>                                
            <a href='#none' className="btn_pagination">
                <span className="fc_grey87">10</span>
            </a>
            <a href='#none' className="h12">
                <ImgComponent className="valign_top w12" src={'arrow_right_fff_12.svg'} />
            </a>
        </div>
    );
};

export default Paging10Component;
