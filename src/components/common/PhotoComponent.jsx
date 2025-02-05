import React from 'react';
import ImgComponent from './ImgComponent';


const PhotoComponent = ({ imgName, children }) => {

  return (
    <article className='profile_photo'>
        <div className='photo_circle'>
            <ImgComponent className={'img_prof'} src={imgName} />
        </div>
        {children}
    </article>
  );
};

export default PhotoComponent;