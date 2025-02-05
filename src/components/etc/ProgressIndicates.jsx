import React from 'react';

const ProgressIndicates = ({className, progress}) => {
    return (
        <div className={className}>
            <div className={progress}>
                <div className='progress_percetage'></div>
            </div>
            <div className='fc_primary fs_14_bold m-t-10 text_shadow50 loading_text_animation'>
                Loading...
            </div>
        </div>
    );
};

export default ProgressIndicates;
