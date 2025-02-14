import { useState} from 'react';
import Header from '../../components/header/Header';
import HeaderLeft from '../../components/header/HeaderLeft';
import Gnb from '../../components/header/Gnb';
import HeaderRight from '../../components/header/HeaderRight';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import PersonContainer from '../../components/layout/PersonContainer';
import ProfileComponent from '../../components/common/ProfileComponent';
import SelectBoxComponent from '../../components/select/SelectBoxComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import TableComponent from '../../components/table/TableComponent';
import PagingComponent from '../../components/common/PagingComponent';
import SearchComponent from '../../components/search/SearchComponent';
import CheckComponent from '../../components/common/CheckComponent';
import AccordionCheckgroup from '../../components/accordion/AccordionCheckgroup';


const ExUsers = () => {

    //SelectBox
    const [selbox, setSelbox] = useState(false);
    const handleFocus = () => {
        setSelbox(!selbox);
    }
    const closeBox = () => {
        setSelbox(false);
    }
    const [currentValue, setCurrentValue] = useState('');
    const onChangeSelectValue = (e:any) => {
        const {innerText} = e.target;
        setCurrentValue(innerText);
        setSelbox(false);
    };
    const onChangeValue = (e:any) =>{
        setCurrentValue(e.target.value);
    }

    //SearchComponent
    const [search, setSearch] = useState('');
    const [srchInput, setSrchInput] = useState(false);
    const [deletor, setDeletor] = useState(false);
    const [button, setButton] = useState(false);

    const writePut = (e:any) => {
        setSearch(e.target.value);
        setSrchInput(true);
        setDeletor(true);
        setButton(true);
    }
    const onDelete = () => {
        setSearch('');
        setSrchInput(false);
        setDeletor(false);
        setButton(false);
    }

    return (
        <div className='back'>
            <div className='wrap_rel'>

                <Header>
                    <HeaderLeft />
                    <Gnb />
                    <HeaderRight>
                        <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 some_snow_rain'} textClass={'hd_text'} temper={'23.0℃'} slash={'/'} air={'30mm'} />
                        <ProfileComponent />
                    </HeaderRight>
                </Header>

                <div className='board'>
                    <div className='board_top44'>
                        <div className='users_wrap'>
                            <article className='line_contain p-20'>
                                <div className='scroll sc_y h-100'>
                                    <div className='unicont_top flx_wrap row_gap8'>
                                        <h1>부서 권한 목록</h1>
                                        <div className='group_srch'>
                                            <SelectBoxComponent selboxClass={selbox? "selectbox w120 line h28 gap_8 on" : "selectbox w120 line h28 gap_8"} 
                                                focus={handleFocus} open={selbox} close={closeBox} onChange={onChangeValue} placeholder={'사용자 ID'} currentValue={currentValue}>
                                                <li onClick={onChangeSelectValue} className="option">사용자 ID1</li>
                                                <li onClick={onChangeSelectValue} className="option">사용자 ID2</li>
                                                <li onClick={onChangeSelectValue} className="option">사용자 ID3</li>
                                            </SelectBoxComponent>
                                            <SearchComponent lineClass={'srch_line'} zoneClass={'put_zone w200'} type={'text'} placeholder={'검색어 입력'} 
                                                value={search} onChange={writePut} onDelete={onDelete} 
                                                inputClass={srchInput? 'wrput line p-r-32' : 'wrput line'} 
                                                deleteClass={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} 
                                                buttonClass={button? 'btn_srch28 lgmode on' : 'btn_srch28 lgmode'} />
                                            <ButtonComponent className={'btn_secondary btn_s'} txt={'비밀번호 초기화'} />
                                            <ButtonComponent className={'btn_primary btn_s'} txt={'사용자 추가'} />
                                        </div>
                                    </div>
                                    <div className='table_conts'>
                                        <TableComponent />
                                        <div className='table_bottom'>
                                            <div></div>
                                            <div className='paging_space'>
                                                <PagingComponent />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className='line_contain box'>
                                <div className='pop_top'>
                                    <h5 className='h_tlt'>개인 상세 정보</h5>
                                </div>
                                <div className='line_inner'>
                                    <PersonContainer />
                                </div>
                            </article>
                            <article className='line_contain box'>
                                <div className='pop_top'>
                                    <h5 className='h_tlt'>시스템권한 설정</h5>
                                </div>
                                <div className='line_inner'>
                                    <div className='vert_wrap'>
                                        <div className="dflx_column gap_2">
                                            <AccordionCheckgroup accordClass={'accordion_block select'} accordTitle={'교통운영'} checkId={'check01'}>
                                                <div className="grid_column2 row_gap16 p-20">
                                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'subId1'} 
                                                    labelClass={'fs_14 p-l-30'} txt={'상황관리'} />
                                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'subId2'} 
                                                    labelClass={'fs_14 p-l-30'} txt={'상황관리이력'} />
                                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'subId3'} 
                                                    labelClass={'fs_14 p-l-30'} txt={'시설물관리'} />
                                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'subId4'} 
                                                    labelClass={'fs_14 p-l-30'} txt={'스마트교차로관리'} />
                                                </div>
                                            </AccordionCheckgroup>
                                            <AccordionCheckgroup accordClass={'accordion_block select'} accordTitle={'통합운영'} checkId={'check02'}>
                                                <div className="grid_column1 row_gap16 p-20">
                                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'subId5'} 
                                                    labelClass={'fs_14 p-l-30'} txt={'상황관리'} />
                                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'subId6'} 
                                                    labelClass={'fs_14 p-l-30'} txt={'상황관리이력'} />
                                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'subId7'} 
                                                    labelClass={'fs_14 p-l-30'} txt={'시설물관리'} />
                                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'subId8'} 
                                                    labelClass={'fs_14 p-l-30'} txt={'스마트교차로관리'} />
                                                </div>
                                            </AccordionCheckgroup>
                                            <AccordionCheckgroup accordClass={'accordion_block select'} accordTitle={'상황판'} checkId={'check03'}>
                                                <div className="grid_column2 row_gap16 p-20">
                                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'subId9'} 
                                                    labelClass={'fs_14 p-l-30'} txt={'상황관리'} />
                                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'subId10'} 
                                                    labelClass={'fs_14 p-l-30'} txt={'상황관리이력'} />
                                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'subId11'} 
                                                    labelClass={'fs_14 p-l-30'} txt={'시설물관리'} />
                                                </div>
                                            </AccordionCheckgroup>
                                            <AccordionCheckgroup accordClass={'accordion_block select'} accordTitle={'신호최적화'} checkId={'check04'}>
                                                <div className="grid_column2 row_gap16 p-20">
                                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'subId12'} 
                                                    labelClass={'fs_14 p-l-30'} txt={'상황관리'} />
                                                    <CheckComponent checkClass={'checkbox_type'} type={'checkbox'} checkId={'subId13'} 
                                                    labelClass={'fs_14 p-l-30'} txt={'상황관리이력'} />
                                                </div>
                                            </AccordionCheckgroup>
                                            <AccordionCheckgroup accordClass={'accordion_block select'} accordTitle={'교통정책지원'} checkId={'check05'} />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ExUsers;
