import styled from 'styled-components';

import Card from '../Card';

export const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px;

  @media (max-width: 1203px) {
    margin: 0 -8px;
  }
    
  @media (max-width: 576px) {
    margin: 0;
  }
`;

export const CardInList = styled(Card)`
  margin: 0 16px;
  width: calc(100% / 4 - 32px);

  @media (max-width: 1203px) {
    margin: 0 8px;
    width: calc(100% / 4 - 16px);
  }

  @media (max-width: 992px) {
    margin-bottom: 16px;
    width: calc(100% / 2 - 16px);
  }

  @media (max-width: 576px) {
    margin-left: 0;
    margin-right: 0;
    width: calc(100%);
  }
`;