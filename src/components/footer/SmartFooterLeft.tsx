import SmartLayerMonitoring from '../common/SmartLayerMonitoring';
import SmartLayerAnalysis from '../common/SmartLayerAnalysis';
import SmartLegend from '../common/SmartLegend';


const FooterLeft = () => {

    return (
        <article className='footer_left col_gap8'>
            <div className="tab_line">
                <SmartLayerMonitoring className={"popover_box"} />
                <SmartLayerAnalysis className={"popover_box"} />
                <SmartLegend className={"popover_box"} />
            </div>
        </article>
    );
};

export default FooterLeft;