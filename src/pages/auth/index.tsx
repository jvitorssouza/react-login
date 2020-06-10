import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// COMPONENTS
import Register from './register';
import Login from './login';

const Auth: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Auth;
