import { createHashRouter, Navigate } from 'react-router-dom';
import { globalConfig } from '@/globalConfig';

import Home from '../pages/home/index';
import ProductAnalysis from '../pages/home/productAnalysis/index';
import OrderAnalysis from '../pages/home/orderAnalysis/index';
import CustomerAnalysis from '../pages/home/customerAnalysis';
import RecommendedProgram from '../pages/home/recommendedProgram';
import SalesStrategy from '../pages/home/salesStrategy';
import SalesPredict from '../pages/home/salesPredict';
import ShippingCostPredict from '../pages/home/shippingCostPredict';
import OrderPriorityPredict from '../pages/home/orderPriorityPredict';

// 全局路由
export const globalRouters = createHashRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      // {
      //     path: '/',
      //     element: <Home></Home>
      // },
      {
        path: '/product-analysis',
        element: <ProductAnalysis></ProductAnalysis>
      },
      {
        path: '/order-analysis',
        element: <OrderAnalysis></OrderAnalysis>
      },
      {
        path: '/customer-analysis',
        element: <CustomerAnalysis></CustomerAnalysis>
      },
      {
        path: '/recommended-program',
        element: <RecommendedProgram></RecommendedProgram>
      },
      {
        path: '/sales-strategy',
        element: <SalesStrategy></SalesStrategy>
      },
      {
        path: '/sales-predict',
        element: <SalesPredict></SalesPredict>
      },
      {
        path: '/shipping-cost-predict',
        element: <ShippingCostPredict></ShippingCostPredict>
      },
      {
        path: '/order-priority-predict',
        element: <OrderPriorityPredict></OrderPriorityPredict>
      },
    ]
  },
  //未匹配
  // {
  //     path: '*',
  //     element: <Navigate to="/" />,
  // },
]);

// export function PrivateRoute(props) {
//   // 判断localStorage是否有登录用户信息，如果没有则跳转登录页
//   return window.localStorage.getItem(globalConfig.SESSION_LOGIN_INFO) ? (
//     props.children
//   ) : (
//     <Navigate to="/" />
//   );
// }
