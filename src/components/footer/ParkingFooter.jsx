/*
주차통합 푸터
 */
import React from 'react';
import { useState } from 'react';
import ParkingFooterLeft from './ParkingFooterLeft';


const ParkingFooter = () => {

    return (
        <footer>
            <div className='footer_in'>
                <ParkingFooterLeft />
            </div>
        </footer>
    );
};

export default ParkingFooter;