import React from 'react';
import { useState } from 'react';


const BoardTitle = ({ boardTitle }) => {

    const [toggleTitle, setToggleTitle] = useState(false);
    const clickToggle = () => {
        setToggleTitle(!toggleTitle);
    }

    return (
        <section className={toggleTitle? "board_title up":"board_title"}>
            <div className="bd_title">
                <p className="tp_line top"></p>
                <p className="tp_line bottom"></p>
                <span className="tlt">
                    {boardTitle}
                </span>
            </div>
            <p className="arr_top" onClick={clickToggle}></p>
        </section>
    );
};

export default BoardTitle;