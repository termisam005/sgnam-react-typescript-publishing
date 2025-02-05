import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const XYChartDual = () => {

    const chartRef = useRef(null);

    useEffect(() => {

    am4core.addLicense("CH237726473");

    let chart = am4core.create("chartXYDual", am4charts.XYChart);

    // Add data
    chart.data = [{
        "place": "시청 → 구청",
        "누적": 23.5,
        "현재": 18.1
    },{
        "place": "시청 → 소사역",
        "누적": 26.2,
        "현재": 22.8
    },{
        "place": "구청 → 시청",
        "누적": 30.1,
        "현재": 23.9
    },{
        "place": "소사역 → 시청",
        "누적": 29.5,
        "현재": 25.1
    },{
        "place": "소사역 → 구청",
        "누적": 24.6,
        "현재": 25
    }];
    
    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "place";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    categoryAxis.marginRight = 20;
    categoryAxis.renderer.labels.template.align = "left";
    categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
    categoryAxis.renderer.labels.template.opacity = 0.6;
    
    var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
    valueAxis.renderer.opposite = true;
    
    // Create series
    function createSeries(field, name, color) {
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = field;
        series.dataFields.categoryY = "place";
        series.name = name;
        series.stroke = color;
        series.fill = color;
        series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
        series.columns.template.height = am4core.percent(60);
        series.sequencedInterpolation = true;
    
        var valueLabel = series.bullets.push(new am4charts.LabelBullet());
        valueLabel.label.text = "{valueX}";
        valueLabel.label.horizontalCenter = "left";
        valueLabel.label.dx = 10;
        valueLabel.label.hideOversized = false;
        valueLabel.label.truncate = false;
    
        var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
        categoryLabel.label.text = "{valueX}";
        categoryLabel.label.horizontalCenter = "right";
        categoryLabel.label.dx = 30;
        categoryLabel.label.fill = am4core.color("rgba(255, 255, 255, 0.6)");
        categoryLabel.label.hideOversized = false;
        categoryLabel.label.truncate = false;
    }


    const interfaceColors = new am4core.InterfaceColorSet();

    const ttColor = am4core.color('#27D4FF');
    const thColor = am4core.color('#0068E6');

    interfaceColors.setFor('누적', ttColor);
    interfaceColors.setFor('현재', thColor);
    
    const totallColor = interfaceColors.getFor("누적");
    const thisColor = interfaceColors.getFor("현재");

    createSeries("누적", "누적", totallColor);
    createSeries("현재", "현재", thisColor);


    //@ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
        }, []);
    return (
        <div id={'chartXYDual'} style={{ width: "100%", height: "18.5rem", fontSize:"0.75rem"}} />
    );
}

export default XYChartDual;

