import GnbComponent from '../common/GnbComponent';


const Gnb = () => {

    return (
        <nav className='gnb'>
            <ul className='col_gap30'>
                <GnbComponent title={'상황관리'} path={'/exmain'} />
                <GnbComponent title={'상황관리이력'} path={'/exrecord'} />
                <GnbComponent title={'신호최적화'} path={'/exsignal'} />
                <GnbComponent title={'사용자관리'} path={'/exusers'} />
                <GnbComponent title={'Error'} path={'/exerror'} />
                <GnbComponent title={'Login'} path={'/exlogin'} />
                <GnbComponent title={'Components'} path={'/accordionlist'} />
            </ul>
        </nav>
    );
};

export default Gnb;