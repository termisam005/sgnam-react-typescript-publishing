import React from 'react';
import ButtonComponent from '../../components/common/ButtonComponent';

const MapControlRotation = ({direction}) => {
    return (
        <div className='map_controller map_rotate'>
            <div className='map_circle'>
                <ul className='circle_piece'>
                    <li className='direction_01 btn_direction'><button type='button'></button></li>
                    <li className='direction_02 btn_direction'><button type='button'></button></li>
                    <li className='direction_03 btn_direction'><button type='button'></button></li>
                    <li className='direction_04 btn_direction'><button type='button'></button></li>
                    <li className='direction_05 btn_direction'><button type='button'></button></li>
                    <li className='direction_06 btn_direction'><button type='button'></button></li>
                    <li className='direction_07 btn_direction'><button type='button'></button></li>
                    <li className='direction_08 btn_direction'><button type='button'></button></li>
                </ul>
            </div>
            {
                direction === true
                ? 
                    <div className='circle_pointer'>
                        <ButtonComponent type='button' className='eastside'></ButtonComponent>
                        <ButtonComponent type='button' className='westside'></ButtonComponent>
                        <ButtonComponent type='button' className='southside'></ButtonComponent>
                        <ButtonComponent type='button' className='northside'></ButtonComponent>
                    </div>
                : null 
            }
        </div>
    );
};

export default MapControlRotation;
