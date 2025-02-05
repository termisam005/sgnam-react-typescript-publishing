import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import MarkerComponent from '../map/MarkerComponent';
import PopupComponent from './PopupComponent';


const MarkerPopDetail = ({ style, title }) => {

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
                    <ImgComponent className='img_off' src={'candle_noraml_48.svg'} />
                    <ImgComponent className='img_selected' src={'candle_noraml_selected_48.svg'} />
                </MarkerComponent>

                <PopupComponent boxClass={markStatus? 'popover_box w320 map_top dpblock' : 'popover_box w320 map_top'} titleBgClass={'popup_title_bg'} 
                titleClass={'popup_title'} title={title} close={closeMark}>
                    <div className="popup_contents p-20">
                        <div className='grid_column1 row_gap4'>
                            <dl className='popinfo_dl'>
                                <dt>검지기 ID</dt>
                                <dd>
                                    <div className='popinfo_box'>
                                        <span>VDS0021</span>
                                    </div>
                                </dd>
                            </dl>
                            <dl className='popinfo_dl'>
                                <dt>수집일시</dt>
                                <dd>
                                    <div className='popinfo_box'>
                                        <span>2022.04.02 14:22:23</span>
                                    </div>
                                </dd>
                            </dl>
                            <dl className='popinfo_dl'>
                                <dt>위치</dt>
                                <dd>
                                    <div className='popinfo_box'>
                                        <span>남동대로 14</span>
                                    </div>
                                </dd>
                            </dl>
                            <dl className='popinfo_dl'>
                                <dt>장비상태</dt>
                                <dd>
                                    <div className='dflx_jbet col_gap4'>
                                        <div className='popinfo_box popstatus'>
                                            <span className='fs_12_medium'>전원상태</span>
                                            <p className='status_circle'>정상</p>
                                        </div>
                                        <div className='popinfo_box popstatus'>
                                            <span className='fs_12_medium'>통신상태</span>
                                            <p className='status_circle error'>이상</p>
                                        </div>
                                        <div className='popinfo_box popstatus'>
                                            <span className='fs_12_medium'>수집상태</span>
                                            <p className='status_circle'>정상</p>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </PopupComponent>
            </div>
        </article>
    )
}

export default MarkerPopDetail;

