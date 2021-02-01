import React from 'react';

// IMPORT STYLED COMPONENTS
import { StyledApp, StyledContainer, StyledWrapper, StyledHome } from './App.styled';

// IMPORT ROUTER
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// IMPORT COMPONENTS
import Header from '../../containers/Header';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';

const App = ({ initial, clicked, menuName }) => {
  let state = {initial, clicked, menuName};
  return (
    <Router>
      <StyledApp>
        <Header />
        <Home state={state} />
        <StyledContainer>
          <StyledWrapper>
            <StyledHome>
              <Switch>
                {/* <Route exact path="/roadmap" component={Roadmap} /> */}
                {/* <Route exact path="/technos" component={Technos} /> */}
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </StyledHome>
          </StyledWrapper>
        </StyledContainer>
      </StyledApp>
    </Router>
  );
}

export default App;
