import React from 'react';
import  ReactDOM  from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import App from './App';
import { Provider } from 'react-redux';
import { store } from './components/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// ReactDOM.render(<App/>, document.getElementById('root')); 
