import React from 'react';
import CalculeOperation from './component/counter';
import AfficheHistorique from './component/listHistorique';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import { Link } from 'react-router-dom'; 
const App = () => {
  return (
    
    <BrowserRouter>
        <Link to='/'>Calculatrice</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/AfficheHistorique'>SingleHistorique</Link><br /><br /><br />
        <Routes>
          <Route path="/" element={<CalculeOperation/>} />
          <Route path="/AfficheHistorique/:id" element={<AfficheHistorique/>} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
