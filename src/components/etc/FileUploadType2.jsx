import React from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import InputComponent from '../../components/input/InputComponent';

const FileUploadType2 = ({addedClass}) => {
    return (
        <div className={'dflx_ac border_white20 ' + addedClass}>
            <label for='fileUpload2' className='btn_file btn_secondary btn_xs'>파일 선택</label>
            <div className='m-t-4 flex1'>
                <InputComponent id='fileUpload2' className={'hidden_file'} type={'file'} hidden />
                <div className='fs_12 file_realname '>선택된 파일 없음</div>
            </div>
        </div>
    );
};

export default FileUploadType2;
