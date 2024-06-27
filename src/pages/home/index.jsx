import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const str = String(window.location.hash)
  const result = str.replace(/^#\//, "");

  const items = [
    {
      key: 'basic-data-analysic',
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

          ],
        },
        {
          key: 'customer',
          label: '用户',
          type: 'group',
          children: [
            {
              key: 'customer-analysis',
              label: '用户情况分析',
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
          key: 'recommended-program',
          label: '推荐方案分析',
        },
        {
          key: 'sales-strategy',
          label: '捆绑销售策略',
        },
        {
          key: 'future',
          label: '未来数据预测',
          type: 'group',
          children: [
            {
              key: 'sales-predict',
              label: '销售额预测',
            },
            {
              key: 'order-priority-predict',
              label: '订单优先级预测',
            },
          ],
        },
      ],
    },
    // {
    //   key: 'experiment',
    //   label: '实验组',
    //   icon: <AppstoreOutlined />,
    //   children: [
    //     {
    //       key: 'experiment-data',
    //       label: '实验组数据',
    //     },
    //     {
    //       key: 'experiment-analysis',
    //       label: '实验组分析',
    //     },
    //   ],
    // },
  ];
  const onClick = e => {
    console.log('click ', e?.key);
    navigate(`./${e.key}`);
  };
  return (
    <div className="home" style={{ maxWidth: '100vw', height: '100vh', position: 'relative' }}>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
          height: '100%',
        }}
        defaultSelectedKeys={[result]}
        defaultOpenKeys={['basic-data-analysic', 'predict', 'experiment']}
        mode="inline"
        items={items}
      />
      <div style={{ position: 'absolute', right: '0', top: '0', width: 'calc(100vw - 256px)', minHeight: "100vh" }}>
        <Outlet></Outlet>
      </div>

    </div>
  );
};

export default Home;
