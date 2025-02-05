import React from 'react';
import CheckComponent from '../common/CheckComponent';
import ButtonComponent from '../common/ButtonComponent';


const TmzoneComponent = ({ zoneClass, topClass, title, checkId, btnTxt, onClick, boxClass, normal, check, children }) => {

  return (
    <article className={zoneClass}>
        {
            normal === true 
            ? 
            <section className={topClass}>
                <h1>{title}</h1>
            </section>
            : null
        }
        {
            check === true 
            ? 
            <section className={topClass}>
                <CheckComponent type={'checkbox'} checkClass={'checkbox_type m-t-4'} checkId={checkId} 
                labelClass={'fs_13'} />
                <ButtonComponent className={'btn_secondary btn_s_h28'} txt={btnTxt} onClick={onClick} />
            </section>
            : null
        }
        <section className={boxClass}>
            {children}
        </section>
    </article>
  );
};

export default TmzoneComponent;