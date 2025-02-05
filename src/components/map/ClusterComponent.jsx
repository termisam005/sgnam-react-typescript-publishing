import React from 'react';


const ClusterComponent = ({count, addedClass, children}) => {

  return (
    <div className='relative'>
        <div className={'bg_ui_blue border_black30 ' + addedClass}>
            {count && <div className='cluster_count'>{count}</div>}
            {children}
        </div>
    </div>
  );
};

export default ClusterComponent;