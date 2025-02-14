import { useState, CSSProperties } from 'react';
import ImgComponent from '../common/ImgComponent';
import MarkerComponent from '../map/MarkerComponent';
import PopupComponent from './PopupComponent';


interface Props{
    style?: CSSProperties; 
    title?: string;
}

const MarkerPopBreak = ({ style, title }:Props) => {

    //지도 마커 토글
    const [markStatus, setMarkStatus] = useState<boolean>(true);
    const toggleMark = () => {
      setMarkStatus(!markStatus);
    }
    const closeMark = () =>{
      setMarkStatus(false);
    }
    
    return (
        <article className={'marker_container'} style={style}>
            <div className='tooltip_parents'>
                <MarkerComponent onClick={toggleMark} className={markStatus? 'marker mk56 on' : 'marker mk56'}>
                    <ImgComponent className='img_off' src={'car_accident_56.svg'} />
                    <ImgComponent className='img_selected' src={'car_accident_selected_56.svg'} />
                </MarkerComponent>

                <PopupComponent boxClass={markStatus? 'popover_box w320 map_top dpblock' : 'popover_box w320 map_top'} titleBgClass={'popup_title_bg'} 
                titleClass={'popup_title'} title={title} close={closeMark}>
                    <div className="popup_contents p-20">
                        
                        <div className='dflx_ac_jbet m-b-12'>
                            <p className="fc_grey60 fs_12">2023.11.10 16:05</p>
                        </div>
                        <div className='break_infoline'>
                            <dl className='break_infodl'>
                                <dt>위치</dt>
                                <dd>분당구 수내교사거리 방향</dd>
                            </dl>
                            <dl className='break_infodl'>
                                <dt>제목</dt>
                                <dd>
                                    [통제] 분당구 수내사거리에서 수내사거리 방향 양방향 전체 차로 공사 정밀 안전진단E등급, 긴급사용제한으로 우회바람
                                </dd>
                            </dl>
                            <dl className='break_infodl'>
                                <dt>위치 </dt>
                                <dd>분당구 수내교사거리 방향</dd>
                            </dl>
                            <dl className='break_infodl'>
                                <dt>위치 </dt>
                                <dd>분당구 수내교사거리 방향</dd>
                            </dl>
                        </div>

                    </div>
                </PopupComponent>
            </div>
        </article>
    )
}

export default MarkerPopBreak;

