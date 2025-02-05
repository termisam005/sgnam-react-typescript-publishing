import React from 'react';

const PlaybarType1 = ({addedClass, order, played, loaded, playW, loadW}) => {
    return (
        <div className={addedClass}>
            <span className='fc_white type1_text'>{order}</span>
            {
                played === true
                ? <div className={'played' + ' ' + playW}></div>
                : null 
            }
            {   
                loaded === true
                ? <div className={'loaded' + ' ' + loadW}></div>
                : null
            }
        </div>
    );
};

export default PlaybarType1;
