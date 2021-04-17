import React, {useState} from 'react';
import Button from '../Button';
import sprite from '../../img/sprite.svg';
import styles from './styles.module.scss';

const Card = ({ title, name, type, tests, addClass, openModalHandler }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles['card']} ${addClass || ''}`}>
      <div className={styles['card__header']}>
        <span className={styles['card__title']}>{title}</span>
        <div className={styles['card__menu']}>
          <button className={styles['card__menu-btn']} onClick={openMenuHandler}>
            <svg className={styles['card__menu-btn-icon']} width={3} height={12}>
              <use xlinkHref={`${sprite}#dots`}/>
            </svg>
          </button>
          {isMenuOpen && (
            <div className={styles['card__menu-box']}>
              <button className={styles['card__menu-close']} onClick={openMenuHandler}>
                <svg className={styles['card__menu-close-icon']} width={11} height={11}>
                  <use xlinkHref={`${sprite}#close`}/>
                </svg>
              </button>
              <ul className={styles['card__menu-list']}>
                <li className={`${styles['card__menu-list-item']} ${styles['card__menu-item']}`}>
                  <button className={styles['card__menu-item-btn']}>
                    <svg className={styles['card__menu-item-icon']} width={10} height={12}>
                      <use xlinkHref={`${sprite}#copy`}/>
                    </svg>
                    Duplicate
                  </button>
                </li>
                <li className={`${styles['card__menu-list-item']} ${styles['card__menu-item']}`}>
                  <button className={styles['card__menu-item-btn']}>
                    <svg className={styles['card__menu-item-icon']} width={12} height={12}>
                      <use xlinkHref={`${sprite}#edit`}/>
                    </svg>
                    Edit
                  </button>
                </li>
                <li className={`${styles['card__menu-list-item']} ${styles['card__menu-item']}`}>
                  <button className={styles['card__menu-item-btn']}>
                    <svg className={styles['card__menu-item-icon']} width={10} height={12}>
                      <use xlinkHref={`${sprite}#delete`}/>
                    </svg>
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          )}
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
        <Button addClass={styles['card__btn']} clickHandler={openModalHandler}>Open modal</Button>
      </div>
    </div>
  )
}

export default Card;