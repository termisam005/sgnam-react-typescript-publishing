import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const XYChartColor = () => {

    const chartRef = useRef(null);

    useEffect(() => {

    am4core.addLicense("CH237726473");

    let chart = am4core.create("chartXYColor", am4charts.XYChart);

    let data = [ 
      {
        "month": "1월",
        "income": 24.5,
        "color": am4core.color("#46C2AD"),
        }, {
        "month": "2월",
        "income": 26.2,
        "color": am4core.color("#16D9AB"),
        }, {
        "month": "3월",
        "income": 30.1,
        "color": am4core.color("#27D4FF"),
        }, {
        "month": "4월",
        "income": 36.5,
        "color": am4core.color("#16A3E9"),
        }, {
        "month": "5월",
        "income": 40.6,
        "color": am4core.color("#0068E6"),
        }, {
        "month": "6월",
        "income": 48.5,
        "color": am4core.color("#0E44E6"),
        }, {
        "month": "7월",
        "income": 45.2,
        "color": am4core.color("#0A2ACC"),
        }, {
        "month": "8월",
        "income": 42.1,
        "color": am4core.color("#6548F5"),
        }, {
        "month": "9월",
        "income": 35.5,
        "color": am4core.color("#937EFF"),
        }, {
        "month": "10월",
        "income": 40.6,
        "color": am4core.color("#B5A6FF"),
        }
    ];

    /* Create axes */
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.opacity = 1;
    categoryAxis.renderer.grid.template.stroke = am4core.color("#f7f7f7");
    categoryAxis.renderer.labels.template.fill = am4core.color("#999");

    /* Create value axis */
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    //valueAxis.renderer.minGridDistance = 20;
    valueAxis.min = 0;
    valueAxis.max = 60;
    valueAxis.opacity = 1;
    valueAxis.renderer.grid.template.stroke = am4core.color("#f7f7f7");
    valueAxis.renderer.labels.template.fill = am4core.color("#777");

    /* Create series */
    let columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.name = "배출량";
    columnSeries.dataFields.valueY = "income";
    columnSeries.dataFields.categoryX = "month";

    columnSeries.columns.template.tooltipText = "[#fff font-size: 14px]{name} {categoryX}:\n[/][#fff font-size: 14px]{valueY}[/] [#fff]{additional}[/]"
    columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
    columnSeries.columns.template.propertyFields.stroke = "stroke";
    columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
    columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
    columnSeries.tooltip.label.textAlign = "middle";
    columnSeries.columns.template.column.cornerRadiusTopLeft = 0;
    columnSeries.columns.template.column.cornerRadiusTopRight = 0;

    //columnSeries.columns.template.fill = am4core.color("#27D4FF");
    columnSeries.columns.template.width = am4core.percent(40);
    columnSeries.columns.template.propertyFields.fill = "color";
    

    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = "Expenses";
    lineSeries.dataFields.valueY = "expenses";
    lineSeries.dataFields.categoryX = "month";

    lineSeries.stroke = am4core.color("#0068E6");
    lineSeries.strokeWidth = 2;
    lineSeries.propertyFields.strokeDasharray = "lineDash";
    lineSeries.tooltip.label.textAlign = "middle";

    let bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.fill = am4core.color("#0068E6");
    bullet.tooltipText = "[#fff font-size: 14px]{name} in {categoryX}:\n[/][#fff font-size: 16px]{valueY}[/] [#fff]{additional}[/]"
    let circle = bullet.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("#fff");
    circle.strokeWidth = 3;

    chart.data = data;

    //@ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
        }, []);
    return (
        <div id={'chartXYColor'} style={{ width: "90%", height: "18.5rem", fontSize:"0.75rem"}}/>
    );
}

export default XYChartColor;

