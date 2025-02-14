import ImgComponent from './ImgComponent';
import ButtonComponent from './ButtonComponent';


interface Props{
    contClass?: string;
    place?: string;
}

const TodCont3 = ({ contClass, place }:Props) => {

    return (
        <section className={contClass}>
            <article className="tod_above">
                <div className="tod_left">
                    <p className="tod big">
                        <span>{place}</span>
                    </p>
                </div>
                <div className="tod_right">
                    <div className="tod_line">
                        <p className="tod gray top">
                            <span>주기</span>
                        </p>
                        <p className="tod midd">
                            <span>96초</span>
                        </p>
                        <p className="tod gray">
                            <span>1</span>
                        </p>
                        <p className="tod gray">
                            <span>2</span>
                        </p>
                        <p className="tod gray">
                            <span>3</span>
                        </p>
                        <p className="tod gray">
                            <span>4</span>
                        </p>
                        <p className="tod gray">
                            <span>5</span>
                        </p>
                        <p className="tod gray">
                            <span>6</span>
                        </p>
                    </div>
                </div>
            </article>
            <article className="tod_bottom">
                <div className="tod_left">
                    <div className="offset">
                        <dl className="tod_dl">
                            <dt>Offset</dt>
                            <dd>0</dd>
                        </dl>
                    </div>
                    <div className="ring">
                        <p className="tod gray plus">
                            <span>Ring A</span>
                        </p>
                        <p className="tod gray plus">
                            <span>Ring B</span>
                        </p>
                        <p className="tod gray plus">
                            <span>녹색시간</span>
                        </p>
                    </div>
                </div>
                <div className="tod_right">
                    <div className="tod_line arrows">
                        <p className="tod">
                            <ImgComponent src={'ar_right_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_left_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_down_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_top_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_up_right_wh14.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_up_right_wh14.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_down_right_wh14.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_down_left_wh14.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_up_left_wh14.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_right_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_left_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_left_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <span>24</span>
                        </p>
                        <p className="tod">
                            <span>24</span>
                        </p>
                        <p className="tod">
                            <span>24</span>
                        </p>
                        <p className="tod">
                            <span>24</span>
                        </p>
                        <p className="tod">
                            <span>24</span>
                        </p>
                        <p className="tod">
                            <span>24</span>
                        </p>
                    </div>
                </div>
            </article>
            <ButtonComponent type='button' className='btn_primary btn_s m-t-8' txt={'상세 TOD 정보'} />
        </section>
    );
};

export default TodCont3;