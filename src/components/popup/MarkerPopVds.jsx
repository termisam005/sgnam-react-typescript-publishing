import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import MarkerComponent from '../map/MarkerComponent';
import PopupComponent from './PopupComponent';


const MarkerPopVds = ({ style, title }) => {

    //지도 마커 토글
    const [markStatus, setMarkStatus] = useState(true);
    const toggleMark = () => {
      setMarkStatus(!markStatus);
    }
    const closeMark = () =>{
      setMarkStatus(false);
    }
    
    return (
        <article className={'marker_container'} style={style}>
            <div className='tooltip_parents'>
                <MarkerComponent onClick={toggleMark} className={markStatus? 'marker mk48 on' : 'marker mk48'}>
                    <ImgComponent className='img_off' src={'radar_normal_48.svg'} />
                    <ImgComponent className='img_selected' src={'radar_normal_selected_48.svg'} />
                </MarkerComponent>

                <PopupComponent boxClass={markStatus? 'popover_box w480 map_top dpblock' : 'popover_box w480 map_top'} titleBgClass={'popup_title_bg'} 
                titleClass={'popup_title'} title={title} close={closeMark}>
                    <div className="popup_contents p-20">
                        <table className="table_box m-b-12">
                            <caption className="hidden_tag">VDS 리스트</caption>
                            <thead>
                                <tr>
                                    <th className="tac"><p className='text_ellipsis w180'>기기명</p></th>
                                    <th className="tac"><p className='text_ellipsis w180'>기기 ID</p></th>
                                    <th className="tac"><p className='text_ellipsis w80'>통신상태</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row_type2">
                                    <td className="tac">야탑사거리(북)</td>
                                    <td className="tac">CAM-0054</td>
                                    <td className="tac">
                                        <span className='fc_success'>정상</span>
                                    </td>
                                </tr>                 
                            </tbody>
                        </table>
                        <table className='table_box grey'>
                            <tbody>
                                <tr className="row_type2">
                                    <td className=''>
                                        <p className='text_ellipsis tac'>(5분) 교통량</p>
                                    </td>
                                    <td>
                                        <p className='text_ellipsis tac w300'>546 대</p>
                                    </td>
                                </tr>
                                <tr className="row_type2">
                                    <td className=''>
                                        <p className='text_ellipsis tac'>(5분) 평균 속도</p>
                                    </td>
                                    <td>
                                        <p className='text_ellipsis tac w300'>67km/h</p>
                                    </td>
                                </tr>
                                <tr className="row_type2">
                                    <td className='tac'>
                                        <p className='text_ellipsis tac'>방향</p>
                                    </td>
                                    <td>
                                        <p className='text_ellipsis tac w300'>판교 방향</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </PopupComponent>
            </div>
        </article>
    )
}

export default MarkerPopVds;

