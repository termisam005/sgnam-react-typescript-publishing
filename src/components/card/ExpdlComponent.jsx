import React from 'react';


const ExpdlComponent = ({ dlClass, title, children }) => {

  return (
    <dl className={dlClass}>
        <dt>{title}</dt>
        <dd>
            {children}
        </dd>
    </dl>
  );
};

export default ExpdlComponent;