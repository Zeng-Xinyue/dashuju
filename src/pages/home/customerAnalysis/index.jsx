import { Card, Tag } from "antd"
import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts';

const CustomerAnalysis = () => {
    const chartRef1 = useRef(null);

    useEffect(() => {

        const option = {
            legend: {
                data: ['Consumer', 'Corporate', 'Home Office']
            },
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: 'Accessories', max: 6946 },
                    { name: 'Appliances', max: 4078 },
                    { name: 'Arty', max: 10301 },
                    { name: 'Binders', max: 17429 },
                    { name: 'Bookcases', max: 5310 },
                    { name: 'Chairs', max: 8336 },
                    { name: 'Copiers', max: 5454 },
                    { name: 'Envelopes', max: 5380 },
                    { name: 'Fasteners', max: 5390 },
                    { name: 'Furnishings', max: 8225 },
                    { name: 'Labels', max: 7322 },
                    { name: 'Machines', max: 2906 },
                    { name: 'Paper', max: 10822 },
                    { name: 'Phones', max: 9870 },
                    { name: 'Storage', max: 13917 },
                    { name: 'Supplies', max: 5543 },
                    { name: 'Tables', max: 2083 }
                ]
            },
            series: [
                {
                    name: 'Budget vs spending',
                    type: 'radar',
                    data: [
                        {
                            name: 'Consumer',
                            value: [
                                5664, 3138, 8712, 11310, 4300, 6319, 3805, 4346, 4281, 5844, 4909,
                                2557, 6426, 6104, 8670, 4233, 1539
                            ]
                        },
                        {
                            name: 'Corporate',
                            value: [
                                3307, 1872, 4657, 6352, 2622, 3706, 2242, 2515, 2598, 3391, 2591,
                                1399, 3801, 3646, 5145, 2705, 1016
                            ]
                        },
                        {
                            name: 'Home Office',
                            value: [
                                1975, 1068, 2932, 3767, 1388, 2311, 1407, 1519, 1511, 1990, 1822,
                                950, 2595, 2120, 3102, 1605, 528
                            ]
                        }
                    ]
                }
            ]
        };
        const chartDom1 = chartRef1.current;
        const myChart1 = echarts.init(chartDom1);
        myChart1.setOption(option);
    }, []);
    const chartRef = useRef(null);

    useEffect(() => {
        // There should not be negative values in rawData
        const rawData = [
            [
                382163.2654, 510230.2822, 200870.6144, 253745.1096, 765111.1448,
                778362.5301, 757081.41666, 88473.9481, 42074.4092, 203195.115, 38698.0352,
                382373.0451, 119654.7791, 905422.2842, 575506.1567, 123260.3051, 381726.977
            ],
            [
                231023.6969, 317655.4142, 103571.3772, 128534.3257, 457327.1684,
                448519.5128, 462774.31806, 51805.8048, 26138.4157, 112879.404, 21192.7337,
                229907.7571, 71982.5453, 494085.5843, 340019.3634, 81486.3971, 245793.7028
            ],
            [
                136050.0562, 183178.6086, 67649.9743, 79632.0704, 244133.9286, 274799.7213,
                289580.53856, 30624.5487, 15029.491, 69503.7369, 13513.2611, 166779.2649,
                52654.395, 307316.2707, 211560.3413, 38327.5184, 129521.2446
            ]
        ];
        const totalData = [];
        for (let i = 0; i < rawData[0].length; ++i) {
            let sum = 0;
            for (let j = 0; j < rawData.length; ++j) {
                sum += rawData[j][i];
            }
            totalData.push(sum);
        }
        const grid = {
            left: 100,
            right: 100,
            top: 50,
            bottom: 60
        };
        const series = ['Consumer', 'Corporate', 'Home Office'].map((name, sid) => {
            return {
                name,
                type: 'bar',
                stack: 'total',
                barWidth: '60%',

                label: {
                    show: true,
                    formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
                },
                data: rawData[sid].map((d, did) =>
                    totalData[did] <= 0 ? 0 : d / totalData[did]
                )
            };
        });
        const option = {
            legend: {
                selectedMode: true
            },
            grid,
            yAxis: {
                type: 'value',
                max: 1
            },
            xAxis: {
                type: 'category',
                data: [
                    'Accessories',
                    'Appliances',
                    'Art',
                    'Binders',
                    'Bookcases',
                    'Chairs',
                    'Copiers',
                    'Envelopes',
                    'Fasteners',
                    'Furnishings',
                    'Labels',
                    'Machines',
                    'Paper',
                    'Phones',
                    'Storage',
                    'Supplies',
                    'Tables'
                ],
                axisLabel: {
                    rotate: 45
                }
            },
            series
        };

        const chartDom = chartRef.current;
        const myChart = echarts.init(chartDom);
        myChart.setOption(option);
    }, []);

    return <>
        <Card bordered={false} title="用户价值度模型分析(不同类型客户 倾向不同种类商品 倾向度占比)">
            <div ref={chartRef1} style={{ width: '100%', height: '400px' }}></div>
        </Card>
        <Card bordered={false} title="不同类别商品下 不同类型客户 贡献销售金额">
            <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
        </Card>
        <Card bordered={false} title="RFM模型分析">
            <div style={{ display: "flex", flexDirection: ' column' }}>
                <Tag color="green" style={{ display: 'block', width: "auto", margin: "10px 0", fontSize: "18px", padding: "10px 20px" }}>R是指用户的最近一次消费时间，用最通俗的话说就是，用户最后一次下单时间距今天有多长时间了，这个指标与用户流失和复购直接相关。</Tag>
                <Tag color="blue" style={{ display: 'block', width: "auto", margin: "10px 0", fontSize: "18px", padding: "10px 20px" }}>F是指用户下单频率，通俗一点儿就是，用户在固定的时间段内消费了几次。这个指标反映了用户的消费活跃度。</Tag>
                <Tag color="orange" style={{ display: 'block', width: "auto", margin: "10px 0", fontSize: "18px", padding: "10px 20px" }}>M是指用户消费金额，其实就是用户在固定的周期内在平台上花了多少钱，直接反映了用户对公司贡献的价值。</Tag>
                <Tag color="red" style={{ display: 'block', width: "auto", margin: "10px 0", fontSize: "18px", padding: "10px 20px" }}>RFM模型就是通过一个客户的近期购买行为、购买的总体频率以及花了多少钱三项指标，来描述该客户的价值状况。</Tag>
            </div>

        </Card>
    </>
}
export default CustomerAnalysis;