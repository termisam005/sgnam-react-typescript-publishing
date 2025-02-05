import React from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';

const ControlPad = ({btnClass}) => {    
    return (
        <div className='dflx gap_12 control_pad'>
            <div className='control_plus_minus gap_4'>
                <ButtonWithComponent className={btnClass}>
                    <ImgComponent src={'plus_line_fff_16.svg'} />
                    <span className='fs_12_medium'>FOCUS</span>
                </ButtonWithComponent>
                <ButtonWithComponent className={btnClass}>
                    <ImgComponent src={'minus_fff_16.svg'} />
                    <span className='fs_12_medium'>FOCUS</span>
                </ButtonWithComponent>
            </div>
            <div className='control_direction gap_4'>
                <ButtonWithComponent className={btnClass}>
                    <ImgComponent src={'arrow_left_fill_fff_16.svg'} />
                </ButtonWithComponent>
                <div className='dflx_column gap_4'>
                    <ButtonWithComponent className={btnClass}>
                        <ImgComponent src={'arrow_up_fill_fff_16.svg'} />
                    </ButtonWithComponent>
                    <ButtonWithComponent className={btnClass}>
                        <ImgComponent src={'arrow_down_fill_fff_16.svg'} />
                    </ButtonWithComponent>
                </div>
                <ButtonWithComponent className={btnClass}>
                    <ImgComponent src={'arrow_right_fill_fff_16.svg'} />
                </ButtonWithComponent>
            </div>
            <div className='control_plus_minus gap_4'>
                <ButtonWithComponent className={btnClass}>
                    <ImgComponent src={'plus_line_fff_16.svg'} />
                    <span className='fs_12_medium'>ZOOM</span>
                </ButtonWithComponent>
                <ButtonWithComponent className={btnClass}>
                    <ImgComponent src={'minus_fff_16.svg'} />
                    <span className='fs_12_medium'>ZOOM</span>
                </ButtonWithComponent>
            </div>
        </div>
    );
};

export default ControlPad;
