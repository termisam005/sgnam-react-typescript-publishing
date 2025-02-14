import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const ScopeChart1 = () => {
  const chartRef = useRef(null);

  useEffect(() => {

    am4core.addLicense("CH237726473");

    let chart = am4core.create("scopeChart1", am4charts.XYChart);
    chart.padding(5, 0, 0, 2);

    // Add data
    chart.data = [{
        "scope": "Scope1",
        "income": 27000,
        "color": am4core.color("#0068E6"),
    }, {
        "scope": "Scope2",
        "income": 45000,
        "color": am4core.color("#46C2AD"),
    }, {
        "scope": "Scope3",
        "income": 15000,
        "color": am4core.color("#A8DB42"),
    }];

    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "scope";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    categoryAxis.renderer.minGridDistance = 0.5;
    categoryAxis.marginRight = 10;
    categoryAxis.renderer.labels.template.fill = am4core.color("#fff");

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.opposite = false;
    valueAxis.min = 0;
    valueAxis.max = 100000;
    valueAxis.renderer.grid.template.disabled = true;

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
        series.sequencedInterpolation = true;

        let valueLabel = series.bullets.push(new am4charts.LabelBullet());
        valueLabel.label.text = "{valueX}";
        valueLabel.label.horizontalCenter = "left";
        valueLabel.label.dx = 10;
        valueLabel.label.hideOversized = false;
        valueLabel.label.truncate = false;
        valueLabel.label.fill = am4core.color('#999');

        let categoryLabel = series.bullets.push(new am4charts.LabelBullet());
        categoryLabel.label.text = "{name}";
        categoryLabel.label.horizontalCenter = "right";
        categoryLabel.label.dx = -10;
        categoryLabel.label.fill = am4core.color("#fff");
        categoryLabel.label.hideOversized = false;
        categoryLabel.label.truncate = false;
    }

    createSeries("income");
    //createSeries("expenses", "Expenses");

    // @ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
    <div id={'scopeChart1'} style={{ width: "100%", height: "12rem", fontSize:"0.75rem"}}/>
  );
}

export default ScopeChart1;

