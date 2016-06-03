export class BDDataConfigOption {
    constructor() {
        this.defaultBarOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: [''],
                right: '5%',
                top: '6%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                asisTick: {
                    interval: 0
                },
                axisLabel: {
                    interval: 0,
                    rotate: 30,
                },
                data: []
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: '',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                data: []
            }]
        };
    }

    generateBDBarOptionDatas(data) {
        let xAxisData = [];
        let seriesData = [];

        xAxisData = Object.keys(data);
        Object.keys(data).forEach(val => {
            seriesData.push(data[val]);
        });

        return { xAxisData: xAxisData, seriesData: seriesData };
    };

    setToBDBarOption(legendData, xAxisData, seriesName, seriesData, addtionalOption) {

        let barOption = this.defaultBarOption;

        barOption.legend.data = legendData;
        barOption.xAxis[0].data = xAxisData;
        barOption.series[0].name = seriesName;
        barOption.series[0].data = seriesData;

        if (addtionalOption) {
            Object.assign(barOption, addtionalOption);
        }
        return barOption;
    };

}
