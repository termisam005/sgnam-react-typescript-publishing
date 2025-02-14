import { CSSProperties, useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import MarkerComponent from './MarkerComponent';
import InfoWindowComponent from './InfoWindowComponent';
import LabelComponent from '../common/LabelComponent';


interface Props{
    style?: CSSProperties;
}

const MarkerSettComponent = ({style}:Props) => {

    const [markStatus, setMarkStatus] = useState(false);
    const toggleMark = () => {
      setMarkStatus(!markStatus);
    }

    return (
        <article className={'marker_container'} style={style}>
            <div className="tooltip_parents">
                <MarkerComponent onClick={toggleMark} className={markStatus? 'marker mk56 on' : 'marker mk56'}>
                    <ImgComponent className={'img_off'} src={'car_accident_56.svg'} />
                    <ImgComponent className={'img_selected'} src={'car_accident_selected_56.svg'} />
                </MarkerComponent>
                <InfoWindowComponent className={markStatus? 'infowindow_box on top dpblock' : 'infowindow_box on top'} title={'시청역사거리 추돌사고'}
                    infoTime={'2022.07.05 12:22:22'} infoPlace={'부평삼거리로 2-2'} infoSupport={'UTIS(교통돌발 제공)'} buttonTxt={'상세보기'} >
                    <LabelComponent className={'label_tag bg_grey10 fs_11'} txt={'사고'} />
                    <LabelComponent className={'label_tag grade_color02 fs_11'} txt={'매우심각'} />
                </InfoWindowComponent>
            </div>
        </article>
    );
};

export default MarkerSettComponent;
