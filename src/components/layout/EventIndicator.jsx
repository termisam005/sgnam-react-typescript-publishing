import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';


const EventIndicator = ({ IndClass, IndTitle }) => {

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    return (
        <article className={IndClass}>
            <div class="indi_top" onClick={clickInd}>
                <h1>{IndTitle}</h1>
                <p className={toggleInd? 'arr_up m-r-15 down':'arr_up m-r-15'}>
                    <ImgComponent src={'arrow_up16.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts del':'indi_conts'}>
                <div className='indi_vert432 scroll sc_y'>
                    <section className='tmbox'>
                        <div class="tmbox_top">
                            <p class="tmbox_date">
                                <span>2022년 01월 23일 21:12</span>
                            </p>
                        </div>
                        <dl class="tm_dl">
                            <dt>
                                <p>[생생뉴스] 부천시청 앞 추출사고</p>
                            </dt>
                            <dd>
                                <p className='pure'>부천시민 A씨는 무단횡단자를 피해 부천시청 앞 3차선에서 2차선에서 주행중인 시민 B씨와 부딪힐 뻔 했습니다.</p>
                            </dd>
                            <p class="detail_see">
                                <span class="word">더보기</span>
                                <span class="mark_trig_down12"></span>
                            </p>
                        </dl>
                    </section>
                    <section className='tmbox'>
                        <dl class="tm_dl">
                            <dt>
                                <p>굴다리오거리 정체발생<br/>(평균속도 2km/h)</p>
                                <span className='sign_tri2 jam'></span>
                            </dt>
                            <dd>
                                <p class="tmbox_date">
                                    <span>2022년 01월 23일 21:12</span>
                                </p>
                                <p class="tmbox_date">
                                    <span>부평구 부평동</span>
                                </p>
                                <div className='label_line'>
                                    <span className='label etc'>추돌사고</span>
                                    <span className='label afternoon'>매우경미</span>
                                    <span className='label etc'>부분통제</span>
                                </div>
                                <div className='map_ex1'>
                                    <ImgComponent src={'map_ex1_2x.png'} />
                                </div>
                                <p>정보제공처: UTIS 국도소통정보</p>
                            </dd>
                            <p class="detail_see">
                                <span class="word">더보기</span>
                                <span class="mark_trig_down12"></span>
                            </p>
                        </dl>
                    </section>
                    <section className='tmbox'>
                        <div class="tmbox_top">
                            <p class="tmbox_date">
                                <span>2022년 01월 23일 21:12</span>
                            </p>
                        </div>
                        <dl class="tm_dl">
                            <dt>
                                <p>[생생뉴스] 부천시청 앞 추출사고</p>
                            </dt>
                            <dd>
                                <p className='pure'>부천시민 A씨는 무단횡단자를 피해 부천시청 앞 3차선에서 2차선에서 주행중인 시민 B씨와 부딪힐 뻔 했습니다.</p>
                            </dd>
                            <p class="detail_see">
                                <span class="word">더보기</span>
                                <span class="mark_trig_down12"></span>
                            </p>
                        </dl>
                    </section>
                </div>
            </div>
        </article>
    );
};

export default EventIndicator;