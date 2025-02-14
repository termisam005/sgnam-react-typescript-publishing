import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const RatioHalfChart1 = () => {
    
    const chartRef = useRef(null);

    useEffect(() => {
        am4core.addLicense("CH237726473");

        let chart = am4core.create("halfRatio1", am4charts.PieChart);

        chart.hiddenState.properties.opacity = 0;

        chart.data = [
            {
                country: "Lithuania",
                value: 401,
                color: am4core.color("#E62222")
            },
            {
                country: "Czech Republic",
                value: 300,
                color: am4core.color("#FC5C34")
            },
            {
                country: "Ireland",
                value: 200,
                color: am4core.color("#FC8A18")
            },
            {
                country: "Germany",
                value: 165,
                color: am4core.color("#FFBC04")
            },
            {
                country: "Australia",
                value: 139,
                color: am4core.color("#82D971")
            },
            {
                country: "Austria",
                value: 128,
                color: am4core.color("#1CBD6D")
            }
        ];

        chart.radius = am4core.percent(70);
        chart.innerRadius = am4core.percent(40);
        chart.startAngle = 180;
        chart.endAngle = 360;  

        let series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = "value";
        series.dataFields.category = "country";

        series.slices.template.propertyFields.fill = "color";
        series.slices.template.cornerRadius = 0;
        series.slices.template.innerCornerRadius = 0;
        series.slices.template.draggable = true;
        series.slices.template.inert = true;
        series.alignLabels = false;

        series.hiddenState.properties.startAngle = 90;
        series.hiddenState.properties.endAngle = 90;
        
        // @ts-ignore
        chartRef.current = chart;
        return () => chart.dispose();
    }, []);

    return (
        <div id={'halfRatio1'} style={{ width: "100%", height: "14rem", fontSize:"0.75rem"}}/>
    );
}

export default RatioHalfChart1;

