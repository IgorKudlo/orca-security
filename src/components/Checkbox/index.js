import React from 'react';
import { CheckboxStyled, CheckboxInput, CheckboxText } from './CheckboxElements';

const Checkbox = ({ label }) => (
  <CheckboxStyled>
    <CheckboxInput type={'checkbox'}/>
    <CheckboxText>{label}</CheckboxText>
  </CheckboxStyled>
);

export default Checkbox;
