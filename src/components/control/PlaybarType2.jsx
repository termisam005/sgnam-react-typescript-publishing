import React from 'react';
import ImgComponent from '../../components/common/ImgComponent';
import ButtonWithComponent from '../../components/common/ButtonWithComponent';
import PlaybarStick from '../../components/control/PlaybarStick';

const PlaybarType2 = ({}) => {
    return (
        <>
            <ButtonWithComponent type='button' className='playbar_current absolute'>
                <ImgComponent src={'current_location_sky_20.svg'} />
            </ButtonWithComponent>
            <PlaybarStick></PlaybarStick>
            <div className='dflx_jbet'>
                <span className='fs_11 fc_grey60'>08:00:00</span>
                <span className='fs_11 fc_grey60'>08:02:00</span>
                <span className='fs_11 fc_grey60'>08:05:55</span>
            </div>
        </>
    );
};

export default PlaybarType2;
