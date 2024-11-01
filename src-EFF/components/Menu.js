import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <ul>
        <li><Link to="/calcul-frais">Calcul Frais</Link></li>
        <li><Link to="/verification">Verification</Link></li>
      </ul>
    </div>
  );
};

export default Menu;
