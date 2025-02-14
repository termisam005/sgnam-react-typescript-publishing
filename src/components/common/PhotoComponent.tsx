import { ReactNode } from 'react';
import ImgComponent from './ImgComponent';


interface Props{
  imgName?: string;
  children?: ReactNode;
}

const PhotoComponent = ({ imgName, children }:Props) => {

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