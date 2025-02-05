import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import ImgComponent from './ImgComponent';
import ButtonComponent from './ButtonComponent';


const ProfileComponent = () => {

    const navigator = useNavigate();

    const [statusProfile, setStatusProfile] = useState(false);
    const toggleProfile = () => {
        setStatusProfile(!statusProfile);
    }

    return (
        <div className='hd_profile' onClick={toggleProfile}>
            <div className={statusProfile? 'profile_box on':'profile_box'}>
                <span className='profile20'></span>
                <span className='comma_under8'></span>
            </div>
            <div className={statusProfile? "member_popover w184 p-20 on" : "member_popover w184 p-20"}>
                <div className="member_naming m-b-12">
                    {/* <ImgComponent className="w32" src={'member_icon_32.svg'} /> */}
                    <h5 className="fs_14_bold">성남도시개발공사</h5>
                </div>
                <div className="dflx_ac_jbet btm_white20 p-t-10 p-b-10">
                    <span className="fs_12 fc_grey60">아이디</span>
                    <span className="fs_14_medium">abcdee123</span>
                </div>
                <div className="dflx_ac_jbet btm_white20 p-t-8 p-b-8">
                    <span className="fs_12 fc_grey60">이름</span>
                    <span className="fs_14_medium">홍길동</span>
                </div>
                <ButtonComponent className={'btn_secondary btn_s m-t-32 w-100'} txt={'로그아웃'} onClick={() => navigator('/') } />
            </div>
        </div>
    );
};

export default ProfileComponent;
