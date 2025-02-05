import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const StackBarchart = () => {

  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    let chart = am4core.create("chartStack", am4charts.XYChart);

    chart.data = [{
      "age": "F",
      "male": -0.4,
      "female": 0.4
    }, {
      "age": "E",
      "male": -0.3,
      "female": 0.2
    }, {
      "age": "D",
      "male": -0.2,
      "female": 0.3
    }, {
      "age": "C",
      "male": -0.4,
      "female": 0.4
    }, {
      "age": "B",
      "male": -0.6,
      "female": 0.6
    }, {
      "age": "A",
      "male": -0.8,
      "female": 0.8
    }];
    
    // Use only absolute numbers
    chart.numberFormatter.numberFormat = "#.#s";
    
    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "age";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.stroke = am4core.color("#f7f7f7");
    categoryAxis.renderer.labels.template.fill = am4core.color("#999");
    
    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.extraMin = 0.1;
    valueAxis.extraMax = 0.1;
    //valueAxis.renderer.grid.template.stroke = am4core.color("#f7f7f7");
    valueAxis.renderer.labels.template.fill = am4core.color("#777");
    valueAxis.renderer.minGridDistance = 50;
    valueAxis.renderer.ticks.template.length = 5;
    valueAxis.renderer.ticks.template.disabled = false;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
    valueAxis.renderer.labels.template.adapter.add("text", function(text) {
      return text == "Male" || text == "Female" ? text : text + "%";
    })
    
    // Create series
    let male = chart.series.push(new am4charts.ColumnSeries());
    male.dataFields.valueX = "male";
    male.dataFields.categoryY = "age";
    male.clustered = false;
    male.fill = am4core.color("#27D4FF");
    male.columns.template.height = am4core.percent(60);
    
    let maleLabel = male.bullets.push(new am4charts.LabelBullet());
    maleLabel.label.text = "{valueX}%";
    maleLabel.label.hideOversized = false;
    maleLabel.label.truncate = false;
    maleLabel.label.horizontalCenter = "right";
    maleLabel.label.dx = -10;
    
    let female = chart.series.push(new am4charts.ColumnSeries());
    female.dataFields.valueX = "female";
    female.dataFields.categoryY = "age";
    female.clustered = false;
    female.fill = am4core.color("#0068E6");
    female.columns.template.height = am4core.percent(60);
    
    let femaleLabel = female.bullets.push(new am4charts.LabelBullet());
    femaleLabel.label.text = "{valueX}%";
    femaleLabel.label.hideOversized = false;
    femaleLabel.label.truncate = false;
    femaleLabel.label.horizontalCenter = "left";
    femaleLabel.label.dx = 10;
    
    let maleRange = valueAxis.axisRanges.create();
    maleRange.value = -10;
    maleRange.endValue = 0;
    maleRange.label.text = "Male";
    maleRange.label.fill = chart.colors.list[0];
    maleRange.label.dy = 20;
    maleRange.label.fontWeight = '600';
    maleRange.grid.strokeOpacity = 1;
    maleRange.grid.stroke = male.stroke;
    
    let femaleRange = valueAxis.axisRanges.create();
    femaleRange.value = 0;
    femaleRange.endValue = 10;
    femaleRange.label.text = "Female";
    femaleRange.label.fill = chart.colors.list[1];
    femaleRange.label.dy = 20;
    femaleRange.label.fontWeight = '600';
    femaleRange.grid.strokeOpacity = 1;
    femaleRange.grid.stroke = female.stroke;

    //@ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
    <div id={'chartStack'} style={{ width: "100%", height: "16rem", fontSize:"0.75rem"}}/>
  );
}

export default StackBarchart;

