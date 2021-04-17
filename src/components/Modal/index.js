import React from 'react';
import sprite from '../../img/sprite.svg';
import Button from '../Button';
import Checkbox from '../Checkbox';
import styles from './styles.module.scss';

const Modal = ({ openModalHandler }) => {
  return (
    <div className={styles['modal']}>
      <div className={styles['modal__content']}>
        <div className={styles['modal__box']}>
          <div className={styles['modal__header']}>
            <div className={styles['modal__title']}>Lorem ipsum dolor sit amet</div>
            <button onClick={openModalHandler} className={styles['modal__close']}>
              <svg className={styles['modal__close-icon']} width={16} height={16}>
                <use xlinkHref={`${sprite}#close`}/>
              </svg>
            </button>
          </div>
          <div className={styles['modal__body']}>
            <p className={styles['modal__text']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida
              cursus nibh, sit amet varius purus lacinia at. Quisque tincidunt efficitur tempor. Proin pellentesque
              dictum mauris sed lobortis. Etiam nec mollis elit. Fusce et lacus tincidunt sem commodo condimentum et id
              lectus.</p>
            <p className={styles['modal__text']}>Curabitur in pharetra ante. Aliquam in neque tristique, fermentum elit
              dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis ante rutrum, lacinia tortor ut,
              efficitur dolor. Pellentesque vehicula tempus neque, ac ornare libero tempor placerat.</p>
            <ul className={styles['modal__list-checkbox']}>
              <li><Checkbox label={'Quisque tincidunt efficitur tempor'}/></li>
              <li><Checkbox label={'Proin pellentesque dictum mauris sed lobortis'}/></li>
              <li><Checkbox label={'Etiam nec mollis elit'}/></li>
            </ul>
            <p className={styles['modal__text--small']}>Curabitur in pharetra ante. Aliquam in neque tristique,
              fermentum elit dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis ante rutrum, lacinia
              tortor ut, efficitur dolor. Pellentesque vehicula tempus neque, ac ornare libero tempor placerat.</p>
            <p className={styles['modal__text--small']}>Curabitur in pharetra ante. Aliquam in neque tristique,
              fermentum elit dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis ante rutrum, lacinia
              tortor ut, efficitur dolor. Pellentesque vehicula tempus neque, ac ornare libero tempor placerat.</p>
            <ul className={`${styles['modal__list-checkbox']} ${styles['modal__list-checkbox--inline']}`}>
              <li><Checkbox label={'Efficitur'}/></li>
              <li><Checkbox label={'Lacinia'}/></li>
              <li><Checkbox label={'Lacinia'}/></li>
            </ul>
            <div className={styles['modal__footer']}>
              <Button clickHandler={openModalHandler} addClass={styles['modal__footer-btn']}
                      type={'white'}>Cancel</Button>
              <Button clickHandler={openModalHandler} addClass={styles['modal__footer-btn']}>Accept</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;