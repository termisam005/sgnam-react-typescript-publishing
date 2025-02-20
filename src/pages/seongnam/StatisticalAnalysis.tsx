import Header from '../../components/header/Header';
import HeaderLeft from '../../components/header/HeaderLeft';
import Nav from '../../components/header/Nav';
import HeaderRight from '../../components/header/HeaderRight';
import StatisticsTabMenu from '../../components/header/StatisticsTabMenu';
import HdStatusComponent from '../../components/common/HdStatusComponent';
import ProfileComponent from '../../components/common/ProfileComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import ImgComponent from '../../components/common/ImgComponent';
import DiagonStatstics from '../../components/common/DiagonStatstics';
import SmartComponent from '../../components/common/SmartComponent';
import ServiceGrade from '../../components/common/ServiceGrade';
import DatepickerLine from '../../components/date/DatepickerLine';


// 통계분석 - 교차로 메인 페이지
const StatisticalAnalysis = () => {

    return (
        <div className='back'>
            <div className='wrap_rel'>

                <Header headerClass="sub_header">
                    <HeaderLeft />
                    <Nav />
                    <HeaderRight>
                        <HdStatusComponent stausClass={'hd_status'} markClass={'weath_mark32 some_snow_rain'} textClass={'hd_text'} temper={'23.0℃'} slash={'/'} air={'30mm'} />
                        <ProfileComponent />
                    </HeaderRight>
                </Header>

                <div className='board'>
                    <div className='board_inner'>
                        <div className='record_top'>
                            <StatisticsTabMenu />
                        </div>
                        <div className="header_search">
                            <div className="dflx_ac col_gap16">
                                <ImgComponent className='img_filter' src={'filter_shape_16px.svg'} />
                                <p className='fs_13'>날짜</p>
                                <DatepickerLine />
                            </div>
                            <div className="dflx_ac col_gap8">
                                <ButtonComponent className={'btn_primary btn_s w68'} txt={'조회'} />
                                <ButtonComponent className={'btn_primary btn_s w68'} txt={'엑셀다운'} />
                            </div>
                        </div>

                        <div className='statistics_body'>
                            <div className="dflx col_gap16">                  
                                <DiagonStatstics contClass={'diagon_statistics'} tltClass={'diagon_tlt'} tlt={'전체 교통량'} 
                                resultClass={'diagon_result'} result={'2,227,161'} unitClass={'unit'} unit={'대'}>
                                    <p className='fs_12_medium'>전주 대비 (-0%)</p>
                                </DiagonStatstics>  
                                <DiagonStatstics contClass={'diagon_statistics'} tltClass={'diagon_tlt'} tlt={'서비스 수준 / 평균 제어지체'} 
                                resultClass={'diagon_result'} result={'A / 61'} unitClass={'unit'} unit={'대'}>
                                    <p className='fs_12_medium'>전일 대비 (-0%)</p>
                                </DiagonStatstics>
                                <div className="edge_block">
                                    <h2 className='fs_16_bold fc_primary'>위반 건 수</h2>
                                    <article className='smart_line wauto'>
                                        <SmartComponent labelClass={'label sky_light'} labelWord={'불법주정차'} number={'2'} />
                                        <SmartComponent labelClass={'label rainbow_color07'} labelWord={'역주행'} number={'100'} />
                                        <SmartComponent labelClass={'label rainbow_color07'} labelWord={'무단횡단'} number={'56'} />
                                        <SmartComponent labelClass={'label label_color08'} labelWord={'중앙선침범'} number={'87'} />
                                        <SmartComponent labelClass={'label label_color08'} labelWord={'정지'} number={'22'} />
                                    </article>
                                </div>
                                <div className="edge_block">
                                    <h2 className='fs_16_bold fc_primary m-b-16'>서비스 수준 (LOS)</h2>
                                    <div className="dflx gap_8">
                                        <ServiceGrade labelClass={'dust_color02'} labelWord={'A'} number={'22'} />
                                        <ServiceGrade labelClass={'dust_color02_1'} labelWord={'B'} number={'22'} />
                                        <ServiceGrade labelClass={'grade_color06'} labelWord={'C'} number={'22'} />
                                        <ServiceGrade labelClass={'dust_color03_1'} labelWord={'D'} number={'22'} />
                                        <ServiceGrade labelClass={'dust_color03_2'} labelWord={'E'} number={'22'} />
                                        <ServiceGrade labelClass={'dust_color04'} labelWord={'F'} number={'22'} />
                                        <ServiceGrade labelClass={'grade_color02'} labelWord={'FF'} number={'22'} />
                                        <ServiceGrade labelClass={'grade_color01'} labelWord={'FFF'} number={'22'} />
                                    </div>
                                </div>
                            </div>
                            <div className="statistics_traffic m-t-16">
                                <div className="edge_block">
                                    <div className='unicont_top'>
                                        <h2>시간대별 교통량</h2>
                                    </div>                             
                                    <div className='peak_content'>
                                        <div className='rate_box p-0 p-t-12'>
                                            <ImgComponent className={'w-100'} src={'traffic_by_hour.png'} />
                                        </div>
                                    </div>
                                </div>
                                <div className="edge_block m-t-16">
                                    <div className='unicont_top'>
                                        <h2>교차로별 교통량</h2>
                                    </div>                                   
                                    <div className='peak_content'>
                                        <div className='rate_box p-0'>
                                            <ImgComponent className={'w-100'} src={'traffic_by_intersection.png'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default StatisticalAnalysis;
