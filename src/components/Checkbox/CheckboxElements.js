import styled from 'styled-components';
import iconCheck from '../../img/check.svg';

export const CheckboxStyled = styled.label`
  position: relative;
  display: inline-flex;
  cursor: pointer;

  &:hover {
    span {
      border-color: var(--main);
    }
  }
`;

export const CheckboxInput = styled.input`
  display: none;

  &:checked + span {
    &::before {
      border-color: var(--main);
      background-color: var(--main);
    }

    &::after {
      position: absolute;
      content: '';
      left: 2px;
      top: 5px;
      width: 7px;
      height: 6px;
      background: url(${iconCheck}) no-repeat;
      background-size: 7px 6px;
    }
  }

  &:active + span::before {
    box-shadow: 0 0 0 2px rgba(0, 128, 255, 0.2);
  }
`;

export const CheckboxText = styled.span`
  color: var(--black);
  outline: none;

  &::before {
    display: inline-block;
    content: '';
    position: relative;
    top: 1px;
    margin-right: 4px;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border: 1px solid var(--gray);
    border-radius: 2px;
    transition: all .15s ease-out;
  }
`;