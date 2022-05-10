import React from 'react';
import Square from '../Square/index';
import styles from './board.module.scss';

const Board = (squares, click) => {
  <div className={styles.board}>
    {squares.map((square, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Square key={i} value={square} onClick={() => click(i)} />
    ))}
  </div>;
};

export default Board;
