import React from 'react';


const LabelComponent = ({ onClick, className, txt }) => {

  return (
    <span onClick={onClick} className={className}>
        {txt}
    </span>
  );
};

export default LabelComponent;