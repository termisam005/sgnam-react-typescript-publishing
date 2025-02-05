import React, { Component, useEffect, useRef } from 'react';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

const RatioHalfChart2 = () => {
    
    const chartRef = useRef(null);

    useEffect(() => {
        am4core.addLicense("CH237726473");

        let chart = am4core.create("halfRatio2", am4charts.PieChart);

        chart.startAngle = 180;
        chart.endAngle = 360;
        chart.innerRadius = am4core.percent(10);

        chart.data = [{
            "country": "Lithuania",
            //"litres": 501.9,
            "bottles": 1500,
            "color": am4core.color("#E62222")
        }, {
            "country": "Czech Republic",
            //"litres": 301.9,
            "bottles": 990,
            "color": am4core.color("#FC5C34")
        }, {
            "country": "Ireland",
            //"litres": 201.1,
            "bottles": 785,
            "color": am4core.color("#FC8A18")
        }, {
            "country": "Germany",
            //"litres": 165.8,
            "bottles": 255,
            "color": am4core.color("#FFBC04")
        }, {
            "country": "Australia",
            //"litres": 139.9,
            "bottles": 452,
            "color": am4core.color("#82D971")
        }];

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
        pieSeries.slices.template.stroke = new am4core.InterfaceColorSet().getFor("background");
        pieSeries.slices.template.strokeWidth = 1;
        pieSeries.slices.template.strokeOpacity = 1;

        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;

        pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
        pieSeries.slices.template.states.getKey("hover").properties.scale = 1;
        pieSeries.radius = am4core.percent(40);
        pieSeries.innerRadius = am4core.percent(30);

        var cs = pieSeries.colors;
        cs.list = [am4core.color(new am4core.ColorSet().getIndex(0))];

        cs.stepOptions = {
        lightness: -0.05,
        hue: 0
        };
        cs.wrap = false;

        // Add second series
        var pieSeries2 = chart.series.push(new am4charts.PieSeries());
        pieSeries2.dataFields.value = "bottles";
        pieSeries2.dataFields.category = "country";
        pieSeries2.slices.template.stroke = new am4core.InterfaceColorSet().getFor("background");
        pieSeries2.slices.template.strokeWidth = 1;
        pieSeries2.slices.template.strokeOpacity = 1;
        pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0.05;
        pieSeries2.slices.template.states.getKey("hover").properties.scale = 1;
        pieSeries2.slices.template.propertyFields.fill = "color";

        pieSeries2.labels.template.disabled = true;
        pieSeries2.ticks.template.disabled = true;

        // var label = chart.seriesContainer.createChild(am4core.Label);
        // label.textAlign = "middle";
        // label.horizontalCenter = "middle";
        // label.verticalCenter = "middle";
        // label.adapter.add("text", function(text, target){
        //     return "[font-size:18px]total[/]:\n[bold font-size:30px]" + pieSeries.dataItem.values.value.sum + "[/]";
        // })
        
        // @ts-ignore
        chartRef.current = chart;
        return () => chart.dispose();
    }, []);

    return (
        <div id={'halfRatio2'} style={{ width: "100%", height: "13rem", fontSize:"0.75rem"}}/>
    );
}

export default RatioHalfChart2;

