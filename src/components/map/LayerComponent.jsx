import React from 'react';

const LayerComponent = ({layerClass, children, iconClass}) => {

  return (
    <div className={'dflx_ac_jcent marker_layer ' + layerClass}>
         <span className={'label_tag ellipse ' + iconClass}>
            {children}
        </span>
    </div>
  );
};

export default LayerComponent;