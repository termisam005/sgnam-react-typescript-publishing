import React from 'react';
import { useState } from 'react';
import FooterRight from './FooterRight';
import FooterCenter from './FooterCenter';
import FooterLeft from './FooterLeft';
import ButtonComponent from '../common/ButtonComponent';
import DistanceComponent from '../map/DistanceComponent';
import ProgressComponent from '../map/ProgressComponent';
import ProgressBox from '../map/ProgressBox';


const Footer = () => {

    const [tabStatus, setTabStatus] = useState(1);
    const clickTab = (index) => {
        setTabStatus(index);
    }

    return (
        <footer>
            <div className='footer_in'>
                <FooterLeft />
                <FooterCenter>
                    <div className="btn_fnb_tab h40">
                        <ButtonComponent onClick={() => {clickTab(1)}} className={tabStatus === 1? 'btn_m w120 selected' : 'btn_m w120'} txt={'상황관리'} />
                        <ButtonComponent onClick={() => {clickTab(2)}} className={tabStatus === 2? 'btn_m w120 selected' : 'btn_m w120'} txt={'긴급차량'} />
                    </div>
                </FooterCenter>
                <FooterRight>
                    <DistanceComponent distClass={'control_dist'} distance={'5km'} />
                    <ProgressComponent size='large'>
                        <ProgressBox boxClass={'progress_box h40'} />
                    </ProgressComponent>
                </FooterRight>
            </div>
        </footer>
    );
};

export default Footer;