import SituationFooterLeft from './SituationFooterLeft';
import SituationFooterRight from './SituationFooterRight';


const SituationFooter = () => {
//상황관리 푸터

    return (
        <footer>
            <div className='footer_in'>
                <SituationFooterLeft />
                <SituationFooterRight />
            </div>
        </footer>
    );
};

export default SituationFooter;