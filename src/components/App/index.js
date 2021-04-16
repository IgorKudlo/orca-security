import React from 'react';
import Logo from '../Logo';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles['app']}>
      <div className={styles['app__container']}>
        <Logo addClass={styles['app__logo-top']} />
      </div>
    </div>
  )
}

export default App;
