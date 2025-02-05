/*
스마트교차로 푸터
 */
import React from 'react';
import { useState } from 'react';
import SmartFooterLeft from './SmartFooterLeft';
import ButtonComponent from '../common/ButtonComponent';
import DistanceComponent from '../map/DistanceComponent';
import ProgressComponent from '../map/ProgressComponent';
import ProgressBox from '../map/ProgressBox';


const SmartFooter = () => {

    const [tabStatus, setTabStatus] = useState(1);
    const clickTab = (index) => {
        setTabStatus(index);
    }

    return (
        <footer>
            <div className='footer_in'>
                <SmartFooterLeft />
            </div>
        </footer>
    );
};

export default SmartFooter;