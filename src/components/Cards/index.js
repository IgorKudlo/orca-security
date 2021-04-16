import React from 'react';
import {CARDS} from './stubs';
import Card from '../Card';
import styles from './styles.module.scss';

const Cards = () => {
  return (
    <>
      <div className={styles['cards']}>
        {
          CARDS.map((card, index) => {
            return (
              <Card {...card} addClass={styles['cards__item']} key={index + new Date()}/>
            )
          })
        }
      </div>
    </>
  )
}

export default Cards;