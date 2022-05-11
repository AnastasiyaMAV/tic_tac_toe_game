import React from 'react';

import styles from './square.module.scss';

function Square({ ...props }) {
  return (
    <button type="button" className={styles.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
