import React from 'react';

const ButtonComponent = ({ type, id, className, onClick, txt }) => {
  return (
    <button type={type} id={id} className={className} onClick={onClick}>{txt}</button>
  );
};

export default ButtonComponent;