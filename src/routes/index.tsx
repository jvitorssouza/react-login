import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Auth from '~/pages/auth';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Auth />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
