import React from 'react';
import {ButtonComponent} from './ButtonElements';

const Button = ({ children, clickHandler, ...props }) => {
  return (
    <ButtonComponent onClick={clickHandler} {...props}>{children}</ButtonComponent>
  )
};

export default Button;