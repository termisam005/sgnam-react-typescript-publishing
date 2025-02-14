import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const RadarChart = () => {

    const chartRef = useRef(null);

    useEffect(() => {
    am4core.addLicense("CH237726473");

    let chart = am4core.create("chartRadar", am4charts.RadarChart);

    /* Add data */
    chart.data = [{
        "country": "속도",
        "value1": 70,
        "value2": 50
    }, {
        "country": "평균속도",
        "value1": 80,
        "value2": 60
    }, {
        "country": "교통량",
        "value1": 70,
        "value2": 40
    }, {
        "country": "총 교통량",
        "value1": 50,
        "value2": 30
    }, {
        "country": "지체시간",
        "value1": 30,
        "value2": 20
    }, {
        "country": "평균 지체시간",
        "value1": 70,
        "value2": 60
    }, {
        "country": "길이",
        "value1": 60,
        "value2": 50
    }, {
        "country": "행렬 길이",
        "value1": 50,
        "value2": 30
    }];

    /* Create axes */
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.tooltipLocation = 0.01
    categoryAxis.renderer.grid.template.stroke = am4core.color("#f7f7f7");
    categoryAxis.renderer.labels.template.fill = am4core.color("#999");

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.stroke = am4core.color("#f7f7f7");
    valueAxis.renderer.labels.template.fill = am4core.color("#777");

    /* Create and configure series */
    var series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueY = "value1";
    series1.dataFields.categoryX = "country";
    series1.name = "Sales";
    series1.strokeWidth = 0;
    series1.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series1.sequencedInterpolation = true;
    series1.sequencedInterpolationDelay = 100;
    series1.stacked = true;
    series1.columns.template.fill = am4core.color("#0068E6");

    var series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueY = "value2";
    series2.dataFields.categoryX = "country";
    series2.name = "Marketing";
    series2.strokeWidth = 0;
    series2.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series2.sequencedInterpolation = true;
    series2.sequencedInterpolationDelay = 100;
    series2.stacked = true;
    series2.columns.template.fill = am4core.color("#27D4FF");

    //chart.legend = new am4charts.Legend();
    //chart.cursor = new am4charts.RadarCursor();

    // @ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
    }, []);
    return (
        <div id={'chartRadar'} style={{ width: "100%", height: "17rem", fontSize:"0.75rem"}}/>
    );
}

export default RadarChart;

