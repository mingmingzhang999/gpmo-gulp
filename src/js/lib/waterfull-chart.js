var _defaultOption = {
    title: {
        text: '',
        subtext: '',
        sublink: '',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: { show: false },
        asisTick: {
            interval: 0
        },
        axisLabel: {
                    interval: 0,
                    formatter: function(val){
                        return val.split(" ").join("\n");
                    }
                },
        data: []
    },
    yAxis: {
        type: 'value'
    },

    series: [{
        name: 'assist',
        type: 'bar',
        stack: 'total',
        itemStyle: {
            normal: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            }
        },
        data: []
    }, {
        name: '',
        type: 'bar',
        stack: 'total',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: []
    }]
};

// coffe scripts
// L1index:0 -> nd0 = 0

// L1index: 1 L2index:0 ->  nd1 = rd[0]-rd[l1][l2]
// L1index: 1 L2index:1: -> nd2 = rd[0]-rd[l1][l2]
// L1index: 1 L2index:2: -> nd3 = nd2-rd[l1][l2]
// ...

// L1index: 2 L2index:0 -> nd?= nd(?-1)-rd[l1][l2]
// L1index: 2 L2index:1 -> nd(?+1)= nd(?)+rd[l1][l2-1]-rd[l1][l2]
// L1index: 2 L2index:2 -> nd(?+2)= nd(?+1)-rd[l1][l2]
// ...

/**
 * [convertToAssistDatas cover the raw datas to echarts waterfull format datas]
 * @param  {[[number]]} datas eg: [300,  [100, 30, 20, 50],   [50, 10, 35, 5],    [150, 50, 80, 20]]
 * @return {[[number]]} datas eg: [0,    200, 270, 250, 200,  150, 190, 155, 150,  0, 100, 20, 0]
 */
function _convertToAssistDatas(datas) {
    let assistDatas = [];

    datas.forEach((data, level1Index) => {
        if (level1Index === 0) {
            assistDatas.push(0);
        } else if (level1Index === 1) {
            data.forEach((val, level2Index) => {
                if (level2Index < 2) {
                    assistDatas.push(datas[0] - datas[level1Index][level2Index]);
                } else {
                    assistDatas.push(assistDatas[assistDatas.length - 1] - datas[level1Index][level2Index]);
                }
            });
        } else {
            data.forEach((val, level2Index) => {
                if (level2Index === 0) {
                    assistDatas.push(assistDatas[assistDatas.length - 1] - datas[level1Index][level2Index]);
                } else if (level2Index === 1) {
                    assistDatas.push(
                        assistDatas[assistDatas.length - 1] + datas[level1Index][level2Index - 1] - datas[level1Index][level2Index]);
                } else {
                    assistDatas.push(assistDatas[assistDatas.length - 1] - datas[level1Index][level2Index]);
                }
            });
        }
    });

    return assistDatas;
}

/**
 * [_flatMap flatten the array]
 * @param  {[type]} datas [1,[3,6],[8,9]]
 * @return {[type]}       [1, 3, 6, 8, 9]
 */
function _flatMap(datas) {
    let flatDatas = [];

    datas.forEach(data => {
        if(Array.isArray(data)){
            data.forEach(val => {
                flatDatas.push(val);
            });
        } else {
            flatDatas.push(data);
        }
    });

    return flatDatas;
}

export class WaterfullChart {
    constructor() {
        this.seriesAssistData = [];
        this.seriesMainData = [];
        this.xAxisData = [];
        this.option;
    }

    generateOptionDatas(datas) {
        let rawAssistData = [];
        Object.keys(datas).forEach((data, level1Index) => {
            if (data === "Total") {
                this.xAxisData.unshift(data);
                rawAssistData[0] = datas[data];
            } else {
                 rawAssistData[level1Index] = [];
                Object.keys(datas[data]).forEach((name, level2Index) => {
                    if (name === "Total") {
                        this.xAxisData.splice(this.xAxisData.length - level2Index, 0, data);
                        rawAssistData[level1Index].unshift(datas[data][name]);
                    } else {
                        this.xAxisData.push(name);
                        rawAssistData[level1Index].push(datas[data][name]);
                    }
                })
            }
        });

        this.seriesMainData = _flatMap(rawAssistData)
        this.seriesAssistData = _convertToAssistDatas(rawAssistData);
    }

    /**
     * [setBarsColor set the color for each bar] seriesMainData will be like
     *     [{value:300,itemStyle:{
     *         normal:{color:'gray'}
     *         }
     *      },
     *      {value:300,itemStyle:{
     *         normal:{color:'gray'}
     *         }
     *      }
     *     ]
     * @param {[type]} colors ["#00FF00", "#00FF88"]
     */
    setBarsColor(colors) {
        colors.forEach((color, index) => {
            if(color){
                let mainData = {};
                mainData["value"] = this.seriesMainData[index];
                mainData["itemStyle"] = {"normal":{"color":color}}
                this.seriesMainData[index] = mainData;
            }
        });
    }

    setConfigOption(option) {
        this.option = _defaultOption;
        this.option.xAxis.data = this.xAxisData;
        this.option.series[0].data = this.seriesAssistData;
        this.option.series[1].data = this.seriesMainData;
    }
}
