import React from "react";
import { useGameContext } from "../contexts/GameContext";

const Player2 = () => {
  const { state } = useGameContext();

  return (
    <section
      className={`player player--1 ${
        state.currentPlayer === 1 ? "player--active" : ""
      }  ${state["player2"].score >= 100 ? "player--winner" : ""}`}
    >
      <h2 className="name" id="name--1">
        {state["player2"].score >= 100 ? "WON!" : "Player 2"}
      </h2>
      <p className="score" id="score--1">
        {state.player2.score}
      </p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score" id="current--1">
          {state.player2.currentScore}
        </p>
      </div>
    </section>
  );
};

export default Player2;
