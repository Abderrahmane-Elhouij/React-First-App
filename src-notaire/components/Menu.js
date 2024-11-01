import React from 'react';
import { Link } from 'react-router-dom';
import './MenuStyle.css';

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/calcul-frais">Calcul Frais</Link>
        </li>
        <li>
          <Link to="/verification/:id">Vérification</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;










// Action types
// const ActionTypes = {
//     INCREMENT: 'INCREMENT',
//     DECREMENT: 'DECREMENT'
// };

// // Action creators
// const increment = (v) => {
//     return {
//         type: ActionTypes.INCREMENT,
//         valeur: v
      
//     };
// };
// const decrement = (v) => {
//     return {
//         type: ActionTypes.DECREMENT,
//         valeur: v
      
//     };
// };

// export { increment, decrement,ActionTypes };
