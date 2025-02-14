import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import CheckComponent from '../../components/common/CheckComponent';
import InputZoneComponent from '../../components/input/InputZoneComponent';
import InputPassComponent from '../../components/input/InputPassComponent';


const Login = () => {

  const navigator = useNavigate();

  //아이디 이벤트
  const [id, setId] = useState<string>('');
  const [idInput, setIdinput] = useState<boolean>(false);
  const [deletor, setDeletor] = useState<boolean>(false);

  const writePut = (e:React.ChangeEvent<HTMLInputElement>) => {
      setId(e.target.value);
      setIdinput(true);
      setDeletor(true);
  }
  const onDelete = () => {
      setId('');
      setIdinput(false);
      setDeletor(false);
  }

  //비밀번호 이벤트
  const [password, setPassword] = useState<string>('');
  const [viewer, setViewer] = useState<boolean>(false);

  const writePass = (e:any) => {
      setPassword(e.target.value);
  }
  const onSee = () => {
      setViewer(!viewer);
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
                      <a href='#!'>비빌번호 초기화</a>
                  </div>
              </div>
              <ButtonComponent type={'button'} className={'btn_primary btn_l w-100'} txt={'로그인'} onClick={() => navigator('/main')} />
            </section>
          </div>
        </article>

      </div>
    </div>
  );
};

export default Login;
