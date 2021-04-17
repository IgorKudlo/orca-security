import React from 'react';
import styles from './styles.module.scss';

const Checkbox = ({ label }) => (
  <label className={styles['checkbox']}>
    <input type='checkbox' className={styles['checkbox__input']}/>
    <span className={styles['checkbox__text']}>{label}</span>
  </label>
);

export default Checkbox;
