import React from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import InputComponent from '../../components/input/InputComponent';

const ImageThumbnailRegistration = ({addedClass, imageID, imageSrc}) => {
    return (
        <div className={addedClass}>
            <label for={imageID} className='btn_secondary btn_ms fs_14_medium image_upload'>
                이미지 수정
            </label>
            <InputComponent id={imageID} className={'image_file'} type={'file'} hidden />
            <div className='dim_bg'></div>
            <ImgComponent src={imageSrc} id='imageModify01' className='image_center' />
        </div>
    );
};

export default ImageThumbnailRegistration;
