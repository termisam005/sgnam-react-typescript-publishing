import React from 'react';


const WeatherBox = ({ boxClass, weathClass, direction, speed, humidity, precipitation }) => {

    return (
        <div className={boxClass}>
            <dl className={weathClass}>
                <dt>풍향</dt>
                <dd>{direction}</dd>
            </dl>
            <dl className={weathClass}>
                <dt>풍속</dt>
                <dd>
                    <span>{speed}</span><span>m/s</span>
                </dd>
            </dl>
            <dl className={weathClass}>
                <dt>습도</dt>
                <dd>
                    <span>{humidity}</span><span>%</span>
                </dd>
            </dl>
            <dl className={weathClass}>
                <dt>강수량</dt>
                <dd>
                    <span>{precipitation}</span><span>mm</span>
                </dd>
            </dl>
        </div>
    );
};

export default WeatherBox;