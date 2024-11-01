// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import App from './App';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("root") || document.createElement("div");
const rootElement = ReactDOM.createRoot(root);

rootElement.render(<App />);

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// import store from './redux/store';
// import { Provider } from 'react-redux';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
