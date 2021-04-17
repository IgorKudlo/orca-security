import React, {useState} from 'react';
import {CARDS} from './stubs';
import Card from '../Card';
import Modal from '../Modal';
import styles from './styles.module.scss';

const Cards = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <div className={styles['cards']}>
        {
          CARDS.map((card, index) => {
            return (
              <Card {...card} addClass={styles['cards__item']} key={index + new Date()} openModalHandler={openModalHandler} />
            )
          })
        }
      </div>
      {isModalOpen && (
        <Modal openModalHandler={openModalHandler} />
      )}
    </>
  )
}

export default Cards;