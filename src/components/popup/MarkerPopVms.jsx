import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import MarkerComponent from '../map/MarkerComponent';
import PopupComponent from './PopupComponent';


const MarkerPopVms = ({ style, title }) => {

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
                    <ImgComponent className='img_off' src={'vms_normal_48.svg'} />
                    <ImgComponent className='img_selected' src={'vms_normal_selected_48.svg'} />
                </MarkerComponent>

                <PopupComponent boxClass={markStatus? 'popover_box w480 map_top dpblock' : 'popover_box w480 map_top'} titleBgClass={'popup_title_bg'} 
                titleClass={'popup_title'} title={title} close={closeMark}>
                    <div className="popup_contents p-20">
                        <div class="vms_area auto h96 m-b-12">
                            <p><span>황송터널(남한산성 방면) 공사</span></p>
                            <p><span className='fc_green_light'>10.~19. ~ 10. 24. 09:00 ~ 18:00</span></p>
                            <p><span>공사로 인한 부분 통제</span></p>
                        </div>
                        <div class="vms_area auto h96 m-b-12">
                            <p><span className='fc_error_code'>10. 21. ~ 10. 22.</span><span>서울 ADEX 2023</span></p>
                            <p><span>탄천로 여수대로</span> <span className='fc_error_code'>교통혼잡 우회바람</span></p>
                            <p><span className='fc_green_light'>-성남수정경찰서장-</span></p>
                        </div>
                        <div class="vms_area auto h96 m-b-12">
                            <p><span>10. 6. 20:00 ~ 08:00 오리역3 등 8개소</span></p>
                            <p><span className='fc_green_light'>공사로 인한 부분 통제</span></p>
                        </div>
                        <table className="table_box">
                            <caption className="hidden_tag">VMS 기기명</caption>
                            <thead>
                                <tr>
                                    <th className="tac"><p className='text_ellipsis w140'>기기명</p></th>
                                    <th className="tac"><p className='text_ellipsis w140'>기기 ID</p></th>
                                    <th className="tac"><p className='text_ellipsis w80'>유형</p></th>
                                    <th className="tac"><p className='text_ellipsis w80'>통신상태</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row_type2">
                                    <td className="tac">야탑사거리(북)</td>
                                    <td className="tac">CAM-0054</td>
                                    <td className="tac">2단12열</td>
                                    <td className="tac">
                                        <span className='fc_success'>정상</span>
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

export default MarkerPopVms;

