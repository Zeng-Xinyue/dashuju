import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const items = [
    {
      key: 'basicDataAnalysic',
      label: '电商数据分析',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: 'product',
          label: '商品',
          type: 'group',
          children: [
            {
              key: 'product-analysis',
              label: '商品数据分析',
            },
            {
              key: 'product-search',
              label: '商品数据查询',
            },
          ],
        },
        {
          key: 'order',
          label: '订单',
          type: 'group',
          children: [
            {
              key: 'order-analysis',
              label: '订单数据分析',
            },
            {
              key: 'order-search',
              label: '订单数据查询',
            },
          ],
        },
      ],
    },
    {
      key: 'predict',
      label: '预测',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: 'predict-search',
          label: '数据预测查询',
        },
        {
          key: 'predict-analysis',
          label: '推荐方案分析',
        },
      ],
    },
    {
      key: 'experiment',
      label: '实验组',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: 'experiment-data',
          label: '实验组数据',
        },
        {
          key: 'experiment-analysis',
          label: '实验组分析',
        },
      ],
    },
    // {
    //   key: 'user',
    //   label: '用户画像',
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     {
    //       key: '5',
    //       label: 'Option 5',
    //     },
    //     {
    //       key: '6',
    //       label: 'Option 6',
    //     },
    //     {
    //       key: 'sub3',
    //       label: 'Submenu',
    //       children: [
    //         {
    //           key: '7',
    //           label: 'Option 7',
    //         },
    //         {
    //           key: '8',
    //           label: 'Option 8',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];
  const onClick = e => {
    console.log('click ', e?.key);
    navigate(`./${e.key}`);
  };
  return (
    <div className="home" style={{ maxWidth: '100vw', height: '100vh' }}>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
          height: '100%',
        }}
        defaultSelectedKeys={['basicDataAnalysic']}
        defaultOpenKeys={['basicDataAnalysic', 'predict', 'experiment']}
        mode="inline"
        items={items}
      />
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
