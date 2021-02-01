import React from 'react';

// IMPORT STYLED COMPONENTS
import { StyledApp, StyledContainer, StyledWrapper, StyledHome } from './App.styled';

// IMPORT ROUTER
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// IMPORT COMPONENTS
import Header from '../Header/Header';
import Home from '../Home/Home';

const App = () => {
  return (
    <Router>
      <StyledApp>
        <Header />
        <StyledContainer>
          <StyledWrapper>
            <StyledHome>
              <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/roadmap" component={Roadmap} /> */}
                {/* <Route exact path="/technos" component={Technos} /> */}
                {/* <Route exact path="/contact" component={Contact} /> */}
              </Switch>
            </StyledHome>
          </StyledWrapper>
        </StyledContainer>
      </StyledApp>
    </Router>
  );
}

export default App;
