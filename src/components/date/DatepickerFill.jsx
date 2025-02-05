import React from 'react';
import { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DatepickerFill = ({ wrapClass }) => {

    const [datebox, setDatebox] = useState(false);
    const handleFocus = () => {
        setDatebox(!datebox);
    }
    const closeBox = () => {
        setDatebox(false);
    }

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className={wrapClass}>
            <div onClick={closeBox} className={datebox? 'box_bg on':'box_bg'}></div>
            <div onFocus={handleFocus} onBlur={closeBox} className={datebox? 'datebox w200 datepicker on' : 'datebox w200 datepicker'}>
                <DatePicker 
                dateFormat="yyyy/MM/dd" 
                selected={startDate} 
                placeholderText="yyyy/MM/dd"
                onChange={(date) => setStartDate(date)} 
                />
            </div>
        </div>
    );
};

export default DatepickerFill;