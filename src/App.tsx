import React from 'react';
import '@/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ExLogin from '@/pages/template/ExLogin';
import ExMain from '@/pages/template/ExMain';
import ExError from '@/pages/template/ExError';
import ExSignal from '@/pages/template/ExSignal';
import ExRecord from '@/pages/template/ExRecord';
import ExUsers from '@/pages/template/ExUsers';

import Login from '@/pages/seongnam/Login';
import LoginPop from '@/pages/seongnam/LoginPop';
import Main from '@/pages/seongnam/Main';
import MainPop from '@/pages/seongnam/MainPop';
import Smart from '@/pages/seongnam/Smart';
import SmartAnalysis from '@/pages/seongnam/SmartAnalysis';
import SmartPop from '@/pages/seongnam/SmartPop';
import Businfo from '@/pages/seongnam/Businfo';
import BusinfoBit from '@/pages/seongnam/BusinfoBit';
import Parkinteg from '@/pages/seongnam/Parkinteg';
import DigitalTwin from '@/pages/seongnam/DigitalTwin';
import StatisticalAnalysis from '@/pages/seongnam/StatisticalAnalysis';
import StatisticsCrossway from '@/pages/seongnam/StatisticsCrossway';
import StatisticalDangerZone from '@/pages/seongnam/StatisticalDangerZone';
import StatisticalPedestrian from '@/pages/seongnam/StatisticalPedestrian';
import StatisticalJaywalking from '@/pages/seongnam/StatisticalJaywalking';
import StatisticalPeakHour from '@/pages/seongnam/StatisticalPeakHour';


const App:React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>

          {/* template폴더 참고페이지 */}
          <Route path={'/exlogin'} element={<ExLogin />} />
          <Route path={'/exmain'} element={<ExMain />} />
          <Route path={'/exerror'} element={<ExError />} />
          <Route path={'/exsignal'} element={<ExSignal />} />
          <Route path={'/exrecord'} element={<ExRecord />} />
          <Route path={'/exusers'} element={<ExUsers />} />

          {/* seongnam폴더 페이지 */}
          <Route path={'/'} element={<Login />} />
          <Route path={'/loginpop'} element={<LoginPop />} />
          <Route path={'/main'} element={<Main />} />
          <Route path={'/mainpop'} element={<MainPop />} />
          <Route path={'/smart'} element={<Smart />} />
          <Route path={'/smartanalysis'} element={<SmartAnalysis />} />
          <Route path={'/smartpop'} element={<SmartPop />} />
          <Route path={'/businfo'} element={<Businfo />} />
          <Route path={'/businfobit'} element={<BusinfoBit />} />
          <Route path={'/parkinteg'} element={<Parkinteg />} />
          <Route path={'/digaitaltwin'} element={<DigitalTwin />} />
          <Route path={'/statisticalAnalysisMain'} element={<StatisticalAnalysis />} />
          <Route path={'/statisticalAnalysisCrossway'} element={<StatisticsCrossway />} />
          <Route path={'/statisticalAnalysisDangerZone'} element={<StatisticalDangerZone />} />
          <Route path={'/statisticalAnalysisPedestrian'} element={<StatisticalPedestrian />} />
          <Route path={'/statisticalAnalysisJaywalking'} element={<StatisticalJaywalking />} />
          <Route path={'/statisticalAnalysisPeakHour'} element={<StatisticalPeakHour />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
