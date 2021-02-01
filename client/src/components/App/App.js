import React from 'react';

// IMPORT STYLED COMPONENTS
import { StyledApp, StyledContainer, StyledWrapper, StyledHome } from './App.styled';

// IMPORT ROUTER
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// IMPORT COMPONENTS
import Header from '../Header/Header';

const App = () => {
  return (
    <Router>
      <StyledApp>
        <Header />
        <StyledContainer>
          <StyledWrapper>
            <StyledHome>
              App
            </StyledHome>
          </StyledWrapper>
        </StyledContainer>
      </StyledApp>
    </Router>
  );
}

export default App;
