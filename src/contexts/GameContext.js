import { createContext, useContext, useReducer } from "react";

const initialState = {
  player1: {
    score: 0,
    currentScore: 0,
  },
  player2: {
    score: 0,
    currentScore: 0,
  },
  currentPlayer: 0,
  diceNumber: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "dice/roll":
      let activePlayer;

      if (action.payload !== 1) activePlayer = state.currentPlayer;

      if (action.payload === 1 && state.currentPlayer === 0) {
        activePlayer = 1;
      }

      if (action.payload === 1 && state.currentPlayer === 1) {
        activePlayer = 0;
      }

      return {
        ...state,
        diceNumber: action.payload,
        currentPlayer: activePlayer,
        [`player${state.currentPlayer + 1}`]: {
          ...state[`player${state.currentPlayer + 1}`],
          currentScore:
            action.payload === 1
              ? 0
              : state[`player${state.currentPlayer + 1}`].currentScore +
                action.payload,
        },
      };

    case "dice/hold":
      const totalScore =
        state[`player${state.currentPlayer + 1}`].score +
        state[`player${state.currentPlayer + 1}`].currentScore;

      return {
        ...state,
        currentPlayer: state.currentPlayer === 0 ? 1 : 0,
        diceNumber: 1,
        [`player${state.currentPlayer + 1}`]: {
          ...state[`player${state.currentPlayer}`],
          currentScore: 0,
          score: totalScore,
        },
      };

    case "game/reset":
      return initialState;

    default:
      throw new Error("Action Unknown");
  }
}

const GameContext = createContext();

function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

function useGameContext() {
  const context = useContext(GameContext);

  return context;
}

export { GameProvider, useGameContext };
