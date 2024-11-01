import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import CalculFrais from './components/CalculFrais';
import Verification from './components/Verification';
import { Provider } from 'react-redux';
import store from './redux/store'; 

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Menu />
          <Routes>
            <Route path="/calcul-frais" element={<CalculFrais />} />
            <Route path="/verification" element={<Verification iddossier={1} />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
