import GnbComponent from '../common/GnbComponent';


const GnbComponents = () => {

    return (
        <nav className='gnb main_header'>
            <ul className='col_gap30'>
                <GnbComponent title={'AccordionList'} path={'/accordionlist'} />
                <GnbComponent title={'Button'} path={'/button'} />
                <GnbComponent title={'Cards'} path={'/cards'} />
                <GnbComponent title={'Cardpattern'} path={'/cardpattern'} />
                <GnbComponent title={'Control'} path={'/control'} />
                <GnbComponent title={'Input'} path={'/input'} />
                <GnbComponent title={'Label'} path={'/label'} />
                <GnbComponent title={'Navigation'} path={'/navigation'} />
                <GnbComponent title={'Popover'} path={'/popover'} />
            </ul>
            <ul className='col_gap30'>
                <GnbComponent title={'Tooltip'} path={'/tooltip'} />
                <GnbComponent title={'Popup'} path={'/popup'} />
                <GnbComponent title={'Progress'} path={'/progress'} />
                <GnbComponent title={'Selector'} path={'/selector'} />
                <GnbComponent title={'TabnToggle'} path={'/tabntoggle'} />
                <GnbComponent title={'Tables'} path={'/tables'} />
                <GnbComponent title={'Tree'} path={'/tree'} />
                <GnbComponent title={'Upload'} path={'/upload'} />
                <GnbComponent title={'Chart'} path={'/chart'} />
                <GnbComponent title={'Map'} path={'/map'} />
            </ul>
        </nav>
    );
};

export default GnbComponents;