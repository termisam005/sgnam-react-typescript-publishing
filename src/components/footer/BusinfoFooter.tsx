import BusinfoLegend from '../common/BusinfoLegend';


const BusinfoFooter = () => {
//버스정보 푸터

    return (
        <footer>
            <div className='footer_in'>
                <article className='footer_left col_gap8'>
                    <div className="tab_line">
                        <BusinfoLegend className={'popover_box'} />
                    </div>
                </article>
                <article className='footer_right col_gap8'>
                    <div className="tab_line">
                    </div>
                </article>
            </div>
        </footer>
    );
};

export default BusinfoFooter;