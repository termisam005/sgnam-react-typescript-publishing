import React from 'react';


const InnerCardComponent = ({ cardClass, headClass, title, bodyClass, children }) => {

  return (
    <div className={cardClass}>
        <div className={headClass}>{title}</div>
        <div className={bodyClass}>
            {children}
        </div>
    </div>
  );
};

export default InnerCardComponent;