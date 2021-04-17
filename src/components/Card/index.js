import React, {useState} from 'react';
import sprite from '../../img/sprite.svg';
import {
  CardStyled,
  CardHeader,
  CardStatus,
  CardTitle,
  CardMenu,
  CardMenuBtn,
  CardMenuBox,
  CardMenuClose,
  CardMenuList,
  CardMenuListItem,
  CardMenuItemBtn,
  CardBody,
  CardInfo,
  CardInfoItem,
  CardInfoTerm,
  CardInfoValue,
  CardTests,
  CardTest,
  CardTestCode,
  CardTestPoints,
  CardBtn
} from './CardElement';

const Card = ({ status, title, name, type, tests, openModalHandler , className }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <CardStyled className={className}>
      <CardHeader>
        <CardStatus status={status}/>
        <CardTitle>{title}</CardTitle>
        <CardMenu>
          <CardMenuBtn onClick={openMenuHandler}>
            <svg width={3} height={12}>
              <use xlinkHref={`${sprite}#dots`}/>
            </svg>
          </CardMenuBtn>
          {isMenuOpen && (
            <CardMenuBox>
              <CardMenuClose onClick={openMenuHandler}>
                <svg width={11} height={11}>
                  <use xlinkHref={`${sprite}#close`}/>
                </svg>
              </CardMenuClose>
              <CardMenuList>
                <CardMenuListItem>
                  <CardMenuItemBtn>
                    <svg width={10} height={12}>
                      <use xlinkHref={`${sprite}#copy`}/>
                    </svg>
                    Duplicate
                  </CardMenuItemBtn>
                </CardMenuListItem>
                <CardMenuListItem>
                  <CardMenuItemBtn>
                    <svg width={12} height={12}>
                      <use xlinkHref={`${sprite}#edit`}/>
                    </svg>
                    Edit
                  </CardMenuItemBtn>
                </CardMenuListItem>
                <CardMenuListItem>
                  <CardMenuItemBtn>
                    <svg width={10} height={12}>
                      <use xlinkHref={`${sprite}#delete`}/>
                    </svg>
                    Delete
                  </CardMenuItemBtn>
                </CardMenuListItem>
              </CardMenuList>
            </CardMenuBox>
          )}
        </CardMenu>
      </CardHeader>
      <CardBody>
        <CardInfo>
          <CardInfoItem>
            <CardInfoTerm>Name:</CardInfoTerm>
            <CardInfoValue>{name}</CardInfoValue>
          </CardInfoItem>
          <CardInfoItem>
            <CardInfoTerm>Type:</CardInfoTerm>
            <CardInfoValue>{type}</CardInfoValue>
          </CardInfoItem>
          <CardInfoItem>
            <CardInfoTerm>Tests:</CardInfoTerm>
            <CardInfoValue>
              <CardTests>
                {
                  tests.map((item, index) => {
                    return (
                      <CardTest key={index + new Date()}>
                        <CardTestCode>{item.code}</CardTestCode>
                        <CardTestPoints>{item.score_points} / {item.total_points}</CardTestPoints>
                      </CardTest>
                    )
                  })
                }
              </CardTests>
            </CardInfoValue>
          </CardInfoItem>
        </CardInfo>
        <CardBtn clickHandler={openModalHandler}>Open modal</CardBtn>
      </CardBody>
    </CardStyled>
  )
}

export default Card;