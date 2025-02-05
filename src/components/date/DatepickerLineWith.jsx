import React from 'react';
import { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DatepickerLineWith = ({ wrapClass }) => {

    const [datebox, setDatebox] = useState(false);
    const handleFocus = () => {
        setDatebox(true);
    }
    const closeBox = () => {
        setDatebox(false);
    }

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <div className={wrapClass}>
            <div onClick={closeBox} className={datebox? 'box_bg on':'box_bg'}></div>
            <div onFocus={handleFocus} className={datebox? 'datebox line w230 datepicker on' : 'datebox line w230 datepicker'}>
                <DatePicker
                dateFormat="yyyy/MM/dd"
                selectsRange={true}
                startDate={startDate}
                endDate={endDate}
                placeholderText="yyyy/mm/dd-yyyy/mm/dd"
                onChange={(update) => {setDateRange(update);}}
                />
            </div>
        </div>
    );
};

export default DatepickerLineWith;