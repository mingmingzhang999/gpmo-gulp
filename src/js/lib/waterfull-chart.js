export class WaterfullChart {
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
    convertToAssistDatas(datas) {
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

}
