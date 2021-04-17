import React from 'react';
import sprite from '../../img/sprite.svg';
import {
  ModalComponent,
  ModalContent,
  ModalBox,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalText,
  ModalListCheckbox,
  ModalTextSmall,
  ModalListCheckboxInline,
  ModalFooter,
  ModalFooterBtn
} from './ModalElements';
import Checkbox from '../Checkbox';

const Modal = ({openModalHandler}) => {
  return (
    <ModalComponent>
      <ModalContent>
        <ModalBox>
          <ModalHeader>
            <ModalTitle>Lorem ipsum dolor sit amet</ModalTitle>
            <ModalClose onClick={openModalHandler}>
              <svg width={16} height={16}>
                <use xlinkHref={`${sprite}#close`}/>
              </svg>
            </ModalClose>
          </ModalHeader>
          <ModalBody>
            <ModalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc gravida cursus nibh, sit amet varius purus lacinia at. Quisque tincidunt efficitur
              tempor. Proin pellentesque dictum mauris sed lobortis. Etiam nec mollis elit. Fusce et lacus
              tincidunt sem commodo condimentum et id lectus.</ModalText>
            <ModalText>Curabitur in pharetra ante. Aliquam in neque tristique,
              fermentum elit dignissim, laoreet lacus. Praesent viverra erat enim. Praesent quis ante
              rutrum, lacinia tortor ut, efficitur dolor. Pellentesque vehicula tempus neque, ac ornare
              libero tempor placerat.</ModalText>
            <ModalListCheckbox>
              <li><Checkbox label={'Quisque tincidunt efficitur tempor'}/></li>
              <li><Checkbox label={'Proin pellentesque dictum mauris sed lobortis'}/></li>
              <li><Checkbox label={'Etiam nec mollis elit'}/></li>
            </ModalListCheckbox>
            <ModalTextSmall>Curabitur in pharetra ante. Aliquam in neque
              tristique, fermentum elit dignissim, laoreet lacus. Praesent viverra erat enim. Praesent
              quis ante rutrum, lacinia tortor ut, efficitur dolor. Pellentesque vehicula tempus neque, ac
              ornare libero tempor placerat.</ModalTextSmall>
            <ModalTextSmall>Curabitur in pharetra ante. Aliquam in neque
              tristique, fermentum elit dignissim, laoreet lacus. Praesent viverra erat enim. Praesent
              quis ante rutrum, lacinia tortor ut, efficitur dolor. Pellentesque vehicula tempus neque, ac
              ornare libero tempor placerat.</ModalTextSmall>
            <ModalListCheckboxInline>
              <li><Checkbox label={'Efficitur'}/></li>
              <li><Checkbox label={'Lacinia'}/></li>
              <li><Checkbox label={'Lacinia'}/></li>
            </ModalListCheckboxInline>
            <ModalFooter>
              <ModalFooterBtn clickHandler={openModalHandler} white>Cancel</ModalFooterBtn>
              <ModalFooterBtn clickHandler={openModalHandler}>Accept</ModalFooterBtn>
            </ModalFooter>
          </ModalBody>
        </ModalBox>
      </ModalContent>
    </ModalComponent>
  )
}

export default Modal;