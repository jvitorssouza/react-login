import React from 'react';
import Routes from './routes';
import CreateGlobalStyle from './assets/styles/global';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <CreateGlobalStyle />
    </>
  );
};

export default App;
