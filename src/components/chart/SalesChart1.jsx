import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const SalesChart1 = () => {

  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    let chart = am4core.create("chartSale1", am4charts.XYChart);

    //chart.exporting.menu = new am4core.ExportMenu();

    let data = [ 
      {
        "month": "1월",
        "income": 19.5,
        //"expenses": 21.1,
        }, {
        "month": "2월",
        "income": 24.2,
        //"expenses": 29.5
        }, {
        "month": "3월",
        "income": 30.1,
        //"expenses": 33.5
        }, {
        "month": "4월",
        "income": 27.5,
        //"expenses": 31.1
        }, {
        "month": "5월",
        "income": 32.6,
        //"expenses": 28.2,
        }, {
        "month": "6월",
        "income": 19.5,
        //"expenses": 21.1,
        }, {
        "month": "7월",
        "income": 24.2,
        //"expenses": 29.5
        }, {
        "month": "8월",
        "income": 30.1,
        //"expenses": 33.5
        }, {
        "month": "9월",
        "income": 27.5,
        //"expenses": 31.1
        }, {
        "month": "10월",
        "income": 32.6,
        //"expenses": 28.2,
        }, {
        "month": "11월",
        "income": 32.0,
        //"expenses": 32.9,
        //"lineDash": "5,5",
        }, {
        "month": "12월",
        "income": 32.0,
        //"expenses": 32.9,
        // "strokeWidth": 1,
        // "columnDash": "5,5",
        // "fillOpacity": 0.2,
        // "additional": "(projection)"
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
    valueAxis.renderer.minGridDistance = 20;
    valueAxis.min = 0;
    valueAxis.max = 35;
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
    columnSeries.columns.template.column.cornerRadiusTopLeft = 5;
    columnSeries.columns.template.column.cornerRadiusTopRight = 5;

    columnSeries.columns.template.fill = am4core.color("#27D4FF");
    columnSeries.columns.template.width = am4core.percent(30);
    

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
    <div id={'chartSale1'} style={{ width: "100%", height: "16rem", fontSize:"0.75rem"}}/>
  );
}

export default SalesChart1;

