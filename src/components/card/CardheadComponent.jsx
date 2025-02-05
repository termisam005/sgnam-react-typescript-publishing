import React from 'react';


const CardheadComponent = ({ className, title }) => {

  return (
    <div className={className}>
        {title}
    </div>
  );
};

export default CardheadComponent;