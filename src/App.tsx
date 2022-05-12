import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux' 

import { ContainerAbout } from '@containers';
import ContainerHome from './containers/ContainerHome/ContainerHome';
import { AppRoutesEnum } from '@enums';
import store from './store/store'

const appRoutes = [
  {
    path: AppRoutesEnum.HOME,
    component: ContainerHome,
    exact: true
  },
  {
    path: AppRoutesEnum.ABOUT,
    component: ContainerAbout,
    exact: true
  }
];

type IRoutes = {
  path: AppRoutesEnum;
  component: any;
  exact: boolean;
};

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {appRoutes.map((route: IRoutes, index: number) => {
            return <Route key={index} exact={route.exact} path={route.path} component={route.component} />;
          })}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
