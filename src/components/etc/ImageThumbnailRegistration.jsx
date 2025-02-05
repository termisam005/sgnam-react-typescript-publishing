import React from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import InputComponent from '../../components/input/InputComponent';

const ImageThumbnailRegistration = ({addedClass, imageID}) => {
    return (
        <div className={addedClass}>
            <label for={imageID} className='btn_secondary btn_ms fs_14_medium image_upload'>
                이미지 등록
            </label>
            <InputComponent id={imageID} className={'image_file'} type={'file'} hidden />
            <div className='preview_box'>
                <ImgComponent src={'icon_upload_noimage.svg'} alt='이미지 업로드' id='imageUpload01' />
            </div>
        </div>
    );
};

export default ImageThumbnailRegistration;
