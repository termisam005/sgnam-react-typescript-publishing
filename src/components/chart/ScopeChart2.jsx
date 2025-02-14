import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const ScopeChart2 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    let chart = am4core.create("scopeChart2", am4charts.XYChart);
    chart.padding(0, 15, 0, 0);
    
    // Add data
    chart.data = [{
        "scope": "본관",
        "income": 15,
        "color": am4core.color("#46C2AD"),
    }, {
        "scope": "생산1동",
        "income": 25,
        "color": am4core.color("#46C2AD"),
    }, {
        "scope": "난방보일러1",
        "income": 17,
        "color": am4core.color("#46C2AD"),
    }, {
        "scope": "저장1동",
        "income": 14,
        "color": am4core.color("#46C2AD"),
    }, {
        "scope": "차량",
        "income": 38,
        "color": am4core.color("#46C2AD"),
    }];

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "scope";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.disabled = false;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    categoryAxis.renderer.minGridDistance = 0.5;
    categoryAxis.marginLeft = 10;
    categoryAxis.opacity = 1;
    categoryAxis.renderer.grid.template.stroke = am4core.color("#f7f7f7");
    categoryAxis.renderer.labels.template.fill = am4core.color("#fff");

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.opposite = false;
    valueAxis.min = 0;
    valueAxis.max = 50;
    valueAxis.opacity = 0.8;
    valueAxis.renderer.grid.template.disabled = false;
    valueAxis.renderer.grid.template.stroke = am4core.color("#f7f7f7");
    valueAxis.renderer.labels.template.fill = am4core.color("#777");

    // Create series
    function createSeries(field, name) {
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = field;
        series.dataFields.categoryY = "scope";
        series.name = name;
        series.columns.template.tooltipText = "{name} [bold]{valueX}[/]";
        series.columns.template.height = am4core.percent(50);
        series.columns.template.propertyFields.fill = "color";
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusBottomRight = 5;
        series.columns.template.column.cornerRadiusTopRight = 5;
        series.sequencedInterpolation = true;

        let categoryLabel = series.bullets.push(new am4charts.LabelBullet());
        categoryLabel.label.text = "{name}";
        categoryLabel.label.horizontalCenter = "right";
        categoryLabel.label.dx = -10;
        categoryLabel.label.fill = am4core.color("#fff");
        categoryLabel.label.hideOversized = false;
        categoryLabel.label.truncate = false;
    }

    createSeries("income");

    // @ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
    <div id={'scopeChart2'} style={{ width: "100%", height: "12rem", fontSize:"0.75rem"}}/>
  );
}

export default ScopeChart2;

