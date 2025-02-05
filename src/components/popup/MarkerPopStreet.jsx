import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';
import MarkerComponent from '../map/MarkerComponent';
import PopupComponent from './PopupComponent';


const MarkerPopStreet = ({ style, title }) => {

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
                    <ImgComponent className='img_off' src={'monitoring_normal_48.svg'} />
                    <ImgComponent className='img_selected' src={'monitoring_normal_selected_48.svg'} />
                </MarkerComponent>

                <PopupComponent boxClass={markStatus? 'popover_box w320 map_top dpblock' : 'popover_box w320 map_top'} titleBgClass={'popup_title_bg'} 
                titleClass={'popup_title'} title={title} close={closeMark}>
                    <div className='movie_play'>
                        <ImgComponent className='w-100' src={'img_movie_play.png'} />
                    </div>
                    <div className="popup_contents p-20">
                        <div className='m-b-20'>
                            <div className='dflx col_gap12 control_pad'>
                                <div className='control_direction col_gap4'>
                                    <ButtonWithComponent className={'btn_secondary movie'}>
                                        <ImgComponent className={'w16'} src={'arrow_left_fill_fff_16.svg'} />
                                    </ButtonWithComponent>
                                    <div className='dflx_column row_gap4'>
                                        <ButtonWithComponent className={'btn_secondary movie'}>
                                            <ImgComponent className={'w16'} src={'arrow_up_fill_fff_16.svg'} />
                                        </ButtonWithComponent>
                                        <ButtonWithComponent className={'btn_secondary movie'}>
                                            <ImgComponent className={'w16'} src={'arrow_down_fill_fff_16.svg'} />
                                        </ButtonWithComponent>
                                    </div>
                                    <ButtonWithComponent className={'btn_secondary movie'}>
                                        <ImgComponent className={'w16'} src={'arrow_right_fill_fff_16.svg'} />
                                    </ButtonWithComponent>
                                </div>
                                <div className='control_plus_minus row_gap4 flex1'>
                                    <ButtonWithComponent className={'btn_secondary movie'}>
                                        <ImgComponent className={'w16'} src={'plus_line_fff_16.svg'} />
                                        <span className='fs_12_medium'>ZOOM</span>
                                    </ButtonWithComponent>
                                    <ButtonWithComponent className={'btn_secondary movie'}>
                                        <ImgComponent className={'w16'} src={'minus_fff_16.svg'} />
                                        <span className='fs_12_medium'>ZOOM</span>
                                    </ButtonWithComponent>
                                </div>
                            </div>
                        </div>
                        <table className="table_box">
                            <caption className="hidden_tag">CCTV 리스트</caption>
                            <thead>
                                <tr>
                                    <th className="tac"><p className='text_ellipsis w40'>번호</p></th>
                                    <th className="tac"><p className='text_ellipsis w150'>CCTV ID</p></th>
                                    <th className="tac"><p className='text_ellipsis'>통신상태</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row_type2">
                                    <td className="tac">32</td>
                                    <td className="tac">CAM-0054</td>
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

export default MarkerPopStreet;

