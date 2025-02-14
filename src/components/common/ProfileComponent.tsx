import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import ButtonComponent from './ButtonComponent';


const ProfileComponent = () => {

    const navigator = useNavigate();

    const [statusProfile, setStatusProfile] = useState<boolean>(false);
    const toggleProfile = () => {
        setStatusProfile(!statusProfile);
    }
    const closeProfile = () =>{
        setStatusProfile(false);
    }

    // profile 바깥클릭
    const popRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('mousedown', clickPopOutside);
        return () => {
            document.removeEventListener('mousedown', clickPopOutside);
        };
    });
    const clickPopOutside = (e:any) => {
        if (!popRef.current?.contains(e.target)) {
            closeProfile();
        }
    }

    return (
        <div className='hd_profile' ref={popRef}>
            <div className={statusProfile? 'profile_box on':'profile_box'} onClick={toggleProfile}>
                <span className='profile20'></span>
                <span className='comma_under8'></span>
            </div>
            <div className={statusProfile? "member_popover w184 p-20 on" : "member_popover w184 p-20"}>
                <div className="member_naming tac m-b-12">
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
