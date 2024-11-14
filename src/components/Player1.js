import React from "react";
import { useGameContext } from "../contexts/GameContext";

const Player1 = () => {
  const { state } = useGameContext();

  return (
    <section
      className={`player player--0 ${
        state.currentPlayer === 0 ? "player--active" : ""
      } ${state["player1"].score >= 100 ? "player--winner" : ""}`}
    >
      <h2 className="name" id="name--0">
        {state["player1"].score >= 100 ? "WON!" : "Player 1"}
      </h2>
      <p className="score" id="score--0">
        {state.player1.score}
      </p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score" id="current--0">
          {state.player1.currentScore}
        </p>
      </div>
    </section>
  );
};

export default Player1;
