import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const RangeFillChart = () => {

  const chartRef = useRef(null);

  useEffect(() => {
    am4core.addLicense("CH237726473");

    let chart = am4core.create("chartRangeFill", am4charts.XYChart);

    chart.data = [{ date: 1577743200000, open: 122, close: 104 },
        { date: 1577829600000, open: 121, close: 70 },
        { date: 1578002400000, open: 103, close: 45 },
        { date: 1578175200000, open: 150, close: 116 },
        { date: 1578348000000, open: 98, close: 152 },
        { date: 1578520800000, open: 110, close: 225 },
        { date: 1578693600000, open: 128, close: 232 },
        { date: 1578866400000, open: 109, close: 200 },
        { date: 1579039200000, open: 123, close: 224 },
        { date: 1579212000000, open: 100, close: 172 },
        { date: 1579384800000, open: 81, close: 127 },
        { date: 1579557600000, open: 73, close: 127 },
        { date: 1579730400000, open: 116, close: 127 },
        { date: 1579903200000, open: 139, close: 61 },
        { date: 1580076000000, open: 201, close: 41 },
        { date: 1580248800000, open: 257, close: 87 },
        { date: 1580421600000, open: 233, close: 138 },
        { date: 1580594400000, open: 279, close: 130 }
        ]
        
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.minGridDistance = 60;
        dateAxis.renderer.labels.template.fill = am4core.color("#777");
        
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minGridDistance = 20;
        valueAxis.renderer.labels.template.fill = am4core.color("#777");
        
        // only for the legend
        let iconSeries = chart.series.push(new am4charts.ColumnSeries())
        iconSeries.fill = am4core.color("#27D4FF");
        iconSeries.strokeOpacity = 0;
        iconSeries.stroke = am4core.color("#27D4FF");
        iconSeries.name = "Events";
        iconSeries.dataFields.dateX = "date";
        iconSeries.dataFields.valueY = "v";
        
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.openValueY = "open";
        series.dataFields.valueY = "close";
        series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
        series.sequencedInterpolation = true;
        series.fill = am4core.color("#27D4FF");
        series.stroke = am4core.color("#27D4FF");
        series.strokeWidth = 4;
        series.name = "District Metered Usage";
        series.stroke = chart.colors.getIndex(0);
        series.fill = series.stroke;
        series.fillOpacity = 0.7;
        
        let bullet = series.bullets.push(new am4charts.CircleBullet())
        bullet.fill = new am4core.InterfaceColorSet().getFor("background");
        bullet.fillOpacity = 1;
        bullet.strokeWidth = 2;
        bullet.circle.radius = 4;
        
        let series2 = chart.series.push(new am4charts.LineSeries());
        series2.dataFields.dateX = "date";
        series2.dataFields.valueY = "open";
        series2.sequencedInterpolation = true;
        series2.strokeWidth = 4;
        series2.tooltip.getFillFromObject = false;
        series2.tooltip.getStrokeFromObject = true;
        series2.tooltip.label.fill = am4core.color("#000");
        series2.name = "SP Aggregate usage";
        series2.stroke = chart.colors.getIndex(7);
        series2.stroke = am4core.color("#0068E6");
        series2.fill = am4core.color("#0068E6");
        
        let bullet2 = series2.bullets.push(new am4charts.CircleBullet())
        bullet2.fill = bullet.fill;
        bullet2.fillOpacity = 1;
        bullet2.strokeWidth = 2;
        bullet2.circle.radius = 4;
        
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.xAxis = dateAxis;
        //chart.scrollbarX = new am4core.Scrollbar();
        
        let negativeRange;
        
        // create ranges
        chart.events.on("datavalidated", function() {
          series.dataItems.each(function(s1DataItem) {
            let s1PreviousDataItem;
            let s2PreviousDataItem;
        
            let s2DataItem = series2.dataItems.getIndex(s1DataItem.index);
        
            if (s1DataItem.index > 0) {
              s1PreviousDataItem = series.dataItems.getIndex(s1DataItem.index - 1);
              s2PreviousDataItem = series2.dataItems.getIndex(s1DataItem.index - 1);
            }
        
            let startTime = am4core.time.round(new Date(s1DataItem.dateX.getTime()), dateAxis.baseInterval.timeUnit, dateAxis.baseInterval.count).getTime();
        
            // intersections
            if (s1PreviousDataItem && s2PreviousDataItem) {
              let x0 = am4core.time.round(new Date(s1PreviousDataItem.dateX.getTime()), dateAxis.baseInterval.timeUnit, dateAxis.baseInterval.count).getTime() + dateAxis.baseDuration / 2;
              let y01 = s1PreviousDataItem.valueY;
              let y02 = s2PreviousDataItem.valueY;
        
              let x1 = startTime + dateAxis.baseDuration / 2;
              let y11 = s1DataItem.valueY;
              let y12 = s2DataItem.valueY;
        
              let intersection = am4core.math.getLineIntersection({ x: x0, y: y01 }, { x: x1, y: y11 }, { x: x0, y: y02 }, { x: x1, y: y12 });
        
              startTime = Math.round(intersection.x);
            }
        
            // start range here
            if (s2DataItem.valueY > s1DataItem.valueY) {
              if (!negativeRange) {
                negativeRange = dateAxis.createSeriesRange(series);
                negativeRange.date = new Date(startTime);
                negativeRange.contents.fill = series2.fill;
                negativeRange.contents.fillOpacity = 0.8;
              }
            }
            else {
              // if negative range started
              if (negativeRange) {
                negativeRange.endDate = new Date(startTime);
              }
              negativeRange = undefined;
            }
            // end if last
            if (s1DataItem.index == series.dataItems.length - 1) {
              if (negativeRange) {
                negativeRange.endDate = new Date(s1DataItem.dateX.getTime() + dateAxis.baseDuration / 2);
                negativeRange = undefined;
              }
            }
          })
        })

    //@ts-ignore
    chartRef.current = chart;

    return () => chart.dispose();
  }, []);
  return (
    <div id={'chartRangeFill'} style={{ width: "100%", height: "16rem", fontSize:"0.75rem"}}/>
  );
}

export default RangeFillChart;

