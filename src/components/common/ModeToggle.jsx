import React from 'react';

const ModeToggle = ({ className }) => {

    const onChange = (e) => {
        e.target.checked
        ? document.body.setAttribute('data-light', 'true')
        : document.body.setAttribute('data-light', 'false');
    };

    return (
        <div className={className}>
            <div className={'mode_toggle'}>
                <input type="checkbox" id="modeSwitch" name="mode" onChange={onChange} />
                <label htmlFor="modeSwitch" className='fs_18_medium'>Toggle</label>
            </div>
        </div>
    );
};

export default ModeToggle;