import React, { useEffect } from "react";
import { Card } from "antd";
  import * as echarts from 'echarts';
const SalesStrategy = () => {
  const chartRef = React.useRef(null);
useEffect(()=>{
  const graph = {
    nodes: [
      {
        id: '0',
        name: 'Myriel',
        symbolSize: 19.12381,
        x: -266.82776,
        y: 299.6904,
        value: 28.685715,
        category: 0
      },
      {
        id: '1',
        name: 'Napoleon',
        symbolSize: 19.12381,
        x: -418.08344,
        y: 446.8853,
        value: 4,
        category: 4
      },
      {
        id: '2',
        name: 'MlleBaptistine',
        symbolSize: 19.12381,
        x: -212.76357,
        y: 245.29176,
        value: 9.485714,
        category: 3
      },
      {
        id: '3',
        name: 'MmeMagloire',
        symbolSize: 19.12381,
        x: -242.82404,
        y: 235.26283,
        value: 9.485714,
        category: 1
      },
      {
        id: '4',
        name: 'CountessDeLo',
        symbolSize: 19.12381,
        x: -379.30386,
        y: 429.06424,
        value: 4,
        category: 0
      },
      {
        id: '5',
        name: 'Geborand',
        symbolSize: 2.6666666666666665,
        x: -417.26337,
        y: 406.03506,
        value: 4,
        category: 0
      },
      {
        id: '6',
        name: 'Champtercier',
        symbolSize: 2.6666666666666665,
        x: -332.6012,
        y: 485.16974,
        value: 4,
        category: 0
      },
      {
        id: '7',
        name: 'Cravatte',
        symbolSize: 2.6666666666666665,
        x: -382.69568,
        y: 475.09113,
        value: 4,
        category: 0
      },
      {
        id: '8',
        name: 'Count',
        symbolSize: 2.6666666666666665,
        x: -320.384,
        y: 387.17325,
        value: 4,
        category: 0
      },
      {
        id: '9',
        name: 'OldMan',
        symbolSize: 2.6666666666666665,
        x: -344.39832,
        y: 451.16772,
        value: 4,
        category: 0
      },
      {
        id: '10',
        name: 'Labarre',
        symbolSize: 2.6666666666666665,
        x: -89.34107,
        y: 234.56128,
        value: 4,
        category: 1
      }
    ],
    links: [
      {
        source: '1',
        target: '0'
      },
      {
        source: '2',
        target: '0'
      },
      {
        source: '3',
        target: '0'
      },
      {
        source: '3',
        target: '2'
      },
      {
        source: '4',
        target: '0'
      },
      {
        source: '5',
        target: '0'
      },
      {
        source: '6',
        target: '0'
      },
      {
        source: '7',
        target: '0'
      },
      {
        source: '8',
        target: '0'
      },
      {
        source: '9',
        target: '0'
      },
      {
        source: '9',
        target: '3'
      }
    ],
    categories: [
      {
        name: 'A'
      },
      {
        name: 'B'
      },
      {
        name: 'C'
      },
      {
        name: 'D'
      },
      {
        name: 'E'
      },
      {
        name: 'F'
      },
      {
        name: 'G'
      },
      {
        name: 'H'
      },
      {
        name: 'I'
      }
    ]
  };

  graph.nodes.forEach(function (node) {
    node.label = {
      show: node.symbolSize > 0
    };
  });
 const  option = {
    title: {
      text: '',
      subtext: '',
      top: 'bottom',
      left: 'right'
    },
    tooltip: {},
    legend: [
      {
        // selectedMode: 'single',
        data: graph.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: '',
        type: 'graph',
        legendHoverLink: false,
        layout: 'none',
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3
        },
        emphasis: {
          focus: 'adjacency',
          lineStyle: {
            width: 10
          }
        }
      }
    ]
  };
  const chartDom = chartRef.current;
  const myChart = echarts.init(chartDom);

  myChart.setOption(option);
},[])

    return <Card bordered={false} title="SalesStrategy">
<div ref={chartRef} style={{ width: '100%', height: '800px' }}></div>
    </Card>
}

export default SalesStrategy
