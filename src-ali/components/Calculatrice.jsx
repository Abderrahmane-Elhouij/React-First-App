import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Division, Multiplication, Some, Substraction, Calcule } from '../redux/actions';

const Calculatrice = () => {

  const dispatch = useDispatch();
  const historique = useSelector(state => state.Historique);

  const sendNums = (e) =>{
    e.preventDefault();
    const form = document.forms[0];
    switch (form.operation.value){
      case "plus":
        dispatch(Some(form.num1.value, form.num2.value));
        break;
      case "moins":
        dispatch(Substraction(form.num1.value, form.num2.value));
        break;
      case "fois":
        dispatch(Multiplication(form.num1.value, form.num2.value));
        break;
      case "div":
        dispatch(Division(form.num1.value, form.num2.value));
        break;
    }
  }

  const sendToEval = (e) =>{
    e.preventDefault();
    const form = document.forms[1];
    dispatch(Calcule(form.operation.value));
  }

  return (
    <div>
      <form onSubmit={e=>sendNums(e)}>
        <label htmlFor="num1">Entrer le premier Nombre</label>
        <input type="number" name="num1" id="num1" required /><br />

        <label htmlFor="num1">Entrer le deuxiéme Nombre</label>
        <input type="number" name="num2" id="num2" required /><br />

        <label htmlFor="plus"> + </label>
        <input type="radio" name="operation" id="plus" value="plus" /><br />

        <label htmlFor="moins"> - </label>
        <input type="radio" name="operation" id="moins" value="moins" /><br />

        <label htmlFor="fois"> x </label>
        <input type="radio" name="operation" id="fois" value="fois" /><br />

        <label htmlFor="div"> / </label>
        <input type="radio" name="operation" id="div" value="div" /><br />

        <input type="submit" value="Calculer" />
      </form>
      <br /><br /><br /><br />

      <form onSubmit={e=>sendToEval(e)}>
        <label htmlFor="op">Ecrire l'operation :</label>
        <input type="text" name="operation" id="op" /><br />
        <input type="submit" value="Calculer" />
      </form>

      <h1>List de Historique :</h1>
      {historique.map((e,i)=>(
        <h3 key={i}>Id : {e.id} ||| Operation : {e.operation}</h3>
      ))}
    </div>
  )
}

export default Calculatrice