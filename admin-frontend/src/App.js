import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

export default App;
