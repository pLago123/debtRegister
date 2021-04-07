import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Routes from './routes';
import UserProvider from './contexts/UserContext';
import ToastProvider from './contexts/ToastContext';

const App: React.FC = () => {
  return (
    <ToastProvider>
      <UserProvider>
        <Router>
          <Routes />
        </Router>
        <GlobalStyles />
      </UserProvider>
    </ToastProvider>
  );
};

export default App;
