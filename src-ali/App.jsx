import Calculatrice from './components/Calculatrice';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SingleHistorique from './components/SingleHistorique';

const App = () =>
 {
  return (
    <div>
      <BrowserRouter>
        <Link to='/'>Calculatrice</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/singlehistorique'>SingleHistorique</Link><br /><br /><br />
        <Routes>
          <Route path="/" element={<Calculatrice/>} />
          <Route path="/singlehistorique/:id" element={<SingleHistorique/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;