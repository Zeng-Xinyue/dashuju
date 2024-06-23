import React, { useEffect, useRef } from "react";
import { Card } from "antd";
import * as echarts from 'echarts';

const SalesPredict = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const dom = chartRef.current;
    const myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false
    });

    const data = [
      ["2011-01-01", 138241.30042 ],
      ["2011-02-01 ",  134969.94086 ],
      ["2011-03-01 ",  171455.59372 ],
      ["2011-04-01 ",  128833.47034 ],
      ["2011-05-01 ",  148146.72092 ],
      ["2011-06-01 ",  189338.43966 ],
      ["2011-07-01 ",  162034.69756 ],
      ["	2011-08-01 ",  219223.49524 ],
      ["	2011-09-01 ",  255237.89698 ],
      ["2011-10-01 ",  204675.07846 ],
      ["	2011-11-01 ",  214934.29386 ],
      ["	2011-12-01 ",  292359.96752 ],
      ["	2012-01-01 ",  162800.89338 ],
      ["	2012-02-01 ",  152661.15144 ],
      ["	2012-03-01 ",  201608.72784 ],
      ["	2012-04-01 ",  187469.96192 ],
      ["	2012-05-01 ",  218960.16042 ],
      ["	2012-06-01 ",  249289.77172 ],
      ["	2012-07-01 ",  174394.02808 ],
      ["	2012-08-01 ",  271669.66086 ],
      ["	2012-09-01 ",  256567.85308 ],
      ["	2012-10-01 ",  239321.09904 ],
      ["	2012-11-01 ",  270723.05356 ],
      ["	2012-12-01 ",  291972.33306 ],
      ["	2013-01-01 ",  206459.19582 ],
      ["	2013-02-01 ",  191062.77216 ],
      ["	2013-03-01 ",  230547.79468 ],
      ["	2013-04-01 ",  233181.34844 ],
      ["	2013-05-01 ",  304509.96336 ],
      ["	2013-06-01 ",  341162.34370 ],
      ["	2013-07-01 ",  223642.65664 ],
      ["	2013-08-01 ",  323876.60716 ],
      ["	2013-09-01 ",  326897.27044 ],
      ["	2013-10-01 ",  270121.87570 ],
      ["	2013-11-01 ",  383039.21248 ],
      ["	2013-12-01 ",  371245.40880 ],
      ["	2014-01-01 ",  268265.52240 ],
      ["	2014-02-01 ",  244159.30486 ],
      ["	2014-03-01 ",  347720.96868 ],
      ["	2014-04-01 ",  302132.54000 ],
      ["	2014-05-01 ",  304798.83604 ],
      ["	2014-06-01 ",  372577.23298 ],
      ["	2014-07-01 ",  278672.17326 ],
      ["	2014-08-01 ",  432731.04194 ],
      ["	2014-09-01 ",  405436.70584 ],
      ["	2014-10-01 ",  406659.41500 ],
      ["	2014-11-01 ",  508954.73156 ],
      ["	2014-12-01 ",  427757.39800 ],
      ["2015-01",400391.959098	],
["2015-02",	420411.557053],
["2015-03",	441432.134906	],
["2015-04",	463503.741651	],
["2015-05",	486678.928733	],
["2015-06",	511012.875170	],

    ];

    const dateList = data.map(function (item) {
      return item[0];
    });
    const valueList = data.map(function (item) {
      return item[1];
    });

    const option = {
      title: {
        text: "过去四年销售额变化以及未来销售额预测",
        subtext: "运用时间预测序列"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross"
        }
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: dateList,
        axisLabel:{
          rotate:35,

        }
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} "
        },
        axisPointer: {
          snap: true
        }
      },
      visualMap: {
        show: false,
        dimension: 0,
        pieces: [
          {
            lte: 47,
            color: "green"
          },
          {
            gt: 47,
            lte: 53,
            color: "red"
          }
        ]
      },
      series: [
        {
          name: "Electricity",
          type: "line",
          smooth: true,
          data: valueList,
          markArea: {
            itemStyle: {
              color: 'rgba(255, 173, 177, 0.4)'
            },
            data: [
              [
                {
                  name: '预测值',
                  xAxis: '2015-01'
                },
                {
                  xAxis: '2015-06'
                }
              ],
            ]
          }
        }
      ]
    };

    if (option && typeof option === "object") {
      myChart.setOption(option);
    }

    window.addEventListener("resize", myChart.resize);

    return () => {
      window.removeEventListener("resize", myChart.resize);
    };
  }, []);

  const chartRef1 = useRef(null);

  useEffect(() => {
    const dom1 = chartRef1.current;
    const myChart1 = echarts.init(dom1, null, {
      renderer: "canvas",
      useDirtyRect: false
    });

    const data1 = [
      ["	2011-01-01 	",	13457.23302	],
["	2011-02-01 	",	17588.83726	],
["	2011-03-01 	",	16169.36062	],
["	2011-04-01 	",	13405.46924	],
["	2011-05-01 	",	14777.45792	],
["	2011-06-01 	",	25932.87796	],
["	2011-07-01 	",	10631.84406	],
["	2011-08-01 	",	19650.67124	],
["	2011-09-01 	",	32313.25458	],
["	2011-10-01 	",	30745.54166	],
["	2011-11-01 	",	21261.40536	],
["	2011-12-01 	",	33006.85862	],
["	2012-01-01 	",	19627.42058	],
["	2012-02-01 	",	17828.18244	],
["	2012-03-01 	",	22752.87684	],
["	2012-04-01 	",	20804.00532	],
["	2012-05-01 	",	22865.39572	],
["	2012-06-01 	",	34358.03962	],
["	2012-07-01 	",	21725.18808	],
["	2012-08-01 	",	36511.44996	],
["	2012-09-01 	",	25039.93498	],
["	2012-10-01 	",	27773.87454	],
["	2012-11-01 	",	26160.60686	],
["	2012-12-01 	",	31968.30416	],
["	2013-01-01 	",	26052.40252	],
["	2013-02-01 	",	31553.99756	],
["	2013-03-01 	",	34873.71938	],
["	2013-04-01 	",	26008.05144	],
["	2013-05-01 	",	39053.30946	],
["	2013-06-01 	",	43298.85000	],
["	2013-07-01 	",	27019.91294	],
["	2013-08-01 	",	32977.75576	],
["	2013-09-01 	",	18850.09084	],
["	2013-10-01 	",	27871.97470	],
["	2013-11-01 	",	51720.88568	],
["	2013-12-01 	",	47654.27990	],
["	2014-01-01 	",	31447.74660	],
["	2014-02-01 	",	29454.01876	],
["	2014-03-01 	",	50097.04458	],
["	2014-04-01 	",	35709.53320	],
["	2014-05-01 	",	34335.60404	],
["	2014-06-01 	",	40869.02108	],
["	2014-07-01 	",	26450.70856	],
["	2014-08-01 	",	46443.47934	],
["	2014-09-01 	",	52533.83284	],
["	2014-10-01 	",	52342.49740	],
["	2014-11-01 	",	55561.72406	],
["	2014-12-01 	",	48920.76000	],
["2015-01",	46506.740960	],
["2015-02",	48832.078008	],
["2015-03",	51273.681909	],
["2015-04",	53837.366004	],
["2015-05",	56529.234305	],
["2015-06",	59355.696020	],

    ];

    const dateList1 = data1.map(function (item) {
      return item[0];
    });
    const valueList1 = data1.map(function (item) {
      return item[1];
    });

    const option1 = {
      title: {
        text: "过去四年利润变化以及未来销售额预测",
        subtext: "运用时间预测序列"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross"
        }
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: dateList1,
        axisLabel:{
          rotate:35,

        }
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} "
        },
        axisPointer: {
          snap: true
        }
      },
      visualMap: {
        show: false,
        dimension: 0,
        pieces: [
          {
            lte: 47,
            color: "green"
          },
          {
            gt: 47,
            lte: 53,
            color: "red"
          }
        ]
      },
      series: [
        {
          name: "Electricity",
          type: "line",
          smooth: true,
          data: valueList1,
          markArea: {
            itemStyle: {
              color: 'rgba(255, 173, 177, 0.4)'
            },
            data: [
              [
                {
                  name: '预测值',
                  xAxis: '2015-01'
                },
                {
                  xAxis: '2015-06'
                }
              ],
            ]
          }
        }
      ]
    };

    if (option1 && typeof option1 === "object") {
      myChart1.setOption(option1);
    }

    window.addEventListener("resize1", myChart1.resize);

    return () => {
      window.removeEventListener("resize1", myChart1.resize);
    };
  }, []);
  return (
    <>
    <Card bordered={false} title="salesPredict">
      <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>
    </Card>
    <Card bordered={false} title="profitPredict">
      <div ref={chartRef1} style={{ width: '100%', height: '400px' }}></div>
    </Card>
    </>
  );
};

export default SalesPredict;
