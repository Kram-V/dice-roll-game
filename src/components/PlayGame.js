import React from "react";
import { useGameContext } from "../contexts/GameContext";

const PlayGame = () => {
  const { state, dispatch } = useGameContext();

  function handleRollDice() {
    const randomNum = Math.floor(Math.random() * 6 + 1);

    dispatch({ type: "dice/roll", payload: randomNum });
  }

  function handleHold() {
    dispatch({ type: "dice/hold" });
  }

  function handleReset() {
    dispatch({ type: "game/reset" });
  }

  return (
    <>
      {state["player1"].score < 100 && state["player2"].score < 100 && (
        <img
          src={`dice-roll-images/dice-${state.diceNumber}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}

      <button className="btn btn--new" onClick={handleReset}>
        🔄 New game
      </button>
      <button
        disabled={
          state["player1"].score >= 100 || state["player2"].score >= 100
        }
        className="btn btn--roll"
        onClick={handleRollDice}
      >
        🎲 Roll dice
      </button>
      <button
        disabled={
          state["player1"].score >= 100 || state["player2"].score >= 100
        }
        className="btn btn--hold"
        onClick={handleHold}
      >
        📥 Hold
      </button>
    </>
  );
};

export default PlayGame;
