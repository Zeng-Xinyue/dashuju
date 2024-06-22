import { createHashRouter, Navigate } from 'react-router-dom';
import { globalConfig } from '@/globalConfig';

import Home from '../pages/home/index';

// 全局路由
export const globalRouters = createHashRouter([
  {
    path: '/',
    element: <Home />,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/product-analysis',
          element: () => import('../pages/home/predictSearch/index')
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
