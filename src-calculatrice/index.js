import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = document.getElementById('root') || document.createElement('div');
const rootElement = ReactDOM.createRoot(root);

rootElement.render(
<Provider store ={store}>
    <App />
</Provider>
);

