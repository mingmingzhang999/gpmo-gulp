import { BDDataConfigOption } from  './data-service.min'
import { WaterfullChart } from './waterfull-chart.min'
//*---------------------format: to be replaced by restful api----------------------
var rawDataByService = {
    "Investment Projects": 6.663392234,
    "BU Discrete Software": 1.96692949,
    "Hosting Services": 0.620873994,
    "Application Operation & Support": 0.226850062,
    "HPE IT RtB": 9.33017237,
    "Software Assigned to Apps": 17.4975957,
};

var rawDataByBu = {
    "TNO": 1.5,
    "SWHP": 2.8,
    "EGR": 9.8,
    "ESHP": 7.8,
    "FIN": 3.3,
    "HFS": 2.4,
    "LAB": 1.8,
    "CMP": 0.8,
    "HR": 2.2,
    "OP": 1.5,
    "LEGO": 0.99,
    "OTHER": 1.3
};
var addtionalBuOption = {
        title: {
            show: true,
            text: "Enterprise IT",
            right: '45%'
        },
        color: ['#61a0a8'],
    }
    // Code goes here
var bdDataConfigOptionByBu = new BDDataConfigOption();
var bdDataConfigOptionByService = new BDDataConfigOption();
var dataByService = bdDataConfigOptionByService.generateBDBarOptionDatas(rawDataByService);
var optionByService = bdDataConfigOptionByService
    .setToBDBarOption(["Monthly Cost"], dataByService.xAxisData, "Monthly Cost", dataByService.seriesData);

var dataByBu = bdDataConfigOptionByBu.generateBDBarOptionDatas(rawDataByBu);
var optionByBu = bdDataConfigOptionByBu
    .setToBDBarOption(["Monthly Cost"], dataByBu.xAxisData, "Monthly Cost", dataByBu.seriesData, addtionalBuOption);
console.log(optionByService);
console.log(optionByBu);

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
var myChartByBu = echarts.init(document.getElementsByClassName('by-bu-chart')[0]);
var myChartByService = echarts.init(document.getElementsByClassName("by-service-chart")[0]);
var myChartByHistory = echarts.init(document.getElementById('containerHistory'));

// 指定图表的配置项和数据

var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['BU Discrete Software', 'Hosting Services', 'Application Operation & Support']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['TNO', 'SWHP', 'EGR']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: 'BU Discrete Software',
        type: 'bar',
        stack: '1',
        label: {
            normal: {
                show: true,
                position: 'left'
            }
        },
        data: [3, 6, 1]
    }, {
        name: 'Hosting Services',
        type: 'bar',
        stack: '1',
        label: {
            normal: {
                show: true,
                position: 'left'
            }
        },
        data: [5, 6, 2]
    }, {
        name: 'Application Operation & Support',
        type: 'bar',
        stack: '1',
        label: {
            normal: {
                show: true,
                position: 'left'
            }
        },
        data: [8, 9, 1]
    }]
};

var guageOption = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
        name: 'Budegt',
        type: 'gauge',
        max: 150,
        startAngle: 210,
        endAngle: -30,
        detail: {
            textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder'
            }
        },
        data: [{ value: 66, name: 'Usage' }]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
myChartByBu.setOption(optionByBu);
myChartByService.setOption(optionByService);
myChartByHistory.setOption(guageOption);
var resizeChart = function() {
    myChart.resize();
    myChartByBu.resize();
    myChartByService.resize();
};
window.onresize = resizeChart;


var waterfullChart = new WaterfullChart();
var ad = waterfullChart.convertToAssistDatas([300,  [100, 30, 20, 50],   [50, 10, 35, 5],    [150, 50, 80, 20]]);
console.log(">>>", ad);
