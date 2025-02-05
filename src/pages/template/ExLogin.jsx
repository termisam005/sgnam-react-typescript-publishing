import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import CheckComponent from '../../components/common/CheckComponent';
import InputZoneComponent from '../../components/input/InputZoneComponent';
import InputPassComponent from '../../components/input/InputPassComponent';


const ExLogin = () => {

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

  return (
    <div className='back'>
      <div className='login_back'>

        <article className='login_contents'>
          <div className='login_logo'>
            <h1>
              <ImgComponent className={'logo_uniplus'} src={"logo_uniplus_big.svg"} />
            </h1>
          </div>
          <div className='login_box'>
            <section className='login_left'>
              <h2 className='login_title'>
                유니플러스솔루션
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
              <ButtonComponent type={'button'} className={'btn_primary btn_l w-100'} txt={'로그인'} onClick={() => navigator('/exmain')} />

            </section>
          </div>
        </article>

      </div>
    </div>
  );
};

export default ExLogin;
