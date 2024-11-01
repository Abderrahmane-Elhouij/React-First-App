import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <li><Link to="/q3">Q3</Link></li>
        <li><Link to="/q4">Q4</Link></li>
        <li><Link to="/q5">Q5</Link></li>
        <li><Link to="/q6">Q6</Link></li>
      </ul>
    </div>
  );
}

export default Menu;
