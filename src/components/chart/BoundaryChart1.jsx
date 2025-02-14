import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const BoundaryChart1 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    // Create chart instance
    let chart = am4core.create("chartBoundary1", am4charts.XYChart);

    // Add data
    chart.data = [{
        "category": "본사",
        "blue1": 32,
        "blue2": 20,
    }, {
        "category": "서울1공장",
        "blue1": 25,
        "blue2": 20,
        "blue3": 18,
        "blue4": 15,
    }, {
        "category": "서울2공장",
        "blue1": 22,
        "blue2": 12,
        "blue3": 16,
        "blue4": 15,
        "negative": 8,
        "green1": 7,
        "green2": 5,
        "yellow1": 6,
    }, {
        "category": "송도R&D센터",
        "blue1": 32,
    }];


    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.minGridDistance = 0.8;
    categoryAxis.renderer.axisFills.template.disabled = false;
    categoryAxis.renderer.axisFills.template.fillOpacity = 0;
    categoryAxis.opacity = 1;
    categoryAxis.renderer.grid.template.stroke = am4core.color("#f7f7f7");
    categoryAxis.renderer.labels.template.fill = am4core.color("#fff");

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.opacity = 1;
    valueAxis.renderer.minGridDistance = 5;
    valueAxis.renderer.grid.template.stroke = am4core.color("#f7f7f7");
    valueAxis.renderer.labels.template.fill = am4core.color("#777");
    valueAxis.renderer.ticks.template.length = 5;
    valueAxis.renderer.ticks.template.disabled = false;
    valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
        return text;
    })

    // Use only absolute numbers
    //chart.numberFormatter.numberFormat = "#.#s";

    // Create series
    function createSeries(field, name, color) {
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = field;
        series.dataFields.categoryY = "category";
        series.stacked = true;
        series.name = name;
        series.stroke = color;
        series.fill = color;
        series.columns.template.height = am4core.percent(50);

        let label = series.bullets.push(new am4charts.LabelBullet);
        label.label.text = "{valueX}";
        label.label.horizontalCenter = "right";
        label.label.fill = am4core.color("#fff");
        label.label.strokeWidth = 0;
        label.label.dx = -10;
        label.label.truncate = false;
        label.label.hideOversized = true;
        return series;
    }

    const interfaceColors = new am4core.InterfaceColorSet();

    const bColor1 = am4core.color('#004F9E');
    const bColor2 = am4core.color('#0068E6');
    const bColor3 = am4core.color('#1799E5');
    const bColor4 = am4core.color('#00B8E6');

    const nColor = am4core.color('#46C2AD');
    const gColor1 = am4core.color('#7DD187');
    const gColor2 = am4core.color('#A7D154');
    const yColor1 = am4core.color('#F0D030');

    interfaceColors.setFor('blue1', bColor1);
    interfaceColors.setFor('blue2', bColor2);
    interfaceColors.setFor('blue3', bColor3);
    interfaceColors.setFor('blue4', bColor4);
    interfaceColors.setFor('negative', nColor);
    interfaceColors.setFor('green1', gColor1);
    interfaceColors.setFor('green2', gColor2);
    interfaceColors.setFor('yellow1', yColor1);

    const blueColor1 = interfaceColors.getFor("blue1");
    const blueColor2 = interfaceColors.getFor("blue2");
    const blueColor3 = interfaceColors.getFor("blue3");
    const blueColor4 = interfaceColors.getFor("blue4");

    const negativeColor = interfaceColors.getFor("negative");
    const greenColor1 = interfaceColors.getFor("green1");
    const greenColor2 = interfaceColors.getFor("green2");
    const yellowColor1 = interfaceColors.getFor("yellow1");

    createSeries("blue1", "Sometimes", blueColor1);
    createSeries("blue2", "Very often", blueColor2);
    createSeries("blue3", "Very often", blueColor3);
    createSeries("blue4", "Very often", blueColor4);

    createSeries("negative", "Never", negativeColor);
    createSeries("green1", "Never", greenColor1);
    createSeries("green2", "Never", greenColor2);
    createSeries("yellow1", "Never", yellowColor1);
    
    // @ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
      <div id={'chartBoundary1'} style={{ width: "100%", height: "16rem", fontSize: "0.75rem", letterSpacing:"-0.5px"}}/>
  );
}

export default BoundaryChart1;

