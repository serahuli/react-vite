import React from 'react';
import Login from '@container/login';
import Profile from '@container/profile';

import { LOGIN, PROFILE } from './routerPath';

export interface IRouter {
  path: string;
  component: React.ComponentType; //组件
}

const routers: IRouter[] = [
  { path: LOGIN, component: Login },
  { path: PROFILE, component: Profile }
];

export default routers;
