import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import HdStatusComponent from '../common/HdStatusComponent';
import SelectComponent from '../select/SelectComponent';
import ProfileComponent from '../common/ProfileComponent';

const HeaderSignal = () => {

  return (
    <header>
        <article className='header_in'>
            <HeaderLeft>
                <SelectComponent className={'selector w220 fill'}>
                    <option value="">신호최적화 분석</option>
                    <option value="">신호최적화 분석</option>
                    <option value="">신호최적화 분석</option>
                </SelectComponent>
            </HeaderLeft>
            <HeaderRight>
                <HdStatusComponent stausClass={'hd_status'} markClass={'time_mark20 sett'} textClass={'hd_text'} temper={'2022년 2월 21일'} slash={' '} air={'05:55 - 09:00'} />
                <HdStatusComponent stausClass={'hd_status'} markClass={'time_mark20 clock'} textClass={'hd_text'} temper={'2022년 2월 21일'} slash={' '} air={'05:55 - 09:00'} />
                <ProfileComponent />
            </HeaderRight>
        </article>
    </header>
  );
};

export default HeaderSignal;