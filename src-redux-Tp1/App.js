import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./gameSlice";

const App = () => {
  const dispatch = useDispatch();
  const { player1Score, player2Score, isPaused } = useSelector(
    (state) => state.game
  );

  const handlePlayer1Click = () => {
    dispatch(actions.incrementPlayer1Score());
  };

  const handlePlayer2Click = () => {
    dispatch(actions.incrementPlayer2Score());
  };

  const handlePauseToggle = () => {
    dispatch(actions.togglePause());
  };

  const handleReset = () => {
    dispatch(actions.resetGame());
  };

  let gameResult = null;

  if (player1Score >= 50) {
    gameResult = "Premier joueur gagne!";
  } else if (player2Score >= 50) {
    gameResult = "Deuxième joueur gagne!";
  } else if (
    player1Score === player2Score &&
    (player1Score > 0 || player2Score > 0)
  ) {
    gameResult = "Egalité";
  } else if (isPaused) {
    gameResult = "Pause";
  }

  return (
    <>
      <p className="display" id="score">
        {gameResult
          ? gameResult
          : `Le score est: ${player1Score} - ${player2Score}`}
      </p>
      <div className="buttons">
        <div className="buttons-row">
          <button
            className="button"
            id="player-1"
            onClick={handlePlayer1Click}
            disabled={isPaused || player1Score >= 50 || player2Score >= 50}
          >
            Point Joueur 1
          </button>
          <button
            className="button"
            id="player-2"
            onClick={handlePlayer2Click}
            disabled={isPaused || player1Score >= 50 || player2Score >= 50}
          >
            Point Joueur 2
          </button>
        </div>
        <div className="buttons-row">
          <button className="button" id="reset" onClick={handleReset}>
            Remettre à zéro
          </button>
          <button className="button" id="pause" onClick={handlePauseToggle}>
            {isPaused ? "Reprendre" : "Pause"}
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
