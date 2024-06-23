import React, { useEffect, useRef } from "react";
import { Card } from "antd";
import * as echarts from 'echarts';

const ProductAnalysis = () => {
  const chartRef1 = React.useRef(null);
  useEffect(()=>{
   const  options = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['商品销售数量']
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ["	Staples	",
    "	Cardinal Index Tab, Clear	",
    "	Eldon File Cart, Single Width	",
    "	Rogers File Cart, Single Width	",
    "	Sanford Pencil Sharpener, Water Color	",
    "	Stockwell Paper Clips, Assorted Sizes	",
    "	Avery Index Tab, Clear	",
    "	Ibico Index Tab, Clear	",
    "	Smead File Cart, Single Width	",
    "	Stanley Pencil Sharpener, Water Color	",
    ],
    axisLabel:{
      rotate:15,

    }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '商品销售数量',
          type: 'bar',
          data: [876, 337, 321, 262, 259, 253, 252, 251, 250, 242],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        }
      ]
    };
    const chartDom1 = chartRef1.current;
      const myChart1 = echarts.init(chartDom1);

     myChart1.setOption(options)
  },[])
  const chartRef0 =React.useRef(null);
  useEffect(()=>{
    const option0 = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['商品利润']
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ["Canon2200AdvancedCopier",
    "Cisco Smart Phone, Full Size",
    "Motorola Smart Phone, Full Size",
    "Hoover Stove, Red",
    "Sauder Classic Bookcase, Traditional",
    "Executive Leather Armchair, Adjustable",
    "Nokia Smart Phone, Full Size",
    "Cisco Smart Phone, with Caller ID",
    "Nokia Smart Phone, with Caller ID",
    "Belkin Router, USB",
    ],

    axisLabel:{
      rotate:15,

    }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '商品利润',
          type: 'bar',
          data: [
            25199.928, 17238.5206, 17027.113, 11807.969, 10672.073, 10427.326,
            9938.1955, 9786.6408, 9465.3257, 8955.018
          ],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }]
          }
        }
      ]
    };
    const chartDom0 = chartRef0.current;
    const myChart0 = echarts.init(chartDom0);

   myChart0.setOption(option0)
  },[])
  const chartRef = React.useRef(null);
  useEffect(() => {
   const   option = {
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['product', '2011', '2012', '2013', '2014'],
            ['Accessories', 1839, 2420, 2967, 3720],
            ['Appliances', 1132, 1284, 1560, 2102],
            ['Art', 2931, 3556, 4180, 5634],
            ['Binders', 3659, 4526, 5834, 7410],
            ['Bookcases', 1422, 1788, 2190, 2910],
            ['Chairs', 2295, 2515, 3492, 4034],
            ['Copiers', 1138, 1643, 2031, 2642],
            ['Envelopes', 1402, 1911, 2337, 2730],
            ['Fasteners', 1366, 1887, 2258, 2879],
            ['Furnishings', 1982, 2349, 3199, 3695],
            ['Labels', 1705, 1889, 2433, 3295],
            ['Machines', 937, 1089, 1146, 1734],
            ['Paper', 2286, 2748, 3681, 4107],
            ['Phones', 2244, 2545, 3145, 3936],
            ['Storage', 3043, 3571, 4574, 5729],
            ['Supplies', 1452, 1763, 2290, 3038],
            ['Tables', 610, 627, 819, 1027]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus:'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus:'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus:'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus:'series' }
          },
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            emphasis: {
              focus:'self'
            },
            label: {
              formatter: '{b}: {@2012} ({d}%)'
            },
            encode: {
              itemName: 'product',
              value: '2012',
              tooltip: '2012'
            }
          }
        ]
      };




      const chartDom = chartRef.current;
      const myChart = echarts.init(chartDom);
         myChart.on('updateAxisPointer', function (event) {
        const xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1;
          myChart.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          });
        }
      });
     myChart.setOption(option)
    }, []);
  return (
    <>
      <Card bordered={false} title="商品销售量分析">
      <div ref={chartRef1} style={{ width: '100%', height: '800px' }}></div>
      </Card>
      <Card bordered={false} title="商品利润分析">
      <div ref={chartRef0} style={{ width: '100%', height: '800px' }}></div>
      </Card>
      <Card bordered={false} title="商品销售类型占比和各类型商品销售数量占比">
        <div ref={chartRef} style={{ width: '100%', height: '800px' }}></div>
      </Card>
    </>
  );
}

export default ProductAnalysis;
