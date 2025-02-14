import ImgComponent from '../common/ImgComponent';
import InputComponent from '../input/InputComponent';


interface Props{
    addedClass?: string;
}

const FileUploadType1 = ({addedClass}:Props) => {
    
    return (
        <div className={'bg_grey06 flex_column dflx_ac_jcent ' + addedClass}>
            <label htmlFor="fileUpload" className="btn_file">
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
