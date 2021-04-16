import React from 'react';
import Button from '../Button';
import sprite from '../../img/sprite.svg';
import styles from './styles.module.scss';

const Card = ({ title, name, type, tests, addClass }) => {
  return (
    <div className={`${styles['card']} ${addClass || ''}`}>
      <div className={styles['card__header']}>
        <span className={styles['card__title']}>{title}</span>
        <div className={styles['card__menu']}>
          <button className={styles['card__menu-btn']}>
            <svg className={styles['card__menu-btn-icon']} width={3} height={12}>
              <use xlinkHref={`${sprite}#dots`}/>
            </svg>
          </button>
        </div>
      </div>
      <div className={styles['card__body']}>
        <ul className={styles['card__info']}>
          <li className={styles['card__info-item']}>
            <div className={styles['card__info-term']}>Name:</div>
            <div className={styles['card__info-value']}>{name}</div>
          </li>
          <li className={styles['card__info-item']}>
            <div className={styles['card__info-term']}>Type:</div>
            <div className={styles['card__info-value']}>{type}</div>
          </li>
          <li className={styles['card__info-item']}>
            <div className={styles['card__info-term']}>Tests:</div>
            <div className={styles['card__info-value']}>
              <ul className={styles['card__tests']}>
                {
                  tests.map((item, index) => {
                    return (
                      <li className={`${styles['card__tests-item']} ${styles['card__test']}`} key={index + new Date()}>
                        <span className={styles['card__test-code']}>{item.code}</span>
                        <span className={styles['card__test-points']}>{item.score_points} / {item.total_points}</span>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </li>
        </ul>
        <Button addClass={styles['card__btn']}>Open modal</Button>
      </div>
    </div>
  )
}

export default Card;