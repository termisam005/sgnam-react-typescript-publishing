interface Props{
    weatherClass?: string;
    when?: string;
    markClass?: string;
    flexClass?: string;
    resultClass?: string;
    temperClass?: string;
    temper?: string;
    unitClass?: string;
    unit?: string;
    textClass?: string;
    text?: string;
}


const WeatherSign = ({ 
        weatherClass, when, markClass, flexClass, resultClass, temperClass, temper, unitClass, unit, textClass, text 
    }:Props) => {

    return (
        <div className={weatherClass}>
            <span className='fs_13'>{when}</span>
            <p className={markClass}></p>
            <div className={flexClass}>
                <h1 className={resultClass}>
                    <span className={temperClass}>{temper}</span>
                    <span className={unitClass}>{unit}</span>
                </h1>
                <span className={textClass}>
                    {text}
                </span>
            </div>
        </div>
    );
};

export default WeatherSign;