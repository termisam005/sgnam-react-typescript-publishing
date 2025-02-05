import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const ClusterColumnChart = () => {

  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    let chart = am4core.create("chartCluster", am4charts.XYChart);

    chart.colors.step = 2;

    // chart.legend = new am4charts.Legend()
    // chart.legend.position = 'bottom'
    // chart.legend.paddingBottom = 0
    // chart.legend.labels.template.maxWidth = 10
    // chart.legend.labels.template.fill = am4core.color('#999');

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'category'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.labels.template.fill = am4core.color("#777");

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = 1000;
    yAxis.renderer.labels.template.fill = am4core.color("#777");

    function createSeries(value, name, color) {
        let series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'category'
        series.name = name;
        series.fill = color;
        series.stroke.opacity = 0;
        series.columns.template.width = am4core.percent(50);

        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);

        let bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        bullet.dy = 30;
        bullet.label.text = '{valueY}'
        bullet.label.fill = am4core.color('#ffffff')
        bullet.label.opacity = 0;

        return series;
    }

    chart.data = [
        {
            category: '06',
            first: 700,
            second: 900,
            third: 600
        },
        {
            category: '07',
            first: 600,
            second: 700,
            third: 500
        },
        {
            category: '08',
            first: 500,
            second: 400,
            third: 200
        },
        {
            category: '09',
            first: 400,
            second: 600,
            third: 500
        },
        {
            category: '10',
            first: 400,
            second: 300,
            third: 700
        }
    ]

    const interfaceColors = new am4core.InterfaceColorSet();

    const cColor1 = am4core.color('#27D4FF');
    const cColor2 = am4core.color('#0068E6');
    const cColor3 = am4core.color('#8972FF');

    interfaceColors.setFor('first', cColor1);
    interfaceColors.setFor('second', cColor2);
    interfaceColors.setFor('third', cColor3);

    const clusterColor1 = interfaceColors.getFor('first');
    const clusterColor2 = interfaceColors.getFor('second');
    const clusterColor3 = interfaceColors.getFor('third');


    createSeries('first', 'The First', clusterColor1);
    createSeries('second', 'The Second', clusterColor2);
    createSeries('third', 'The Third', clusterColor3);

    function arrangeColumns() {

        let series = chart.series.getIndex(0);

        let w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            let delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                let middle = chart.series.length / 2;

                let newIndex = 0;
                chart.series.each(function(series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                let visibleCount = newIndex;
                let newMiddle = visibleCount / 2;

                chart.series.each(function(series) {
                    let trueIndex = chart.series.indexOf(series);
                    let newIndex = series.dummyData;

                    let dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }

    //@ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
    <div id={'chartCluster'} style={{ width: "100%", height: "16rem", fontSize:"0.75rem"}}/>
  );
}

export default ClusterColumnChart;

