import React from 'react';
import Logo from '../Logo';
import Cards from '../Cards';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles['app']}>
      <div className={styles['app__container']}>
        <Logo addClass={styles['app__logo-top']} />
        <Cards />
      </div>
    </div>
  )
}

export default App;
