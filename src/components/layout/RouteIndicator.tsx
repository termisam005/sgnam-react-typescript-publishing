import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import SearchWordAll from '../search/SearchWordAll';
import ButtonComponent from '../common/ButtonComponent';
import CheckComponent from '../common/CheckComponent';


interface Props{
    IndClass?: string;
    IndTitle?: string;
}

const RouteIndicator = ({ IndClass, IndTitle }:Props) => {

    //토글 이벤트
    const [toggleInd, setToggleInd] = useState<boolean>(false);
    const clickInd = () => {
        setToggleInd(!toggleInd);
    }

    return (
        <article className={IndClass}>
            <div className="indi_top" onClick={clickInd}>
                <h1>{IndTitle}</h1>
                <p className={toggleInd? 'arr_up down':'arr_up'}>
                    <ImgComponent src={'arrow_up16.svg'} />
                </p>
            </div>
            <div className={toggleInd? 'indi_conts del':'indi_conts'}>
                <SearchWordAll lineClass={'srch_line'} zoneClass={'put_zone w226'} type={'text'} placeholder={'검색어 입력'} />
                <div className='communi_top m-t-16'>
                    <h5>버스(134)</h5>
                </div>
                <div className='indi_vert378 scroll sc_y'>
                    <div className='route_zone'>
                        <div className='route_bar'>
                            <CheckComponent checkClass={'checkbox_type default'} type={'checkbox'} labelClass={'fs_14 p-l-32'} 
                            txt={'(마을) 013'} checkId={'vill01'} />
                            <ButtonComponent type={'submit'} txt={'조회'} className={'btn_srch28 word shadow on'} />
                        </div>
                        <div className='route_bar'>
                            <CheckComponent checkClass={'checkbox_type default'} type={'checkbox'} labelClass={'fs_14 p-l-32'} 
                            txt={'(마을) 013-1'} checkId={'vill02'} />
                            <ButtonComponent type={'submit'} txt={'조회'} className={'btn_srch28 word shadow on disabled'} />
                        </div>
                        <div className='route_bar'>
                            <CheckComponent checkClass={'checkbox_type default'} type={'checkbox'} labelClass={'fs_14 p-l-32'} 
                            txt={'(마을) 013-2'} checkId={'vill03'} />
                            <ButtonComponent type={'submit'} txt={'조회'} className={'btn_srch28 word shadow on disabled'} />
                        </div>
                        <div className='route_bar'>
                            <CheckComponent checkClass={'checkbox_type default'} type={'checkbox'} labelClass={'fs_14 p-l-32'} 
                            txt={'(마을) 013-3'} checkId={'vill04'} />
                            <ButtonComponent type={'submit'} txt={'조회'} className={'btn_srch28 word shadow on disabled'} />
                        </div>
                        <div className='route_bar'>
                            <CheckComponent checkClass={'checkbox_type default'} type={'checkbox'} labelClass={'fs_14 p-l-32'} 
                            txt={'(마을) 013-4'} checkId={'vill05'} />
                            <ButtonComponent type={'submit'} txt={'조회'} className={'btn_srch28 word shadow on disabled'} />
                        </div>
                        <div className='route_bar'>
                            <CheckComponent checkClass={'checkbox_type default'} type={'checkbox'} labelClass={'fs_14 p-l-32'} 
                            txt={'(마을) 015'} checkId={'vill06'} />
                            <ButtonComponent type={'submit'} txt={'조회'} className={'btn_srch28 word shadow on disabled'} />
                        </div>
                        <div className='route_bar'>
                            <CheckComponent checkClass={'checkbox_type default'} type={'checkbox'} labelClass={'fs_14 p-l-32'} 
                            txt={'(마을) 015'} checkId={'vill07'} />
                            <ButtonComponent type={'submit'} txt={'조회'} className={'btn_srch28 word shadow on disabled'} />
                        </div>
                        <div className='route_bar'>
                            <CheckComponent checkClass={'checkbox_type default'} type={'checkbox'} labelClass={'fs_14 p-l-32'} 
                            txt={'(마을) 015'} checkId={'vill08'} />
                            <ButtonComponent type={'submit'} txt={'조회'} className={'btn_srch28 word shadow on disabled'} />
                        </div>
                        <div className='route_bar'>
                            <CheckComponent checkClass={'checkbox_type default'} type={'checkbox'} labelClass={'fs_14 p-l-32'} 
                            txt={'(마을) 015'} checkId={'vill09'} />
                            <ButtonComponent type={'submit'} txt={'조회'} className={'btn_srch28 word shadow on disabled'} />
                        </div>
                        <div className='route_bar'>
                            <CheckComponent checkClass={'checkbox_type default'} type={'checkbox'} labelClass={'fs_14 p-l-32'} 
                            txt={'(마을) 015'} checkId={'vill10'} />
                            <ButtonComponent type={'submit'} txt={'조회'} className={'btn_srch28 word shadow on disabled'} />
                        </div>
                        <div className='route_bar'>
                            <CheckComponent checkClass={'checkbox_type default'} type={'checkbox'} labelClass={'fs_14 p-l-32'} 
                            txt={'(마을) 015'} checkId={'vill11'} />
                            <ButtonComponent type={'submit'} txt={'조회'} className={'btn_srch28 word shadow on disabled'} />
                        </div>
                        <div className='route_bar'>
                            <CheckComponent checkClass={'checkbox_type default'} type={'checkbox'} labelClass={'fs_14 p-l-32'} 
                            txt={'(마을) 015'} checkId={'vill12'} />
                            <ButtonComponent type={'submit'} txt={'조회'} className={'btn_srch28 word shadow on disabled'} />
                        </div>
                    </div>
                </div>
                <ButtonComponent type={'button'} className={'btn_primary btn_m w-100 m-t-16'} txt={'노선 추가'} />
            </div>
        </article>
    );
};

export default RouteIndicator;