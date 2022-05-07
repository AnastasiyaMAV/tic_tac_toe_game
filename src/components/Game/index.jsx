import styles from "./game.module.scss";
import React, { useState } from "react";
import Board from "../Board";
import { rulesGame } from "../../rulesGame";

const Game = () => {
  const [boardMass, setBoardMass] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = rulesGame(boardMass);
  
  const handleClick = (index) => {
    const boardCopy = [...boardMass];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "0";
    setBoardMass(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button
        className={styles.startBtn}
        onClick={() => setBoardMass(Array(9).fill(null))}
      >
        Clear the field
      </button>
    );
  };
  return (
    <div className={styles.container}>
      <div>
        <div className={winner ? styles.infoWinner : styles.info}>
          {winner
            ? "The game is over "
            : "Move in the game behind " + (xIsNext ? "X" : "0")}
        </div>
        <Board squares={boardMass} click={handleClick} />
      </div>

      <div>
        {startNewGame()}
        <div className={winner ? styles.infoWinner : styles.info}>
          {winner
            ? "Winner " + winner
            : "Winner ..."}
        </div>
      </div>
    </div>
  );
};

export default Game;
