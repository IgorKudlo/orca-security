import styled from 'styled-components';
import Button from '../Button';

export const ModalComponent = styled.div`
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;
  top: 50%;
  bottom: 0;
  height: 100%;
  transform: translateY(-50%);
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: none;
  background-color: rgba(16, 17, 29, .3);
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  padding: 15px;
`;

export const ModalBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 466px;
  margin: 0 auto;
  background: var(--white);
  border-radius: 4px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 11px 16px;
  border-bottom: 1px solid rgba(16, 17, 29, .1);
`;

export const ModalTitle = styled.div`
  font-size: 18px;
  color: var(--black);
  margin-right: 10px;
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    svg {
      stroke: var(--main);
    }
  }

  svg {
    stroke: var(--gray);
    transition: stroke .25s ease-out;
  }
`;

export const ModalBody = styled.div`
  padding: 16px;
  font-size: 12px;
  line-height: 16px;

  > *:first-child {
    margin-top: 0;
  }
`;

export const ModalText = styled.p`
  margin: 17px 0;
`;

export const ModalTextSmall = styled(ModalText)`
  margin: 11px 0;
  font-size: 10px;
  line-height: 14px;
`;

export const ModalListCheckbox = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 12px;

  li {
    &:not(:last-child) {
      margin-bottom: 6px;
    }
  }
`;

export const ModalListCheckboxInline = styled(ModalListCheckbox)`
  display: flex;
  flex-wrap: wrap;
  font-size: 10px;

  li {
    margin-right: 16px;
  }

  span {
    &::before {
      top: 2px;
    }
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(16, 17, 29, .1);
`;

export const ModalFooterBtn = styled(Button)`
  min-width: 100px;

  & + & {
    margin-left: 16px;
  }
`;
