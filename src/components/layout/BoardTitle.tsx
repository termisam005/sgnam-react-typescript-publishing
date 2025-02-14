import { useState } from 'react';


interface Props{
    boardTitle?: string;
}

const BoardTitle = ({ boardTitle }:Props) => {

    const [toggleTitle, setToggleTitle] = useState<boolean>(false);
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