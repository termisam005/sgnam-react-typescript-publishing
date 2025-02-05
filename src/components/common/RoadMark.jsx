import React from 'react';


const RoadMark = ({ markClass, style, busClass, busWord, busNumber, statusClass, statusWord }) => {

    return (
        <div className={markClass} style={style}>
            <div className="road_inner">
                <p className={busClass}>{busWord}</p>
                <div className="mark_txt">
                    <p className="word">{busNumber}</p>
                    <span className={statusClass}>{statusWord}</span>
                </div>
            </div>
        </div>
    );
};

export default RoadMark;