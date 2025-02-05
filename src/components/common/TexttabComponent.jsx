import React from 'react';


const TexttabComponent = ({ className, onClick, txt }) => {

  return (
    <a className={className} onClick={onClick}>
        {txt}
    </a>
  );
};

export default TexttabComponent;