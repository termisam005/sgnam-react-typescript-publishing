import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import CheckComponent from '../../components/common/CheckComponent';
import InputZoneComponent from '../../components/input/InputZoneComponent';
import InputPassComponent from '../../components/input/InputPassComponent';

import PopupComponent from '../../components/popup/PopupComponent';


const LoginPop = () => {
//로그인 팝업페이지

  const navigator = useNavigate();

  //아이디 이벤트
  const [id, setId] = useState('');
  const [idInput, setIdinput] = useState();
  const [deletor, setDeletor] = useState(false);

  const writePut = (e) => {
      setId(e.target.value);
      setIdinput(true);
      setDeletor(true);
  }
  const onDelete = (e) => {
      setId(e.target.value = '');
      setIdinput(false);
      setDeletor(false);
  }

  //비밀번호 이벤트
  const [password, setPassword] = useState('');
  const [viewer, setViewer] = useState(false);

  const writePass = (e) => {
      setPassword(e.target.value);
  }
  const onSee = (e) => {
      setPassword(e.target.value);
      setViewer(!viewer);
  }

  //Popup
  const [errorPop, setErrorPop] = useState(true);
  const closeError = () => {
    setErrorPop(false);
  }

  return (
    <div className='back'>
      <div className='login_back'>
        <div className='login_dark'></div>

        <article className='login_contents'>
          <div className='login_logo'>
            <h1>
              <ImgComponent className={'logo_seongnam'} src={"logo_seongnam_big.svg"} />
            </h1>
          </div>
          <div className='login_box'>
            <section className='login_left'>
              <h2 className='login_title'>
                성남시<br/> 
                지능형 교통체계<br/> 
                (ITS)
              </h2>
            </section>
            <section className='login_input bd_left1'>
              <InputZoneComponent zoneClass={'put_zone normal'} type={'text'} placeholder={'아이디'} 
                value={id} onChange={writePut} onDelete={onDelete} 
                inputClass={idInput? 'wrput large p-r-32' : 'wrput large'} 
                deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} 
                messClass={'mess error'} message={'Error message'} />
              <InputPassComponent zoneClass={'put_zone normal m-t-8'} type={'password'} inputClass={'wrput pass large'} placeholder={'비밀번호'} 
                value={password} onChange={writePass} onSee={onSee} 
                seeClass={viewer? 'put_check put_see on' : 'put_check put_see'} 
                messClass={'mess error'} message={'Error message'} />
              <div className='save_group'>
                  <CheckComponent type={'checkbox'} checkClass={'checkbox_type login'} checkId={'checkbox01'} name={'checkbox_login'} 
                  labelClass={'fs_13'} txt={'아이디저장'} />
                  <div className='pw_initial dflx_ac'>
                      <a>비빌번호 초기화</a>
                  </div>
              </div>
              <ButtonComponent type={'button'} className={'btn_primary btn_l w-100'} txt={'로그인'} onClick={() => navigator('/main')} />
            </section>
          </div>
        </article>

      </div>

      {/* popup */}
      <div className={errorPop ? 'modal open' : 'modal'}>
          <div className='modal_bg'></div>
          <article className='pop_wrap'>
              <PopupComponent boxClass={'popover_box w480'} titleBgClass={'popup_title_bg'} 
                titleClass={'popup_title'} title={'휴면 계정 알림'} close={closeError}>
                  <div className="popup_contents p-20 dflx_column">
                      <div className="dflx_ac col_gap12 m-b-16">
                          <span className='dpinblock w24 h24'>
                              <ImgComponent className={'w-100'} src={"sucess_fill_24.svg"} />
                          </span>
                          <p className="fs_14 lh_18">
                              정말 로그아웃 하시겠습니까? 
                          </p>
                      </div>
                      <div className="m-t-a m-l-a col_gap8">
                          <ButtonComponent onClick={closeError} type={'button'} className={'btn_primary btn_m w140'} txt={'확인'} />
                      </div>
                  </div> 
              </PopupComponent>
              <PopupComponent boxClass={'popover_box w480'} titleBgClass={'popup_title_bg'} 
                titleClass={'popup_title'} title={'[경고] 비밀번호 오류'} close={closeError}>
                <div className="popup_contents p-20 dflx_column">
                    <div className="dflx_as col_gap12 m-b-16">
                        <span className='dpinblock w24 h24'>
                            <ImgComponent className={'w-100'} src={"notice_fill_24.svg"} />
                        </span>
                        <p className="fs_14 lh_18">
                            비밀번호를 잘못 입력했습니다.<br/>
                            입력하신 내용을 다시 확인해주세요.<br/>
                            ※ 5회 이상 틀릴 경우 계정이 잠깁니다.
                        </p>
                    </div>
                    <div className="m-t-a m-l-a dflx col_gap8">
                        <ButtonComponent onClick={closeError} type={'button'} className={'btn_secondary btn_m w140'} txt={'취소'} />
                        <ButtonComponent onClick={closeError} type={'button'} className={'btn_primary btn_m w140'} txt={'확인'} />
                    </div>
                </div>
              </PopupComponent>
          </article>
      </div>
      {/* popup end */}

    </div>
  );
};

export default LoginPop;
