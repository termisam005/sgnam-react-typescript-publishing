import React from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import InputComponent from '../../components/input/InputComponent';

const FileUploadType1 = ({addedClass}) => {
    return (
        <div className={'bg_grey06 flex_column dflx_ac_jcent ' + addedClass}>
            <label for="fileUpload" className="btn_file">
                <ImgComponent src={"icon_upload_file_24.svg"} alt="파일 업로드" />
            </label>
            <div className="m-t-5">
                <InputComponent id='fileUpload' className={'hidden_file'} type={'file'} hidden />
                <div className="fs_12 file_realname">파일 업로드</div>
            </div>
        </div>
    );
};

export default FileUploadType1;
