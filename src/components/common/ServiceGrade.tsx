interface Props{
    labelClass?: string;
    labelWord?: string;
    number?: string;
}

const ServiceGrade = ({ labelClass, labelWord, number }:Props) => {

    return (
        <div className='service_level'>
            <div className='service_top'>
                <p className={labelClass}>{labelWord}</p>
            </div>
            <div className='service_number'>
                {number}
            </div>
        </div>
    );
};

export default ServiceGrade;