import styled, {css} from 'styled-components';

import statusBg from '../../img/status-bg.svg';
import cautionIcon from '../../img/caution.svg';

import Button from "../Button";

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f6;
  border-radius: 4px;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  min-height: 34px;
  padding: 8px 7px 4px 59px;
  border-top: 3px solid var(--black);
`;

export const CardStatus = styled.span`
  position: absolute;
  top: -3px;
  left: 0;
  width: 54px;
  height: 35px;
  background: url(${statusBg}) no-repeat;

  ${props => props.status === 'caution' && css`
    &::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 8px;
      width: 18px;
      height: 17px;
      background: url(${cautionIcon}) no-repeat;
    }
  `}
`;

export const CardTitle = styled.span`
  font-size: 14px;
  color: var(--black);
`;

export const CardMenu = styled.div`
  position: relative;
`;

export const CardMenuBtn = styled.button`
  position: relative;
  top: -2px;
  right: -1px;
  padding: 3px 5px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

  &:hover {
    svg {
      fill: var(--main);
    }
  }

  svg {
    fill: var(--gray);
    transition: fill .25s ease-out;
  }
`;

export const CardMenuBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px 8px 8px;
  background: var(--white);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  overflow: hidden;
`;

export const CardMenuClose = styled.button`
  position: absolute;
  top: 0;
  right: 1px;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;

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

export const CardMenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const CardMenuListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 9px;
  }
`;

export const CardMenuItemBtn = styled.button`
  position: relative;
  display: block;
  padding: 0 0 0 17px;
  cursor: pointer;
  font-weight: 300;
  font-size: 10px;
  color: var(--dark);
  border: none;
  background-color: transparent;
  transition: color .25s ease-out;

  &:hover {
    color: var(--main);

    svg {
      fill: var(--main);
    }
  }

  svg {
    position: absolute;
    top: -1px;
    left: 0;
    fill: var(--gray);
  }
`;

export const CardBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 17px;
`;

export const CardInfo = styled.ul`
  margin: 0 0 16px;
  padding: 0;
  list-style: none;
`;

export const CardInfoItem = styled.li`
  display: flex;
  font-size: 12px;

  &:not(:last-child) {
    margin-bottom: 11px;
  }
`;

export const CardInfoTerm = styled.div`
  flex: 0 0 40px;
  margin-right: 3px;
`;

export const CardInfoValue = styled.div`
  flex-grow: 1;
  min-width: 0;
  color: var(--gray);
`;

export const CardTests = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const CardTest = styled.li`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const CardTestCode = styled.span`
  margin-right: 7px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CardTestPoints = styled.span`
  flex-shrink: 0;
  color: var(--black);
`;

export const CardBtn = styled(Button)`
  align-self: flex-end;
`;