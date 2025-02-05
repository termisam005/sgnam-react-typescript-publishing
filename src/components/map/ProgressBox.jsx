import React from 'react';


const ProgressBox = ({ boxClass }) => {

  return (
    <div className={boxClass}>
        <div className="bar scrubber">
            <div className='empty' style={{transform: 'translate3d(1px, 0px, 0px)'}}></div>
            <div className='bar progress white' style={{transform: 'matrix(0, 0, 0, 1, 0, 0)'}}></div>
        </div>
    </div>
  );
};

export default ProgressBox;