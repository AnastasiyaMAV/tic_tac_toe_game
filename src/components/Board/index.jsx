import React from 'react';
import Square from '../Square';

import styles from './board.module.scss'

const Board = ({squares, click}) => {
    return (
        <div className={styles.board}>
            {
                squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => click(i)} />
                ))
            }
        </div>
    );
}

export default Board;
