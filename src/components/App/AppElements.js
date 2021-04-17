import styled from 'styled-components';
import Logo from '../Logo';

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  min-height: 100vh;
`;

export const AppContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  max-width: 1202px;
`;

export const AppLogo = styled(Logo)`
  display: inline-block;
  margin-bottom: 28px;
`;