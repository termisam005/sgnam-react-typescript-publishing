import React from 'react';


const IndicatorComponent = ({ className, children }) => {

  return (
    <article className={className}>
        {children}
    </article>
  );
};

export default IndicatorComponent;