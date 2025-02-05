import React from 'react';
import GnbComponent from '../common/GnbComponent';


const StatisticsTabMenu = () => {

    return (
        <ul className='record_menu'>
            <GnbComponent title={'교차로 메인'} path={'/statisticalAnalysisMain'} />
            <GnbComponent title={'교차로 통계'} path={'/statisticalAnalysisCrossway'} />
            <GnbComponent title={'교차로위험구간 분석'} path={'/statisticalAnalysisDangerZone'} />
            <GnbComponent title={'보행자 통계'} path={'/statisticalAnalysisPedestrian'} />
            <GnbComponent title={'무단횡단 통계'} path={'/statisticalAnalysisJaywalking'} />
            <GnbComponent title={'첨두/비첨두 교통량'} path={'/statisticalAnalysisPeakHour'} />
        </ul>
    );
};

export default StatisticsTabMenu;