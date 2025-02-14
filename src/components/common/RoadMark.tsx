import { CSSProperties } from 'react';

interface Props{
  markClass?: string;
  style?: CSSProperties;
  busClass?: string;
  busWord?: string;
  busNumber?: string | number;
  statusClass?: string;
  statusWord?: string;
}


const RoadMark = ({ 
        markClass, style, busClass, busWord, busNumber, statusClass, statusWord 
    }:Props) => {

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