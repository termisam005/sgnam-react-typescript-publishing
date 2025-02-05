import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);
//am4core.useTheme(am4themes_kelly);

const XYChart1 = () => {

  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    let chart = am4core.create("chartXY1", am4charts.XYChart);

    // Add data
    chart.data = [{
        "country": "01/18",
        "litres": 501.9,
        "units": 250
    }, {
        "country": "01/19",
        "litres": 301.9,
        "units": 222
    }, {
        "country": "01/20",
        "litres": 201.1,
        "units": 170
    }, {
        "country": "01/21",
        "litres": 165.8,
        "units": 122
    }, {
        "country": "01/22",
        "litres": 139.9,
        "units": 99
    }];
        
    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.title.text = "Countries";
    //categoryAxis.renderer.grid.template.stroke = am4core.color("#f7f7f7");
    categoryAxis.renderer.labels.template.fill = am4core.color("#999");
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Litres sold (M)";
    //valueAxis.renderer.grid.template.stroke = am4core.color("#f7f7f7");
    valueAxis.renderer.labels.template.fill = am4core.color("#777");
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "litres";
    series.dataFields.categoryX = "country";
    series.name = "Sales";
    series.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.fill = am4core.color("#27D4FF");
    series.columns.template.width = am4core.percent(60);
    
    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.valueY = "units";
    series2.dataFields.categoryX = "country";
    series2.name = "Units";
    series2.tooltipText = "{name}: [bold]{valueY}[/]";
    series2.columns.template.fill = am4core.color("#0068E6");
    series2.columns.template.width = am4core.percent(60);
    
    // Add cursor
    chart.cursor = new am4charts.XYCursor();

    //chart.data = data;

    //@ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
    <div id={'chartXY1'} style={{ width: "100%", height: "18rem", fontSize:"0.75rem"}}/>
  );
}

export default XYChart1;

