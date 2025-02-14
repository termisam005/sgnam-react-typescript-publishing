interface Props {
	etcClass?: string;
	onClick?: () => void;
    IndTitle?: string;
}


const EtcIndicator = ({ etcClass, onClick, IndTitle }:Props) => {

    return (
        <div className={etcClass} onClick={onClick}>
            <h3 className='indi_tlt'>{IndTitle}</h3>
        </div>
    );
};

export default EtcIndicator;