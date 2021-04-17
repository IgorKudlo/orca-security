import React, {useState} from 'react';
import {CARDS} from './stubs';
import {StyledCards, CardInList} from './CardsElements';
import Modal from '../Modal';

const Cards = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <StyledCards>
        {
          CARDS.map((card, index) => {
            return (
              <CardInList {...card} key={index+new Date()} openModalHandler={openModalHandler} />
            )
          })
        }
      </StyledCards>
      {isModalOpen && (
        <Modal openModalHandler={openModalHandler} />
      )}
    </>
  )
}

export default Cards;