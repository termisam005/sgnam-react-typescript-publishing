import React from 'react';
import ImgComponent from './ImgComponent';
import ButtonComponent from './ButtonComponent';

const TodCont2 = ({ contClass }) => {

    return (
        <section className={contClass}>
            <article className="tod_above">
                <div className="tod_left">
                    <p className="tod big">
                        <span>부평전화국<br />사거리</span>
                    </p>
                </div>
                <div className="tod_right">
                    <div className="tod_line">
                        <p className="tod gray">
                            <span>주기</span>
                        </p>
                        <p className="tod midd">
                            <span>96초</span>
                        </p>
                        <p className="tod gray">
                            <span>Phase</span>
                            <span>1</span>
                        </p>
                        <p className="tod gray">
                            <span>Phase</span>
                            <span>2</span>
                        </p>
                        <p className="tod gray">
                            <span>Phase</span>
                            <span>3</span>
                        </p>
                        <p className="tod gray">
                            <span>Phase</span>
                            <span>4</span>
                        </p>
                        <p className="tod gray">
                            <span>Phase</span>
                            <span>5</span>
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
                    <div className="tod_line">
                        <p className="tod">
                            <ImgComponent src={'ar_right_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_right_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_right_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_top_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_top_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_left_down_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_right_up_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_up_left_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_up_right_wh20.svg'} />
                        </p>
                        <p className="tod">
                            <ImgComponent src={'ar_down_wh20.svg'} />
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
            <ButtonComponent type='button' className='btn_check sm w-100' txt={'상세 TOD 정보'} />
        </section>
    );
};

export default TodCont2;