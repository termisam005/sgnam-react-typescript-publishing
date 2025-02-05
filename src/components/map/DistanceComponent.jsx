import React from 'react';
import ImgComponent from '../common/ImgComponent';


const DistanceComponent = ({ distClass, distance}) => {

  return (
        <div className={distClass}>
            <span className="unit">{distance}</span>
            <ImgComponent className={'w60'} src={'map_scale_icon.svg'} />
            {/* <ImgComponent className={'img_light'} src={'map_scale_icon_light.svg'} /> */}
        </div>
    );
};

export default DistanceComponent;