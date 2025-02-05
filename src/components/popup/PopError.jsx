import React, { Component } from 'react';
import ButtonComponent from '../common/ButtonComponent';
import ImgComponent from '../common/ImgComponent';


const PopError = ({ open, close, golink }) => {
    
    return (
        <div className={open ? 'modal open' : 'modal'}>
            <div onClick={close} className='modal_bg'></div>

            <article className='pop_wrap'>
                <div className='pop_error'>
                    <p className='pop_feel'>
                        <ImgComponent src={'load_feel_72.svg'} />
                    </p>
                    <section className='pop100_text dflx_ac_jcent'>
                        <div className='texts'>
                            <h3>페이지를 찾을 수 없습니다.</h3>
                            <ul>
                                <li className='txt'>
                                    요청 페이지가 서버에 존재하지 않습니다.
                                </li>
                                <li className='txt'>
                                    호출 URL 주소가 정확한지 다시 한 번 확인해 주세요.
                                </li>
                            </ul>
                        </div>
                        <ButtonComponent onClick={golink} type={'button'} className={'btn_primary btn_l w320'} txt={'이전 페이지로 돌아가기'}  />
                    </section>
                </div>
            </article>
                
        </div>
    )
}

export default PopError;

