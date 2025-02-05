import React from 'react';


const ExpressComponent = ({ expressClass, topClass, titleClass, title, children }) => {

  return (
    <article className={expressClass} >
        <div className={topClass}>
            <h1 className={titleClass}>{title}</h1>
        </div>
        {children}
    </article>

  );
};

export default ExpressComponent;