import React from 'react';
import { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DatepickerFillDual = ({ wrapClass }) => {

    const [datebox01, setDatebox1] = useState(false);
    const handleFocus1 = () => {
        setDatebox1(!datebox01);
    }
    const closeBox1 = () => {
        setDatebox1(false);
    }

    const [datebox02, setDatebox2] = useState(false);
    const handleFocus2 = () => {
        setDatebox2(!datebox02);
    }
    const closeBox2 = () => {
        setDatebox2(false);
    }

    const [startDate01, setStartDate01] = useState(null);
    const [startDate02, setStartDate02] = useState(null);


    return (
        <div className={wrapClass}>
            <div onClick={closeBox1} className={datebox01? 'box_bg on':'box_bg'}></div>
            <div onClick={closeBox2} className={datebox02? 'box_bg on':'box_bg'}></div>

            <section className='dflx_ac gap_8'>
                <div onFocus={handleFocus1} onBlur={closeBox1} className={datebox01? 'datebox w140 datepicker on' : 'datebox w140 datepicker'}>
                    <DatePicker 
                    dateFormat="yyyy/MM/dd" 
                    selected={startDate01} 
                    placeholderText="yyyy/MM/dd"
                    onChange={(date) => setStartDate01(date)} 
                    />
                </div>
                <span className='fs_13'>~</span>
                <div onFocus={handleFocus2} onBlur={closeBox2} className={datebox02? 'datebox w140 datepicker on' : 'datebox w140 datepicker'}>
                    <DatePicker 
                    dateFormat="yyyy/MM/dd" 
                    selected={startDate02} 
                    placeholderText="yyyy/MM/dd"
                    onChange={(date) => setStartDate02(date)} 
                    />
                </div>
            </section>
        </div>
    );
};

export default DatepickerFillDual;