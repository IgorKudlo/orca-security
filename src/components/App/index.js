import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import { AppWrapper, AppContainer, AppLogo } from './AppElements';
import Cards from '../Cards';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <AppContainer>
          <AppLogo />
          <Cards />
        </AppContainer>
      </AppWrapper>
    </>
  );
}

export default App;
