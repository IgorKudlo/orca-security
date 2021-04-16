import React from 'react';
import styles from './styles.module.scss';

const Button = ({children, type, addClass, clickHandler}) => {
  return (
    <button
      className={`${styles['btn']} ${type === 'white' ? styles['btn--white'] : ''} ${addClass || ''}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  )
};

export default Button;