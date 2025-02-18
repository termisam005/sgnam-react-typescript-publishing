import GnbComponent from '../common/GnbComponent';
import DarkLightComponent from '../mode/DarkLightComponent';


const Nav = () => {

    return (
        <nav className='gnb'>
            <ul className='col_gap30'>
                <GnbComponent title={'상황관리'} path={'/main'} />
                <GnbComponent title={'스마트교차로'} path={'/smart'} />
                <GnbComponent title={'버스정보'} path={'/businfo'} />
                <GnbComponent title={'주차통합'} path={'/parkinteg'} />
                <GnbComponent title={'디지털트윈'} path={'/digaitaltwin'} />
                <GnbComponent title={'통계분석'} path={'/statisticalAnalysisMain'} />
                <li>
                    <DarkLightComponent />
                </li>
            </ul>
        </nav>
    );
};

export default Nav;