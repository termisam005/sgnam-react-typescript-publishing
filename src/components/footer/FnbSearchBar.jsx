import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import SelectComponent from '../select/SelectComponent';
import ButtonWithComponent from '../common/ButtonWithComponent';
import SearchWordComponent from '../search/SearchWordComponent';


const FnbSearchBar = ({ children }) => {

    const [srchBar, setSrchBar] = useState(false);
    const toggleSrch = () => {
        setSrchBar(!srchBar);
    }
    
    return (
        <div className={srchBar? 'fnb_search_bar on' : 'fnb_search_bar'}>
            {children}
            <ButtonWithComponent onClick={toggleSrch} className={srchBar? 'w40 btn_fnb_search selected' : 'w40 btn_fnb_search'}>
                <ImgComponent className={'img op04'} src={'search_fff_24.svg'} />
                <ImgComponent className={'img_on'} src={'search_sky_24.svg'} />
                <div class="tooltip_label">범례</div>
            </ButtonWithComponent>

            <div className="search_bar_input">
                <div className="dflx_ac gap_8">
                    <SelectComponent className={'selector w120 fill'}>
                        <option value="">label 1</option>
                        <option value="">label 2</option>
                        <option value="">label 3</option>
                        <option value="">label 4</option>
                    </SelectComponent>
                    <SearchWordComponent lineClass={'srch_line'} zoneClass={'put_zone w240'} type={'text'} placeholder={'Search'} />
                </div>
            </div>
        </div>
    );
};

export default FnbSearchBar;
