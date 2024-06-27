import React, { useEffect, useRef } from "react";
import { Card } from "antd";
import * as echarts from 'echarts';

const OrderPriorityPredict = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const option = {
            color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087'],
            title: {
                text: '订单级别'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['Low', 'Medium', 'High', 'Critical']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: [
                        ' 2011/1/1 ',
                        ' 2011/2/1 ',
                        ' 2011/3/1 ',
                        ' 2011/4/1 ',
                        ' 2011/5/1 ',
                        ' 2011/6/1 ',
                        ' 2011/7/1 ',
                        ' 2011/8/1 ',
                        ' 2011/9/1 ',
                        ' 2011/10/1 ',
                        ' 2011/11/1 ',
                        ' 2011/12/1 ',
                        ' 2012/1/1 ',
                        ' 2012/2/1 ',
                        ' 2012/3/1 ',
                        ' 2012/4/1 ',
                        ' 2012/5/1 ',
                        ' 2012/6/1 ',
                        ' 2012/7/1 ',
                        ' 2012/8/1 ',
                        ' 2012/9/1 ',
                        ' 2012/10/1 ',
                        ' 2012/11/1 ',
                        ' 2012/12/1 ',
                        ' 2013/1/1 ',
                        ' 2013/2/1 ',
                        ' 2013/3/1 ',
                        ' 2013/4/1 ',
                        ' 2013/5/1 ',
                        ' 2013/6/1 ',
                        ' 2013/7/1 ',
                        ' 2013/8/1 ',
                        ' 2013/9/1 ',
                        ' 2013/10/1 ',
                        ' 2013/11/1 ',
                        ' 2013/12/1 ',
                        ' 2014/1/1 ',
                        ' 2014/2/1 ',
                        ' 2014/3/1 ',
                        ' 2014/4/1 ',
                        ' 2014/5/1 ',
                        ' 2014/6/1 ',
                        ' 2014/7/1 ',
                        ' 2014/8/1 ',
                        ' 2014/9/1 ',
                        ' 2014/10/1 ',
                        ' 2014/11/1 ',
                        ' 2014/12/1 ',
                        ' 2015/1/1 ',
                        ' 2015/2/1 ',
                        ' 2015/3/1 ',
                        ' 2015/4/1 ',
                        ' 2015/5/1 ',
                        ' 2015/6/1 '
                    ]
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            visualMap: {
                type: 'piecewise',
                show: false,
                dimension: 0,
                seriesIndex: 0,
                pieces: [
                    {
                        gt: 1,
                        lt: 3,
                        color: 'rgba(0, 0, 180, 0.4)'
                    },
                    {
                        gt: 5,
                        lt: 7,
                        color: 'rgba(0, 0, 180, 0.4)'
                    }
                ]
            },
            series: [
                {
                    name: 'Low',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(128, 255, 165)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(1, 191, 236)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [
                        17, 16, 19, 22, 29, 43, 30, 28, 45, 51, 61, 63, 17, 17, 40, 50, 41, 47,
                        41, 53, 45, 37, 43, 34, 55, 36, 37, 55, 42, 62, 59, 82, 72, 63, 94, 61,
                        51, 52, 46, 59, 48, 76, 37, 112, 91, 56, 85, 104, 69.462031, 61.603413,
                        62.086994, 75.188153, 65.424813, 86.90588
                    ]
                },
                {
                    name: 'Medium',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(0, 221, 255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(77, 119, 255)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [
                        349, 312, 359, 326, 337, 411, 351, 525, 508, 390, 477, 639, 398, 390,
                        466, 437, 493, 567, 421, 560, 622, 574, 777, 674, 496, 411, 519, 499,
                        693, 792, 591, 782, 832, 616, 829, 864, 643, 620, 713, 744, 764, 935,
                        639, 897, 977, 997, 1157, 1060, 849.439445, 776.409109, 877.283276,
                        885.225137, 1004.251093, 1145.950045
                    ]
                },
                {
                    name: 'High',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(55, 162, 255)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(116, 21, 219)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [
                        186, 158, 197, 217, 170, 287, 224, 208, 337, 222, 281, 330, 179, 179,
                        281, 193, 306, 382, 240, 293, 359, 265, 363, 335, 200, 219, 258, 281,
                        313, 438, 280, 368, 458, 382, 458, 398, 298, 284, 491, 367, 399, 490,
                        357, 475, 485, 490, 611, 509, 394.300034, 393.10927, 533.611563,
                        475.755511, 493.033892, 602.448839
                    ]
                },
                {
                    name: 'Critical',
                    type: 'line',
                    stack: 'Total',
                    smooth: true,
                    lineStyle: {
                        width: 0
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(255, 0, 135)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(135, 0, 157)'
                            }
                        ])
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [
                        69, 48, 78, 46, 26, 60, 65, 55, 71, 71, 78, 106, 35, 37, 37, 41, 74, 70,
                        54, 87, 64, 53, 96, 95, 46, 88, 82, 65, 111, 127, 78, 105, 130, 58, 110,
                        104, 83, 60, 105, 97, 92, 105, 104, 85, 141, 142, 140, 158, 108.414694,
                        108.436811, 125.448463, 112.191717, 125.881369, 140.61272
                    ]
                }
            ]
        };


        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);
        myChart.setOption(option);
    }, []);

    return <Card bordered={false} title="OrderPriorityPredict">
        <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
    </Card>
}

export default OrderPriorityPredict;
